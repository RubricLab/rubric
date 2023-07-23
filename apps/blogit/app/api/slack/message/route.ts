import { NextResponse } from 'next/server';

export async function POST(request: Request) {

    const json = await request.json()

    // respond with challenge parameter on setup for slack verif
    if (json.challenge) {
        return new NextResponse(json.challenge);
    }

    const url = request.headers.get('host')

    console.log(`https://${url}/api/message`)

    fetch(`https://${url}/api/message`, {
        method: 'POST',
        body: JSON.stringify(json),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    await new Promise(r => setTimeout(r, 1500));

    return new NextResponse('ok')
}