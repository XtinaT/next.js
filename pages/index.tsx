import Heading from "../components/Heading";
import styles from "../styles/Home.module.scss"
import Head from "next/head";
import Image from "next/image";
import myImage from "../public/happy5.png";
import Socials from "../components/Socials";

export const getStaticProps = async () => {
  try {
    const responce = await fetch(`${process.env.API_HOST}/socials`);
    const socialsData = await responce.json();

    if (!socialsData) {
      return {
        notFound: true,
      }
    }
    return {
      props: {
        socials: socialsData
      }
    }
  } catch {
    return {
      props: {
        socials: null,
      }
    }
  }
}

const Home = ({ socials }) => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>
          Home
        </title>
      </Head>
      <Heading text="Hello world!" />
      <Image src={myImage} width={200} height={200} alt="white cell" placeholder="blur" />
      <Socials socials={socials} />
    </div>
  )
};

export default Home;