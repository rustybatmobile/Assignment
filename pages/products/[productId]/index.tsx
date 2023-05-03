import { useRouter } from "next/router";

const Product = () => {

    const router = useRouter();
    const productId = router.query.productId;

    return (
        <div>   
            <h1>Product Id is {productId}</h1>
        </div>
    )
}

export default Product;