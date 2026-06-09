import { usePage } from '@inertiajs/react';

export function useTranslations() {
    const { translations, locale } = usePage().props;
    const __ = (key, replacements = {}) => {
        let translation = translations[key] || key;
        Object.keys(replacements).forEach((r) => {
            translation = translation.replace(`:${r}`, replacements[r]);
        });
        return translation;
    };
    return {
        __,
        trans: __,
        locale,
    };
}
