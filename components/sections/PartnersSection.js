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
            const isSmall = partner.name === "Kandil Glass" || partner.name === "Pasabahce";
            const isLarge = partner.name === "Duravit" || partner.name === "Sphinx Glass" || partner.name === "Beam";
            const imageClass = isSmall ? null : isLarge ? styles.logoLarge : styles.logoMedium;
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
                      className={clsx(styles.logo, imageClass)}
                      fill
                      sizes="(max-width: 640px) 42vw, (max-width: 980px) 24vw, 14vw"
                      src={partner.logo}
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
