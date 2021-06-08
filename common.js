const hair_keyword = ['natural color', '613 color', 'shipping fee:', 'discount:', 'paypal fee:', 'making fee:'];
const hair_type = ['bundle', 'closure', 'frontal', 'wig'];
const hair_texture = ['straight', 'body wave', 'loose body wave', 'deep wave', 'water wave', 'curly', 'loose wave', 'kinky curly', 'kinky straight'];
const hair_color = ['natural', '613', 'blond'];
const closure_category = ['4x4', 'hd 4x4', '4x4 hd', 'hd 5x5', '5x5 hd', '5x5', '6x6', '7x7'];
const frontal_category = ['13x4', 'hd 13x4', '13x4 hd', '13x6', '360'];
const hair_length = ['10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30'];
const hair_weight = { 'bundle': 110, 'closure': 45, 'frontal': 80, 'wig': 225 };

const dic_hd_category = { '4x4 hd': 'hd 4x4', '5x5 hd': 'hd 5x5', '13x4 hd': 'hd 13x4' };

const bundle_price = { '10': 18, '12': 22, '14': 26, '16': 30, '18': 34, '20': 38, '22': 44, '24': 49, '26': 57, '28': 62, '30': 66 };
const bundle_price2 = { '10': 19, '12': 23, '14': 27, '16': 31, '18': 35, '20': 39, '22': 45, '24': 50, '26': 58, '28': 63, '30': 67 };

const _4x4_price = { '10': 29, '12': 33, '14': 31, '16': 62, '18': 65, '20': 70 };
const hd_4x4_price = { '10': 0, '12': 77, '14': 80, '16': 85, '18': 89, '20': 94 };
const _5x5_price = { '10': 47, '12': 51, '14': 73, '16': 81, '18': 91, '20': 96 };
const hd_5x5_price = { '10': 0, '12': 0, '14': 76, '16': 82, '18': 87, '20': 90 };

const _13x4_price = { '10': 48, '12': 53, '14': 96, '16': 109, '18': 116, '20': 124 };
const hd_13x4_price = { '10': 0, '12': 125, '14': 130, '16': 139, '18': 147, '20': 152 };
const _13x6_price = { '10': 61, '12': 67, '14': 77, '16': 140, '18': 150, '20': 160 };
const _360_price = { '10': 76, '12': 86, '14': 95, '16': 110, '18': 120, '20': 124 };

const _613_bundle_price = { '10': 19, '12': 23, '14': 27, '16': 31, '18': 35, '20': 43, '22': 49, '24': 54, '26': 59, '28': 63, '30': 67 };

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
                'loose body wave': _4x4_price,
                'deep wave': _4x4_price,
                'water wave': _4x4_price,
                'curly': _4x4_price,
                'loose wave': _4x4_price,
                'kinky curly': _4x4_price,
                'kinky straight': _4x4_price,
            },
            'hd 4x4':
            {
                'straight': hd_4x4_price,
                'body wave': hd_4x4_price,
                'loose body wave': hd_4x4_price,
                'deep wave': hd_4x4_price,
                'water wave': hd_4x4_price,
                'curly': hd_4x4_price,
                'loose wave': hd_4x4_price,
                'kinky curly': hd_4x4_price,
                'kinky straight': hd_4x4_price,
            },
            '5x5':
            {
                'straight': _5x5_price,
                'body wave': _5x5_price,
                'loose body wave': _5x5_price,
                'deep wave': _5x5_price,
                'water wave': _5x5_price,
                'curly': _5x5_price,
                'loose wave': _5x5_price,
                'kinky curly': _5x5_price,
                'kinky straight': _5x5_price,
            },
            'hd 5x5':
            {
                'straight': hd_5x5_price,
                'body wave': hd_5x5_price,
                'loose body wave': hd_5x5_price,
                'deep wave': hd_5x5_price,
                'water wave': hd_5x5_price,
                'curly': hd_5x5_price,
                'loose wave': hd_5x5_price,
                'kinky curly': hd_5x5_price,
                'kinky straight': hd_5x5_price,
            }
        },
        'frontal':
        {
            '13x4':
            {
                'straight': _13x4_price,
                'body wave': _13x4_price,
                'loose body wave': _13x4_price,
                'deep wave': _13x4_price,
                'water wave': _13x4_price,
                'curly': _13x4_price,
                'loose wave': _13x4_price,
                'kinky curly': _13x4_price,
                'kinky straight': _13x4_price,
            },
            'hd 13x4':
            {
                'straight': hd_13x4_price,
                'body wave': hd_13x4_price,
                'loose body wave': hd_13x4_price,
                'deep wave': hd_13x4_price,
                'water wave': hd_13x4_price,
                'curly': hd_13x4_price,
                'loose wave': hd_13x4_price,
                'kinky curly': hd_13x4_price,
                'kinky straight': hd_13x4_price,
            },
            '13x6':
            {
                'straight': _13x6_price,
                'body wave': _13x6_price,
                'loose body wave': _13x6_price,
                'deep wave': _13x6_price,
                'water wave': _13x6_price,
                'curly': _13x6_price,
                'loose wave': _13x6_price,
                'kinky curly': _13x6_price,
                'kinky straight': _13x6_price,
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
