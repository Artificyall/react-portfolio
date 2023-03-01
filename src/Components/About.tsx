// import "../style/About.css";

export const About: React.FC = () => {
  return (
    <div className="flex m-20">
      <div className="flex-1 text-left Presentation">
        <p>The portfolio of</p>
        <h1>Donovan Briend</h1>
        <ul className="flex">
          <li className="my-5 mr-5 hover:shadow-inner pink">👨‍💻 Developper</li>
          <li className="m-5 blue">🖥️ Designer</li>
          <li className="m-5 green">🏹 Player</li>
        </ul>
      </div>
      <div className="flex-1 About">
        <h2>About me</h2>
        <h3>Hello !</h3>
        <p>
          I’m Donovan, and this is my portfolio. I am a developer and a beginner
          graphic designer.
        </p>
        <button className="readMore">
          <a href="#">Read more</a>
        </button>
      </div>
    </div>
  );
};
