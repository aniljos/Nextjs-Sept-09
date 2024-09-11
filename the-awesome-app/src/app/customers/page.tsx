async function ListCustomers(){

    const url = "http://localhost:9000/customers";

    await new Promise(resolve => setTimeout(resolve, 5000));
    const response = await fetch(url);
    const customers =  await response.json();



    return (
        <div>
            <h4>Customers</h4>
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

export default ListCustomers;
