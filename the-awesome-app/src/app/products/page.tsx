'use client'
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '@/model/Product';
import styles from './page.module.css'
import { useRouter, usePathname } from 'next/navigation';
import ProductView from './components/ProductView';

//useEffect(callback, [dependencies])

const baseUrl = "http://localhost:9000/products";

function ListProducts() {

    const [products, setProducts] = useState<Product[]>([]);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [searchKey, setSearchKey] = useState("");
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
            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 5000));
            const response = await axios.get<Product[]>(baseUrl);
            console.log("response", response.data);
            setProducts(response.data);

        } catch (error) {
            console.log("error", error);
        }
        finally{
            setLoading(false);
        }
    }

    const deleteProduct =useCallback( async (product: Product) => {

        debugger;
        try {
            await axios.delete(`${baseUrl}/${product.id}`);
            //await fetchProducts();

            //copy of products
            const copy_of_products = [...products];
            const index = copy_of_products.findIndex(item => item.id === product.id);
            if(index != -1){
                copy_of_products.splice(index, 1);
                setProducts(copy_of_products);
            }

            alert(`product with id: ${product.id} deleted`);
        }
        catch (error) {
            alert(`product with id: ${product.id} not found`);
        }
    }, [products]);

    const editProduct = useCallback((product: Product)=>{

        debugger;
        router.push(`${pathname}/${product.id}`);
    }, [])

    function renderProducts(products: Product[]) {
        return products.map(item => {
            return (
                 <ProductView key={item.id} product={item} onDelete={deleteProduct} onEdit={editProduct}/>
                // <ProductView key={item.id} product={item}/>
            )
        })
    }
    return (

        <div>
            <h4>List Products</h4>

            {isLoading? <div>Loading...Please wait.</div> : null}

            <div>
                <input className='form-control' type='search' value={searchKey} onChange={e => setSearchKey(e.target.value)}/>
            </div>
            {searchKey ? <div>Searching for {searchKey} </div>: null}

            <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center' }}>
                {renderProducts(products)}
            </div>
        </div>
    )

}
export default ListProducts
