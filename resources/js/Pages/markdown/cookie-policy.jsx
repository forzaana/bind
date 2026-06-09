import GuestLayout from "@/Layouts/GuestLayout.jsx";
import {Head} from "@inertiajs/react";


const CookiePolicy = ({content}) => {
    return (
        <GuestLayout>
            <Head>
                <title>Cookie Policy</title>
            </Head>

            <section className="relative bg-gradient-to-br from-black to-bind-950">
                <div className="mx-auto max-w-7xl px-6 pb-8 py-16 sm:py-24 lg:px-8 lg:py-32">
                    <article dangerouslySetInnerHTML={{__html: content}}
                             data-aos="zoom-in"
                             className="prose prose-h1:text-bind-400 prose-h2:text-bind-300 prose-li:text-white prose-strong:text-melrose-300 prose-p:text-melrose-300 prose-a:text-melrose-600" />
                </div>
            </section>
        </GuestLayout>
    )
}

export default CookiePolicy
