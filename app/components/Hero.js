import Image from "next/image"
import heroImg from '@/public/SliderWebHero02.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChrome } from "@fortawesome/free-brands-svg-icons"

export const Hero = () => {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900">
            <div
                className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
                aria-hidden="true"
            >
                <div
                    className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#ffb780] to-[#e5d046] opacity-20"
                    style={{
                        clipPath:
                            'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
                    }}
                />
            </div>

            <div className="mx-auto px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
                <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">

                    <div className="mt-24 sm:mt-32 lg:mt-16">
                        <a href="#" className="inline-flex space-x-6">
                            <span className="rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold leading-6 text-orange-400 ring-1 ring-inset ring-orange-500/20">
                                What's new
                            </span>
                            <span className="inline-flex items-center space-x-2 text-xs font-medium leading-6 text-gray-300">
                                <span>v1.0 Now available</span>
                            </span>
                        </a>
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mt-6">SliderWeb&apos;s Template Creator</h1>
                    <p className="text-lg leading-8 text-gray-300 mt-6">Templating just became easy. And it&apos;s even easier to get started. Download now for free.</p>
                    <button className="mt-6 flex justify-center items-center px-2 py-2.5 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"><FontAwesomeIcon icon={faChrome} className="w-4 h-4 mr-2" /> Get now from the Google Marketplace</button>
                </div>
                <div className="">
                    <Image src={heroImg} width={0} className="scale-125 mt-44 px-8" />
                </div>
            </div>
        </div>
    )
}