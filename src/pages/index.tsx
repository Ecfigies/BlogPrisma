import { NextPage } from "next";
import Home from "./components/home";
import Navbar from "./components/navbar";
import Signup from "./components/signup";
import "tailwindcss/tailwind.css";
const fetcher = (url) => fetch(url).then((res) => res.json());

const Index: NextPage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Home />/{/* <Signup />/ */}
    </div>
  );
};

export default Index;
