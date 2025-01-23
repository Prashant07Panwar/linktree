import { NextResponse } from "next/server"

export async function GET(request) {
    console.log("Prashant")
    return NextResponse.redirect(new URL(`/?admin=${true}`,request.url))
  }
