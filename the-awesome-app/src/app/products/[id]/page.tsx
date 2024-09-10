'use client'

import { Product } from "@/model/Product";
import axios from "axios";
import { useEffect, useState } from "react";

type EditProductProps = {
    params: {id: number}
}

function EditProduct(props: EditProductProps){

    const [product, setProduct] = useState<Product>(new Product(0, "", 0, ""));
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

    return (
        <div>
            <h4>Edit Product: {props.params.id}</h4>

            <form>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input className="form-control" type="text" id="name" value={product.name}/>
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input className="form-control" type="number" id="price" value={product.price}/>
                </div>

                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input className="form-control" type="text" id="desc" value={product.description}/>
                </div>

                <br/>    
                <div>
                    <button>Save</button>&nbsp;
                    <button>Cancel</button>
                </div>

            </form>
        </div>
    )
}

export default EditProduct;