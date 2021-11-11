import "./search.css";
export const Search = ({ navbar, heading, results,clearAll }) => {
  return (
    <div>
      <div className="parent">
        <div className="main">
          <div className="navbar">{navbar}
          <div className="clearAll">{clearAll}</div>
          </div>
        </div>
        <div>
          <div className="heading">{heading}</div>
        </div>
        <div className="results">{results}</div>
      </div>
    </div>
  );
};
