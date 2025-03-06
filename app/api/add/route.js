import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

let cachedClient = null;
let cachedDb = null;

export async function POST(request) {
    if (!cachedClient || !cachedDb) {
        cachedClient = await clientPromise;
        cachedDb = await cachedClient.db("bittree");
    }

    const body = await request.json();
    const collection = cachedDb.collection("bittrees");

    const doc = await collection.findOne({ handle: body.handle });
    if (doc) {
        return NextResponse.json({ success: false, result: null, error: true, message: "This Bittree already exists" });
    }

    const result = await collection.insertOne(body);
    return NextResponse.json({ success: true, result, error: false, message: "Your Bittree is generated" });
}




















// import clientPromise from "@/lib/mongodb"
// import { NextResponse } from "next/server"

// export async function POST(request) {
//     const body = await request.json()
//     const client = await clientPromise
//     const db = await client.db("bittree")
//     const collection = await db.collection("bittrees")
//     const doc = await collection.findOne({handle:body.handle})
//     if(doc){
//       return NextResponse.json({success:false, result:null, error:true, message:"This Bittree already exists"})
//     }
//     const result = await collection.insertOne(body)
//     return NextResponse.json({success:true, result:result, error:false, message:"Your Bittree is generated"})
//   }




















// import clientPromise from "@/lib/mongodb"
// import { NextResponse } from "next/server"

// export async function POST(request) {
//     const body = await request.json()
//     const client = await clientPromise
//     const db = await client.db("bittree")
//     const collection = await db.collection("bittrees")
//     const doc = await collection.findOne({handle:body.handle})
//     if(doc){
//       return NextResponse.json({success:false, result:null, error:true, message:"This Bittree already exists"})
//     }
//     const result = await collection.insertOne(body)
//     return NextResponse.json({success:true, result:result, error:false, message:"Your Bittree is generated"})
//   }