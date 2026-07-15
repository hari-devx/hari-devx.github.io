"use client"

import Link from "next/link"
import ThemeImage from "@/components/ui/theme-image"

const Logo = () => {
  return (
    <>
        <Link href="/">
            <ThemeImage src={"/images/logo/h.svg"} darkSrc={"/images/logo/h-dark.svg"} alt="Hariharan logo" width={64} height={64} className="size-20 sm:size-14 lg:size-30" priority />
        </Link>
    </>
  )
}

export default Logo
