import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'
export const revalidate = 3600

export async function GET() {
  try {
    const res = await fetch('https://piralabs.substack.com/feed', {
      next: { revalidate: 3600 },
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; PiraLabs/1.0)' },
    })

    if (!res.ok) throw new Error(`Feed fetch failed: ${res.status}`)

    const xml = await res.text()
    return new NextResponse(xml, {
      status: 200,
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (err) {
    return new NextResponse(null, { status: 502 })
  }
}
