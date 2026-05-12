import styles from "@/components/sections/HeroSection.module.css";

export default function HeroMachine() {
  return (
    <div aria-hidden="true" className={styles.machine}>
      <div className={styles.machineBase} />
      <div className={styles.machineCab} />
      <div className={styles.machineCabGlass} />
      <div className={styles.machineWheelLeft} />
      <div className={styles.machineWheelRight} />
      <div className={styles.machineArm} />
      <div className={styles.machineBoom} />
      <div className={styles.machineBucket} />
      <div className={styles.machineBody} />
      <div className={styles.machineBodyInset} />
    </div>
  );
}
