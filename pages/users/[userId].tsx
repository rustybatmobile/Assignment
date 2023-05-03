import { useRouter } from "next/router";

const User = () => {

    const router = useRouter();
    const productId = router.query.userId

    return (
        <div>User id: {productId}</div>
    )
}

export default User;