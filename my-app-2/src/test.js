export default function test() {
  function buttonClick() {
    const memesArray = memesData.data.mems;
    const random = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[random].url;
  }
  function buttonHover() {
    const array = data.memes;
    const random = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[random].url;
  }
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="First Text" />
        <input type="text" placeholder="Second Text" />
        <button onClick={buttonClick} className="form-button">
          Get a new Meme Image
        </button>
      </div>
    </main>
  );
}
