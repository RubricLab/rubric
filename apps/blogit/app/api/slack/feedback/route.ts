import { NextResponse } from 'next/server';

export async function POST(request: Request, response: Response) {

    const formData = await request.formData()
    const entries = Object.fromEntries(formData)

    const json = JSON.parse(entries.payload as string)

    const url = request.headers.get('host')

    fetch(`https://${url}/api/feedback`, {
        method: 'POST',
        body: JSON.stringify(json),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return new NextResponse('ok')
}
