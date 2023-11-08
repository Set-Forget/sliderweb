'use client'

export default function InfoPage({params}) {
    const route = params;
    console.log('params', route, typeof route);

    let content;

    if (route.info_route === "privacypolicy") {
        content = (
            <>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mt-6">
                    Privacy Policy
                </h1>
                <p></p>
            </>

        )
    } else if (route.info_route === "termsandconditions") {
        content = (
            <>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mt-6">
                    Terms & Conditions
                </h1>
                <p></p>
            </>

        )
    } else if (route.info_route === "googledisclosure") {
        content = (
            <>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mt-6">
                    Google Disclosure
                </h1>
                <p></p>
            </>

        )
    } else {
        content = (
            <>
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mt-6">
                    Page not found 🫠
                </h1>
                <p>Bummer!</p>
            </>

        )
    }

    return (
        <div className="mx-auto px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                {content}
            </div>
        </div>
    )
}