import { Icon } from '@iconify/react';
import {ArrowRightIcon} from "lucide-react";
import {Image} from "@heroui/react";

const LetsBindSection = () => {
    return (
        <section className="relative bg-gradient-to-br from-black to-bind-950">
            <div className="mx-auto max-w-7xl px-6 pb-8 py-16 sm:py-24 lg:px-8 lg:py-32">
                <div className="flex flex-col justify">
                    <div className="flex flex-col items-center my-10">
                        <div  className="text-left text-5xl md:text-7xl text-white font-black">
                            <div className="ml-20">
                                let’s <span className="font-normal"> bind</span>
                            </div>
                            <div className="-ml-10">
                                <span className="font-normal">the</span> thread
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="group relative transition-all duration-300">
                        <div className="bg-melrose-500/5 p-2 rounded-full w-20 h-20 flex items-center justify-center">
                            <div className="bg-melrose-500/10 p-2 rounded-full w-14 h-14 flex items-center justify-center">
                                <Icon className="text-white group-hover:text-melrose-300 w-8 h-8" icon="fluent:comment-quote-20-regular" />
                            </div>
                        </div>

                        <h1 className="text-white group-hover:text-melrose-300 font-bold mt-3 transition-all duration-500 ease-in-out">
                            Strategic Communication
                        </h1>

                        <ul className="overflow-hidden transition-all duration-500 ease-in-out list-disc text-white group-hover:text-melrose-300 font-normal text-sm mt-5">
                            <li>Communication Strategy Management</li>
                            <li>Crisis and Reputation Strategy Management</li>
                            <li>Partnership and Sponsorship Management</li>
                            <li>Employee Communications Management</li>
                            <li>Earned & Social Strategy Management</li>
                        </ul>

                        <div className="flex justify-end transition-opacity duration-300">
                            <div className="inline-flex flex-row items-center px-2 my-1 group border-2 border-white/40 hover:bg-bind-500/60 rounded-full cursor-pointer z-10">
                                <span className="text-xs text-white -mt-1">More</span>
                                <button className="ml-2 bg-white/20 group-hover:bg-white/40 text-white rounded-full my-1">
                                    <ArrowRightIcon size={12} className="mx-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <Image className="rounded-2xl" src="/assets/images/strategic_communication.png" alt="Strategic Communication" />
                </div>

                <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 lg:grid-cols-2 gap-12">
                    <Image className="rounded-2xl" src="/assets/images/public_affairs.webp" alt="public_affairs" />
                    <div className="group relative transition-all duration-300">
                        <div className="bg-melrose-500/5 p-2 rounded-full w-20 h-20 flex items-center justify-center">
                            <div className="bg-melrose-500/10 p-2 rounded-full w-14 h-14 flex items-center justify-center">
                                <Icon  className="text-white group-hover:text-melrose-300 w-8 h-8" icon="fluent:megaphone-loud-24-regular" />
                            </div>
                        </div>

                        <h1 className="text-white group-hover:text-melrose-300 font-bold mt-3 transition-all duration-500 ease-in-out">
                            Public Affairs
                        </h1>

                        <ul className="overflow-hidden transition-all duration-500 ease-in-out list-disc text-white group-hover:text-melrose-300 font-normal text-sm mt-5">
                            <li>Government relations and policy advocacy support</li>
                            <li>Stakeholder engagement and lobbying strategies</li>
                            <li>Corporate social responsibility (CSR) initiatives</li>
                            <li>Monitoring and analyzing regulatory changes
                                impacting the industry</li>
                        </ul>

                        <div className="flex justify-end transition-opacity duration-300">
                            <div className="inline-flex flex-row items-center px-2 my-1 group border-2 border-white/40 hover:bg-bind-500/60 rounded-full cursor-pointer z-10">
                                <span className="text-xs text-white -mt-1">More</span>
                                <button className="ml-2 bg-white/20 group-hover:bg-white/40 text-white rounded-full my-1">
                                    <ArrowRightIcon size={12} className="mx-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="group relative transition-all duration-300">
                        <div className="bg-melrose-500/5 p-2 rounded-full w-20 h-20 flex items-center justify-center">
                            <div className="bg-melrose-500/10 p-2 rounded-full w-14 h-14 flex items-center justify-center">
                                <Icon  className="text-white group-hover:text-melrose-300 w-8 h-8" icon="qlementine-icons:media-16" />
                            </div>
                        </div>

                        <h1 className="text-white group-hover:text-melrose-300 font-bold mt-3 transition-all duration-500 ease-in-out">
                            Media Outreach
                        </h1>

                        <ul className="overflow-hidden transition-all duration-500 ease-in-out list-disc text-white group-hover:text-melrose-300 font-normal text-sm mt-5">
                            <li>Relationships management with journalists,
                                influencers, though leaders and media outlets</li>
                            <li>PR prep and publishing management</li>
                            <li>Press conferences and media briefings development</li>
                            <li>Media training management</li>
                        </ul>

                        <div className="flex justify-end transition-opacity duration-300">
                            <div className="inline-flex flex-row items-center px-2 my-1 group border-2 border-white/40 hover:bg-bind-500/60 rounded-full cursor-pointer z-10">
                                <span className="text-xs text-white -mt-1">More</span>
                                <button className="ml-2 bg-white/20 group-hover:bg-white/40 text-white rounded-full my-1">
                                    <ArrowRightIcon size={12} className="mx-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <Image className="rounded-2xl" src="/assets/images/media_outreach.webp" alt="media_outreach" />
                </div>

                <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 lg:grid-cols-2 gap-12">
                    <img className="rounded-2xl" src="/assets/images/digital_management.webp" alt="digital_management" />
                    <div className="group relative transition-all duration-300">
                        <div className="bg-melrose-500/5 p-2 rounded-full w-20 h-20 flex items-center justify-center">
                            <div className="bg-melrose-500/10 p-2 rounded-full w-14 h-14 flex items-center justify-center">
                                <Icon  className="text-white group-hover:text-melrose-300 w-8 h-8" icon="hugeicons:folder-management" />
                            </div>
                        </div>

                        <h1 className="text-white group-hover:text-melrose-300 font-bold mt-3 transition-all duration-500 ease-in-out">
                            Digital Management
                        </h1>

                        <ul className="overflow-hidden transition-all duration-500 ease-in-out list-disc text-white group-hover:text-melrose-300 font-normal text-sm mt-5">
                            <li>Digital Marketing Presence Development</li>
                            <li>SEO, PPC, and social media campaign optimization</li>
                            <li>Data analytics, performance tracking, and reporting</li>
                            <li>Websites, content, and digital assets development
                                and management</li>
                        </ul>

                        <div className="flex justify-end transition-opacity duration-300">
                            <div className="inline-flex flex-row items-center px-2 my-1 group border-2 border-white/40 hover:bg-bind-500/60 rounded-full cursor-pointer z-10">
                                <span className="text-xs text-white -mt-1">More</span>
                                <button className="ml-2 bg-white/20 group-hover:bg-white/40 text-white rounded-full my-1">
                                    <ArrowRightIcon size={12} className="mx-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="group relative transition-all duration-300">
                        <div className="bg-melrose-500/5 p-2 rounded-full w-20 h-20 flex items-center justify-center">
                            <div className="bg-melrose-500/10 p-2 rounded-full w-14 h-14 flex items-center justify-center">
                                <Icon  className="text-white group-hover:text-melrose-300 w-8 h-8" icon="qlementine-icons:paint-bucket-drop-16" />
                            </div>
                        </div>

                        <h1 className="text-white group-hover:text-melrose-300 font-bold mt-3 transition-all duration-500 ease-in-out">
                            Creative & Art
                        </h1>

                        <ul className="overflow-hidden transition-all duration-500 ease-in-out list-disc text-white group-hover:text-melrose-300 font-normal text-sm mt-5">
                            <li>Campaign Concept Development</li>
                            <li>Engagement Concept Development</li>
                            <li>Visual Communication Development</li>
                            <li>Content Communication Development</li>
                            <li>Branding Communication Development</li>
                        </ul>

                        <div className="flex justify-end transition-opacity duration-300">
                            <div className="inline-flex flex-row items-center px-2 my-1 group border-2 border-white/40 hover:bg-bind-500/60 rounded-full cursor-pointer z-10">
                                <span className="text-xs text-white -mt-1">More</span>
                                <button className="ml-2 bg-white/20 group-hover:bg-white/40 text-white rounded-full my-1">
                                    <ArrowRightIcon size={12} className="mx-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <Image className="rounded-2xl" src="/assets/images/creative.webp" alt="creative" />
                </div>

                <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 lg:grid-cols-2 gap-12">
                    <Image className="rounded-2xl" src="/assets/images/production.png" alt="production" />
                    <div className="group relative transition-all duration-300">
                        <div className="bg-melrose-500/5 p-2 rounded-full w-20 h-20 flex items-center justify-center">
                            <div className="bg-melrose-500/10 p-2 rounded-full w-14 h-14 flex items-center justify-center">
                                <Icon  className="text-white group-hover:text-melrose-300 w-8 h-8" icon="hugeicons:camera-video" />
                            </div>
                        </div>

                        <h1 className="text-white group-hover:text-melrose-300 font-bold mt-3 transition-all duration-500 ease-in-out">
                            Production
                        </h1>

                        <ul className="overflow-hidden transition-all duration-500 ease-in-out list-disc text-white group-hover:text-melrose-300 font-normal text-sm mt-5">
                            <li>Commercial Production</li>
                            <li>2D, 3D Production</li>
                            <li>On-Ground Coverage and Documentation</li>
                            <li>Screen-content Production</li>
                        </ul>

                        <div className="flex justify-end transition-opacity duration-300">
                            <div className="inline-flex flex-row items-center px-2 my-1 group border-2 border-white/40 hover:bg-bind-500/60 rounded-full cursor-pointer z-10">
                                <span className="text-xs text-white -mt-1">More</span>
                                <button className="ml-2 bg-white/20 group-hover:bg-white/40 text-white rounded-full my-1">
                                    <ArrowRightIcon size={12} className="mx-2" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LetsBindSection
