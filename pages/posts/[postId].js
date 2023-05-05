const Post = ({post}) => {
    const {id, title, body} = post;
    return (
        <div>
            <span>{id}</span>
            <span>{title}</span>
            <span>{body}</span>
        </div>
    )
}

export default Post; 

export async function getStaticProps(context) {

    const {params} = context;

    const result = await fetch(`https://jsonplaceholder.typicode.com/post/${params.postId}`);
    const data = await result.json();

    return {
        props: {
            post: data
        }
    }
}