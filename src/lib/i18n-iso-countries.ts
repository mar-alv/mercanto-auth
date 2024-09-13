import countries from 'i18n-iso-countries'
import enLocale from 'i18n-iso-countries/langs/en.json'

// TODO: register based on current country
countries.registerLocale(enLocale)

export const i18nIsoCountries = {
	getCountryName(countryCode: string) {
		// TODO: pass idiom based on current country
		return countries.getName(countryCode, 'en')
	}
}
