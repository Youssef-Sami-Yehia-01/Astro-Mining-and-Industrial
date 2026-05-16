"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Icon from "@/components/shared/Icon";
import styles from "@/components/sections/PartnersSection.module.css";

const AUTO_STEP_DELAY = 4200;

export default function PartnersSection({ partners }) {
  const trackRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [stepWidth, setStepWidth] = useState(0);
  const items = useMemo(() => {
    const first = partners[0];
    const last = partners[partners.length - 1];

    return [last, ...partners, first];
  }, [partners]);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) {
      return undefined;
    }

    const measureStep = () => {
      const firstCard = track.querySelector(`.${styles.partnerCard}`);
      const gap = Number.parseFloat(window.getComputedStyle(track).columnGap || window.getComputedStyle(track).gap || "0");
      const width = firstCard ? firstCard.getBoundingClientRect().width + gap : 0;
      setStepWidth(width);
    };

    measureStep();

    const observer = new ResizeObserver(measureStep);
    observer.observe(track);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isPaused) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setCurrentIndex((value) => value + 1);
    }, AUTO_STEP_DELAY);

    return () => {
      window.clearInterval(interval);
    };
  }, [isPaused]);

  useEffect(() => {
    if (isTransitionEnabled) {
      return undefined;
    }

    const frame = window.requestAnimationFrame(() => {
      setIsTransitionEnabled(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [isTransitionEnabled]);

  const handleTransitionEnd = () => {
    if (currentIndex === items.length - 1) {
      setIsTransitionEnabled(false);
      setCurrentIndex(1);
    } else if (currentIndex === 0) {
      setIsTransitionEnabled(false);
      setCurrentIndex(items.length - 2);
    }
  };

  const moveNext = () => {
    setCurrentIndex((value) => value + 1);
  };

  const movePrevious = () => {
    setCurrentIndex((value) => value - 1);
  };

  return (
    <section className={styles.section} id="partners">
      <div className="container">
        <span className="eyebrow">Our Partners</span>
      </div>
      <div className={styles.controlsRow}>
        <button
          aria-label="Show previous partners"
          className={styles.arrowButton}
          onClick={movePrevious}
          type="button"
        >
          <Icon className={`${styles.arrowIcon} ${styles.arrowIconLeft}`} name="arrowRight" size={18} />
        </button>
        <div
          className={styles.viewport}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            aria-label="Partner companies"
            className={styles.track}
            onTransitionEnd={handleTransitionEnd}
            ref={trackRef}
            role="list"
            style={{
              "--partner-offset": `${currentIndex * stepWidth}px`,
              "--partner-duration": isTransitionEnabled ? "620ms" : "0ms"
            }}
          >
            {items.map((partner, index) => (
              <article className={styles.partnerCard} key={`${partner.name}-${index}`} role="listitem">
                <div className={styles.logoFrame}>
                  <Image
                    alt={partner.alt}
                    className={styles.logo}
                    fill
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
          onClick={moveNext}
          type="button"
        >
          <Icon className={styles.arrowIcon} name="arrowRight" size={18} />
        </button>
      </div>
    </section>
  );
}
