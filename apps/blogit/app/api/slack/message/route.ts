import { NextResponse } from 'next/server';

export async function POST(request: Request) {

    const json = await request.json()

    if (json.challenge) {
        return new NextResponse(json.challenge);
    }

    const url = request.headers.get('host')

    fetch(`https://${url}/api/message`, {
        method: 'POST',
        body: JSON.stringify(json),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return new NextResponse('ok')
}