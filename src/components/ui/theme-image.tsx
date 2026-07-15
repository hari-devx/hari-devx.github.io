"use client";

import Image, { type ImageProps } from "next/image";
import { useTheme } from "next-themes";

type ThemeImageProps = Omit<ImageProps, "src"> & { src: string; darkSrc: string };

export default function ThemeImage({ src, darkSrc, ...props }: ThemeImageProps) {
  const { resolvedTheme } = useTheme();
  return <Image src={resolvedTheme === "dark" ? darkSrc : src} {...props} />;
}
