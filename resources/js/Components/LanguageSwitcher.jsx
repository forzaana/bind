import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/react';
import { router, usePage } from '@inertiajs/react';
import { CheckIcon } from 'lucide-react';

const languages = [
    {
        code: 'en',
        name: 'English',
        flag: '🇺🇸',
    },
    {
        code: 'ar',
        name: 'العربية',
        flag: '🇸🇦',
    },
];
export function LanguageSwitcher() {
    const props = usePage().props;
    const currentLang = props.locale;
    const switchLanguage = (langCode) => {
        router.post(
            route('locale.change'),
            {
                locale: langCode,
            },
            {
                preserveState: true,
                preserveScroll: true,
                only: ['locale', 'translations'],
            },
        );
    };
    return (
        <Dropdown>
            <DropdownTrigger asChild>
                <Button variant="ghost" size="md" className="border-1">
                    <span>{languages.find((lang) => lang.code === currentLang)?.flag}</span>
                </Button>
            </DropdownTrigger>
            <DropdownMenu align="end">
                {languages.map((language) => (
                    <DropdownItem
                        key={language.code}
                        onPress={() => switchLanguage(language.code)}
                        className="flex flex-row cursor-pointer items-center gap-2"
                    >
                        <div className="flex flex-row justify-between gap-2">
                            <div className="flex flex-row gap-1">
                                <span>{language.flag}</span>
                                <span>{language.name}</span>
                            </div>
                            {currentLang === language.code && <CheckIcon className="ms-2 h-4 w-4" />}
                        </div>
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
}
