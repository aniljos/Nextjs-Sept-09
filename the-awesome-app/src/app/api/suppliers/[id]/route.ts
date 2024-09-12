

//http://localhost:3000/api/suppliers

import { NextResponse } from "next/server";

import { suppliers } from "../data";


//GET, POST, PUT

//GET http://localhost:3000/api/suppliers/:id

export async function GET(request: Request, config: { params:{id: number}}){

    try {
      
        const id = Number(config.params.id);
        console.log("id", id);
        if(id){

            const index = suppliers.findIndex(item => item.id === id);
            console.log("index", index);
            if(index !== -1){
                return  NextResponse.json(suppliers[index], {status: 200});
            }
            else{
                return  NextResponse.json({}, {status: 400});
            }
        }
        else{
            return  NextResponse.json(suppliers, {status: 200});
        }
    } catch (error) {
        console.log("GET error", error);
        return NextResponse.error();
    }
}