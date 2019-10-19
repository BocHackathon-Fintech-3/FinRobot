'use strict';
const uuid = require('uuid');

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Countries', [
        {
            id: uuid.v1(),  
            name: 'Afghanistan',
            code: 'AF',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Albania',
            code: 'AL',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Algeria',
            code: 'DZ',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'American Samoa',
            code: 'DS',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Andorra',
            code: 'AD',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Angola',
            code: 'AO',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Anguilla',
            code: 'AI',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Antarctica',
            code: 'AQ',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Antigua and Barbuda',
            code: 'AG',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Argentina',
            code: 'AR',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Aruba',
            code: 'AW',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Australia',
            code: 'AU',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Austria',
            code: 'AT',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Azerbaijan',
            code: 'AZ',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Bahamas',
            code: 'BS',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Bahrain',
            code: 'BH',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Bangladesh',
            code: 'BD',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Barbados',
            code: 'BB',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Belarus',
            code: 'BY',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Belgium',
            code: 'BE',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Belize',
            code: 'BZ',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Benin',
            code: 'BJ',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Bermuda',
            code: 'BM',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Bhutan',
            code: 'BT',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Bolivia',
            code: 'BO',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Bosnia and Herzegovina',
            code: 'BA',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Botswana',
            code: 'BW',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Bouvet Island',
            code: 'BV',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Brazil',
            code: 'BR',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'British Indian Ocean Territory',
            code: 'IO',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Brunei Darussalam',
            code: 'BN',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Bulgaria',
            code: 'BG',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Burkina Faso',
            code: 'BF',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Burundi',
            code: 'BI',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Cambodia',
            code: 'KH',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Cameroon',
            code: 'CM',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Canada',
            code: 'CA',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Cape Verde',
            code: 'CV',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Cayman Islands',
            code: 'KY',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Central African Republic',
            code: 'CF',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Chad',
            code: 'TD',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Chile',
            code: 'CL',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'China',
            code: 'CN',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Christmas Island',
            code: 'CX',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Cocos (Keeling) Islands',
            code: 'CC',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Colombia',
            code: 'CO',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Comoros',
            code: 'KM',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Congo',
            code: 'CG',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Cook Islands',
            code: 'CK',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Costa Rica',
            code: 'CR',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Croatia (Hrvatska)',
            code: 'HR',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Cuba',
            code: 'CU',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: 1,  
            name: 'Cyprus',
            code: 'CY',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Czech Republic',
            code: 'CZ',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Denmark',
            code: 'DK',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Djibouti',
            code: 'DJ',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Dominica',
            code: 'DM',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Dominican Republic',
            code: 'DO',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'East Timor',
            code: 'TP',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Ecuador',
            code: 'EC',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Egypt',
            code: 'EG',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'El Salvador',
            code: 'SV',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Equatorial Guinea',
            code: 'GQ',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Eritrea',
            code: 'ER',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Estonia',
            code: 'EE',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Ethiopia',
            code: 'ET',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Falkland Islands (Malvinas)',
            code: 'FK',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Faroe Islands',
            code: 'FO',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Fiji',
            code: 'FJ',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Finland',
            code: 'FI',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'France',
            code: 'FR',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'France, Metropolitan',
            code: 'FX',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'French Guiana',
            code: 'GF',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'French Polynesia',
            code: 'PF',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'French Southern Territories',
            code: 'TF',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Gabon',
            code: 'GA',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Gambia',
            code: 'GM',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Georgia',
            code: 'GE',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Germany',
            code: 'DE',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Ghana',
            code: 'GH',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Gibraltar',
            code: 'GI',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Guernsey',
            code: 'GK',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Greece',
            code: 'GR',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Greenland',
            code: 'GL',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Grenada',
            code: 'GD',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Guadeloupe',
            code: 'GP',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Guam',
            code: 'GU',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Guatemala',
            code: 'GT',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Guinea',
            code: 'GN',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Guinea-Bissau',
            code: 'GW',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Guyana',
            code: 'GY',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Haiti',
            code: 'HT',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Heard and Mc Donald Islands',
            code: 'HM',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Honduras',
            code: 'HN',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Hong Kong',
            code: 'HK',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Hungary',
            code: 'HU',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Iceland',
            code: 'IS',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'India',
            code: 'IN',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Isle of Man',
            code: 'IM',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Indonesia',
            code: 'ID',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Iran (Islamic Republic of)',
            code: 'IR',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Iraq',
            code: 'IQ',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Ireland',
            code: 'IE',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Israel',
            code: 'IL',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Italy',
            code: 'IT',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Ivory Coast',
            code: 'CI',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Jersey',
            code: 'JE',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Jamaica',
            code: 'JM',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Japan',
            code: 'JP',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Jordan',
            code: 'JO',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Kazakhstan',
            code: 'KZ',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Kenya',
            code: 'KE',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Kiribati',
            code: 'KI',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: "Korea, Democratic People''s Republic of",
            code: 'KP',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Korea, Republic of',
            code: 'KR',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Kosovo',
            code: 'XK',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Kuwait',
            code: 'KW',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Kyrgyzstan',
            code: 'KG',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: "Lao People''s Democratic Republic",
            code: 'LA',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Latvia',
            code: 'LV',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Lebanon',
            code: 'LB',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Lesotho',
            code: 'LS',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Liberia',
            code: 'LR',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Libyan Arab Jamahiriya',
            code: 'LY',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Liechtenstein',
            code: 'LI',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Lithuania',
            code: 'LT',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Luxembourg',
            code: 'LU',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Macau',
            code: 'MO',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Macedonia',
            code: 'MK',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Madagascar',
            code: 'MG',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Malawi',
            code: 'MW',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Malaysia',
            code: 'MY',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Maldives',
            code: 'MV',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Mali',
            code: 'ML',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Malta',
            code: 'MT',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Marshall Islands',
            code: 'MH',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Martinique',
            code: 'MQ',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Mauritania',
            code: 'MR',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Mauritius',
            code: 'MU',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Mayotte',
            code: 'TY',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Mexico',
            code: 'MX',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Micronesia, Federated States of',
            code: 'FM',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Moldova, Republic of',
            code: 'MD',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Monaco',
            code: 'MC',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Mongolia',
            code: 'MN',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Montenegro',
            code: 'ME',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Montserrat',
            code: 'MS',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Morocco',
            code: 'MA',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Mozambique',
            code: 'MZ',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Myanmar',
            code: 'MM',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Namibia',
            code: 'NA',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Nauru',
            code: 'NR',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Nepal',
            code: 'NP',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Netherlands',
            code: 'NL',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Netherlands Antilles',
            code: 'AN',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'New Caledonia',
            code: 'NC',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'New Zealand',
            code: 'NZ',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Nicaragua',
            code: 'NI',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Niger',
            code: 'NE',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Nigeria',
            code: 'NG',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Niue',
            code: 'NU',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Norfolk Island',
            code: 'NF',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Northern Mariana Islands',
            code: 'MP',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Norway',
            code: 'NO',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Oman',
            code: 'OM',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Pakistan',
            code: 'PK',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Palau',
            code: 'PW',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Palestine',
            code: 'PS',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Panama',
            code: 'PA',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
                {
            id: uuid.v1(),  
            name: 'Papua New Guinea',
            code: 'PG',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Paraguay',
            code: 'PY',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Peru',
            code: 'PE',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
                {
            id: uuid.v1(),  
            name: 'Philippines',
            code: 'PH',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Pitcairn',
            code: 'PN',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Poland',
            code: 'PL',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Portugal',
            code: 'PT',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Puerto Rico',
            code: 'PR',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Qatar',
            code: 'QA',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Reunion',
            code: 'RE',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Romania',
            code: 'RO',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Russian Federation',
            code: 'RU',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Rwanda',
            code: 'RW',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Saint Kitts and Nevis',
            code: 'KN',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Saint Lucia',
            code: 'LC',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Saint Vincent and the Grenadines',
            code: 'VC',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Samoa',
            code: 'WS',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'San Marino',
            code: 'SM',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Sao Tome and Principe',
            code: 'ST',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Saudi Arabia',
            code: 'SA',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Senegal',
            code: 'SN',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Serbia',
            code: 'RS',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Seychelles',
            code: 'SC',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Sierra Leone',
            code: 'SL',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Singapore',
            code: 'SG',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Slovakia',
            code: 'SK',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Slovenia',
            code: 'SI',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Solomon Islands',
            code: 'SB',
            createdAt: new Date(),
            updatedAt: new Date()  
        },  
        {
            id: uuid.v1(),  
            name: 'Somalia',
            code: 'SO',
            createdAt: new Date(),
            updatedAt: new Date()  
        },  
        {
            id: uuid.v1(),  
            name: 'South Africa',
            code: 'ZA',
            createdAt: new Date(),
            updatedAt: new Date()  
        },  
        {
            id: uuid.v1(),  
            name: 'South Georgia South Sandwich Islands',
            code: 'GS',
            createdAt: new Date(),
            updatedAt: new Date()  
        },  
        {
            id: uuid.v1(),  
            name: 'South Sudan',
            code: 'SS',
            createdAt: new Date(),
            updatedAt: new Date()  
        },  
        {
            id: uuid.v1(),  
            name: 'Spain',
            code: 'ES',
            createdAt: new Date(),
            updatedAt: new Date()  
        },  
        {
            id: uuid.v1(),  
            name: 'Sri Lanka',
            code: 'LK',
            createdAt: new Date(),
            updatedAt: new Date()  
        },  
        {
            id: uuid.v1(),  
            name: 'St. Helena',
            code: 'SH',
            createdAt: new Date(),
            updatedAt: new Date()  
        },  
        {
            id: uuid.v1(),  
            name: 'St. Pierre and Miquelon',
            code: 'PM',
            createdAt: new Date(),
            updatedAt: new Date()  
        },  
        {
            id: uuid.v1(),  
            name: 'Sudan',
            code: 'SD',
            createdAt: new Date(),
            updatedAt: new Date()  
        },  
        {
            id: uuid.v1(),  
            name: 'Suriname',
            code: 'SR',
            createdAt: new Date(),
            updatedAt: new Date()  
        },  
        {
            id: uuid.v1(),  
            name: 'Svalbard and Jan Mayen Islands',
            code: 'SJ',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'Swaziland',
            code: 'SZ',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'Sweden',
            code: 'SE',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'Switzerland',
            code: 'CH',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Syrian Arab Republic',
            code: 'SY',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'Taiwan',
            code: 'TW',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Tajikistan',
            code: 'TJ',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Tanzania, United Republic of',
            code: 'TZ',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'Thailand',
            code: 'TH',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'Togo',
            code: 'TG',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'Tokelau',
            code: 'TK',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'Tonga',
            code: 'TO',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'Trinidad and Tobago',
            code: 'TT',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'Tunisia',
            code: 'TN',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'Turkey',
            code: 'TR',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'Turkmenistan',
            code: 'TM',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'Turks and Caicos Islands',
            code: 'TC',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'Tuvalu',
            code: 'TV',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'Uganda',
            code: 'UG',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'Ukraine',
            code: 'UA',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'United Arab Emirates',
            code: 'AE',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'United Kingdom',
            code: 'GB',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'United States',
            code: 'US',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'United States minor outlying islands',
            code: 'UM',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'Uruguay',
            code: 'UY',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'Uzbekistan',
            code: 'UZ',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'Vanuatu',
            code: 'VU',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'Vatican City State',
            code: 'VA',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'Venezuela',
            code: 'VE',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'Vietnam',
            code: 'VN',
            createdAt: new Date(),
            updatedAt: new Date()  
        }, 
        {
            id: uuid.v1(),  
            name: 'Virgin Islands (British)',
            code: 'VG',
            createdAt: new Date(),
            updatedAt: new Date()  
        },
        {
            id: uuid.v1(),  
            name: 'Wallis and Futuna Islands',
            code: 'WF',
            createdAt: new Date(),
            updatedAt: new Date()    
        },
        {
            id: uuid.v1(),  
            name: 'Western Sahara',
            code: 'EH',
            createdAt: new Date(),
            updatedAt: new Date()    
        },
        {
            id: uuid.v1(),  
            name: 'Yemen',
            code: 'YE',
            createdAt: new Date(),
            updatedAt: new Date()    
        },
        {
            id: uuid.v1(),  
            name: 'Zaire',
            code: 'ZR',
            createdAt: new Date(),
            updatedAt: new Date()    
        },  
        {
            id: uuid.v1(),  
            name: 'Zambia',
            code: 'ZM',
            createdAt: new Date(),
            updatedAt: new Date()    
        },  
        {
            id: uuid.v1(),  
            name: 'Zimbabwe',
            code: 'ZW',
            createdAt: new Date(),
            updatedAt: new Date()    
        }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Countries', null, {});
  }
};
