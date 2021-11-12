import styles from "./splash.module.css";

export default function Splash1() {
  return (
    <div>
      <img src="/logos/splash_1.png" alt="Splash 1" />
      <h2 className = {styles.splashText}>Discover new books</h2>
    </div>
  );
}
