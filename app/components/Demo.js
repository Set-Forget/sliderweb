import { ArrowDownIcon, ArrowDownOnSquareIcon, BookmarkIcon, Squares2X2Icon } from "@heroicons/react/24/outline";

const features = [
    {
        name: 'Instant Setup',
        description:
            "Install SliderWeb's free app on the Google Marketplace - it only takes 10 seconds",
        icon: ArrowDownIcon,
    },
    {
        name: 'Select Slides',
        description:
            "Select the specific slides you'll want to reuse, directly from within your Google Slides presentation",
        icon: BookmarkIcon,
    },
    {
        name: 'Organize and Save Slides',
        description:
            'Add the selected slides to a new or existing folder (i.e. Case Study Slides, Proposal Slides, etc)',
        icon: Squares2X2Icon,
    },
    {
        name: 'Drop Slides into Another Deck',
        description:
            'When building another deck, simply select the slides or folders to drop in',
        icon: ArrowDownOnSquareIcon,
    },
]

export const Demo = () => {
    return (
        <div className="py-24 sm:py-32 dark:bg-gray-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight dark:text-white text-gray-900 sm:text-5xl">
                        How it works
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 dark:bg-[#ffb342]">
                                        <feature.icon className="h-6 w-6 text-white dark:text-gray-900" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-700 dark:text-white">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}