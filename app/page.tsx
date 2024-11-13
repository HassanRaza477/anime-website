import Header from "@/component/header";
import Hero from "@/component/hero";
import Image from "next/image";
import Responsive from "./responsive/page";
import Footer from "@/component/footer";

export default function Home() {
  return (
   <>
   <Header/>
   <Hero/>
   <Responsive/>
    <Footer/>
   </>
  );
}
