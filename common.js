const hair_keyword = ['natural color', '613 color', 'shipping fee:', 'discount:', 'paypal fee:', 'making fee:'];
const hair_type = ['bundle', 'closure', 'frontal', 'wig'];
const hair_texture = ['straight', 'body wave', 'loose body wave', 'deep wave', 'water wave', 'curly', 'loose wave', 'kinky curly', 'kinky straight'];
const hair_color = ['natural', '613', 'blond'];
const closure_category = ['4x4', 'hd 4x4', '4x4 hd', 'hd 5x5', '5x5 hd', '5x5', '6x6', '7x7'];
const frontal_category = ['13x4', 'hd 13x4', '13x4 hd', '13x6', '360'];
const hair_length = ['10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30'];
const hair_weight = { 'bundle': 110, 'closure': 45, 'frontal': 125, 'wig': 225 };

const dic_hd_category = { '4x4 hd': 'hd 4x4', '5x5 hd': 'hd 5x5', '13x4 hd': 'hd 13x4' };

const bundle_price = { '10': 18, '12': 22, '14': 26, '16': 30, '18': 34, '20': 38, '22': 46, '24': 51, '26': 59, '28': 64, '30': 68 };
const bundle_price2 = { '10': 19, '12': 23, '14': 27, '16': 31, '18': 35, '20': 39, '22': 47, '24': 52, '26': 60, '28': 65, '30': 69 };

const _4x4_price = { '10': 29, '12': 33, '14': 31, '16': 62, '18': 65, '20': 70 };
const _4x4_price2 = { '10': 31, '12': 35, '14': 33, '16': 64, '18': 67, '20': 72 };

const hd_4x4_price = { '10': 0, '12': 77, '14': 80, '16': 85, '18': 89, '20': 94 };
const hd_4x4_price2 = { '10': 0, '12': 79, '14': 82, '16': 87, '18': 91, '20': 96 };

const _5x5_price = { '10': 47, '12': 51, '14': 73, '16': 81, '18': 91, '20': 96 };
const _5x5_price2 = { '10': 49, '12': 53, '14': 75, '16': 83, '18': 93, '20': 98 };

const hd_5x5_price = { '10': 0, '12': 0, '14': 76, '16': 82, '18': 87, '20': 90 };
const hd_5x5_price2 = { '10': 0, '12': 0, '14': 78, '16': 84, '18': 89, '20': 92 };

const _13x4_price = { '10': 48, '12': 53, '14': 96, '16': 109, '18': 116, '20': 124 };
const _13x4_price2 = { '10': 50, '12': 55, '14': 98, '16': 111, '18': 118, '20': 126 };

const hd_13x4_price = { '10': 0, '12': 125, '14': 130, '16': 139, '18': 147, '20': 152 };
const hd_13x4_price2 = { '10': 0, '12': 127, '14': 132, '16': 141, '18': 149, '20': 154 };

const _13x6_price = { '10': 61, '12': 67, '14': 77, '16': 140, '18': 150, '20': 160 };
const _13x6_price2 = { '10': 63, '12': 69, '14': 79, '16': 142, '18': 152, '20': 162 };

const _360_price = { '10': 76, '12': 86, '14': 95, '16': 110, '18': 120, '20': 124 };
const _360_price2 = { '10': 78, '12': 88, '14': 97, '16': 112, '18': 122, '20': 126 };

// const _613_bundle_price = { '10': 19, '12': 23, '14': 27, '16': 31, '18': 35, '20': 43, '22': 49, '24': 54, '26': 59, '28': 63, '30': 67 };
const _613_bundle_price = { '10': 20, '12': 23, '14': 27, '16': 31, '18': 38, '20': 46, '22': 52, '24': 58, '26': 61, '28': 65, '30': 71 };

