import { NextResponse } from 'next/server';

export async function POST(request: Request) {

    const json = await request.json()

    // respond with challenge parameter on setup for slack verif
    if (json.challenge) {
        return new NextResponse(json.challenge);
    }

    const url = request.headers.get('host')

    // We have to respond to slack within 3 seconds so we can't wait for the blog post to be generated
    fetch(`https://${url}/api/message`, {
        method: 'POST',
        body: JSON.stringify(json),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    // wait 1 second to give the serverless function time to send the post request. Realistically this could probably be like 10ms
    await new Promise(r => setTimeout(r, 1000));

    return new NextResponse('ok')
}