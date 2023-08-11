import { FunctionComponent } from "react";
import styles from "./Desktop1.module.css";
const Desktop1: FunctionComponent = () => {
  return (
    <div className={styles.desktop1}>
      <img className={styles.dpIcon} alt="" src="/dp@2x.png" />
      <img className={styles.myLogo1} alt="" src="/my-logo-1.svg" />
    </div>
  );
};

export default Desktop1;
