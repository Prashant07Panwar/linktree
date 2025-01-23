import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"

export async function POST(request) {
    const body = await request.json()
    console.log(body.email)
    const client = await clientPromise
    const db = await client.db("bittree")
    const collection = await db.collection("bittrees")
    if(body.email && body.password==null){
        const doc = await collection.findOne({email:body.email})
    if(doc){
        return NextResponse.json({vemail:true,index:0,success:false,display1:true,display2:false})
    }
    return NextResponse.json({success:true,vemail:false,index:2,display1:true,display2:false})
    }
    if((body.email && body.password) && body.username == null ){
        return NextResponse.json({successfull:true,display1:false,display2:true})
    }
    if(body.email && body.password && body.username){
        console.log(body)
        const doc3 = await collection.findOne({username:body.username})
        if(doc3){
            return NextResponse.json({validity:true})
        }
        const res = await collection.insertOne(body)
        return NextResponse.json({saving:true,message:"Please wait a moment...signing you in"})
    }
}