const _613_4x4_price = { '10': 51, '12': 56, '14': 77, '16': 82, '18': 87, '20': 98 };
const _613_5x5_price = { '10': 70, '12': 77, '14': 82, '16': 90, '18': 98, '20': 106 };
const _613_13x4_price = { '10': 98, '12': 104, '14': 116, '16': 129, '18': 137, '20': 149 };
const hair_price = {
    'natural':
    {
        'bundle':
        {
            'straight': bundle_price,
            'body wave': bundle_price,
            'loose body wave': bundle_price2,
            'deep wave': bundle_price2,
            'water wave': bundle_price2,
            'curly': bundle_price2,
            'loose wave': bundle_price2,
            'kinky curly': bundle_price2,
            'kinky straight': bundle_price2,

        },
        'closure':
        {
            '4x4':
            {
                'straight': _4x4_price,
                'body wave': _4x4_price,
                'loose body wave': _4x4_price2,
                'deep wave': _4x4_price2,
                'water wave': _4x4_price2,
                'curly': _4x4_price2,
                'loose wave': _4x4_price2,
                'kinky curly': _4x4_price2,
                'kinky straight': _4x4_price2,
            },
            'hd 4x4':
            {
                'straight': hd_4x4_price,
                'body wave': hd_4x4_price,
                'loose body wave': hd_4x4_price2,
                'deep wave': hd_4x4_price2,
                'water wave': hd_4x4_price2,
                'curly': hd_4x4_price2,
                'loose wave': hd_4x4_price2,
                'kinky curly': hd_4x4_price2,
                'kinky straight': hd_4x4_price2,
            },
            '5x5':
            {
                'straight': _5x5_price,
                'body wave': _5x5_price,
                'loose body wave': _5x5_price2,
                'deep wave': _5x5_price2,
                'water wave': _5x5_price2,
                'curly': _5x5_price2,
                'loose wave': _5x5_price2,
                'kinky curly': _5x5_price2,
                'kinky straight': _5x5_price2,
            },
            'hd 5x5':
            {
                'straight': hd_5x5_price,
                'body wave': hd_5x5_price,
                'loose body wave': hd_5x5_price2,
                'deep wave': hd_5x5_price2,
                'water wave': hd_5x5_price2,
                'curly': hd_5x5_price2,
                'loose wave': hd_5x5_price2,
                'kinky curly': hd_5x5_price2,
                'kinky straight': hd_5x5_price2,
            }
        },
        'frontal':
        {
            '13x4':
            {
                'straight': _13x4_price,
                'body wave': _13x4_price,
                'loose body wave': _13x4_price2,
                'deep wave': _13x4_price2,
                'water wave': _13x4_price2,
                'curly': _13x4_price2,
                'loose wave': _13x4_price2,
                'kinky curly': _13x4_price2,
                'kinky straight': _13x4_price2,
            },
            'hd 13x4':
            {
                'straight': hd_13x4_price,
                'body wave': hd_13x4_price,
                'loose body wave': hd_13x4_price2,
                'deep wave': hd_13x4_price2,
                'water wave': hd_13x4_price2,
                'curly': hd_13x4_price2,
                'loose wave': hd_13x4_price2,
                'kinky curly': hd_13x4_price2,
                'kinky straight': hd_13x4_price2,
            },
            '13x6':
            {
                'straight': _13x6_price,
                'body wave': _13x6_price,
                'loose body wave': _13x6_price2,
                'deep wave': _13x6_price2,
                'water wave': _13x6_price2,
                'curly': _13x6_price2,
                'loose wave': _13x6_price2,
                'kinky curly': _13x6_price2,
                'kinky straight': _13x6_price2,
            }
        },
        'wig':
        {

        },
    },
    '613':
    {
        'bundle':
        {
            'straight': _613_bundle_price,
            'body wave': _613_bundle_price,

        },
        'closure':
        {
            '4x4':
            {
                'straight': _613_4x4_price,
                'body wave': _613_4x4_price,
            },
            '5x5':
            {
                'straight': _613_5x5_price,
                'body wave': _613_5x5_price,
            }
        },
        'frontal':
        {
            '13x4':
            {
                'straight': _613_13x4_price,
                'body wave': _613_13x4_price,
            }
        },
    }
};
