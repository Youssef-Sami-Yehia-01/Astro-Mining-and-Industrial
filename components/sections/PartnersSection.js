"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Icon from "@/components/shared/Icon";
import styles from "@/components/sections/PartnersSection.module.css";

const AUTO_STEP_DELAY = 4200;
const RESET_DELAY = 520;

export default function PartnersSection({ partners }) {
  const viewportRef = useRef(null);
  const railRef = useRef(null);
  const stepWidthRef = useRef(0);
  const setWidthRef = useRef(0);
  const [isPaused, setIsPaused] = useState(false);
  const items = useMemo(() => [...partners, ...partners, ...partners], [partners]);

  const normalizePosition = useCallback(() => {
    const viewport = viewportRef.current;
    const setWidth = setWidthRef.current;

    if (!viewport || !setWidth) {
      return;
    }

    if (viewport.scrollLeft >= setWidth * 2) {
      viewport.scrollLeft -= setWidth;
    } else if (viewport.scrollLeft <= 0) {
      viewport.scrollLeft += setWidth;
    }
  }, []);

  const moveBy = useCallback((direction) => {
    const viewport = viewportRef.current;
    const stepWidth = stepWidthRef.current;

    if (!viewport || !stepWidth) {
      return;
    }

    viewport.scrollBy({
      left: stepWidth * direction,
      behavior: "smooth"
    });

    window.setTimeout(normalizePosition, RESET_DELAY);
  }, [normalizePosition]);

  useEffect(() => {
    const viewport = viewportRef.current;
    const rail = railRef.current;

    if (!viewport || !rail) {
      return undefined;
    }

    const measure = () => {
      const firstCard = rail.querySelector(`.${styles.partnerCard}`);
      const gap = Number.parseFloat(window.getComputedStyle(rail).gap || "0");
      const stepWidth = firstCard ? firstCard.getBoundingClientRect().width + gap : 0;

      stepWidthRef.current = stepWidth;
      setWidthRef.current = stepWidth * partners.length;
      viewport.scrollLeft = setWidthRef.current;
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(viewport);

    return () => {
      observer.disconnect();
    };
  }, [partners.length]);

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      moveBy(1);
    }, AUTO_STEP_DELAY);

    return () => {
      window.clearInterval(interval);
    };
  }, [isPaused, moveBy]);

  return (
    <section className={styles.section} id="partners">
      <div className="container">
        <span className="eyebrow">Our Partners</span>
      </div>
      <div className={styles.controlsRow}>
        <button
          aria-label="Show previous partners"
          className={styles.arrowButton}
          onClick={() => moveBy(-1)}
          type="button"
        >
          <Icon className={`${styles.arrowIcon} ${styles.arrowIconLeft}`} name="arrowRight" size={18} />
        </button>
        <div
          className={styles.viewport}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={viewportRef}
        >
          <div aria-label="Partner companies" className={styles.rail} ref={railRef} role="list">
            {items.map((partner, index) => (
              <article className={styles.partnerCard} key={`${partner.name}-${index}`} role="listitem">
                <div className={styles.logoFrame}>
                  <Image
                    alt={partner.alt}
                    className={styles.logo}
                    fill
                    priority={index < partners.length}
                    sizes="(max-width: 640px) 76vw, (max-width: 980px) 42vw, 20vw"
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
          onClick={() => moveBy(1)}
          type="button"
        >
          <Icon className={styles.arrowIcon} name="arrowRight" size={18} />
        </button>
      </div>
      <div className={styles.sectionBlendBottom} aria-hidden="true" />
    </section>
  );
}
