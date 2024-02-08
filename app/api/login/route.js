import { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";


/**============================================
 *               Get give users From json-Server
 *=============================================**/
const getUser =async()=>{
  const res =await fetch(`http://localhost:3000/users`)
    const usres=await res.json();
    return usres
}
export async function POST(req,res){
      const users=await getUser();
     const data=await req.json()
  
    if(data&&users){
        const userExiact=users.map((item)=>item.email===data.email&&item.password===data.password?true:false)
        if(userExiact){
            return NextResponse.json({
                status:200,
                message:'Login sucess',
                data:{...data},
                loging:true
            })
        }else{
            return NextResponse.json({
                status:404,
                message:'Login failed',
                data:null,
                loging:false
            }) 
        }
    }
}