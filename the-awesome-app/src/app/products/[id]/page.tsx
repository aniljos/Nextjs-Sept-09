'use client'

import { Product } from "@/model/Product";
import axios from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type EditProductProps = {
    params: {id: number}
}

function EditProduct(props: EditProductProps){

    const [product, setProduct] = useState<Product>(new Product(0, "", 0, ""));
    const router = useRouter();

    useEffect(() => {
        fetchProductById();
    }, [])

    async function fetchProductById(){
        try {
            
            const url = `http://localhost:9000/products/${props.params.id}`;
            const response = await axios.get<Product>(url);
            setProduct(response.data);

        } catch (error) {
            
        }
    }

    function handleNameChange(evt: ChangeEvent<HTMLInputElement>){
        const value = evt.target.value;
        setProduct({...product, name: value});

    }

    async function handleSave(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        const url = `http://localhost:9000/products/${props.params.id}`;
        try {
            
            await axios.put(url, product);
            //alert("updated product")
            router.back();
        } catch (error) {
            alert("failed to update product")
        }
    }

    return (
        <div>
            <h4>Edit Product: {props.params.id}</h4>

            <form onSubmit={handleSave}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" type="text" id="name" value={product.name} 
                                                                            onChange={handleNameChange}/>
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input className="form-control" type="number" 
                                    id="price" value={product.price}
                                    onChange={e => setProduct({...product, price: Number(e.target.value)})}/>
                </div>

                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input className="form-control" type="text" id="desc" 
                                    value={product.description}
                                    onChange={e => setProduct({...product, description: e.target.value})}/>
                </div>

                <br/>    
                <div>
                    <button>Save</button>&nbsp;
                    <button type="button" onClick={() => router.back()}>Cancel</button>
                </div>

            </form>
        </div>
    )
}

export default EditProduct;