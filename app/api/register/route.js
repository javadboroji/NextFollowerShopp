import { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  const data = await req.json();
  console.log(data);
  if (data) {
    return NextResponse.json({
      status: 200,
      message: "Register Sucess",
      data: null,
      register:true
    });
  } else {
    return NextResponse.json({ register: false, message: "Register Fail" });
  }
}
