import type { NextPage } from "next";
import Layout from "./layout";
import { NavBarButtons } from "../components/ButtonNav/styled";
const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <h1>bem vindo!</h1>
      </Layout>
    </>
  );
};

export default Home;
