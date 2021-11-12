import styles from "./search.module.css";
export const Search = ({ navbar, heading, results,clearAll }) => {
  return (
    <div>
      <div className={styles.parent}>
        <div className={styles.main}>
          <div className={styles.navbar}>{navbar}
          <div className={styles.clearAll}>{clearAll}</div>
          </div>
        </div>
        <div>
          <div className={styles.heading}>{heading}</div>
        </div>
        <div className={styles.results}>{results}</div>
      </div>
    </div>
  );
};
