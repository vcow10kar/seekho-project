import vector9 from "./vector9.png";
import styles from  "./profile.module.css";

export const ProfileDiv = ({ name }) => {
  return (
    <div className = {styles.text_div}>
      <h4 className = {styles.setting_name}>{name}</h4>
      <img className= {styles.arrow_icon} src={vector9} alt="vector9.png" />
    </div>
  );
};
