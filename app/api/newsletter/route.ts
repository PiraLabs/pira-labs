import { NextResponse } from "next/server";

const LIST_ID = "17390f8c-74ca-11f1-be16-bd7425785f8a";
const API_KEY = process.env.EMAILOCTOPUS_API_KEY;

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { message: "E-mail inválido." },
        { status: 400 }
      );
    }

    if (!API_KEY) {
      return NextResponse.json(
        { message: "Configuração interna ausente." },
        { status: 500 }
      );
    }

    const res = await fetch(
      `https://emailoctopus.com/api/1.6/lists/${LIST_ID}/contacts`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          api_key: API_KEY,
          email_address: email,
          status: "PENDING",
        }),
      }
    );

    const data = await res.json();

    if (res.ok) {
      return NextResponse.json({ ok: true });
    }

    if (data?.error?.code === "MEMBER_EXISTS_WITH_EMAIL_ADDRESS") {
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      { message: "Não foi possível processar sua inscrição. Tente novamente." },
      { status: 500 }
    );
  } catch {
    return NextResponse.json(
      { message: "Erro interno. Tente novamente." },
      { status: 500 }
    );
  }
}
