import 'swiper/css/bundle';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import {Link, usePage} from '@inertiajs/react';
import { Icon } from '@iconify/react';
import { useRef } from 'react';
import {ArrowRightIcon} from "lucide-react";
import {useTranslations} from "@/hooks/useTranslation.jsx";

const Projects = ({ projects }) => {
    const swiperRef = useRef(null);
    const { locale } = usePage().props;
    const isRTL = locale === 'ar';
    return (
        <>
            <div className="relative">
                <Swiper onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
                        slidesPerView={1}
                        spaceBetween={10}
                        autoplay={true}
                        pagination={{ clickable: true }}
                        modules={[Autoplay]}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            768: { slidesPerView: 3, spaceBetween: 40 },
                        }}
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className="group cursor-pointer">
                            <Link href={route('expertise.show', project.slug)}>
                                <div className="relative h-[500px] w-full overflow-hidden group-hover:rounded-3xl border border-transparent group-hover:border-bind-500/50 transition-all duration-500">
                                    {/* Image Section */}
                                    <div className="absolute inset-0 transition-all duration-500 group-hover:top-0 ">
                                        <img
                                            src={project?.cover_url ?? ''}
                                            alt={isRTL ? project?.title?.ar : project?.title?.en ?? '-'}
                                            className="h-full w-full object-cover transition-all duration-500"
                                        />
                                    </div>

                                    {/* Hidden Text Section (Appears on Hover) */}
                                    <div className="absolute bottom-0 flex h-0 w-full bg-black p-4 text-white opacity-0 transition-all duration-500 group-hover:top-2/3 group-hover:h-2/3 group-hover:opacity-100">
                                        <div className="relative flex-col items-start justify-center">
                                            <h2 className="text-medium font-semibold">{isRTL ? project?.title?.ar : project?.title?.en ?? '-'}</h2>
                                            <p className="text-xs text-justify">
                                                {isRTL
                                                    ? project?.description?.ar?.length > 70 ? `${project?.description?.ar?.slice(0, 70)}...` : project?.description?.ar
                                                    : project?.description?.en?.length > 70 ? `${project?.description?.en?.slice(0, 70)}...` : project?.description?.en
                                                }
                                            </p>

                                            <div className="absolute flex flex-row items-center justify-between bottom-[55%]">
                                                <div className="flex flex-row items-center">
                                                    <Icon icon="solar:calendar-outline" className="mr-2 text-melrose-400" />
                                                    <span className="text-xs">{project?.date ?? '-'}</span>
                                                </div>
                                                <div className="flex flex-row items-center">
                                                    <Icon icon="fluent:location-16-regular" className="mr-2 text-melrose-400" />
                                                    <span className="text-xs">{isRTL ? project?.location?.ar : project?.location?.en ?? '-'}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <button onClick={() => swiperRef.current?.slideNext()} className="absolute hidden sm:flex md:hidden flex-col items-center justify-center bg-white hover:bg-bind-100 rounded-full w-10 h-10 top-1/2 -right-14 z-50 text-bind-500">
                    <ArrowRightIcon size={15} />
                </button>

                <div className="flex sm:hidden md:flex lg:hidden flex-row items-center justify-center gap-3 mt-10">
                    <button onClick={() => swiperRef.current?.slidePrev()} className="flex flex-col items-center justify-center bg-white hover:bg-bind-100 rounded-full w-8 h-8 z-50 text-bind-500">
                        <ArrowRightIcon size={15} className="rotate-180" />
                    </button>
                    <button onClick={() => swiperRef.current?.slideNext()} className="flex flex-col items-center justify-center bg-white hover:bg-bind-100 rounded-full w-8 h-8 z-50 text-bind-500">
                        <ArrowRightIcon size={15} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Projects;
