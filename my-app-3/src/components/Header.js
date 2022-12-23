import trollFace from "../images/Troll Face.png";
export default function Header() {
  return (
    <header className="header">
      <img src={trollFace} className="header-image" alt="Troll Face" />
      <h2 className="header-title">MEME GENERATOR</h2>
      <h4 className="header-project">Reacet Course Project-3</h4>
    </header>
  );
}
