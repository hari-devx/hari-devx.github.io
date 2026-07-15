import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <>
        <Link href="/">
            <Image src={"/images/logo/h.svg"} alt="logo" width={140} height={200}/>
        </Link>
    </>
  )
}

export default Logo