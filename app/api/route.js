import { NextResponse } from "next/server"

export const GET =()=>{
    return NextResponse.json({message: "Nomad  Server is running"})
}