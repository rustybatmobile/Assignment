import { useRouter } from "next/router";

const Reviews = () => {

    const router = useRouter();
    const productId = router.query.productId;

    return (
        <h1>List of all reviews of {productId} </h1>
    )
}

export default Reviews;