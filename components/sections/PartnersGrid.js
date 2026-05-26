"use client";

import Image from "next/image";
import clsx from "clsx";
import ButtonLink from "@/components/shared/ButtonLink";
import Reveal from "@/components/shared/Reveal";
import { useLang } from "@/context/LanguageContext";
import { ui as arUi } from "@/data/ar";
import styles from "@/components/sections/PartnersGrid.module.css";

export default function PartnersGrid({ partners, textPartners }) {
  const { lang } = useLang();
  const t = lang === "ar" ? arUi.partnersGrid : {
    eyebrow: "Key Clients",
    title: "Trusted by industry leaders",
    copy: "Astro supplies premium industrial minerals to leading glass, ceramic, and manufacturing companies across the globe.",
    becomePartner: "Become a Partner"
  };

  const scaleMap = {
    "Sphinx Glass":  1.92,
    "Duravit":       1.75,
    "Beam":          1.75,
    "Galaxy":        1.55,
    "Saint-Gobain":  1.35,
    "Crystal Glass": 1.2,
    "Mega Glass":    1.2,
    "Cedar":         1.2,
    "Sisecam":       1.2,
  };

  const allPartners = [
    ...partners.map((p) => ({ ...p, isLogo: true })),
    ...(textPartners || []).map((p) => ({ ...p, isLogo: false }))
  ];

  return (
    <section className={clsx("section", styles.section)}>
      <div className="container">
        <Reveal direction="up" distance={30}>
          <span className="eyebrow">{t.eyebrow}</span>
          <h2 className="section-title">{t.title}</h2>
          <p className={clsx("section-copy", styles.intro)}>{t.copy}</p>
        </Reveal>

        <div className={styles.grid}>
          {allPartners.map((partner, i) => (
            <Reveal
              key={partner.name}
              direction="up"
              distance={28}
              delay={i * 0.05}
            >
              {partner.isLogo ? (
                <div className={clsx("surface-card", styles.logoCard)} data-partner={partner.name.toLowerCase().replace(/\s+/g, "-")}>
                  <div className={styles.logoFrame}>
                    <Image
                      alt={partner.alt || partner.name}
                      className={styles.logo}
                      fill
                      sizes="(max-width: 640px) 42vw, (max-width: 980px) 28vw, 18vw"
                      src={partner.logo}
                      style={{ transform: `scale(${scaleMap[partner.name] ?? 1})` }}
                    />
                  </div>
                </div>
              ) : (
                <div className={styles.textCard}>
                  <span className={styles.initial}>{partner.name[0]}</span>
                  <span className={styles.partnerName}>{partner.name}</span>
                </div>
              )}
            </Reveal>
          ))}
        </div>

        <Reveal direction="up" distance={24} delay={0.2}>
          <div className={styles.cta}>
            <ButtonLink href="/contact">{t.becomePartner}</ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
