

//http://localhost:3000/api/suppliers

import { NextResponse } from "next/server";

import { suppliers } from "./data";


//GET, POST, PUT

//GET http://localhost:3000/api/suppliers 
//GET http://localhost:3000/api/suppliers?name=abc
export async function GET(request: Request){

    try {
        // Connect to the DB and fetch the data
        const url = new URL(request.url);
        const name = url.searchParams.get("name");
        if(name){

            const results = suppliers.filter(item => item.name.toLowerCase().startsWith(name.toLowerCase()));
            return  NextResponse.json(results, {status: 200});
        }
        else{
            return  NextResponse.json(suppliers, {status: 200});
        }
    } catch (error) {
        return NextResponse.error();
    }
}