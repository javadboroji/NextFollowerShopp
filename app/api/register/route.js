import {NextApiRequest, NextApiResponse} from 'next';
import { redirect } from 'next/navigation'
import { NextResponse } from 'next/server';
export  async function POST(req,res){
    //const res =await Request.json({message:"Test"});
    const data = await req.json();
   // return new NextApiResponse("test");
   console.log(data);
   if(data.firstName==="Javadboroji"&&data.email==="javadboroji2222@gmail.com"){
    return NextResponse.json("true")
  }else
   {
    return NextResponse.json("false")
   }
  

  

}