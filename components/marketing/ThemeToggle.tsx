"use client";
import { useEffect } from "react";
export function ThemeToggle({ label }: { label: string }) {
  useEffect(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    if (!document.documentElement.dataset.theme)
      document.documentElement.dataset.theme = query.matches ? "dark" : "light";
  }, []);
  return (
    <button
      className="theme-toggle"
      aria-label={label}
      title={label}
      onClick={() => {
        const root = document.documentElement;
        root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      }}
    >
      <span aria-hidden="true">◐</span>
    </button>
  );
}
