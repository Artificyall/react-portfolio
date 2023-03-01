import "./About.css";

export const About: React.FC = () => {
  return (
    <div className="parent">
      <div className="Presentation">
        <p>The portfolio of</p>
        <h1>Donovan Briend</h1>
        <ul>
          <li className="pink">👨‍💻 Developper</li>
          <li className="blue">🖥️ Designer</li>
          <li className="green">🏹 Player</li>
        </ul>
      </div>
      <div className="About">
        <p>
          My name is Donovan Briend. I'm 19 years old and I'm doing my 2nd year
          of a Bachelor of computer science (3 years technical degree), in
          Gradignan, France.
        </p>
        <p>
          Born in a world guided by computers, I have always been interested in
          the world of technology. I am passionate about the web and I am
          constantly looking for new ways to improve my skills.
        </p>
        <p>
          I was interested in computers from a very young age, especially in the
          world of video games. These last ones guided me towards this way that
          i take today.
        </p>
        <p>
          I am currently looking for an apprenticeship for the 3rd year of my
          degree.
        </p>
      </div>
    </div>
  );
};
