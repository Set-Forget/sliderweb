import Link from "next/link"

export const Footer = () => {

const infoRoutes = {
    privacyPolicy: '/privacypolicy',
    termsConditions: '/termsandconditions',
    googleDisclosure: '/googledisclosure'
}

    return (
        <footer className="w-full h-24 bg-gray-900">
            <nav className="h-12 flex flex-col justify-end">
                <ul className="flex justify-center items-center space-x-16 text-xs">
                    <li><a href="">Contact</a></li>
                    <li><Link href={infoRoutes.privacyPolicy}>Privacy Policy</Link></li>
                    <li><Link href={infoRoutes.termsConditions}>Terms & Conditions</Link></li>
                    <li><Link href={infoRoutes.googleDisclosure}>Google Disclosure</Link></li>
                </ul>
            </nav>
        </footer>
    )
}