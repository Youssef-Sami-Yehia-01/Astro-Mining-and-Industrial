"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext({ lang: "en", setLang: () => {} });

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState("en");

  useEffect(() => {
    const stored = localStorage.getItem("astro-lang");
    if (stored === "ar" || stored === "en") {
      setLangState(stored);
      document.documentElement.classList.toggle("lang-ar", stored === "ar");
    }
  }, []);

  function setLang(newLang) {
    setLangState(newLang);
    localStorage.setItem("astro-lang", newLang);
    document.documentElement.classList.toggle("lang-ar", newLang === "ar");
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
