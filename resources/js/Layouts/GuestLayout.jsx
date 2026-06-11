import BasicNavbar from '@/Layouts/partials/basic-navbar.jsx';
import FooterSection from '@/Layouts/partials/footer.jsx';
import { usePage } from '@inertiajs/react';
import { addToast } from '@heroui/toast';
import { useEffect } from 'react';
import AOS from 'aos';

export default function GuestLayout({ children }) {
    const { flash } = usePage().props

    // const
    useEffect(() => {
        AOS.init({ duration: 1000 });

        if (flash && flash.message) {
            addToast({
                title: flash.title ?? '',
                description: flash.message,
                timeout: 3000,
                color: flash.type,
                shouldShowTimeoutProgress: true,
            });
        }
    }, [flash]);


    return (
        <div className="relative overflow-hidden">
            {/*header navigation*/}
            <BasicNavbar />

            {/*main content*/}
            <main className="overflow-hidden">
                {children}
            </main>

            {/*footer section*/}
            <FooterSection />
        </div>
    );
}
