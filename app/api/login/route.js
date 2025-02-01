import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb"
import { redirect } from "next/dist/server/api-utils"

export async function POST(request) {
    console.log(request)
    const body = await request.json()
    console.log(body)
    const client = await clientPromise
    const db = await client.db("bittree")
    const collection = await db.collection("bittrees")
    // const doc1 = await collection.findOne({username:body.username})
    // if(doc1){
    //     return NextResponse.json({successuser:true})
    // }
    // const doc2 = await collection.findOne({email:body.email})
    // if(doc2){
    //     return NextResponse.json({successemail:true})
    // }
    const doc3 = await collection.findOne({username:body.username,password:body.password})
    if(doc3){
        return NextResponse.json({successpassword:false,successuser:false,success:true,message:"You are logged in successfully"})
    }
    const doc =  await collection.findOne({username:body.username})
    if(!doc){
        return NextResponse.json({successpassword:false,successuser:true,success:false,message:"OOPS! Login attempt failed"})
    }
    const doc2 =  await collection.findOne({password:body.password})
    if(!doc2){
        return NextResponse.json({successpassword:true,successuser:false,success:false,message:"OOPS! Login attempt failed"})
    }



    // const doc1 = await collection.findOne({username:body.username,password:{$ne:body.password}})
    // if(doc1){
    //     return NextResponse.json({successpassword:true,successuser:false})
    // }
    // const doc2 = await collection.findOne({password:body.password,username:{$ne:body.username}})
    // if(doc2){
    //     return NextResponse.json({successuser:true,successpassword:false})
    // }
    // const doc = await collection.findOne({username:body.username,password:body.password})
    // if(doc){
    //     return NextResponse.json({success:true,message:"Logged in successfully"})
    // }
    // return NextResponse.json({success:false,message:"Opps! login failed"})
  }
