import { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const random = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[random].url);
    // console.log(url);
  }
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top Text" className="form-input" />
        <input type="text" placeholder="Bottom Text" className="form-input" />
        <button onClick={getMemeImage} className="form-button">
          Get a new MEME image!!
        </button>
      </div>
      <img src={memeImage} className="meme-image" />
    </main>
  );
}
