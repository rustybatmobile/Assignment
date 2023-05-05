const Post = ({post}) => {
    const {id, title, body} = post;
    console.log(post, "post")
    return (
        <div>
            <span>{id}</span>
            <span>{title}</span>
            <span>{body}</span>
        </div>
    )
}

export default Post;

export async function getStaticPaths() {
    return {
        paths: [{ params: { postId: '1' } }, { params: { postId: '2' } }, { params: { postId: '3' } }],
        fallback: false, // can also be true or 'blocking'
    }
}

export async function getStaticProps(context) {

    const {params} = context;

    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await result.json();

    console.log(data, "Data")

    return {
        props: {
            post: data
        }
    }
}