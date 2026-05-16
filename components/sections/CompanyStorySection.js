"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import ButtonLink from "@/components/shared/ButtonLink";
import styles from "@/components/sections/CompanyStorySection.module.css";

const contentMotion = {
  initial: { opacity: 0, x: -34 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.48,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    opacity: 0,
    x: -20,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1]
    }
  }
};

const firstImageMotion = {
  initial: { opacity: 0, x: 42, scale: 1.03 },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.54,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    opacity: 0,
    x: -18,
    scale: 1.01,
    transition: {
      duration: 0.28,
      ease: [0.4, 0, 1, 1]
    }
  }
};

const imageMotion = {
  initial: { opacity: 0, y: 42, scale: 1.03 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.54,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -18,
    scale: 1.01,
    transition: {
      duration: 0.28,
      ease: [0.4, 0, 1, 1]
    }
  }
};

export default function CompanyStorySection({ content }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const markerRefs = useRef([]);

  useEffect(() => {
    const markers = markerRefs.current.filter(Boolean);

    if (!markers.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Number(a.target.dataset.index) - Number(b.target.dataset.index));

        if (!visibleEntries.length) {
          return;
        }

        setActiveIndex(Number(visibleEntries[0].target.dataset.index));
      },
      {
        rootMargin: "-42% 0px -42% 0px",
        threshold: 0.18
      }
    );

    markers.forEach((marker) => observer.observe(marker));

    return () => {
      observer.disconnect();
    };
  }, []);

  const activeStep = content.steps[activeIndex];

  return (
    <section className={styles.section} id="about">
      <div className={styles.shell}>
        <div className={styles.stickyStage}>
          <div className={styles.copyOuter}>
            <div className={styles.copyColumn}>
              <span className="eyebrow">{content.eyebrow}</span>
              <div className={styles.progress}>
                {content.steps.map((step, index) => (
                  <span
                    className={clsx(styles.progressDot, index === activeIndex && styles.progressDotActive)}
                    key={step.id}
                  />
                ))}
              </div>
              <div className={styles.activePanel}>
                <AnimatePresence mode="wait">
                  <motion.div
                    animate="animate"
                    className={styles.activePanelInner}
                    exit="exit"
                    initial="initial"
                    key={activeStep.id}
                    variants={contentMotion}
                  >
                    <span className={styles.stepLabel}>{activeStep.label}</span>
                    <h3 className={styles.stepTitle}>{activeStep.title}</h3>
                    <p className={styles.stepCopy}>{activeStep.copy}</p>
                    <p className={styles.stepDetail}>{activeStep.detail}</p>
                    <div className={styles.chips}>
                      {activeStep.chips.map((chip) => (
                        <span className={styles.chip} key={chip}>
                          {chip}
                        </span>
                      ))}
                    </div>
                    <ul className={styles.bullets}>
                      {activeStep.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    <ButtonLink href={content.cta.href}>{content.cta.label}</ButtonLink>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
          <div className={styles.visualColumn}>
            <div className={styles.visualFrame}>
              <AnimatePresence mode="wait">
                <motion.div
                  animate="animate"
                  className={clsx(styles.visualLayer, styles.visualLayerActive)}
                  exit="exit"
                  initial="initial"
                  key={activeStep.id}
                  variants={activeIndex === 0 ? firstImageMotion : imageMotion}
                >
                  <Image
                    alt={activeStep.image.alt}
                    className={styles.image}
                    fill
                    sizes="(max-width: 980px) 100vw, 50vw"
                    src={activeStep.image.src}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        <div className={styles.markers} aria-hidden="true">
          {content.steps.map((step, index) => (
            <div
              className={styles.marker}
              data-index={index}
              key={step.id}
              ref={(node) => {
                markerRefs.current[index] = node;
              }}
            />
          ))}
        </div>
        <div className={clsx("container", styles.mobileStack)}>
          {content.steps.map((step) => (
            <article className={styles.mobileCard} key={step.id}>
              <div className={styles.mobileVisual}>
                <Image
                  alt={step.image.alt}
                  className={styles.image}
                  fill
                  sizes="100vw"
                  src={step.image.src}
                />
              </div>
              <div className={styles.mobileCopy}>
                <span className={styles.stepLabel}>{step.label}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepCopy}>{step.copy}</p>
                <p className={styles.stepDetail}>{step.detail}</p>
                <div className={styles.chips}>
                  {step.chips.map((chip) => (
                    <span className={styles.chip} key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
                <ul className={styles.bullets}>
                  {step.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
