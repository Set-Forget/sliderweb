import Image from 'next/image'
import demoImg from '@/public/SliderWebDemo.png'

export const Demo = () => {
    return (
        <div className="relative isolate dark:bg-gray-900 flex">
            <div className="mx-auto px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40 max-w-[1366px]">
                <div>
                    <Image src={demoImg} width={0} alt='sliderweb usage demo'/>
                </div>
                <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
                    <h2 className="text-4xl font-bold tracking-tight sm:text-6xl mt-6">Import your templates wherever and whenever</h2>
                    <p className="text-lg leading-8 dark:text-gray-300 mt-16">
                        Efficiently create and import custom slide templates into any presentation, streamlining
                        your slide creation process.
                    </p>
                    <p className='text-lg leading-8 dark:text-gray-300 mt-6'>
                        Ensure consistency and save time,
                        enhancing your presentations with ease and maximize productivity with our
                        intuitive add-on that simplifies your slideshow preparation.</p>
                </div>
            </div>
        </div>
    )
}