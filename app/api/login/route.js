import fetchDataUsers, { getUser } from "@/app/lib/jsonSeverFn";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

/**============================================
 *               Get give users From json-Server
 *=============================================**/
export async function POST(req, res) {
  if(req.method ==='POST'){
    try {
      const data = await req.json();
      const serverUsers=await fetchDataUsers();
     
      if (data &&serverUsers) {
        const usrExact=serverUsers.some((item)=>item.email===data.email && item.password===data.password);
        console.log(usrExact);
        if(usrExact){
          return NextResponse.json({
            status: 200,
            message: "Register Sucess",
            data: null,
            register: true,
          });
        
        }
        else {
          return NextResponse.json({ register: false, message: "Register Fail" });
        }
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}
