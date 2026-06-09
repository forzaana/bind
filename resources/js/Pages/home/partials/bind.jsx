import 'swiper/css/bundle';
import AnimatedApplicationLogo from '@/Components/AnimatedApplicationLogo.jsx';
import {Autoplay, EffectFade, Pagination} from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import { useEffect, useState } from 'react';
import { Image } from '@heroui/react';

const BindSection = ({carousels}) =>  {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000); // Hide after 3 seconds

        return () => clearTimeout(timer); // Cleanup on unmounting
    }, []);

    return (
        <section className=" h-screen bg-bind-950">
            {!visible && (
                <div className="flex justify-center items-center h-screen">
                    <div className="max-w-full min-w-full">
                        <Swiper
                            spaceBetween={30}
                            centeredSlides={true}
                            grabCursor={true}
                            effect={'fade'}
                            lazy={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Pagination, EffectFade]}
                            className="w-full h-screen"
                        >


                            {carousels.map((item) => (
                                    <SwiperSlide key={item.id} className="relative">
                                        {item.type === 'video'
                                            ? (
                                                <SwiperSlide className="relative">
                                                    <video
                                                        autoPlay
                                                        loop
                                                        muted
                                                        playsInline
                                                        className="object-cover h-screen w-screen rounded-none"
                                                    >
                                                        <source src={item.mediaUrl} type="video/mp4" />
                                                    </video>
                                                </SwiperSlide>
                                            )
                                            : (
                                                <Image className="object-cover h-screen w-screen rounded-none"
                                                       alt={item.name}
                                                       src={item.mediaUrl} />
                                            )
                                        }

                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>
            </div>
            )}

            {visible && (
                <div className="relative w-full h-screen overflow-hidden">
                    <div className="absolute inset-0 bg-bind-800 opacity-50 mix-blend-overlay"></div>
                    <div className="relative flex items-center justify-center h-full text-white text-3xl font-bold">
                        <AnimatedApplicationLogo className="fill-white h-7"/>
                    </div>
                </div>
            )}
        </section>
)
}


export default BindSection
