import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Injeta o pathname no header para que o root layout possa definir lang corretamente
export function middleware(request: NextRequest) {
  const response = NextResponse.next()
  response.headers.set('x-pathname', request.nextUrl.pathname)
  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
