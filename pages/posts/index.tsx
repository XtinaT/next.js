import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async() => {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postsData = await responce.json();

  if (!postsData) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      posts:postsData
    }
  }
}

const Posts = ({posts}) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Posts list"/>
      <ul>
        {posts && posts.map(({ id, title }) => {
          return <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
          </li>
        })}
      </ul>
    </>
  )
};

export default Posts;