import styles from "./FireRing.module.css";

const FireRing = () => (
  <div className={styles.ringWrapper}>
    <img
      src='https://i.imgur.com/3FEaiiS.png'
      alt='Ring spins with red light'
      className={styles.ring}
    />
  </div>
);

export default FireRing;
