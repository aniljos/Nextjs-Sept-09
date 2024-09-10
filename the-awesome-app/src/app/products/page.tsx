'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '@/model/Product';
import styles from './page.module.css'
import { useRouter, usePathname } from 'next/navigation';

//useEffect(callback, [dependencies])

const baseUrl = "http://localhost:9000/products";

function ListProducts() {

    const [products, setProducts] = useState<Product[]>([]);
    const router = useRouter();
    const pathname = usePathname();

    // invoked onMount=> pass an empty dependency array=> callback invoked only once(mounted)
    useEffect(() => {
        console.log("ListProducts Mounted");

        // axios
        //     .get(baseUrl)
        //     .then((resp) => {
        //         console.log("resp", resp);
        //     }, (error) => {
        //         console.log("error", error);
        //     });

        fetchProducts();
    }, [])

    async function fetchProducts() {

        try {
            const response = await axios.get<Product[]>(baseUrl);
            console.log("response", response.data);
            setProducts(response.data);

        } catch (error) {
            console.log("error", error);
        }
    }

    async function deleteProduct(product: Product) {

        try {
            await axios.delete(`${baseUrl}/${product.id}`);
            //await fetchProducts();

            //copy of products
            const copy_of_products = [...products];
            const index = copy_of_products.findIndex(item => item.id = product.id);
            if(index != -1){
                copy_of_products.splice(index, 1);
                setProducts(copy_of_products);
            }

            alert(`product with id: ${product.id} deleted`);
        }
        catch (error) {
            alert(`product with id: ${product.id} not found`);
        }
    }

    function editProduct(product: Product){

        router.push(`${pathname}/${product.id}`);
    }

    function renderProducts(products: Product[]) {
        return products.map(item => {
            return (
                <div key={item.id} className={styles.product}>
                    <p>{item.name}</p>
                    <p>{item.description}</p>
                    <p>Price: {item.price}</p>
                    <div>
                        <button className='btn btn-danger'
                            onClick={() => { deleteProduct(item) }}>Delete</button>&nbsp;
                        <button className='btn btn-info' onClick={() => {editProduct(item)}}>Edit</button>
                    </div>
                </div>
            )
        })
    }
    return (

        <div>
            <h4>List Products</h4>
            <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
                {renderProducts(products)}
            </div>
        </div>
    )

}
export default ListProducts
