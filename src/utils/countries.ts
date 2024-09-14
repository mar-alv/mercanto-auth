import getUnicodeFlagIcon from 'country-flag-icons/unicode'

import { Country } from '@/interfaces/country'

import { i18nIsoCountries } from '@/lib/i18n-iso-countries'
import { libPhoneNumber } from '@/lib/lib-phone-number'

export const countriesUtils = {
	getCountries() {
		return libPhoneNumber.countriesCodes.map((countryCode: string) => {
			return {
				code: countryCode,
				name: i18nIsoCountries.getCountryName(countryCode),
				flag: getUnicodeFlagIcon(countryCode)
			} as Country
		})
		.filter(country => !!country.name)
	},
	getCountry(filter: string) {
		return this.getCountries().find(country => country.code === filter || country.name === filter)!
	},
	getDefaultCountry() {
		// TODO: Default value will be current location
		return this.getCountries().find(country => country.code === 'US')!
	}
}
