"use client";
import type { ImageLoaderProps } from "next/image";
const widths = [192, 256, 384, 640, 828, 1080, 1440, 1920];
export default function imageLoader({ src, width }: ImageLoaderProps) {
  const size = widths.find((w) => w >= width) || widths[widths.length - 1];
  return src.replace(/\.webp$/, `-${size}.webp`);
}
