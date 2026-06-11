import Projects from '@/Pages/expertise/partials/projects.jsx';
import ClientsSection from '@/Pages/home/partials/clients.jsx';
import { useTranslations } from '@/hooks/useTranslation.jsx';
import BindSection from '@/Pages/home/partials/bind.jsx';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import { Deferred, Head } from '@inertiajs/react';
import { CircularProgress } from '@heroui/react';
export default function HomePage({carousels, clients, projects}) {
    const { __ } = useTranslations();
    return (
        <>
            <Head title="let's bind the thread" />

            <GuestLayout>
                <Deferred data="carousels" fallback={
                    <div className="bg-gradient-to-t from-black to-bind-950 h-screen flex items-center justify-center">
                        <CircularProgress classNames={{
                            indicator: 'text-bind-500',

                        }} aria-label="Loading..." />
                    </div>
                }>
                    <BindSection carousels={carousels} />
                </Deferred>

                <Deferred data="projects" fallback={
                    <div className="bg-gradient-to-bl from-black via-bind-950 to-black h-96 flex items-center justify-center">
                        <CircularProgress classNames={{
                            svg: '',
                            indicator: 'text-bind-200',
                        }} aria-label="Loading..." />
                    </div>
                }>
                    <section className="relative bg-gradient-to-bl from-black via-bind-950 to-black">
                        <div className="mx-auto max-w-7xl px-6 pb-8 py-8 sm:py-16 lg:px-8 lg:py-20">
                            <div className="mx-auto max-w-4xl px-6 pb-8 py-20 sm:py-16 lg:px-8 lg:py-20">
                                <h1 className="text-2xl md:text-3xl text-white font-black">
                                    {__('At BIND, we believe that meaningful change starts with a clear vision and a calculated step. That’s why we don’t just craft content, we build it into actionable strategies that connect brands with their audiences, turning messages into experiences and ideas into tangible results.')}
                                </h1>
                                <p className="text-2xl md:text-3xl text-white font-normal mt-5">
                                    {__('With creativity, precision, and purpose, we deliver lasting impact through integrated solutions in strategic communication, media, public relations, digital marketing, creative services, and production.')}
                                </p>
                            </div>
                            <div className="md:grid md:grid-cols-3 md:gap-8 mt-20">
                                <div className="col-span-1">
                                    <p data-aos="fade-right" className="flex flex-col rtl:flex-col-reverse text-5xl md:text-7xl text-white font-black">
                                         <span>{__('Featured')}</span>
                                        <span className="font-normal">{__('Projects')}</span>
                                    </p>
                                </div>

                                <div className="col-span-2 my-10">
                                    <Deferred data="projects" fallback={<div>Loading...</div>}>
                                        <Projects projects={projects} />
                                    </Deferred>
                                </div>
                            </div>
                        </div>
                    </section>
                </Deferred>

                <Deferred data="clients" fallback={
                    <div className="bg-bind-100 h-96 flex items-center justify-center">
                        <CircularProgress classNames={{
                            svg: 'fill-bind-200',
                            indicator: 'text-bind-500',

                        }} aria-label="Loading..." />
                    </div>
                }>
                    <ClientsSection clients={clients} />
                </Deferred>
            </GuestLayout>
        </>
    );
}
