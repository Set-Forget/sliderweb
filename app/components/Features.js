import Image from "next/image"
import cm from '@/public/check-solid.svg'

export const Features = () => {
    return (
        <div className="relative isolate bg-gray-900 flex flex-col justify-center items-center">
            <section className="mx-auto px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-20 flex flex-col">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mt-6">Why People Choose Us</h1>
                <ul className="mt-16 space-y-6">
                    <li className="flex"><Image src={cm} width={16} className="mr-2" />Get started with a few clicks</li>
                    <li className="flex"><Image src={cm} width={16} className="mr-2" />Create slide folders from a specific selection</li>
                    <li className="flex"><Image src={cm} width={16} className="mr-2" />Import your templates to your current slideshow in an instant</li>
                    <li className="flex"><Image src={cm} width={16} className="mr-2" />Quick access to all your templates for easy editing</li>
                </ul>
            </section>
        </div>
    )
}