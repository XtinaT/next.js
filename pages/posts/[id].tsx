import Head from "next/head";
import PostInfo from "../../components/PostInfo";

export const getStaticPaths = async () => {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const postsData = await responce.json();

  const paths = postsData.map(({ id }) => ({
    params:{id: id.toString() }
  }));

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const {id} = context.params; 
  const responce = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const postData = await responce.json();

  if (!postData) {
    return {
      notFound: true,
    }
  }

  return {
    props: { post: postData },
  }
}

const Post = ({post}) => {
  return (
    <>
      <Head>
        <title>
          Post
        </title>
      </Head>
      <PostInfo post={post}/>
    </>
  )
};

export default Post;