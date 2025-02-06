import React from 'react'
import clientPromise from '@/lib/mongodb'
import { NextResponse } from 'next/server'

export async function POST(request) {
   const body = await request.json()
  
   const client = await clientPromise
   const db = await client.db("bittree")
   const collection = await db.collection("bittrees")
 if(body.email && !(body.password)){
    const doc = await collection.findOne({email:body.email})
    
 if(doc){
  
    return NextResponse.json({displayform2:true,successemail:false,displayform1:false})
 } 
 return NextResponse.json({successemail:true,displayform2:false,displayform1:true})
 }
 else{
    const z = await collection.updateOne({email:body.email},{$set:{password:body.password}})
    return NextResponse.json({message:"check database",success:true})
 }
}

