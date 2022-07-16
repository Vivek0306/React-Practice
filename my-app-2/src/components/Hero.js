import imageGrid from "./images/image-grid.png";
export default function Hero(params) {
  return (
    <section className="hero">
      <img src={imageGrid} className="hero-image"></img>
      <h1 className="hero-title">Online Experiences</h1>
      <p className="hero-description">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
