//import "../style/Header.css";

export const Header: React.FC = () => {
  return (
    <header>
      <ul className="flex">
        <li className="flex-auto w-64">
          <a href="#">Home</a>
        </li>
        <li className="flex-auto w-64">
          <a href="#">About</a>
        </li>
        <li className="flex-auto w-64">
          <a href="#">Project</a>
        </li>
        <li className="flex-auto w-64">
          <a href="#">Contact</a>
        </li>
      </ul>
    </header>
  );
};
