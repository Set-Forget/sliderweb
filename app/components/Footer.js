import Link from "next/link"

export const Footer = () => {

const infoRoutes = {
    privacyPolicy: '/privacypolicy',
    termsConditions: '/termsandconditions',
    googleDisclosure: '/googledisclosure'
}

    return (
        <footer className="w-full h-48 bg-gray-900">
            <nav className="h-36 flex flex-col justify-end">
                <ul className="flex sm:flex-row flex-col justify-center items-center sm:space-x-16 text-xs text-center space-y-6 sm:space-y-0">
                    <li><a href="">Contact</a></li>
                    <li><Link href={infoRoutes.privacyPolicy}>Privacy Policy</Link></li>
                    <li><Link href={infoRoutes.termsConditions}>Terms & Conditions</Link></li>
                    <li><Link href={infoRoutes.googleDisclosure}>Google Disclosure</Link></li>
                </ul>
            </nav>
        </footer>
    )
}