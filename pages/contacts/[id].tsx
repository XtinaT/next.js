import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";
import { GetServerSideProps } from "next";
import { FC } from "react";
import { contactType } from "../../types";

type contactTypeProps = {
  contact: contactType,
}

export const getServerSideProps:GetServerSideProps = async (context) => {
  const {id} = context.params; 
  const responce = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const contactsData = await responce.json();

  if (!contactsData) {
    return {
      notFound: true,
    }
  }

  return {
    props: { contact: contactsData },
  }
}

const Contact:FC<contactTypeProps> = ({contact}) => {
  return (
    <>
      <Head>
        <title>
          Contact
        </title>
      </Head>
      <ContactInfo contact={contact}/>
    </>
  )
};

export default Contact;