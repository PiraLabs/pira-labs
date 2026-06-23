import { NextResponse } from "next/server";

const INDEX_NOW_KEY = "a3f7b2e1c9d05f48";
const HOST = "piralabs.com.br";

const URLS = [
  "https://piralabs.com.br/",
  "https://piralabs.com.br/faisca/oxigenio-ia-search",
  "https://piralabs.com.br/sobre",
  "https://piralabs.com.br/inspira",
  "https://piralabs.com.br/transpira",
  "https://piralabs.com.br/inspira/juridico",
  "https://piralabs.com.br/transpira/juridico",
  "https://piralabs.com.br/creative-business-turnaround",
  "https://piralabs.com.br/como-pensamos",
  "https://piralabs.com.br/faisca",
  "https://piralabs.com.br/faisca/juridica",
  "https://piralabs.com.br/faisca/imersao-em-ia",
  "https://piralabs.com.br/faisca/pocket",
  "https://piralabs.com.br/faisca/c-level-as-a-service",
  "https://piralabs.com.br/chama",
  "https://piralabs.com.br/glossario",
  "https://piralabs.com.br/glossario/creative-business-turnaround",
  "https://piralabs.com.br/glossario/janela-de-oportunidade",
  "https://piralabs.com.br/glossario/antes-da-crise",
  "https://piralabs.com.br/antes-pira",
  "https://piralabs.com.br/podcast",
  "https://piralabs.com.br/contato",
  "https://piralabs.com.br/en",
  "https://piralabs.com.br/en/creative-business-turnaround",
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
