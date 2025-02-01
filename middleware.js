import { NextResponse } from 'next/server'
import  { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
   const username = "username"
   const searchParams = request.nextUrl.searchParams
   const paramvalue = searchParams.get('username')
return NextResponse.rewrite(new URL(`/profile/${username}`, request.url))
}
export const config = {
   matcher: '/profile/:path*',
 }
 
// // See "Matching Paths" below to learn more
    //  if (request.nextUrl.pathname.endsWith('/discover')) {
    //     console.log("aa")
    //     return NextResponse.redirect(new URL('/discover?admin=true', request.url))
    //   }
    //   if (request.nextUrl.pathname.endsWith('/generate')) {
    //     return NextResponse.rewrite(new URL('/generate?admin=true', request.url))
    //   }
    //   if (request.nextUrl.pathname.endsWith('/Learn')) {
    //     return NextResponse.rewrite(new URL('/Learn?admin=true', request.url))
    //   }
    //   if (request.nextUrl.pathname.endsWith('/loginuser')) {
    //     return NextResponse.rewrite(new URL('/loginuser?admin=true', request.url))
    //   }
    //   if (request.nextUrl.pathname.endsWith('/Marketplace')) {
    //     return NextResponse.rewrite(new URL('/Marketplace?admin=true', request.url))
    //   }
    //   if (request.nextUrl.pathname.endsWith('/Pricing')) {
    //     return NextResponse.rewrite(new URL('/Pricing?admin=true', request.url))
    //   }
    //   if (request.nextUrl.pathname.endsWith('/reset')) {
    //     return NextResponse.rewrite(new URL('/reset?admin=true', request.url))
    //   }
    //   if (request.nextUrl.pathname.endsWith('/signup')) {
    //     return NextResponse.rewrite(new URL('/signup?admin=true', request.url))
    //   }
    //   if (request.nextUrl.pathname.endsWith('/templates')) {
    //     return NextResponse.rewrite(new URL('/templates?admin=true', request.url))
    //   }
    //   if (request.nextUrl.pathname.endsWith('/usernamelogin')) {
    //     return NextResponse.rewrite(new URL('/usernamelogin?admin=true', request.url))
    //   }


    // if(paramvalue){
   //  const url = request.nextUrl.clone()
   //  url.searchParams.set('admin',true)
   //  return NextResponse.rewrite(url)     
   // }