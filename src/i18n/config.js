/* eslint-disable global-require */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
	fallbackLng: 'en',
	lng: 'en',
	resources: {
		en: {
			translations: require('./locales/en/translations.json'),
		},
		bn: {
			translations: require('./locales/bn/translations.json'),
		},
	},
	ns: ['translations'],
	defaultNS: ['translations'],
});

i18n.languages = ['en', 'bn'];

export default i18n;
