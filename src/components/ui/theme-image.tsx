import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

type ThemeImageProps = Omit<ImageProps, "src"> & { src: string; darkSrc: string };

// Renders both variants and lets the `.dark` class pick one, so the static HTML
// is correct before hydration (swapping `src` in JS leaves stale markup).
export default function ThemeImage({ src, darkSrc, className, alt, ...props }: ThemeImageProps) {
  return (
    <>
      <Image src={src} alt={alt} className={cn(className, "dark:hidden")} {...props} />
      <Image src={darkSrc} alt={alt} className={cn(className, "hidden dark:inline-block")} {...props} />
    </>
  );
}
