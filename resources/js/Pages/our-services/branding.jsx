import { StackedCarousel, ResponsiveContainer } from 'react-stacked-center-carousel';
import { ArrowRightIcon } from 'lucide-react';
import { Slide } from '@/Components/Slide';
import { Icon } from '@iconify/react';
import { useRef } from 'react';

const BrandingSection = () => {
    const ref = useRef(null);

    const data = [
        {
            image: "https://picsum.photos/300/400?random=1",
            text: "Creative Vision"
        },
        {
            image: "https://picsum.photos/300/400?random=2",
            text: "Identity Power"
        },
        {
            image: "https://picsum.photos/300/400?random=3",
            text: "Stand Out"
        }
    ];

    return (
        <section className="relative bg-gradient-to-br from-black to-bind-950">
            <div className="mx-auto max-w-7xl px-6 pb-8 py-16 sm:py-24 lg:px-8 lg:py-32">
                <div className="grid grid-cols-1 items-end md:grid-cols-2 gap-8">
                    <div className="flex flex-col">
                        <div className="flex flex-col items-start mb-10">
                            <Icon className="text-white w-16 h-16 sm:h-32 sm:w-32" icon="solar:eye-linear" />
                            <div className="text-4xl md:text-6xl text-white font-black leading-tight">
                                BRANDING
                                <span className="font-normal mx-2 ">
                                    & IDENTITY
                                </span>
                                DESIGN
                            </div>
                        </div>

                        <div className="flex flex-col gap-5 text-white text-justify">
                            <p>
                                At Bind, our Branding and Identity Design service is dedicated to crafting
                                unique visual identities that resonate with your target audience.
                            </p>
                            <p>
                                We develop comprehensive branding strategies that encompass logo design,
                                color palettes, typography, and overall brand aesthetics.
                            </p>
                            <p>
                                Let us help you establish a strong, cohesive brand presence that builds
                                recognition and fosters loyalty.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <ResponsiveContainer
                            carouselRef={ref}
                            render={(width, carouselRef) => (
                                <StackedCarousel
                                    ref={carouselRef}
                                    slideComponent={Slide}
                                    slideWidth={300}
                                    carouselWidth={width}
                                    data={data}
                                    maxVisibleSlide={5}
                                    disableSwipe
                                    customScales={[1, 0.85, 0.7, 0.55]}
                                    transitionTime={450}
                                />
                            )}
                        />

                        <div onClick={() => ref.current?.goNext()} className="inline-flex flex-row items-center p-2 group border-2 border-white/40 hover:bg-bind-500/60 rounded-full cursor-pointer z-10">
                            <span className="text-xs text-white -mt-1">NEXT</span>
                            <button className="ml-2 bg-white/20 group-hover:bg-white/40 text-white rounded-full">
                                <ArrowRightIcon size={15} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BrandingSection;
