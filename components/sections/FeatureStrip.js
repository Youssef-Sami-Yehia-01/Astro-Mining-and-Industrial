import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import styles from "@/components/sections/FeatureStrip.module.css";

export default function FeatureStrip({ items }) {
  return (
    <section className={styles.strip}>
      <div className={clsx("container", styles.grid)}>
        {items.map((item) => (
          <Reveal key={item.title} className={styles.card} direction="up" distance={34}>
            <div className={styles.iconWrap}>
              <Icon name={item.icon} size={34} />
            </div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
