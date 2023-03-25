import { Link } from "react-router-dom";

const PRODUCTS = [
    {id: 'p1', title: 'Product1'},
    {id: 'p2', title: 'Product2'},
    {id: 'p3', title: 'Product3'}
]

function Products(){
    return (
        <>
        <h1>Product page</h1>
        <ul>
            {PRODUCTS.map(products => <li key={products.id}><Link to={`/product/${products.id}`}>{products.title}</Link></li>)}
        </ul>
        </>
    )
}

export default Products;