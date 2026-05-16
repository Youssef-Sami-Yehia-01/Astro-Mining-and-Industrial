"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import styles from "@/components/sections/GlobalReachSection.module.css";

function getProjectedPosition(latitude, longitude) {
  const left = ((longitude + 180) / 360) * 100;
  const top = ((90 - latitude) / 180) * 100;

  return {
    left: `${left}%`,
    top: `${top}%`
  };
}

function getPinByCountry(country, pins) {
  return pins.find((pin) => pin.country === country) ?? pins[0];
}

export default function GlobalReachSection({ countries, pins }) {
  const [activePin, setActivePin] = useState(pins[0]);

  return (
    <section className={styles.section}>
      <div className={clsx("container", styles.grid)}>
        <Reveal direction="left" distance={38}>
          <span className="eyebrow">Our Global Reach</span>
          <h2 className="section-title">Exporting to many countries worldwide</h2>
          <div className={styles.countryGrid}>
            {countries.map((country) => {
              const pin = getPinByCountry(country, pins);

              return (
                <button
                  key={country}
                  className={clsx(styles.countryButton, {
                    [styles.countryButtonActive]: activePin.country === country
                  })}
                  onFocus={() => setActivePin(pin)}
                  onMouseEnter={() => setActivePin(pin)}
                  type="button"
                >
                  <span className={styles.countryFlag}>
                    <Image
                      alt={pin.flagAlt}
                      className={styles.countryFlagImage}
                      height={16}
                      src={pin.flag}
                      width={24}
                    />
                  </span>
                  <span>{country}</span>
                </button>
              );
            })}
          </div>
        </Reveal>
        <Reveal className={styles.mapWrap} direction="up" distance={34}>
        <div className={styles.mapCard}>
          <div className={styles.mapTexture} />
          <Image
            alt=""
            className={styles.mapShape}
            fill
            priority={false}
            sizes="(max-width: 900px) 100vw, 66vw"
            src="/assets/images/world-map-astro.svg"
          />
          {pins.map((pin) => (
            <button
              key={pin.country}
              className={clsx(styles.pin, {
                [styles.pinActive]: activePin.country === pin.country
              })}
              onFocus={() => setActivePin(pin)}
              onMouseEnter={() => setActivePin(pin)}
              style={getProjectedPosition(pin.latitude, pin.longitude)}
              type="button"
            >
              <span className={styles.pinMarker}>
                <Icon name="mapPin" size={16} />
              </span>
              <span className={styles.pinPreview}>
                <span className={styles.flagBadge}>
                  <Image
                    alt={pin.flagAlt}
                    className={styles.flagImage}
                    height={40}
                    src={pin.flag}
                    width={56}
                  />
                </span>
                <strong>{pin.project}</strong>
                <span>{pin.country}</span>
              </span>
            </button>
          ))}
          <div className={styles.activeCard}>
            <div className={styles.activeFlag}>
              <Image
                alt={activePin.flagAlt}
                className={styles.activeFlagImage}
                height={44}
                src={activePin.flag}
                width={68}
              />
            </div>
            <div>
              <p>Hover Preview</p>
              <h3>{activePin.project}</h3>
              <span>{activePin.country}</span>
            </div>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}
