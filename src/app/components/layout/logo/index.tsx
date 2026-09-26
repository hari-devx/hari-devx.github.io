import Link from "next/link"
import ThemeImage from "@/components/ui/theme-image"

const Logo = () => {
  return (
    <Link href="/" aria-label="Hariharan Ravichandran — home" className="block rounded-md transition hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
      <ThemeImage src="/images/logo/hr-logo.svg" darkSrc="/images/logo/hr-logo-dark.svg" alt="Hariharan logo" width={271} height={116} className="h-8 w-auto sm:h-9 lg:h-10" priority />
    </Link>
  )
}

export default Logo
