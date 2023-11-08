import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChrome } from "@fortawesome/free-brands-svg-icons"

export const GetStarted = () => {
    return (
        <div className="relative isolate bg-gray-900 flex flex-col justify-center items-center">
            <div className="mx-auto px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40 flex flex-col justify-center items-center max-w-[1366px]">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mt-6 text-center">
                Install <span className="text-[#fbbc05]">SliderWeb&apos;s</span> Google Slides Addon and Improve Your Workflow in a Heartbeat.
                </h2>
                <button className="mt-16 flex justify-center items-center px-2 py-2.5 rounded-lg transition-all bg-orange-500/10 ring-1 ring-inset ring-orange-500/20 hover:ring-orange-500/50">
                    <FontAwesomeIcon icon={faChrome} className="w-4 h-4 mr-2" /> Get now from the Google Marketplace
                </button>
            </div>
        </div>
    )
}
