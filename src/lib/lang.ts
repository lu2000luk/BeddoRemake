import { persisted } from 'svelte-persisted-store'
import { get } from 'svelte/store'

export const lang = persisted('language', 'unset')

export const langs = [
    "en-US", "it-IT"
]

export const translations = {
    "en-US": {
        "title": "PESCE BEDDO",
        "title_website": "OFFICIAL WEBSITE",
        "title_welcome": "WELCOME TO THE",
    },
    "it-IT": {
        "title": "PESCE BEDDO",
        "title_website": "",
        "title_welcome": "Benvenuto nel sito ufficiale di",
    }
}

export default function translate(key: string) {
    if (langs.includes(get(lang))) {
        //@ts-ignore
        return translations[get(lang)][key]
    } else {
        //@ts-ignore
        return translations["en-US"][key]
    }
}