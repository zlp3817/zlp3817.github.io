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

const _4x4_price = { '10': 33, '12': 50, '14': 52, '16': 56, '18': 58, '20': 64 };
const _4x4_price2 = { '10': 35, '12': 52, '14': 54, '16': 58, '18': 58, '20': 66 };

const hd_4x4_price = { '10': 0, '12': 60, '14': 63, '16': 66, '18': 69, '20': 73 };
const hd_4x4_price2 = { '10': 0, '12': 62, '14': 65, '16': 68, '18': 71, '20': 75 };

const _5x5_price = { '10': 0, '12': 65, '14': 68, '16': 72, '18': 76, '20': 79 };
const _5x5_price2 = { '10': 0, '12': 67, '14': 70, '16': 74, '18': 78, '20': 81 };

const hd_5x5_price = { '10': 0, '12': 74, '14': 78, '16': 81, '18': 84, '20': 88 };
const hd_5x5_price2 = { '10': 0, '12': 76, '14': 80, '16': 83, '18': 86, '20': 90 };

const _13x4_price = { '10': 53, '12': 85, '14': 88, '16': 95, '18': 101, '20': 106 };
const _13x4_price2 = { '10': 55, '12': 87, '14': 90, '16': 97, '18': 103, '20': 108 };

const hd_13x4_price = { '10': 0, '12': 109, '14': 112, '16': 117, '18': 122, '20': 126 };
const hd_13x4_price2 = { '10': 0, '12': 111, '14': 114, '16': 119, '18': 124, '20': 128 };

const _13x6_price = { '10': 61, '12': 67, '14': 77, '16': 140, '18': 150, '20': 160 };
const _13x6_price2 = { '10': 63, '12': 69, '14': 79, '16': 142, '18': 152, '20': 162 };

const _360_price = { '10': 76, '12': 86, '14': 95, '16': 110, '18': 120, '20': 124 };
const _360_price2 = { '10': 78, '12': 88, '14': 97, '16': 112, '18': 122, '20': 126 };

// const _613_bundle_price = { '10': 19, '12': 23, '14': 27, '16': 31, '18': 35, '20': 43, '22': 49, '24': 54, '26': 59, '28': 63, '30': 67 };
const _613_bundle_price = { '10': 20, '12': 23, '14': 27, '16': 31, '18': 38, '20': 46, '22': 52, '24': 58, '26': 61, '28': 65, '30': 71 };

const _613_4x4_price = { '10': 35, '12': 54, '14': 57, '16': 61, '18': 65, '20': 68 };
const _613_5x5_price = { '10': 0, '12': 64, '14': 67, '16': 71, '18': 76, '20': 79 };
const _613_13x4_price = { '10': 86, '12': 90, '14': 93, '16': 103, '18': 106, '20': 119 };
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
