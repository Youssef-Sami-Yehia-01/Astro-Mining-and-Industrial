import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import styles from "@/components/sections/IndustriesSection.module.css";

export default function IndustriesSection({ industries }) {
  return (
    <section className={styles.section} id="industries">
      <div className={styles.wrap}>
        <Reveal className={styles.frame} direction="up" distance={34}>
          <h3 className={styles.title}>Industries We Serve</h3>
          <div className={styles.grid}>
            {industries.map((industry) => (
              <div key={industry.name} className={styles.card}>
                <Icon className={styles.icon} name={industry.icon} size={24} />
                <span>{industry.name}</span>
              </div>
            ))}
            <a className={styles.moreCard} href="#contact">
              <Icon name="plus" size={22} />
              <span>View All Industries</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
