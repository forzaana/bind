import ApplicationLogo from '@/Components/ApplicationLogo.jsx';
import { useTranslations } from '@/hooks/useTranslation.jsx';
import { Link, usePage } from '@inertiajs/react';
import { Input } from '@heroui/react';
import { Icon } from '@iconify/react';

const FooterSection = () => {
    const { social, info, settings, navbar: menuItems, locale } = usePage().props;
    const { __ } = useTranslations();
    const isRTL = locale === 'ar';
    return (
        <footer className="bg-[#1e1c26] z-50">
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-5 sm:pt-5 lg:px-8 lg:pt-10">
                <div className="xl:grid xl:grid-cols-4 xl:gap-8">
                    <div className="space-y-8 md:pr-8">
                        <div className="flex items-center justify-start">
                            <ApplicationLogo className="fill-white h-5" />
                        </div>

                        {settings && settings.enable_newsletter &&
                            <div className="flex flex-col gap-2">
                                <div>
                                    <h3 className="text-small text-white">
                                        {__('Subscribe to our newsletter')}
                                    </h3>
                                </div>
                                <form className="relative sm:flex sm:max-w-md lg:mt-0">
                                    <Input
                                        isRequired
                                        aria-label="Email"
                                        classNames={{
                                            mainWrapper: "bg-transparent text-melrose-300",
                                            inputWrapper: "text-melrose-300 border border-melrose-300 bg-transparent",
                                            input: "text-melrose-300",
                                            innerWrapper: "text-melrose-300",
                                            base: "text-melrose-300 bg-transparent",
                                            label: "text-melrose-300",
                                            description: "text-melrose-300",
                                            helperWrapper: "text-melrose-300",
                                        }}
                                        autoComplete="email"
                                        id="email-address"
                                        labelPlacement="outside"
                                        name="email-address"
                                        placeholder="johndoe@email.com"
                                        startContent={<Icon className="text-white" icon="solar:letter-linear" />}
                                        type="email"
                                    />

                                    <div className="absolute right-[3%] top-[10%]">
                                        <button type="submit">
                                            <Icon className="text-white w-8 h-8" icon="material-symbols:arrow-circle-right-rounded" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        }
                        <div className="flex flex-wrap justify-center gap-1 pt-8">
                            {social && social.facebook &&
                                <a href={social.facebook} target="_blank" rel="noopener noreferrer">
                                    <Icon className="text-white hover:text-white w-auto h-8" icon="mingcute:facebook-fill" />
                                </a>
                            }
                            {social && social.instagram &&
                                <a href={social.instagram} target="_blank" rel="noopener noreferrer">
                                    <Icon className="text-white hover:text-white w-auto h-8" icon="qlementine-icons:instagram-fill-24" />
                                </a>
                            }
                            {social && social.snapchat &&
                                <a href={social.snapchat} target="_blank" rel="noopener noreferrer">
                                    <Icon className="text-white hover:text-white w-auto h-8" icon="fa-brands:snapchat" />
                                </a>
                            }
                            {social && social.twitter &&
                                <a href={social.twitter} target="_blank" rel="noopener noreferrer">
                                    <Icon className="text-white hover:text-white w-auto h-8" icon="line-md:twitter-x" />
                                </a>
                            }
                            {social && social.youtube &&
                                <a href={social.youtube} target="_blank" rel="noopener noreferrer">
                                    <Icon className="text-white hover:text-white w-auto h-8" icon="entypo-social:youtube-with-circle" />
                                </a>
                            }
                            {social && social.linkedin &&
                                <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
                                    <Icon className="text-white hover:text-white w-auto h-8" icon="entypo-social:linkedin-with-circle" />
                                </a>
                            }
                            {social && social.tiktok &&
                                <a href={social.tiktok} target="_blank" rel="noopener noreferrer">
                                    <Icon className="text-white hover:text-white w-auto h-8" icon="mage:tiktok-circle" />
                                </a>
                            }
                            {social && social.vimeo &&
                                <a href={social.vimeo} target="_blank" rel="noopener noreferrer">
                                    <Icon className="text-white hover:text-white w-auto h-8" icon="entypo-social:vimeo-with-circle" />
                                </a>
                            }
                        </div>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <ul className="hidden sm:block">
                                {menuItems.map((menuItem, index) => (
                                    <Link key={index} href={route(menuItem.link)} prefetch>
                                        <li className="text-white hover:text-melrose-300 font-bold">
                                            {isRTL ? menuItem.name?.ar :menuItem.name?.en}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                            <div className="mt-10 md:mt-0">
                                <ul>
                                    <Link href={route('privacy-policy')}>
                                        <li className="text-white hover:text-melrose-300 text-sm">{__('Privacy Policy')}</li>
                                    </Link>
                                    <Link href={route('terms-and-conditions')}>
                                        <li className="text-white hover:text-melrose-300 text-sm">{__('Terms and conditions')}</li>
                                    </Link>
                                    <Link href={route('cookie-policy')}>
                                        <li className="text-white hover:text-melrose-300 text-sm">{__('Cookie Policy')}</li>
                                    </Link>
                                </ul>
                            </div>
                        </div>


                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div className="mt-10 md:mt-0 text-sm text-white">
                                <div className="flex flex-row items-start gap-2">
                                    <Icon className="h-5 w-auto" icon="proicons:location" />
                                    <div dangerouslySetInnerHTML={{__html: isRTL ? info?.address?.ar : info?.address?.en}}  />
                                </div>
                                <div className="flex flex-row items-start gap-2">
                                    <Icon className="h-5 w-auto" icon="proicons:mail" />
                                    <a href={'mailto:'+info?.email}>{info?.email}</a><br/>
                                </div>
                                <div className="flex flex-row items-start gap-2">
                                    <Icon className="h-5 w-auto" icon="proicons:phone" />
                                    <a href={'tel:'+info?.phone}>{info?.phone}</a><br/>
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-between gap-2 pt-8">
                                <p className="text-small text-white"><span className="font-bold">BIND</span> {__('Communication For Marketing Solutions')} &copy; 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection;
