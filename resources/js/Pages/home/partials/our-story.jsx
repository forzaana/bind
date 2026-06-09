import { Image } from "@heroui/react"
import {Icon} from "@iconify/react";
import {Link} from "@inertiajs/react";
const OurStorySection = () => {
    return (
        <section id="trigger-left" className="relative bg-gradient-to-br from-black to-bind-950">
            <div className="mx-auto max-w-7xl px-6 pb-8 py-16 sm:py-24 lg:px-8 lg:py-32">

                <div className="absolute left-[2%] top-[10%] -translate-x-1/2 -translate-y-1/2 transition duration-500 ease-in-out"
                     data-aos="fade-right"
                     data-aos-anchor="#trigger-left">
                    <span className="writing-mode-vertical-rl text-orientation-revert rotate-180 text-white/10 text-7xl sm:text-9xl font-black">about us</span>
                </div>

                <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div>
                        <p className="text-5xl md:text-7xl text-white font-black">
                            About us<br/>
                        </p>

                        <p className="text-white text-xl my-10">
                            At BIND, we believe communication is the thread that binds us all. We bring
                            together ideas, people, and cultures through purposeful, integrated
                            salutations that bridge gaps, build understanding, and drive impact.
                        </p>

                        <p className="text-white text-xl my-10">
                            We work collaboratively with our partners to ensure a vision is woven into
                            every goal. Our approach is adaptive to needs, delivering measurable
                            results that inspire and transform.
                        </p>

                        <p className="text-white text-xl my-10">
                            As a specialized consultancy in
                            communication and media, we craft strategic solutions, develop brand
                            communication, and execute advertising with a balance of local insight and
                            global expertise. At BIND, we create connections that matter.
                        </p>

                        <Link href="/">
                            <div className="flex flex-row items-center group gap-2 transition duration-500 ease-in-out">
                                <div className="flex flex-col items-center justify-center bg-white group-hover:bg-bind-800 rounded-xl w-7 h-7">
                                    <Icon className="text-bind-900 group-hover:text-white w-4 h-4 transition duration-500 ease-in-out" icon="cuida:arrow-right-outline" />
                                </div>
                                <span className="uppercase text-xs text-white group-hover:text-bind-500 font-black tracking-wide transition duration-500 ease-in-out">view more</span>
                            </div>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center mb-20">
                        <Image
                            isBlurred
                            alt="Bind"
                            className="min-w-full mt-32"
                            src="./assets/images/our-story.webp"
                            width="100%"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurStorySection;
