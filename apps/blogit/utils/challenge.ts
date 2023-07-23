import { NextResponse } from "next/server";

export default  async (body) => {
    // respond with challenge parameter
    if (body.challenge) {
        return new NextResponse(body.challenge);
    }
}