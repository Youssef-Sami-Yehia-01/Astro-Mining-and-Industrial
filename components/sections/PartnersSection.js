"use client";

import Image from "next/image";
import clsx from "clsx";
import Reveal from "@/components/shared/Reveal";
import styles from "@/components/sections/PartnersSection.module.css";

export default function PartnersSection({ partners }) {
  return (
    <section className={styles.section} id="partners">
      <div className="container">
        <Reveal direction="left" distance={30}>
          <span className="eyebrow">Our Key Clients</span>
        </Reveal>
        <div className={styles.grid} role="list" aria-label="Key clients">
          {partners.map((partner, index) => {
            const scaleMap = {
              "Sphinx Glass": 1.92,
              "Duravit":      1.75,
              "Beam":         1.75,
              "Galaxy":       1.55,
              "Saint-Gobain": 1.35,
              "Crystal Glass":1.2,
              "Mega Glass":   1.2,
              "Cedar":        1.2,
              "Sisecam":      1.2,
            };
            const scale = scaleMap[partner.name] ?? 1;
            return (
              <Reveal
                className={styles.clientCard}
                delay={index * 0.04}
                direction="up"
                distance={26}
                key={partner.name}
              >
                <article className={styles.cardInner} role="listitem">
                  <div className={styles.logoFrame}>
                    <Image
                      alt={partner.alt}
                      className={styles.logo}
                      fill
                      sizes="(max-width: 640px) 42vw, (max-width: 980px) 24vw, 14vw"
                      src={partner.logo}
                      style={{ transform: `scale(${scale})` }}
                    />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
      <div className={styles.sectionBlendBottom} aria-hidden="true" />
    </section>
  );
}
