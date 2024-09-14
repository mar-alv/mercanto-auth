import { getCountries } from 'libphonenumber-js'

export const libPhoneNumber = {
	countriesCodes: getCountries(),
	countryPlaceholder(countryCode: string) {
		switch (countryCode) {
			case 'AD': // Andorra
				return '+376 123 456';
			case 'AE': // United Arab Emirates
				return '+971 50 123 4567';
			case 'AF': // Afghanistan
				return '+93 70 123 4567';
			case 'AG': // Antigua and Barbuda
				return '+1 268 123 4567';
			case 'AI': // Anguilla
				return '+1 264 123 4567';
			case 'AL': // Albania
				return '+355 67 123 4567';
			case 'AM': // Armenia
				return '+374 77 123 456';
			case 'AO': // Angola
				return '+244 923 123 456';
			case 'AR': // Argentina
				return '+54 9 11 1234 5678';
			case 'AS': // American Samoa
				return '+1 684 733 1234';
			case 'AT': // Austria
				return '+43 664 123 4567';
			case 'AU': // Australia
				return '+61 4 1234 5678';
			case 'AW': // Aruba
				return '+297 560 1234';
			case 'AX': // Åland Islands
				return '+358 18 12345';
			case 'AZ': // Azerbaijan
				return '+994 50 123 45 67';
			case 'BA': // Bosnia and Herzegovina
      	return '+387 61 123 456';
			case 'BB': // Barbados
				return '+1 246 250 1234';
			case 'BD': // Bangladesh
				return '+880 17 1234 5678';
			case 'BE': // Belgium
				return '+32 470 12 34 56';
			case 'BF': // Burkina Faso
				return '+226 70 12 34 56';
			case 'BG': // Bulgaria
				return '+359 87 123 4567';
			case 'BH': // Bahrain
				return '+973 3600 1234';
			case 'BI': // Burundi
				return '+257 79 123 456';
			case 'BJ': // Benin
				return '+229 90 12 34 56';
			case 'BL': // Saint Barthélemy
				return '+590 690 12 34 56';
			case 'BM': // Bermuda
				return '+1 441 370 1234';
			case 'BN': // Brunei Darussalam
				return '+673 712 3456';
			case 'BO': // Bolivia
				return '+591 7 123 4567';
			case 'BQ': // Bonaire, Sint Eustatius and Saba
				return '+599 781 2345';
			case 'BR': // Brazil
				return '+55 11 91234 5678';
			case 'BS': // Bahamas
				return '+1 242 359 1234';
			case 'BT': // Bhutan
				return '+975 17 123 456';
			case 'BW': // Botswana
				return '+267 71 123 456';
			case 'BY': // Belarus
				return '+375 29 123 45 67';
			case 'BZ': // Belize
				return '+501 610 1234';
			case 'CA': // Canada
				return '+1 416 123 4567';
			case 'CC': // Cocos (Keeling) Islands
				return '+61 4 1234 5678';
			case 'CD': // Democratic Republic of the Congo
				return '+243 99 123 4567';
			case 'CF': // Central African Republic
				return '+236 70 01 23 45';
			case 'CG': // Republic of the Congo
				return '+242 06 123 4567';
			case 'CH': // Switzerland
				return '+41 79 123 45 67';
			case 'CI': // Côte d'Ivoire
				return '+225 01 23 45 67';
			case 'CK': // Cook Islands
				return '+682 71 234';
			case 'CL': // Chile
				return '+56 9 6123 4567';
			case 'CM': // Cameroon
				return '+237 6 71 23 45 67';
			case 'CN': // People's Republic of China
				return '+86 131 2345 6789';
			case 'CO': // Colombia
				return '+57 300 123 4567';
			case 'CR': // Costa Rica
				return '+506 8312 3456';
			case 'CU': // Cuba
				return '+53 5 123 4567';
			case 'CV': // Cape Verde
				return '+238 991 12 34';
			case 'CW': // Curaçao
				return '+599 9 518 1234';
			case 'CX': // Christmas Island
				return '+61 4 1234 5678';
			case 'CY': // Cyprus
				return '+357 96 123456';
			case 'CZ': // Czech Republic
				return '+420 601 123 456';
			case 'DE': // Germany
				return '+49 151 12345678';
			case 'DJ': // Djibouti
				return '+253 77 123456';
			case 'DK': // Denmark
				return '+45 20 12 34 56';
			case 'DM': // Dominica
				return '+1 767 225 1234';
			case 'DO': // Dominican Republic
				return '+1 809 234 5678';
			case 'DZ': // Algeria
				return '+213 661 23 45 67';
			case 'EC': // Ecuador
				return '+593 99 123 4567';
			case 'EE': // Estonia
				return '+372 5123 456';
			case 'EG': // Egypt
				return '+20 100 123 4567';
			case 'EH': // Western Sahara
				return '+212 5288 12345';
			case 'ER': // Eritrea
				return '+291 7 123 456';
			case 'ES': // Spain
				return '+34 612 34 56 78';
			case 'ET': // Ethiopia
				return '+251 91 123 4567';
			case 'FI': // Finland
				return '+358 50 123 4567';
			case 'FJ': // Fiji
				return '+679 701 2345';
			case 'FK': // Falkland Islands (Malvinas)
				return '+500 12345';
			case 'FM': // Micronesia, Federated States of
				return '+691 350 1234';
			case 'FO': // Faroe Islands
				return '+298 211234';
			case 'FR': // France
				return '+33 6 12 34 56 78';
			case 'GA': // Gabon
				return '+241 06 03 12 34';
			case 'GB': // United Kingdom
				return '+44 7400 123456';
			case 'GD': // Grenada
				return '+1 473 403 1234';
			case 'GE': // Georgia
				return '+995 555 12 34 56';
			case 'GF': // French Guiana
				return '+594 694 20 12 34';
			case 'GG': // Guernsey
				return '+44 7781 123456';
			case 'GH': // Ghana
				return '+233 24 123 4567';
			case 'GI': // Gibraltar
				return '+350 5712 3456';
			case 'GL': // Greenland
				return '+299 22 12 34';
			case 'GM': // Republic of The Gambia
				return '+220 301 2345';
			case 'GN': // Guinea
				return '+224 601 12 34 56';
			case 'GP': // Guadeloupe
				return '+590 690 12 34 56';
			case 'GQ': // Equatorial Guinea
				return '+240 222 123 456';
			case 'GR': // Greece
				return '+30 691 234 5678';
			case 'GT': // Guatemala
				return '+502 5123 4567';
			case 'GU': // Guam
				return '+1 671 300 1234';
			case 'GW': // Guinea-Bissau
				return '+245 955 123 456';
			case 'GY': // Guyana
				return '+592 609 1234';
			case 'HK': // Hong Kong
				return '+852 5123 4567';
			case 'HN': // Honduras
				return '+504 9123 4567';
			case 'HR': // Croatia
				return '+385 91 123 4567';
			case 'HT': // Haiti
				return '+509 34 12 3456';
			case 'HU': // Hungary
				return '+36 30 123 4567';
			case 'ID': // Indonesia
				return '+62 812 3456 7890';
			case 'IE': // Ireland
				return '+353 85 123 4567';
			case 'IL': // Israel
				return '+972 50 123 4567';
			case 'IM': // Isle of Man
				return '+44 7924 123456';
			case 'IN': // India
				return '+91 91234 56789';
			case 'IO': // British Indian Ocean Territory
				return '+246 123 4567';
			case 'IQ': // Iraq
				return '+964 790 123 4567';
			case 'IR': // Islamic Republic of Iran
				return '+98 912 345 6789';
			case 'IS': // Iceland
				return '+354 611 1234';
			case 'IT': // Italy
				return '+39 312 345 6789';
			case 'JE': // Jersey
				return '+44 7700 123456';
			case 'JM': // Jamaica
				return '+1 876 210 1234';
			case 'JO': // Jordan
				return '+962 7 9012 3456';
			case 'JP': // Japan
				return '+81 90 1234 5678';
			case 'KE': // Kenya
				return '+254 712 345678';
			case 'KG': // Kyrgyzstan
				return '+996 700 123 456';
			case 'KH': // Cambodia
				return '+855 12 345 678';
			case 'KI': // Kiribati
				return '+686 720 1234';
			case 'KM': // Comoros
				return '+269 321 2345';
			case 'KN': // Saint Kitts and Nevis
				return '+1 869 765 1234';
			case 'KP': // North Korea
				return '+850 191 234 5678';
			case 'KR': // South Korea
				return '+82 10 1234 5678';
			case 'KW': // Kuwait
				return '+965 500 12345';
			case 'KY': // Cayman Islands
				return '+1 345 323 1234';
			case 'KZ': // Kazakhstan
				return '+7 701 123 4567';
			case 'LA': // Lao People's Democratic Republic
				return '+856 20 21 234 567';
			case 'LB': // Lebanon
				return '+961 3 123 456';
			case 'LC': // Saint Lucia
				return '+1 758 284 5678';
			case 'LI': // Liechtenstein
				return '+423 660 1234';
			case 'LK': // Sri Lanka
				return '+94 71 234 5678';
			case 'LR': // Liberia
				return '+231 77 123 4567';
			case 'LS': // Lesotho
				return '+266 5012 3456';
			case 'LT': // Lithuania
				return '+370 612 34567';
			case 'LU': // Luxembourg
				return '+352 621 123 456';
			case 'LV': // Latvia
				return '+371 21 234 567';
			case 'LY': // Libya
				return '+218 91 234 5678';
			case 'MA': // Morocco
				return '+212 612 345678';
			case 'MC': // Monaco
				return '+377 6 12 34 56 78';
			case 'MD': // Moldova, Republic of
				return '+373 621 12 345';
			case 'ME': // Montenegro
				return '+382 67 123 456';
			case 'MF': // Saint Martin (French part)
				return '+590 690 12 34 56';
			case 'MG': // Madagascar
				return '+261 32 12 345 67';
			case 'MH': // Marshall Islands
				return '+692 235 1234';
			case 'MK': // The Republic of North Macedonia
				return '+389 70 123 456';
			case 'ML': // Mali
				return '+223 65 01 23 45';
			case 'MM': // Myanmar
				return '+95 9 251 234 567';
			case 'MN': // Mongolia
				return '+976 8812 3456';
			case 'MO': // Macao
				return '+853 6612 3456';
			case 'MP': // Northern Mariana Islands
				return '+1 670 234 5678';
			case 'MQ': // Martinique
				return '+596 696 20 12 34';
			case 'MR': // Mauritania
				return '+222 22 12 34 56';
			case 'MS': // Montserrat
				return '+1 664 492 3456';
			case 'MT': // Malta
				return '+356 9991 2345';
			case 'MU': // Mauritius
				return '+230 5251 2345';
			case 'MV': // Maldives
				return '+960 771 2345';
			case 'MW': // Malawi
				return '+265 991 23 45 67';
			case 'MX': // Mexico
				return '+52 1 55 1234 5678';
			case 'MY': // Malaysia
				return '+60 12 345 6789';
			case 'MZ': // Mozambique
				return '+258 82 123 4567';
			case 'NA': // Namibia
				return '+264 81 123 4567';
			case 'NC': // New Caledonia
				return '+687 75 12 34';
			case 'NE': // Niger
				return '+227 93 12 34 56';
			case 'NF': // Norfolk Island
				return '+672 3 12 345';
			case 'NG': // Nigeria
				return '+234 802 123 4567';
			case 'NI': // Nicaragua
				return '+505 8123 4567';
			case 'NL': // Netherlands
				return '+31 6 12345678';
			case 'NO': // Norway
				return '+47 412 34 567';
			case 'NP': // Nepal
				return '+977 981 2345678';
			case 'NR': // Nauru
				return '+674 555 1234';
			case 'NU': // Niue
				return '+683 1234';
			case 'NZ': // New Zealand
				return '+64 21 123 4567';
			case 'OM': // Oman
				return '+968 91 234 567';
			case 'PA': // Panama
				return '+507 6001 2345';
			case 'PE': // Peru
				return '+51 912 345 678';
			case 'PF': // French Polynesia
				return '+689 87 12 34 56';
			case 'PG': // Papua New Guinea
				return '+675 7012 3456';
			case 'PH': // Philippines
				return '+63 912 345 6789';
			case 'PK': // Pakistan
				return '+92 301 2345678';
			case 'PL': // Poland
				return '+48 512 345 678';
			case 'PM': // Saint Pierre and Miquelon
				return '+508 55 12 34';
			case 'PR': // Puerto Rico
				return '+1 787 234 5678';
			case 'PS': // State of Palestine
				return '+970 59 912 3456';
			case 'PT': // Portugal
				return '+351 912 345 678';
			case 'PW': // Palau
				return '+680 778 1234';
			case 'PY': // Paraguay
				return '+595 971 123 456';
			case 'QA': // Qatar
				return '+974 3312 3456';
			case 'RE': // Reunion
				return '+262 692 12 34 56';
			case 'RO': // Romania
				return '+40 721 234 567';
			case 'RS': // Serbia
				return '+381 60 123 4567';
			case 'RU': // Russian Federation
				return '+7 912 345 6789';
			case 'RW': // Rwanda
				return '+250 78 123 4567';
			case 'SA': // Saudi Arabia
				return '+966 50 123 4567';
			case 'SB': // Solomon Islands
				return '+677 75 12345';
			case 'SC': // Seychelles
				return '+248 2 123 456';
			case 'SD': // Sudan
				return '+249 91 234 5678';
			case 'SE': // Sweden
				return '+46 70 123 4567';
			case 'SG': // Singapore
				return '+65 9123 4567';
			case 'SH': // Saint Helena
				return '+290 1234';
			case 'SI': // Slovenia
				return '+386 31 123 456';
			case 'SJ': // Svalbard and Jan Mayen
				return '+47 79 12 34 56';
			case 'SK': // Slovakia
				return '+421 912 345 678';
			case 'SL': // Sierra Leone
				return '+232 76 123 456';
			case 'SM': // San Marino
				return '+378 0549 123 456';
			case 'SN': // Senegal
				return '+221 77 123 4567';
			case 'SO': // Somalia
				return '+252 61 123 4567';
			case 'SR': // Suriname
				return '+597 876 5432';
			case 'SS': // South Sudan
				return '+211 912 345 678';
			case 'ST': // Sao Tome and Principe
				return '+239 222 1234';
			case 'SV': // El Salvador
				return '+503 7012 3456';
			case 'SX': // Sint Maarten (Dutch part)
				return '+1 721 523 4567';
			case 'SY': // Syrian Arab Republic
				return '+963 9 123 4567';
			case 'SZ': // Eswatini
				return '+268 76 123 456';
			case 'TA': // Tristan da Cunha
				return '+290 1234';
			case 'TC': // Turks and Caicos Islands
				return '+1 649 231 1234';
			case 'TD': // Chad
				return '+235 66 12 34 56';
			case 'TG': // Togo
				return '+228 90 12 34 56';
			case 'TH': // Thailand
				return '+66 81 234 5678';
			case 'TJ': // Tajikistan
				return '+992 91 123 4567';
			case 'TK': // Tokelau
				return '+690 1234';
			case 'TL': // Timor-Leste
				return '+670 772 1234';
			case 'TM': // Turkmenistan
				return '+993 62 123 456';
			case 'TN': // Tunisia
				return '+216 20 123 456';
			case 'TO': // Tonga
				return '+676 77 123';
			case 'TR': // Türkiye
				return '+90 532 123 4567';
			case 'TT': // Trinidad and Tobago
				return '+1 868 123 4567';
			case 'TV': // Tuvalu
				return '+688 1234';
			case 'TW': // Taiwan, Province of China
				return '+886 912 345 678';
			case 'TZ': // United Republic of Tanzania
				return '+255 655 123 456';
			case 'UA': // Ukraine
				return '+380 50 123 4567';
			case 'UG': // Uganda
				return '+256 70 123 4567';
			case 'US': // United States of America
				return '+1 202 555 0123';
			case 'UY': // Uruguay
				return '+598 91 234 567';
			case 'UZ': // Uzbekistan
				return '+998 90 123 4567';
			case 'VA': // Holy See (Vatican City State)
				return '+379 123 4567';
			case 'VC': // Saint Vincent and the Grenadines
				return '+1 784 456 7890';
			case 'VE': // Venezuela
				return '+58 412 345 6789';
			case 'VG': // Virgin Islands, British
				return '+1 284 494 1234';
			case 'VI': // Virgin Islands, U.S.
				return '+1 340 123 4567';
			case 'VN': // Vietnam
				return '+84 91 234 5678';
			case 'VU': // Vanuatu
				return '+678 1234';
			case 'WF': // Wallis and Futuna
				return '+681 76 12 34';
			case 'WS': // Samoa
				return '+685 75 123';
			case 'XK': // Kosovo
				return '+383 44 123 456';
			case 'YE': // Yemen
				return '+967 77 123 4567';
			case 'YT': // Mayotte
				return '+262 639 12 34 56';
			case 'ZA': // South Africa
				return '+27 82 123 4567';
			case 'ZM': // Zambia
				return '+260 97 123 4567';
			case 'ZW': // Zimbabwe
				return '+263 77 123 4567';
			default:
				return 'Invalid country code';
		}
	}
}
