'use client'
import {useEffect} from 'react';
import axios from 'axios';


//useEffect(callback, [dependencies])

const baseUrl = "http://localhost:9000/products1";

function ListProducts(){

    // invoked onMount=> pass an empty dependency array=> callback invoked only once(mounted)
    useEffect(() => {
        console.log("ListProducts Mounted");

        axios
            .get(baseUrl)
            .then((resp) => {
                console.log("resp", resp);
            }, (error) => {
                console.log("error", error);
            });


    }, [])

    
   
    return(
        
        <div>
            <h4>List Products</h4>
        </div>
    )

}
export default ListProducts