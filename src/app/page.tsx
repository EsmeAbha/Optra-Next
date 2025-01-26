import { Metadata } from "next";
import Portfolio from "./portfolio/page";
import HomePage from "./home/page";
export const metadata: Metadata = {
  title:
    "Portfolio ",
  description: "This is Home for Optra Investor",
};

export default function Home() {
  return (
    <>
       <Portfolio/>
    </>
  );
}
