import Projects from '@/Pages/expertise/partials/projects.jsx';
import { useTranslations } from '@/hooks/useTranslation';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import { Deferred, Head } from '@inertiajs/react'

const ExpertisePage = ({projects}) => {
    const { __ } = useTranslations();
    return (
        <>
            <Head title={__('Expertise')} />

            <GuestLayout>
                <section className="relative bg-gradient-to-bl from-black via-bind-950 to-black">
                    <div className="mx-auto max-w-7xl px-6 pb-8 py-8 sm:py-16 lg:px-8 lg:py-20">
                        <div className="md:grid md:grid-cols-3 md:gap-8 mt-20">
                            <div className="col-span-1">
                                <p data-aos="fade-right" className="text-5xl md:text-7xl text-white font-black">
                                    {__('Expertise')} <br/>
                                </p>
                            </div>

                            <div className="col-span-2 my-10">
                                <Deferred data="projects" fallback={<div>{__('Loading')}...</div>}>
                                    <Projects projects={projects} />
                                </Deferred>
                            </div>
                        </div>
                    </div>
                </section>
            </GuestLayout>
        </>
    )
}

export default ExpertisePage;
