import reactLogo from "./images/logo192.png";
export default function Header() {
  return (
    <nav className="nav">
      <img src={reactLogo} className="nav-img"></img>
      <h2 className="nav-title">ReactFacts</h2>
      <h3 className="nav-text">React Project-1</h3>
    </nav>
  );
}
