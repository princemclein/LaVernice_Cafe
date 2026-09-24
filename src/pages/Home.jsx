import "../Css/Home.css";
import Hero from "../components/Hero.jsx";
import BestSellers from "../components/BestSellers.jsx";
import AboutTeaser from "../components/AboutTeaser.jsx";

const stats = [
  { value: "50+", label: "Menu Items" },
  { value: "20+", label: "Signature Drinks" },
  { value: "2k+", label: "Happy Customers" },
];

export default function Home() {
  return (
    <>
      <Hero />
      <BestSellers />
      <AboutTeaser />
    </>
  );
}
