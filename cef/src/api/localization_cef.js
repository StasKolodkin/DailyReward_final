import { writable, derived } from 'svelte/store'
import RU from '../json/localization/RU';
import EN from '../json/localization/EN';

const translations = [
    RU,
    EN
];

export const localizationSelected = writable(0);

// @ts-ignore
window.localzation = {
    set localizationSelected(value) {
        localizationSelected.set(value);
    },
    get localizationSelected() {
        return localizationSelected;
    }
};

export const Loc = derived(localizationSelected, ($localizationSelected) => {
    return (key) => {
        if (translations[$localizationSelected]?.[key]) {
            return translations[$localizationSelected][key];
        } else {
            return key;
        }
    };
});