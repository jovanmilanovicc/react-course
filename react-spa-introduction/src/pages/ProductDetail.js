import { useParams, Link } from "react-router-dom";

function ProductDetails() {
    const params = useParams();
    
    
    return (
        <>
        <h1>Title</h1>
        <p>{params.productid}</p>
        <button><Link to='../products'>Go Back</Link></button>
        </>
    )
}

export default ProductDetails;