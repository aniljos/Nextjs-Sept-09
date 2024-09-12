'use client'
// <ProductView product={item}/>

import { Product } from "@/model/Product"
import React from "react"
import styles from '../page.module.css';

type ProductViewProps = {
    product: Product,
    onDelete: (product: Product) => void,
    onEdit: (product: Product) => void,


}

const ProductView: React.FC<ProductViewProps> =  ({ product, onDelete, onEdit }) => {

    console.log("rendering the productview " + product.id);
    return (
        <div  className={styles.product}>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
            <div>
                <button className='btn btn-danger'onClick={() => onDelete(product) }>Delete</button>&nbsp;
                <button className='btn btn-info' onClick={() => onEdit(product)}>Edit</button>
            </div>
        </div>
    )
}

export default React.memo( ProductView);