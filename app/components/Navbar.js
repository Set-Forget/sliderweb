import Image from "next/image"
import logo from "@/public/slider-web-logo.png"
import ThemeToggle from "./ThemeToggle"
import Link from "next/link"

export const Navbar = () => {
    return (
        <div className="fixed top-0 left-0 w-screen p-6 z-50">
            <nav className="flex flex-row justify-between">
                <Link href='/'><Image src={logo} width={48}/></Link>
                <ThemeToggle/>
            </nav>
        </div>
    )
}