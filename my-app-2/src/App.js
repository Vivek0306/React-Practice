import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import kateZef from "./components/images/kate-zef.png";
import mBike from "./components/images/mountain-bike.png";
import wPhoto from "./components/images/wedding-photography.png";
import data from "./data";

const imgImport = [kateZef, wPhoto, mBike];

export default function App() {
  const cards = data.map((item) => {
    return (
      <Card key={item.id} item={item} img={imgImport[data.indexOf(item)]} />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
