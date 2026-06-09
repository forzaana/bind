import { Virtual, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Image } from '@heroui/react';
import {useTranslations} from "@/hooks/useTranslation.jsx";

const ClientsSection = ({clients}) => {
    const { __ } = useTranslations();
    return (
        <section id="trigger-left" className="relative bg-bind-100">
            <div className="mx-auto max-w-7xl px-6 pb-8 py-5 lg:px-8 ">
                <div className="flex flex-col justify">
                    <div className="flex flex-col items-center my-10">
                        <div data-aos="fade-right" className="text-left text-5xl md:text-7xl text-bind-950 font-black">
                            <div>
                                {__('Our Clients')} <span className="font-normal rtl:hidden">Clients</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Swiper
                    modules={[Virtual, Navigation]}
                    slidesPerView={5}
                    centeredSlides={false}
                    spaceBetween={30}
                    navigation={true}
                    virtual
                >
                    {clients.map((slideContent, index) => (
                        <SwiperSlide key={slideContent} virtualIndex={index}>
                            <div key={slideContent.id} className="flex items-center justify-center">
                                <div>
                                    <Image className="rounded-none min-h-full sm:min-h-full w-32"
                                           alt={slideContent.name}
                                           src={slideContent.mediaUrl} />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default ClientsSection;
