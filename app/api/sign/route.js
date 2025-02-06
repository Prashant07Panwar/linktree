import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function POST(request) {
    const body = await request.json()
    
    const client = await clientPromise
    const db = await client.db("bittree")
    const collection = await db.collection("bittrees")
    if(body.email && body.password ==null){
        const doc = await collection.findOne({email:body.email})
   
    if(doc){
        return NextResponse.json({vemail:true,vbutton:true,index:0})
    }
    return NextResponse.json({vemail:false,vbutton:false,index:2})
    }
    const result = await collection.insertOne(body)
    return NextResponse.json({successfull:true})
}