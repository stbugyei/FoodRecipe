
const CountryArray = () => {

    const countryList = [
        {
            "Code": "AD",
            "Name": "Andorra",
            "Demonym": "Andorran"
        },
        {
            "Code": "AE",
            "Name": "United Arab Emirates",
            "Demonym": "Emirian"
        },
        {
            "Code": "AF",
            "Name": "Afghanistan",
            "Demonym": "Afghani"
        },
        {
            "Code": "AG",
            "Name": "Antigua and Barbuda",
            "Demonym": "Antiguan"
        },
        {
            "Code": "AI",
            "Name": "Anguilla",
            "Demonym": "Anguillan"
        },
        {
            "Code": "AL",
            "Name": "Albania",
            "Demonym": "Albanian"
        },
        {
            "Code": "AM",
            "Name": "Armenia",
            "Demonym": "Armenian"
        },
        {
            "Code": "AO",
            "Name": "Angola",
            "Demonym": "Angolan"
        },
        {
            "Code": "AQ",
            "Name": "Antarctica",
            "Demonym": "Antarctic"
        },
        {
            "Code": "AR",
            "Name": "Argentina",
            "Demonym": "Argentine"
        },
        {
            "Code": "AS",
            "Name": "American Samoa",
            "Demonym": "Samoan"
        },
        {
            "Code": "AT",
            "Name": "Austria",
            "Demonym": "Austrian"
        },
        {
            "Code": "AU",
            "Name": "Australia",
            "Demonym": "Australian"
        },
        {
            "Code": "AW",
            "Name": "Aruba",
            "Demonym": "Arubian"
        },
        {
            "Code": "AX",
            "Name": "Åland Islands",
            "Demonym": "Ålandic"
        },
        {
            "Code": "AZ",
            "Name": "Azerbaijan",
            "Demonym": "Azerbaijani"
        },
        {
            "Code": "BA",
            "Name": "Bosnia and Herzegovina",
            "Demonym": "Bosnian"
        },
        {
            "Code": "BB",
            "Name": "Barbados",
            "Demonym": "Barbadian"
        },
        {
            "Code": "BD",
            "Name": "Bangladesh",
            "Demonym": "Bangladeshi"
        },
        {
            "Code": "BE",
            "Name": "Belgium",
            "Demonym": "Belgian"
        },
        {
            "Code": "BF",
            "Name": "Burkina Faso",
            "Demonym": "Burkinabe"
        },
        {
            "Code": "BG",
            "Name": "Bulgaria",
            "Demonym": "Bulgarian"
        },
        {
            "Code": "BH",
            "Name": "Bahrain",
            "Demonym": "Bahrainian"
        },
        {
            "Code": "BI",
            "Name": "Burundi",
            "Demonym": "Burundian"
        },
        {
            "Code": "BJ",
            "Name": "Benin",
            "Demonym": "Beninese"
        },
        {
            "Code": "BL",
            "Name": "Saint Barthélemy",
            "Demonym": "Barthélemois"
        },
        {
            "Code": "BM",
            "Name": "Bermuda",
            "Demonym": "Bermudan"
        },
        {
            "Code": "BN",
            "Name": "Brunei",
            "Demonym": "Bruneian"
        },
        {
            "Code": "BO",
            "Name": "Bolivia",
            "Demonym": "Bolivian"
        },
        {
            "Code": "BQ",
            "Name": "Caribbean Netherlands",
            "Demonym": ""
        },
        {
            "Code": "BR",
            "Name": "Brazil",
            "Demonym": "Brazilian"
        },
        {
            "Code": "BS",
            "Name": "Bahamas",
            "Demonym": "Bahameese"
        },
        {
            "Code": "BT",
            "Name": "Bhutan",
            "Demonym": "Bhutanese"
        },
        {
            "Code": "BV",
            "Name": "Bouvet Island",
            "Demonym": ""
        },
        {
            "Code": "BW",
            "Name": "Botswana",
            "Demonym": "Motswana"
        },
        {
            "Code": "BY",
            "Name": "Belarus",
            "Demonym": "Belarusian"
        },
        {
            "Code": "BZ",
            "Name": "Belize",
            "Demonym": "Belizean"
        },
        {
            "Code": "CA",
            "Name": "Canada",
            "Demonym": "Canadian"
        },
        {
            "Code": "CC",
            "Name": "Cocos (Keeling) Islands",
            "Demonym": "Cocossian"
        },
        {
            "Code": "CD",
            "Name": "Democratic Republic of the Congo",
            "Demonym": "Congolese"
        },
        {
            "Code": "CF",
            "Name": "Central African Republic",
            "Demonym": "Central African"
        },
        {
            "Code": "CG",
            "Name": "Congo (Republic of)",
            "Demonym": "Congolese"
        },
        {
            "Code": "CH",
            "Name": "Switzerland",
            "Demonym": "Swiss"
        },
        {
            "Code": "CI",
            "Name": "Côte d'Ivoire (Ivory Coast)",
            "Demonym": "Ivorian"
        },
        {
            "Code": "CK",
            "Name": "Cook Islands",
            "Demonym": "Cook Islander"
        },
        {
            "Code": "CL",
            "Name": "Chile",
            "Demonym": "Chilean"
        },
        {
            "Code": "CM",
            "Name": "Cameroon",
            "Demonym": "Cameroonian"
        },
        {
            "Code": "CN",
            "Name": "China",
            "Demonym": "Chinese"
        },
        {
            "Code": "CO",
            "Name": "Colombia",
            "Demonym": "Colombian"
        },
        {
            "Code": "CR",
            "Name": "Costa Rica",
            "Demonym": "Costa Rican"
        },
        {
            "Code": "CU",
            "Name": "Cuba",
            "Demonym": "Cuban"
        },
        {
            "Code": "CV",
            "Name": "Cape Verde",
            "Demonym": "Cape Verdean"
        },
        {
            "Code": "CW",
            "Name": "Curaçao",
            "Demonym": "Curaçaoan"
        },
        {
            "Code": "CX",
            "Name": "Christmas Island",
            "Demonym": "Christmas Islander"
        },
        {
            "Code": "CY",
            "Name": "Cyprus",
            "Demonym": "Cypriot"
        },
        {
            "Code": "CZ",
            "Name": "Czech Republic",
            "Demonym": "Czech"
        },
        {
            "Code": "DE",
            "Name": "Germany",
            "Demonym": "German"
        },
        {
            "Code": "DJ",
            "Name": "Djibouti",
            "Demonym": "Djiboutian"
        },
        {
            "Code": "DK",
            "Name": "Denmark",
            "Demonym": "Danish"
        },
        {
            "Code": "DM",
            "Name": "Dominica",
            "Demonym": "Dominican"
        },
        {
            "Code": "DO",
            "Name": "Dominican Republic",
            "Demonym": "Dominican"
        },
        {
            "Code": "DZ",
            "Name": "Algeria",
            "Demonym": "Algerian"
        },
        {
            "Code": "EC",
            "Name": "Ecuador",
            "Demonym": "Ecuadorean"
        },
        {
            "Code": "EE",
            "Name": "Estonia",
            "Demonym": "Estonian"
        },
        {
            "Code": "EG",
            "Name": "Egypt",
            "Demonym": "Egyptian"
        },
        {
            "Code": "EH",
            "Name": "Western Saharan",
            "Demonym": "Western Saharan"
        },
        {
            "Code": "ER",
            "Name": "Eritrea",
            "Demonym": "Eritrean"
        },
        {
            "Code": "ES",
            "Name": "Spain",
            "Demonym": "Spanish"
        },
        {
            "Code": "ET",
            "Name": "Ethiopia",
            "Demonym": "Ethiopian"
        },
        {
            "Code": "FI",
            "Name": "Finland",
            "Demonym": "Finnish"
        },
        {
            "Code": "FJ",
            "Name": "Fiji",
            "Demonym": "Fijian"
        },
        {
            "Code": "FK",
            "Name": "Falkland Islands",
            "Demonym": "Falkland Islander"
        },
        {
            "Code": "FM",
            "Name": "Micronesia",
            "Demonym": "Micronesian"
        },
        {
            "Code": "FO",
            "Name": "Faroe Islands",
            "Demonym": "Faroese"
        },
        {
            "Code": "FR",
            "Name": "France",
            "Demonym": "French"
        },
        {
            "Code": "GA",
            "Name": "Gabon",
            "Demonym": "Gabonese"
        },
        {
            "Code": "GB",
            "Name": "United Kingdom",
            "Demonym": "British"
        },
        {
            "Code": "GD",
            "Name": "Grenada",
            "Demonym": "Grenadian"
        },
        {
            "Code": "GE",
            "Name": "Georgia",
            "Demonym": "Georgian"
        },
        {
            "Code": "GF",
            "Name": "French Guiana",
            "Demonym": "French Guianese"
        },
        {
            "Code": "GG",
            "Name": "Guernsey",
            "Demonym": ""
        },
        {
            "Code": "GH",
            "Name": "Ghana",
            "Demonym": "Ghanaian"
        },
        {
            "Code": "GI",
            "Name": "Gibraltar",
            "Demonym": "Gibraltarian"
        },
        {
            "Code": "GL",
            "Name": "Greenland",
            "Demonym": "Greenlander"
        },
        {
            "Code": "GM",
            "Name": "Gambia",
            "Demonym": "Gambian"
        },
        {
            "Code": "GN",
            "Name": "Guinea",
            "Demonym": "Guinean"
        },
        {
            "Code": "GP",
            "Name": "Guadeloupe",
            "Demonym": "Guadeloupean"
        },
        {
            "Code": "GQ",
            "Name": "Equatorial Guinea",
            "Demonym": "Equatorial Guinean"
        },
        {
            "Code": "GR",
            "Name": "Greece",
            "Demonym": "Greek"
        },
        {
            "Code": "GS",
            "Name": "South Georgia and the South Sandwich Islands",
            "Demonym": ""
        },
        {
            "Code": "GT",
            "Name": "Guatemala",
            "Demonym": "Guatemalan"
        },
        {
            "Code": "GU",
            "Name": "Guam",
            "Demonym": "Guamanian"
        },
        {
            "Code": "GW",
            "Name": "Guinea-Bissau",
            "Demonym": "Guinean"
        },
        {
            "Code": "GY",
            "Name": "Guyana",
            "Demonym": "Guyanese"
        },
        {
            "Code": "HK",
            "Name": "Hong Kong",
            "Demonym": "Hong Konger"
        },
        {
            "Code": "HM",
            "Name": "Heard and McDonald Islands",
            "Demonym": ""
        },
        {
            "Code": "HN",
            "Name": "Honduras",
            "Demonym": "Honduran"
        },
        {
            "Code": "HR",
            "Name": "Croatia",
            "Demonym": "Croatian"
        },
        {
            "Code": "HT",
            "Name": "Haiti",
            "Demonym": "Haitian"
        },
        {
            "Code": "HU",
            "Name": "Hungary",
            "Demonym": "Hungarian"
        },
        {
            "Code": "ID",
            "Name": "Indonesia",
            "Demonym": "Indonesian"
        },
        {
            "Code": "IE",
            "Name": "Ireland",
            "Demonym": "Irish"
        },
        {
            "Code": "IL",
            "Name": "Israel",
            "Demonym": "Israeli"
        },
        {
            "Code": "IM",
            "Name": "Isle of Man",
            "Demonym": "Manx"
        },
        {
            "Code": "IN",
            "Name": "India",
            "Demonym": "Indian"
        },
        {
            "Code": "IO",
            "Name": "British Indian Ocean Territory",
            "Demonym": ""
        },
        {
            "Code": "IQ",
            "Name": "Iraq",
            "Demonym": "Iraqi"
        },
        {
            "Code": "IR",
            "Name": "Iran",
            "Demonym": "Iranian"
        },
        {
            "Code": "IS",
            "Name": "Iceland",
            "Demonym": "Icelander"
        },
        {
            "Code": "IT",
            "Name": "Italy",
            "Demonym": "Italian"
        },
        {
            "Code": "JE",
            "Name": "Jersey",
            "Demonym": ""
        },
        {
            "Code": "JM",
            "Name": "Jamaica",
            "Demonym": "Jamaican"
        },
        {
            "Code": "JO",
            "Name": "Jordan",
            "Demonym": "Jordanian"
        },
        {
            "Code": "JP",
            "Name": "Japan",
            "Demonym": "Japanese"
        },
        {
            "Code": "KE",
            "Name": "Kenya",
            "Demonym": "Kenyan"
        },
        {
            "Code": "KG",
            "Name": "Kyrgyzstan",
            "Demonym": "Kyrgyzstani"
        },
        {
            "Code": "KH",
            "Name": "Cambodia",
            "Demonym": "Cambodian"
        },
        {
            "Code": "KI",
            "Name": "Kiribati",
            "Demonym": "I-Kiribati"
        },
        {
            "Code": "KM",
            "Name": "Comoros",
            "Demonym": "Comoran"
        },
        {
            "Code": "KN",
            "Name": "Saint Kitts and Nevis",
            "Demonym": "Kittian"
        },
        {
            "Code": "KP",
            "Name": "North Korea",
            "Demonym": "North Korean"
        },
        {
            "Code": "KR",
            "Name": "South Korea",
            "Demonym": "South Korean"
        },
        {
            "Code": "KW",
            "Name": "Kuwait",
            "Demonym": "Kuwaiti"
        },
        {
            "Code": "KY",
            "Name": "Cayman Islands",
            "Demonym": "Caymanian"
        },
        {
            "Code": "KZ",
            "Name": "Kazakhstan",
            "Demonym": "Kazakhstani"
        },
        {
            "Code": "LA",
            "Name": "Laos",
            "Demonym": "Laotian"
        },
        {
            "Code": "LB",
            "Name": "Lebanon",
            "Demonym": "Lebanese"
        },
        {
            "Code": "LC",
            "Name": "Saint Lucia",
            "Demonym": "Saint Lucian"
        },
        {
            "Code": "LI",
            "Name": "Liechtenstein",
            "Demonym": "Liechtensteiner"
        },
        {
            "Code": "LK",
            "Name": "Sri Lanka",
            "Demonym": "Sri Lankan"
        },
        {
            "Code": "LR",
            "Name": "Liberia",
            "Demonym": "Liberian"
        },
        {
            "Code": "LS",
            "Name": "Lesotho",
            "Demonym": "Mosotho"
        },
        {
            "Code": "LT",
            "Name": "Lithuania",
            "Demonym": "Lithunian"
        },
        {
            "Code": "LU",
            "Name": "Luxembourg",
            "Demonym": "Luxembourger"
        },
        {
            "Code": "LV",
            "Name": "Latvia",
            "Demonym": "Latvian"
        },
        {
            "Code": "LY",
            "Name": "Libya",
            "Demonym": "Libyan"
        },
        {
            "Code": "MA",
            "Name": "Morocco",
            "Demonym": "Moroccan"
        },
        {
            "Code": "MC",
            "Name": "Monaco",
            "Demonym": "Monacan"
        },
        {
            "Code": "MD",
            "Name": "Moldova",
            "Demonym": "Moldovan"
        },
        {
            "Code": "ME",
            "Name": "Montenegro",
            "Demonym": "Montenegrin"
        },
        {
            "Code": "MF",
            "Name": "Saint Martin (France)",
            "Demonym": ""
        },
        {
            "Code": "MG",
            "Name": "Madagascar",
            "Demonym": "Malagasy"
        },
        {
            "Code": "MH",
            "Name": "Marshall Islands",
            "Demonym": "Marshallese"
        },
        {
            "Code": "MK",
            "Name": "Macedonia",
            "Demonym": "Macedonian"
        },
        {
            "Code": "ML",
            "Name": "Mali",
            "Demonym": "Malian"
        },
        {
            "Code": "MM",
            "Name": "Burma (Republic of the Union of Myanmar)",
            "Demonym": "Myanmarese"
        },
        {
            "Code": "MN",
            "Name": "Mongolia",
            "Demonym": "Mongolian"
        },
        {
            "Code": "MO",
            "Name": "Macau",
            "Demonym": "Macanese"
        },
        {
            "Code": "MP",
            "Name": "Northern Mariana Islands",
            "Demonym": "Northern Mariana Islander"
        },
        {
            "Code": "MQ",
            "Name": "Martinique",
            "Demonym": "Martinican"
        },
        {
            "Code": "MR",
            "Name": "Mauritania",
            "Demonym": "Mauritanian"
        },
        {
            "Code": "MS",
            "Name": "Montserrat",
            "Demonym": "Montserratian"
        },
        {
            "Code": "MT",
            "Name": "Malta",
            "Demonym": "Maltese"
        },
        {
            "Code": "MU",
            "Name": "Mauritius",
            "Demonym": "Mauritian"
        },
        {
            "Code": "MV",
            "Name": "Maldives",
            "Demonym": "Maldivan"
        },
        {
            "Code": "MW",
            "Name": "Malawi",
            "Demonym": "Malawian"
        },
        {
            "Code": "MX",
            "Name": "Mexico",
            "Demonym": "Mexican"
        },
        {
            "Code": "MY",
            "Name": "Malaysia",
            "Demonym": "Malaysian"
        },
        {
            "Code": "MZ",
            "Name": "Mozambique",
            "Demonym": "Mozambican"
        },
        {
            "Code": "NA",
            "Name": "Namibia",
            "Demonym": "Namibian"
        },
        {
            "Code": "NC",
            "Name": "New Caledonia",
            "Demonym": "New Caledonian"
        },
        {
            "Code": "NE",
            "Name": "Niger",
            "Demonym": "Nigerien"
        },
        {
            "Code": "NF",
            "Name": "Norfolk Island",
            "Demonym": "Norfolk Islander"
        },
        {
            "Code": "NG",
            "Name": "Nigeria",
            "Demonym": "Nigerian"
        },
        {
            "Code": "NI",
            "Name": "Nicaragua",
            "Demonym": "Nicaraguan"
        },
        {
            "Code": "NL",
            "Name": "Netherlands",
            "Demonym": "Dutch"
        },
        {
            "Code": "NO",
            "Name": "Norway",
            "Demonym": "Norwegian"
        },
        {
            "Code": "NP",
            "Name": "Nepal",
            "Demonym": "Nepalese"
        },
        {
            "Code": "NR",
            "Name": "Nauru",
            "Demonym": "Nauruan"
        },
        {
            "Code": "NU",
            "Name": "Niue",
            "Demonym": "Niuean"
        },
        {
            "Code": "NZ",
            "Name": "New Zealand",
            "Demonym": "New Zealander"
        },
        {
            "Code": "OM",
            "Name": "Oman",
            "Demonym": "Omani"
        },
        {
            "Code": "PA",
            "Name": "Panama",
            "Demonym": "Panamanian"
        },
        {
            "Code": "PE",
            "Name": "Peru",
            "Demonym": "Peruvian"
        },
        {
            "Code": "PF",
            "Name": "French Polynesia",
            "Demonym": "French Polynesian"
        },
        {
            "Code": "PG",
            "Name": "Papua New Guinea",
            "Demonym": "Papua New Guinean"
        },
        {
            "Code": "PH",
            "Name": "Philippines",
            "Demonym": "Filipino"
        },
        {
            "Code": "PK",
            "Name": "Pakistan",
            "Demonym": "Pakistani"
        },
        {
            "Code": "PL",
            "Name": "Poland",
            "Demonym": "Polish"
        },
        {
            "Code": "PM",
            "Name": "St. Pierre and Miquelon",
            "Demonym": "Saint-Pierrais"
        },
        {
            "Code": "PN",
            "Name": "Pitcairn",
            "Demonym": "Pitcairn Islander"
        },
        {
            "Code": "PR",
            "Name": "Puerto Rico",
            "Demonym": "Puerto Rican"
        },
        {
            "Code": "PS",
            "Name": "Palestine",
            "Demonym": "Palestinian"
        },
        {
            "Code": "PT",
            "Name": "Portugal",
            "Demonym": "Portuguese"
        },
        {
            "Code": "PW",
            "Name": "Palau",
            "Demonym": "Palauan"
        },
        {
            "Code": "PY",
            "Name": "Paraguay",
            "Demonym": "Paraguayan"
        },
        {
            "Code": "QA",
            "Name": "Qatar",
            "Demonym": "Qatari"
        },
        {
            "Code": "RE",
            "Name": "Réunion",
            "Demonym": ""
        },
        {
            "Code": "RO",
            "Name": "Romania",
            "Demonym": "Romanian"
        },
        {
            "Code": "RS",
            "Name": "Serbia",
            "Demonym": "Serbian"
        },
        {
            "Code": "RU",
            "Name": "Russian Federation",
            "Demonym": "Russian"
        },
        {
            "Code": "RW",
            "Name": "Rwanda",
            "Demonym": "Rwandan"
        },
        {
            "Code": "SA",
            "Name": "Saudi Arabia",
            "Demonym": "Saudi Arabian"
        },
        {
            "Code": "SB",
            "Name": "Solomon Islands",
            "Demonym": "Solomon Islander"
        },
        {
            "Code": "SC",
            "Name": "Seychelles",
            "Demonym": "Seychellois"
        },
        {
            "Code": "SD",
            "Name": "Sudan",
            "Demonym": "Sudanese"
        },
        {
            "Code": "SE",
            "Name": "Sweden",
            "Demonym": "Swedish"
        },
        {
            "Code": "SG",
            "Name": "Singapore",
            "Demonym": "Singaporean"
        },
        {
            "Code": "SH",
            "Name": "Saint Helena",
            "Demonym": "Saint Helenian"
        },
        {
            "Code": "SI",
            "Name": "Slovenia",
            "Demonym": "Slovenian"
        },
        {
            "Code": "SJ",
            "Name": "Svalbard and Jan Mayen Islands",
            "Demonym": ""
        },
        {
            "Code": "SK",
            "Name": "Slovakia",
            "Demonym": "Slovakian"
        },
        {
            "Code": "SL",
            "Name": "Sierra Leone",
            "Demonym": "Sierra Leonean"
        },
        {
            "Code": "SM",
            "Name": "San Marino",
            "Demonym": "Sanmarinese"
        },
        {
            "Code": "SN",
            "Name": "Senegal",
            "Demonym": "Senegalese"
        },
        {
            "Code": "SO",
            "Name": "Somalia",
            "Demonym": "Somali"
        },
        {
            "Code": "SR",
            "Name": "Suriname",
            "Demonym": "Surinamer"
        },
        {
            "Code": "SS",
            "Name": "South Sudan",
            "Demonym": "Sudanese"
        },
        {
            "Code": "ST",
            "Name": "São Tome and Príncipe",
            "Demonym": "São Tomean"
        },
        {
            "Code": "SV",
            "Name": "El Salvador",
            "Demonym": "Salvadorean"
        },
        {
            "Code": "SX",
            "Name": "Saint Martin (Netherlands)",
            "Demonym": ""
        },
        {
            "Code": "SY",
            "Name": "Syria",
            "Demonym": "Syrian"
        },
        {
            "Code": "SZ",
            "Name": "Swaziland",
            "Demonym": "Swazi"
        },
        {
            "Code": "TC",
            "Name": "Turks and Caicos Islands",
            "Demonym": "Turks and Caicos Islander"
        },
        {
            "Code": "TD",
            "Name": "Chad",
            "Demonym": "Chadian"
        },
        {
            "Code": "TF",
            "Name": "French Southern Territories",
            "Demonym": ""
        },
        {
            "Code": "TG",
            "Name": "Togo",
            "Demonym": "Togolese"
        },
        {
            "Code": "TH",
            "Name": "Thailand",
            "Demonym": "Thai"
        },
        {
            "Code": "TJ",
            "Name": "Tajikistan",
            "Demonym": "Tajikistani"
        },
        {
            "Code": "TK",
            "Name": "Tokelau",
            "Demonym": "Tokelauan"
        },
        {
            "Code": "TL",
            "Name": "Timor-Leste",
            "Demonym": "Timorese"
        },
        {
            "Code": "TM",
            "Name": "Turkmenistan",
            "Demonym": "Turkmen"
        },
        {
            "Code": "TN",
            "Name": "Tunisia",
            "Demonym": "Tunisian"
        },
        {
            "Code": "TO",
            "Name": "Tonga",
            "Demonym": "Tongan"
        },
        {
            "Code": "TR",
            "Name": "Turkey",
            "Demonym": "Turkish"
        },
        {
            "Code": "TT",
            "Name": "Trinidad and Tobago",
            "Demonym": "Trinidadian"
        },
        {
            "Code": "TV",
            "Name": "Tuvalu",
            "Demonym": "Tuvaluan"
        },
        {
            "Code": "TW",
            "Name": "Taiwan",
            "Demonym": "Taiwanese"
        },
        {
            "Code": "TZ",
            "Name": "Tanzania",
            "Demonym": "Tanzanian"
        },
        {
            "Code": "UA",
            "Name": "Ukraine",
            "Demonym": "Ukrainian"
        },
        {
            "Code": "UG",
            "Name": "Uganda",
            "Demonym": "Ugandan"
        },
        {
            "Code": "UM",
            "Name": "United States Minor Outlying Islands",
            "Demonym": ""
        },
        {
            "Code": "US",
            "Name": "United States of America",
            "Demonym": "American"
        },
        {
            "Code": "UY",
            "Name": "Uruguay",
            "Demonym": "Uruguayan"
        },
        {
            "Code": "UZ",
            "Name": "Uzbekistan",
            "Demonym": "Uzbekistani"
        },
        {
            "Code": "VA",
            "Name": "Vatican",
            "Demonym": ""
        },
        {
            "Code": "VC",
            "Name": "Saint Vincent and Grenadines",
            "Demonym": "Saint Vincentian"
        },
        {
            "Code": "VE",
            "Name": "Venezuela",
            "Demonym": "Venezuelan"
        },
        {
            "Code": "VG",
            "Name": "British Virgin Islands",
            "Demonym": "Virgin Islander"
        },
        {
            "Code": "VI",
            "Name": "United States Virgin Islands",
            "Demonym": "Virgin Islander"
        },
        {
            "Code": "VN",
            "Name": "Vietnam",
            "Demonym": "Vietnamese"
        },
        {
            "Code": "VU",
            "Name": "Vanuatu",
            "Demonym": "Ni-Vanuatu"
        },
        {
            "Code": "WF",
            "Name": "Wallis and Futuna Islands",
            "Demonym": "Wallisian"
        },
        {
            "Code": "WS",
            "Name": "Samoa",
            "Demonym": "Samoan"
        },
        {
            "Code": "YE",
            "Name": "Yemen",
            "Demonym": "Yemeni"
        },
        {
            "Code": "YT",
            "Name": "Mayotte",
            "Demonym": "Mahoran"
        },
        {
            "Code": "ZA",
            "Name": "South Africa",
            "Demonym": "South African"
        },
        {
            "Code": "ZM",
            "Name": "Zambia",
            "Demonym": "Zambian"
        },
        {
            "Code": "ZW",
            "Name": "Zimbabwe",
            "Demonym": "Zimbabwean"
        }
    ]


    return {
        countryList
    }
}

export default CountryArray
