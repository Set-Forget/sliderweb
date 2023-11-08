import Image from 'next/image'
import demoImg from '@/public/SliderWebDemo.png'

export const Demo = () => {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 flex">
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
                <div>
                    <Image src={demoImg} width={0} alt='sliderweb usage demo'/>
                </div>
                <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                    <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mt-6">Import your templates wherever and whenever</h2>
                    <p className="text-lg leading-8 text-gray-300 mt-16">
                        Efficiently create and import custom slide templates into any presentation, streamlining
                        your slide creation process.
                    </p>
                    <p className='text-lg leading-8 text-gray-300 mt-6'>
                        Ensure consistency and save time,
                        enhancing your presentations with ease and maximize productivity with our
                        intuitive add-on that simplifies your slideshow preparation.</p>
                </div>
            </div>
        </div>
    )
}