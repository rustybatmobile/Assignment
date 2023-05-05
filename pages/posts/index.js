import Link from "next/link";

const Posts = ({posts}) => {
    return (
        <div>
              {posts.map(post => {
                return (
                    <div><Link href={`/posts/${post.id}`} passHref>{post.title}</Link></div>
                )
              })}
        </div>
    )
}

export default Posts;

export async function getStaticProps() {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    return {
        props: {
            posts: data.slice(0, 3)
        }
    }
}