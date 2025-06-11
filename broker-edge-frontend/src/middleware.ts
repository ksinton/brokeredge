import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
    let host = request.headers.get('host') || '';

    // Remove leading "www." if present
    host = host.replace(/^www\./i, '');

    const response = NextResponse.next();
    response.headers.set('x-custom-host', host);

    return response;
}