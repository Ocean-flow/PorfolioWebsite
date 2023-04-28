import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";
const FrameComponent: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.frameItem} />
      <div className={styles.frameInner} />
      <div className={styles.rectangleDiv} />
    </div>
  );
};

export default FrameComponent;
