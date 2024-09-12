import { Suspense } from "react";
import LoadingCustomers from "./loading";

async function ListCustomers(){

    const url = "http://localhost:9000/customers";

    //await new Promise(resolve => setTimeout(resolve, 5000));
    let response = await fetch(url);
   
    const customers =  await response.json();

    console.log("customers", customers);

    return (
        <div>
            
            {customers.map((item: any) => {
                return (
                    <div key={item.id}>
                        <p>Id: {item.id}</p>
                        <p>Name: {item.name}</p>
                        <p>Location: {item.location}</p>
                    </div>
                )
            })}
        </div>
    )
}
function CustomersPage(){
    return (
        <div>
            <h4>Customers Page</h4>
            <p>This is the list of customers</p>

            <Suspense fallback={<LoadingCustomers/>}>
                <ListCustomers/>
            </Suspense>
        </div>
    )
}


export default CustomersPage;
