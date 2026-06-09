import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from '@heroui/react';
import ApplicationLogo from '@/Components/ApplicationLogo.jsx';
import { useState, forwardRef, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import {LanguageSwitcher} from "@/Components/LanguageSwitcher.jsx";

const BasicNavbar = forwardRef(({ classNames = {}, ...props }, ref) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { settings, navbar: menuItems, locale } = usePage().props;
    const isRTL = locale === 'ar';

    // check if settings.stickyMenu
    const transparentMenu = settings.enable_transparent_navbar;


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (route().current('home')) {
            const timer = setTimeout(() => {
                setVisible(true);
            }, 3000); // Hide after 3 seconds

            return () => clearTimeout(timer); // Cleanup on unmounting
        } else {
            setVisible(true);
        }
    }, []);


    if (!visible) {
        return null;
    }

    return (
        <Navbar
            ref={ref}
            {...props}
            classNames={{
                base: 'absolute',
                wrapper: "mx-auto max-w-7xl z-50",
                item: "hidden md:flex",
                ...classNames,
            }}
            height="60px"
            isMenuOpen={isMenuOpen}
            className={isScrolled ? "fixed bg-[#1e1c26] transition duration-500 ease-in-out" : isMenuOpen ? "bg-[#1e1c26]" : transparentMenu ? "bg-transparent transition duration-500 ease-in-out" : "bg-[#1e1c26] transition duration-500 ease-in-out"}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarBrand>
                <Link href={route('home')} prefetch>
                    <ApplicationLogo className="h-5 fill-white" />
                </Link>
            </NavbarBrand>

            <NavbarContent justify="center">
                {menuItems.map((item, index) => (
                    <NavbarItem key={index} isActive={item.active} className={item.active ? 'font-medium': 'font-normal'}>
                        {item.display === 'link'
                            ?
                            <Link href={route(item.link)} aria-current="page" className="text-white hover:text-bind-500 transition duration-500 ease-in-out" size="sm" prefetch>
                                {isRTL ? item.name?.ar :item.name?.en}
                            </Link>
                            :
                            <div className="group hover:bg-bind-50 border border-bind-50 rounded-xl pt-1 pb-2 px-4 transition duration-500 ease-in-out">
                                <Link href={route(item.link)} aria-current="page"
                                      className="relative flex flex-col font-semibold text-white group-hover:text-bind-500 transition duration-500 ease-in-out"
                                      size="sm" prefetch>
                                    {isRTL ? item.name?.ar :item.name?.en}
                                </Link>
                            </div>
                        }
                    </NavbarItem>
                ))}
                <LanguageSwitcher />
            </NavbarContent>

            <NavbarMenuToggle className="text-white md:hidden hover:text-bind-500 transition duration-500 ease-in-out" />

            <NavbarMenu
                className="top-[calc(var(--navbar-height)_-_1px)] max-h-fit bg-[#1e1c26] pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150"
                motionProps={{
                    initial: { opacity: 0, y: -20 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -20 },
                    transition: {
                        ease: "easeInOut",
                        duration: 0.2,
                    },
                }}
            >
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={index}>
                        {item.display === 'link'
                            ?
                            <Link className="mb-2 w-full text-white" href={route(item.link)} size="md" prefetch>
                                {isRTL ? item.name?.ar :item.name?.en}
                            </Link>
                            :
                            <div className="inline-block mt-5 group hover:bg-bind-50 border border-bind-50 rounded-xl pt-1 pb-2 px-2 transition duration-500 ease-in-out">
                                <Link href={route(item.link)} aria-current="page"
                                      className="relative flex flex-col font-bold text-white group-hover:text-bind-500 transition duration-500 ease-in-out"
                                      size="sm" prefetch>
                                    {isRTL ? item.name?.ar :item.name?.en}
                                </Link>
                            </div>
                        }
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
});
export default BasicNavbar;
