import type { NextPage } from "next";
import Login from "./Login";
import Register from "./Register";
import Link from "next/link";
const Home: NextPage = () => {
  return (
    <div>
      {/* <Login /> */}
      <Register />
    </div>
  );
};

export default Home;
