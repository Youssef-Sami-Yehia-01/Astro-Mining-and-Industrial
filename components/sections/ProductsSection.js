"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";
import Reveal from "@/components/shared/Reveal";
import styles from "@/components/sections/ProductsSection.module.css";

export default function ProductsSection({ products }) {
  const [activeSlug, setActiveSlug] = useState(products[0]?.slug);

  return (
    <section className={styles.section} id="products">
      <div className="container">
        <Reveal className={styles.heading} direction="left" distance={36}>
          <span className="eyebrow">Our Products</span>
          <h2 className="section-title">Pure minerals. Powering industries.</h2>
          <p className="section-copy">
            Astro supplies a focused portfolio of industrial minerals for glass, ceramics, chemicals, construction, paints, plastics, and more.
          </p>
        </Reveal>
        <div className={styles.grid}>
          {products.map((product) => {
            const isActive = activeSlug === product.slug;

            return (
              <Reveal
                key={product.slug}
                className={clsx(styles.card, {
                  [styles.cardActive]: isActive
                })}
                direction="up"
                distance={34}
              >
                <article
                  aria-pressed={isActive}
                  className={styles.cardShell}
                  onClick={() => setActiveSlug(product.slug)}
                  onFocus={() => setActiveSlug(product.slug)}
                  onMouseEnter={() => setActiveSlug(product.slug)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActiveSlug(product.slug);
                    }
                  }}
                  role="button"
                  tabIndex={0}
                >
                  <div className={clsx(styles.visual, styles[product.tone])}>
                    <Image
                      alt={`${product.name} mineral sample`}
                      className={styles.image}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1080px) 25vw, 12.5vw"
                      src={product.image}
                    />
                    <div className={styles.imageGlow} />
                    <span className={styles.visualLabel}>{product.name}</span>
                  </div>
                  <div className={styles.body}>
                    <h3>{product.name}</h3>
                    <div className={styles.rule} />
                    <a className={styles.link} href="#contact">View Details</a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
        <div className={styles.actions}>
          <Reveal direction="up" distance={28}>
            <a className={styles.allButton} href="#contact">View All Products</a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
