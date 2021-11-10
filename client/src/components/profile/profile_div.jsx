import vector9 from "./vector9.png";
import "./profile.css";

export const ProfileDiv = ({ name }) => {
  return (
    <div id="text_div">
      <h4>{name}</h4>
      <img className="arrow_icon" src={vector9} alt="vector9.png" />
    </div>
  );
};
