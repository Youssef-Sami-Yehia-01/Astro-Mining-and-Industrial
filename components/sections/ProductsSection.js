"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import clsx from "clsx";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import styles from "@/components/sections/ProductsSection.module.css";

export default function ProductsSection({ products, compact = false }) {
  const [activeSlug, setActiveSlug] = useState(products[0]?.slug);
  const [modalProduct, setModalProduct] = useState(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setModalProduct(null); };
    if (modalProduct) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [modalProduct]);

  return (
    <section className={styles.section} id="products">
      <div className={styles.blendTop} aria-hidden="true" />
      <div className={clsx(styles.inner, { [styles.compact]: compact })}>
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
                  aria-label={product.name}
                  className={styles.cardShell}
                  onClick={() => { setActiveSlug(product.slug); setModalProduct(product); }}
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
                      sizes="(max-width: 640px) 50vw, (max-width: 1080px) 33vw, 20vw"
                      src={product.image}
                    />
                    <span className={styles.visualLabel}>{product.name}</span>
                  </div>
                  <div className={styles.body}>
                    <h3>{product.name}</h3>
                    <div className={styles.rule} />
                    <button
                      className={styles.link}
                      onClick={(e) => { e.stopPropagation(); setModalProduct(product); }}
                      type="button"
                    >
                      View Details
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
      <div className={styles.sectionBlendBottom} aria-hidden="true" />

      {modalProduct && (
        <div
          className={styles.modalOverlay}
          onClick={() => setModalProduct(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${modalProduct.name} details`}
        >
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.modalClose}
              onClick={() => setModalProduct(null)}
              aria-label="Close"
              type="button"
            >
              <Icon name="close" size={18} />
            </button>
            <div className={clsx(styles.modalVisual, styles[modalProduct.tone])}>
              <Image
                alt={`${modalProduct.name} mineral`}
                className={styles.modalImg}
                fill
                sizes="(max-width: 640px) 100vw, 560px"
                src={modalProduct.image}
              />
              <div className={styles.modalVisualOverlay} aria-hidden="true" />
              <h2 className={styles.modalTitle}>{modalProduct.name}</h2>
            </div>
            <div className={styles.modalBody}>
              <p className={styles.modalUses}>{modalProduct.uses}</p>
              <div className={styles.modalMeta}>
                <div className={styles.modalMetaItem}>
                  <span>Capacity</span>
                  <strong>{modalProduct.capacity}</strong>
                </div>
              </div>
              <div className={styles.modalSpecs}>
                <h4>Specifications</h4>
                <ul>
                  {modalProduct.specs.map((spec) => (
                    <li key={spec}>{spec}</li>
                  ))}
                </ul>
              </div>
              <a className={styles.modalCta} href="/contact">Request a Quote</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
