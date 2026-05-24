"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import Logo from "@/components/shared/Logo";
import Icon from "@/components/shared/Icon";
import ButtonLink from "@/components/shared/ButtonLink";
import styles from "@/components/layout/SiteHeader.module.css";

export default function SiteHeader({ navigation }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";
  const homeAtTop = isHome && !scrolled;
  const logoVariant = homeAtTop ? "default" : "footer";

  return (
    <header className={clsx(styles.header, { [styles.scrolled]: scrolled, [styles.homeAtTop]: homeAtTop })}>
      <div className={clsx("container", styles.inner)}>
        <Logo key={logoVariant} size="large" variant={logoVariant} />
        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.label}
              className={clsx(styles.link, {
                [styles.active]: pathname === item.href
              })}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={styles.actions}>
          <div className={styles.desktopCta}>
            <ButtonLink href="/contact">Get A Quote</ButtonLink>
          </div>
          <button
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className={styles.menuButton}
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            <Icon name={isOpen ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>
      <button
        aria-hidden={!isOpen}
        className={clsx(styles.mobileBackdrop, {
          [styles.mobileBackdropOpen]: isOpen
        })}
        onClick={() => setIsOpen(false)}
        tabIndex={isOpen ? 0 : -1}
        type="button"
      />
      <div className={clsx(styles.mobilePanel, { [styles.mobilePanelOpen]: isOpen })}>
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={clsx(styles.mobileLink, {
                [styles.mobileLinkActive]: pathname === item.href
              })}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact">Get A Quote</ButtonLink>
        </nav>
      </div>
    </header>
  );
}
