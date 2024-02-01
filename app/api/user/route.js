import img4 from "@/public/4.jpg";
import { NextResponse } from "next/server";
import uuid from "react-uuid";
const defultUsers=[
    {
        id:uuid(),
        Profile:img4,
        userName:'علی موسوی',
        email:'test@gmail.com',
        phone:'09392409359',
        status:'فعال',
        role:'نویسنده',

    },
    {
        id:uuid(),
        Profile:img4,
        userName:'حسین اصغری',
        email:'test@gmail.com',
        phone:'09392409359',
        status:'درانتظار تایید',
        role:'نویسنده',
        
    },
    {
        id:uuid(),
        Profile:img4,
        userName:'ایمان حسینی',
        email:'test@gmail.com',
        phone:'09392409359',
        status:'فعال',
        role:'ادمین',
        
    },
    {
        id:uuid(),
        Profile:img4,
        userName:' سارا شریفی',
        email:'test@gmail.com',
        phone:'09392409359',
        status:'غیرفعال',
        role:'ادمین',
        
    },
    {
        id:uuid(),
        Profile:img4,
        userName:'بهرام داداشی',
        email:'test@gmail.com',
        phone:'09392409359',
        status:'فعال',
        role:'نویسنده',
        
    }
]

export async function GET(req,res){
    return NextResponse.json({defultUsers});
}