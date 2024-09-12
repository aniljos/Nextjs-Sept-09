import Link from "next/link";

async function ListSuppliers(){

    const url = "http://localhost:3001/api/suppliers";
    const response = await fetch(url, {cache: 'no-store'});
    const data = await response.json();

    return (
        <div>
            <h4>Suppliers</h4>
            {data.map((item: any) => {
                return (
                    <div key={item.id}>
                        <p><Link href={`/suppliers/${item.id}`}>{item.name}</Link> </p>
                        <p>Contact Person: {item.contactPerson}</p>
                        <p>Email: {item.email}</p>
                        <p>Location: {item.location}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default ListSuppliers;