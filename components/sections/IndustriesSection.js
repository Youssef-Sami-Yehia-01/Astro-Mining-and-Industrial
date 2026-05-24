"use client";

import { useState } from "react";
import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import styles from "@/components/sections/IndustriesSection.module.css";

export default function IndustriesSection({ industries }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = industries[activeIndex];

  return (
    <section className={styles.section} id="industries">
      <div className={styles.blendTop} aria-hidden="true" />
      <div className={styles.wrap}>
        <Reveal className={styles.frame} direction="up" distance={34}>
          <h3 className={styles.title}>Industries We Serve</h3>
          <div className={styles.grid}>
            {industries.map((industry, i) => (
              <button
                key={industry.name}
                className={clsx(styles.card, { [styles.cardActive]: i === activeIndex })}
                onClick={() => setActiveIndex(i)}
                onMouseEnter={() => setActiveIndex(i)}
                type="button"
              >
                <Icon
                  className={clsx(styles.icon, { [styles.iconActive]: i === activeIndex })}
                  name={industry.icon}
                  size={24}
                />
                <span>{industry.name}</span>
              </button>
            ))}
          </div>

          {active.description && (
            <div className={styles.detail} key={activeIndex}>
              <p className={styles.detailText}>{active.description}</p>
              {active.minerals && active.minerals.length > 0 && (
                <div className={styles.minerals}>
                  {active.minerals.map((m) => (
                    <span key={m} className={styles.mineral}>{m}</span>
                  ))}
                </div>
              )}
            </div>
          )}
        </Reveal>
      </div>
      <div className={styles.sectionBlendBottom} aria-hidden="true" />
    </section>
  );
}
