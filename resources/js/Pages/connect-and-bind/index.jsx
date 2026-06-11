import { Head, useForm, usePage } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout.jsx';
import {Alert, Button, Input} from '@heroui/react';
import { Icon } from '@iconify/react';
import {useTranslations} from "@/hooks/useTranslation.jsx";

const ConnectAndBindPage = () => {
    const { info, settings, locale } = usePage().props;
    const { __ } = useTranslations();
    const isRTL = locale === 'ar';


    const { data, setData, post, processing, errors,reset } = useForm({
        name: '',
        email: '',
        mobile: '',
    })

    function submit(e) {
        e.preventDefault()

        if (settings && settings.enable_inquiries === false) {
            return alert('Inquiries is disabled, please contact administrator')
        }

        post(route('connect-and-bind'), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: reset()
        })
    }

    return (
        <>
            <Head title={__('Connect & bind')} />

            <GuestLayout>
                <section className="relative  bg-gradient-to-br from-black to-bind-950">
                    <div className="bg-bind-500 -mt-[10px] bg-[url(/assets/images/connect_and_bind.png)] bg-blend-multiply bg-cover">
                        <div className="mx-auto max-w-7xl px-6 pb-8 py-16 sm:py-24 lg:px-8 lg:py-32">
                            <div className="flex flex-col justify">
                                <div className="flex flex-col items-center my-10">
                                    <div data-aos="fade-right"
                                         className="text-left text-5xl md:text-7xl text-white font-black">
                                        {__('Connect')}
                                    </div>
                                    <div data-aos="fade-right"
                                         className="-mr-60 text-5xl md:text-7xl text-white font-black">
                                        & <span className="font-normal">{__('bind')}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center my-32 z-50">
                                <div className="md:grid md:grid-cols-2 md:gap-8">
                                    <div className="flex flex-col gap-10">
                                        <h1 className="font-black text-white">{__('How can we help you ?')}</h1>
                                        <p className="text-white">
                                            {__('We\'re here to turn your vision into reality through strategic storytelling and transformative communication.  We look forward to bringing your ideas to life!')}
                                        </p>
                                        <p className="text-white">
                                            {__('Let\'s connect!')}
                                        </p>
                                        <div className="flex flex-row items-start gap-2 text-white">
                                            <Icon className="h-5 w-auto" icon="proicons:mail" />
                                            <a href={'mailto:'+info?.email}>{info?.email}</a><br/>
                                        </div>

                                        <div className="mt-10 md:mt-0 text-sm text-white">
                                            <div className="flex flex-row items-start gap-2">
                                                <Icon className="h-5 w-auto" icon="proicons:location" />
                                                <div dangerouslySetInnerHTML={{__html: isRTL ? info?.address?.ar : info?.address?.en}}  />
                                            </div>

                                            <div className="flex flex-row items-start gap-2">
                                                <Icon className="h-5 w-auto" icon="proicons:phone" />
                                                <a href={'tel:'+info?.phone}>{info?.phone}</a><br/>
                                            </div>
                                        </div>
                                    </div>
                                    {settings && settings.enable_inquiries &&
                                        <form onSubmit={submit} className="flex flex-col gap-5 mt-10 sm:mt-0">
                                            <Input
                                                isRequired
                                                value={data.name}
                                                onChange={e => setData('name', e.target.value)}
                                                isInvalid={!! errors.name}
                                                aria-label="name"
                                                classNames={{
                                                    mainWrapper: "bg-transparent text-melrose-300",
                                                    inputWrapper: "text-melrose-300 border border-melrose-300 bg-bind-500/20",
                                                    input: "text-melrose-300",
                                                    innerWrapper: "text-melrose-300",
                                                    base: "text-melrose-300 bg-transparent",
                                                    label: "text-melrose-300",
                                                    description: "text-melrose-300",
                                                    helperWrapper: "text-melrose-300",
                                                }}
                                                autoComplete="name"
                                                id="name"
                                                labelPlacement="outside"
                                                name="name"
                                                placeholder={__('Full Name')}
                                                startContent={<Icon className="text-melrose-300" icon="solar:user-broken" />}
                                                type="text"
                                            />
                                            <Input
                                                isRequired
                                                value={data.email}
                                                onChange={e => setData('email', e.target.value)}
                                                isInvalid={!! errors.email}
                                                aria-label="email"
                                                classNames={{
                                                    mainWrapper: "bg-transparent text-melrose-300",
                                                    inputWrapper: "text-melrose-300 border border-melrose-300 bg-bind-500/20",
                                                    input: "text-melrose-300 ",
                                                    innerWrapper: "text-melrose-300",
                                                    base: "text-melrose-300 bg-transparent",
                                                    label: "text-melrose-300",
                                                    description: "text-melrose-300",
                                                    helperWrapper: "text-melrose-300",
                                                }}
                                                autoComplete="email"
                                                id="email"
                                                labelPlacement="outside"
                                                name="email"
                                                placeholder={__('Email')}
                                                startContent={<Icon className="text-melrose-300" icon="solar:letter-linear" />}
                                                type="email"
                                            />
                                            <Input
                                                isRequired
                                                value={data.mobile}
                                                onChange={e => setData('mobile', e.target.value)}
                                                isInvalid={!! errors.mobile}
                                                aria-label="mobile"
                                                classNames={{
                                                    mainWrapper: "bg-transparent text-melrose-300",
                                                    inputWrapper: "text-melrose-300 border border-melrose-300 bg-bind-500/20",
                                                    input: "text-melrose-300",
                                                    innerWrapper: "text-melrose-300",
                                                    base: "text-melrose-300 bg-transparent",
                                                    label: "text-melrose-300",
                                                    description: "text-melrose-300",
                                                    helperWrapper: "text-melrose-300",
                                                }}
                                                autoComplete="mobile"
                                                id="mobile"
                                                labelPlacement="outside"
                                                name="mobile"
                                                placeholder="05xxxxxxxx"
                                                startContent={<Icon className="text-melrose-300" icon="solar:phone-rounded-linear" />}
                                                type="text"
                                            />
                                            <Button className="w-1/3 bg-bind-500 text-white" type="submit" disabled={processing} isLoading={processing}>
                                                {__('Submit')}
                                            </Button>
                                        </form>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </GuestLayout>
        </>
    )
}

export default ConnectAndBindPage;
