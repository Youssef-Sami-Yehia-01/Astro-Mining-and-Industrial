import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import styles from "@/components/shared/Logo.module.css";

const LOGO_CONFIGS = {
  default: { src: "/assets/brand/astro-logo.png", width: 118, height: 132, smWidth: 82, smHeight: 92 },
  footer:  { src: "/assets/brand/astro-footer-logo.png", width: 104, height: 118, smWidth: 78, smHeight: 88 }
};

export default function Logo({ inverted = false, size = "default", variant = "default" }) {
  const cfg = LOGO_CONFIGS[variant] ?? LOGO_CONFIGS.default;
  const isLarge = size === "large";
  return (
    <Link
      className={clsx(styles.logo, {
        [styles.inverted]: inverted,
        [styles.large]: isLarge
      })}
      href="/"
      aria-label="Astro Mining & Industrial home"
    >
      <div className={styles.mark}>
        <Image
          alt="Astro Mining & Industrial logo"
          fill
          priority
          sizes={isLarge ? "128px" : "90px"}
          src={cfg.src}
        />
      </div>
    </Link>
  );
}
