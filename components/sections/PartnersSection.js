"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Icon from "@/components/shared/Icon";
import styles from "@/components/sections/PartnersSection.module.css";

const AUTO_STEP_DELAY = 3200;
const STEP_GAP = 16;

export default function PartnersSection({ partners }) {
  const railRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const items = [...partners, ...partners];

  const normalizeScrollPosition = useCallback((rail) => {
    const loopWidth = rail.scrollWidth / 2;

    if (rail.scrollLeft >= loopWidth) {
      rail.scrollLeft -= loopWidth;
    } else if (rail.scrollLeft <= 0) {
      rail.scrollLeft += loopWidth;
    }
  }, []);

  const moveRail = useCallback((direction) => {
    const rail = railRef.current;

    if (!rail) {
      return;
    }

    normalizeScrollPosition(rail);

    const firstCard = rail.querySelector(`.${styles.partnerCard}`);
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 0;
    const step = cardWidth + STEP_GAP;

    rail.scrollBy({
      left: step * direction,
      behavior: "smooth"
    });

    window.setTimeout(() => {
      normalizeScrollPosition(rail);
    }, 420);
  }, [normalizeScrollPosition]);

  useEffect(() => {
    const rail = railRef.current;

    if (!rail) {
      return undefined;
    }

    const loopWidth = rail.scrollWidth / 2;
    rail.scrollLeft = loopWidth / 2;

    const interval = window.setInterval(() => {
      if (!isPaused) {
        moveRail(1);
      }
    }, AUTO_STEP_DELAY);

    return () => {
      window.clearInterval(interval);
    };
  }, [isPaused, moveRail]);

  return (
    <section className={styles.section} id="partners">
      <div className="container">
        <span className="eyebrow">Our Partners</span>
      </div>
      <div className={styles.controlsRow}>
        <button
          aria-label="Show previous partners"
          className={`${styles.arrowButton} ${styles.arrowLeft}`}
          onClick={() => moveRail(-1)}
          type="button"
        >
          <Icon name="arrowRight" size={18} />
        </button>
        <div
          className={styles.railWrap}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div aria-label="Partner companies" className={styles.rail} ref={railRef} role="list">
            {items.map((partner, index) => (
              <article className={styles.partnerCard} key={`${partner.name}-${index}`} role="listitem">
                <div className={styles.logoFrame}>
                  <Image
                    alt={partner.alt}
                    className={styles.logo}
                    fill
                    sizes="(max-width: 640px) 72vw, (max-width: 980px) 36vw, 24vw"
                    src={partner.logo}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
        <button
          aria-label="Show next partners"
          className={styles.arrowButton}
          onClick={() => moveRail(1)}
          type="button"
        >
          <Icon name="arrowRight" size={18} />
        </button>
      </div>
    </section>
  );
}
