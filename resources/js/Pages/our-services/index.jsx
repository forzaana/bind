import NumbersSection from '@/Pages/our-services/2024-numbers.jsx';
import LetsBindSection from '@/Pages/our-services/lets-bind.jsx';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import { Head } from '@inertiajs/react';
import Branding from "@/Pages/our-services/branding.jsx";

const OurServicesPage = () => {
    return (
        <>
            <Head title="Our Services" />

            <GuestLayout>
                <LetsBindSection />
                <Branding />
                <NumbersSection />
            </GuestLayout>
        </>
    )
}

export default OurServicesPage;
