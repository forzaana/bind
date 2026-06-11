import 'swiper/css/bundle';

import GuestLayout from '@/Layouts/GuestLayout.jsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowLeftIcon } from 'lucide-react';
import {Head, Link, usePage} from '@inertiajs/react';
import { Autoplay } from 'swiper/modules';
import { Image } from '@heroui/react';
import {useTranslations} from "@/hooks/useTranslation.jsx";

const ProjectDetails = ({ project }) => {
    const { locale } = usePage().props;
    const { __ } = useTranslations();
    const isRTL = locale === 'ar';
    return (
        <>
            <Head title={isRTL ? project?.title?.ar : project?.title?.en} />

            <GuestLayout>
                <section className="relative bg-gradient-to-bl from-black via-bind-950 to-black">
                    <div className="mx-auto max-w-7xl px-6 pb-8 py-8 sm:py-16 lg:px-8 lg:py-20">
                        <div className="my-5">
                            <Link href={route('expertise')}>
                                <button type="button" className="flex flex-row items-center justify-center -ml-[3%]">
                                    <ArrowLeftIcon className="h-3 text-bind-300 mt-1.5" />
                                    <span className="text-bind-300 text-xs font-bold">
                                        {__('back to our expertise')}
                                    </span>
                                </button>
                            </Link>
                        </div>

                        <h1 className="flex flex-col gap-1 font-bold text-bind-300 text-4xl">
                            {isRTL ? project?.title?.ar : project?.title?.en ?? '-'}
                        </h1>
                        <div className="mt-5">
                            <p className="w-full sm:w-1/2 text-justify text-base text-white">
                                {isRTL ? project?.description?.ar : project?.description?.en ?? '-'}
                            </p>


                            <div className="my-10">

                                {project && project?.scope_description && (
                                    <div>
                                        <h1 className="flex flex-col gap-1 font-bold text-bind-300 text-4xl">
                                            {__('Scope of Work')}
                                        </h1>

                                        <p className="mt-3 w-full sm:w-1/2 text-justify text-base text-white">
                                            {project?.scope_description ?? '-'}
                                        </p>

                                        <div className="flex flex-row flex-wrap gap-2 my-5">
                                            {project?.scopes.map((item, index) => (
                                                <div key={index} className="inline-block bg-bind-300 rounded-lg px-4 pb-2 pt-1 text-sm">
                                                    {item?.fields?.scops}
                                                </div>
                                            ))}

                                        </div>
                                    </div>
                                )}
                            </div>


                            <div className="flex flex-col mt-10 overflow-hidden">
                                <Image
                                    isBlurred
                                    alt={isRTL ? project?.title?.ar : project?.title?.en ?? '-'}
                                    className="h-full w-full"
                                    src={project.cover_url}
                                    width="100%"
                                />
                            </div>
                        </div>

                        <div className="my-10">
                            {project.media?.length > 0 && (
                                <div className="flex flex-col items-start">
                                    <span className="text-left font-bold text-bind-300 text-4xl uppercase">
                                        {__('GALLERY')}
                                    </span>

                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={10}
                                        autoplay={true}
                                        pagination={{ clickable: true }}
                                        breakpoints={{
                                            640: { slidesPerView: 2, spaceBetween: 20 },
                                            768: { slidesPerView: 3, spaceBetween: 40 },
                                        }}
                                        modules={[Autoplay]}
                                        className="w-full mt-10"
                                    >
                                        {project.media.map((media, index) => (
                                            <SwiperSlide key={index} className="block">
                                                <Image
                                                    className="bg-center bg-cover w-auto h-[300px]"
                                                    src={media.original_url}
                                                    alt={media.name}
                                                />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </GuestLayout>
        </>
    );
};

export default ProjectDetails;
