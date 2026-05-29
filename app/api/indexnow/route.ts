import { NextResponse } from "next/server";

const INDEX_NOW_KEY = "a3f7b2e1c9d05f48";
const HOST = "piralabs.com.br";

const URLS = [
  "https://piralabs.com.br/",
  "https://piralabs.com.br/sobre",
  "https://piralabs.com.br/creative-business-turnaround",
  "https://piralabs.com.br/inspira",
  "https://piralabs.com.br/transpira",
  "https://piralabs.com.br/faisca",
  "https://piralabs.com.br/contato",
];

export async function POST() {
  const payload = {
    host: HOST,
    key: INDEX_NOW_KEY,
    keyLocation: `https://${HOST}/${INDEX_NOW_KEY}.txt`,
    urlList: URLS,
  };

  const response = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "IndexNow submission failed", status: response.status },
      { status: 502 }
    );
  }

  return NextResponse.json({ submitted: URLS.length, urls: URLS });
}
