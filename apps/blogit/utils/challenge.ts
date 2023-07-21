import { NextResponse } from "next/server";

export async function POST(request: Request) {
    // respond with challenge parameter
    const body = await request.json();
    if (body.challenge) {
        return new NextResponse(body.challenge);
    }
}