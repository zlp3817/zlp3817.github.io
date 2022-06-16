const hair_keyword = ['natural color', '613 color', 'shipping fee:', 'discount:', 'paypal fee:', 'making fee:'];
const hair_type = ['bundle', 'closure', 'frontal', 'wig'];
const hair_texture = ['straight', 'body wave', 'loose body wave', 'deep wave', 'water wave', 'curly', 'loose wave', 'kinky curly', 'kinky straight'];
const hair_color = ['natural', '613', 'blond'];
const closure_category = ['4x4', 'hd 4x4', '4x4 hd', 'hd 5x5', '5x5 hd', '5x5', '6x6', '7x7'];
const frontal_category = ['13x4', 'hd 13x4', '13x4 hd', '13x6', '360'];
const hair_length = ['10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30'];
const hair_weight = { 'bundle': 110, 'closure': 45, 'frontal': 125, 'wig': 225 };

const dic_hd_category = { '4x4 hd': 'hd 4x4', '5x5 hd': 'hd 5x5', '13x4 hd': 'hd 13x4' };

// straight, bodywave
const bundle_price = { '10': 18, '12': 22, '14': 26, '16': 30, '18': 34, '20': 38, '22': 46, '24': 51, '26': 59, '28': 64, '30': 68 };
// loosebodywave, deepwave, waterwave, curly, loosewave
const bundle_price2 = { '10': 19, '12': 23, '14': 27, '16': 31, '18': 35, '20': 39, '22': 47, '24': 52, '26': 60, '28': 65, '30': 69 };
//kinkycurly
const bundle_price3 = { '10': 21, '12': 25, '14': 29, '16': 33, '18': 37, '20': 41, '22': 49, '24': 54, '26': 62, '28': 67, '30': 71 };
//kinkystraight
const bundle_price4 = { '10': 23, '12': 27, '14': 31, '16': 35, '18': 39, '20': 43, '22': 51, '24': 56, '26': 64, '28': 69, '30': 73 };

const transparent_4x4_price = { '10': 0, '12': 45, '14': 48, '16': 52, '18': 55, '20': 58 };
const transparent_4x4_price2 = { '10': 0, '12': 47, '14': 50, '16': 54, '18': 57, '20': 60 };

const transparent_5x5_price = { '10': 0, '12': 58, '14': 62, '16': 65, '18': 70, '20': 74 };
const transparent_5x5_price2 = { '10': 0, '12': 60, '14': 64, '16': 67, '18': 72, '20': 76 };

const transparent_13x4_price = { '10': 0, '12': 74, '14': 77, '16': 84, '18': 88, '20': 95 };
const transparent_13x4_price2 = { '10': 0, '12': 76, '14': 79, '16': 86, '18': 90, '20': 97 };

const transparent_13x6_price = { '10': 0, '12': 0, '14': 104, '16': 110, '18': 119, '20': 128 };
const transparent_13x6_price2 = { '10': 0, '12': 0, '14': 106, '16': 112, '18': 121, '20': 130 };

// const transparent_360_price = { '10': 76, '12': 86, '14': 95, '16': 110, '18': 120, '20': 124 };
// const transparent_360_price2 = { '10': 78, '12': 88, '14': 97, '16': 112, '18': 122, '20': 126 };

const hd_4x4_price = { '10': 0, '12': 52, '14': 56, '16': 60, '18': 63, '20': 67 };
const hd_4x4_price2 = { '10': 0, '12': 54, '14': 58, '16': 62, '18': 65, '20': 69 };

const hd_5x5_price = { '10': 0, '12': 64, '14': 69, '16': 72, '18': 75, '20': 79 };
const hd_5x5_price2 = { '10': 0, '12': 66, '14': 71, '16': 74, '18': 77, '20': 81 };

const hd_13x4_price = { '10': 0, '12': 92, '14': 96, '16': 101, '18': 106, '20': 112 };
const hd_13x4_price2 = { '10': 0, '12': 94, '14': 98, '16': 103, '18': 108, '20': 114 };

const bundle_613_price = { '10': 20, '12': 23, '14': 27, '16': 31, '18': 38, '20': 46, '22': 52, '24': 58, '26': 61, '28': 65, '30': 71 };

const transparent_613_4x4_price = { '10': 0, '12': 49, '14': 52, '16': 55, '18': 59, '20': 62 };
const transparent_613_5x5_price = { '10': 0, '12': 57, '14': 60, '16': 63, '18': 69, '20': 75 };
const transparent_613_13x4_price = { '10': 0, '12': 81, '14': 84, '16': 87, '18': 93, '20': 102 };

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
            'kinky curly': bundle_price3,
            'kinky straight': bundle_price4,

        },
        'closure':
        {
            '4x4':
            {
                'straight': transparent_4x4_price,
                'body wave': transparent_4x4_price,
                'loose body wave': transparent_4x4_price2,
                'deep wave': transparent_4x4_price2,
                'water wave': transparent_4x4_price2,
                'curly': transparent_4x4_price2,
                'loose wave': transparent_4x4_price2,
                'kinky curly': transparent_4x4_price2,
                'kinky straight': transparent_4x4_price2,
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
                'straight': transparent_5x5_price,
                'body wave': transparent_5x5_price,
                'loose body wave': transparent_5x5_price2,
                'deep wave': transparent_5x5_price2,
                'water wave': transparent_5x5_price2,
                'curly': transparent_5x5_price2,
                'loose wave': transparent_5x5_price2,
                'kinky curly': transparent_5x5_price2,
                'kinky straight': transparent_5x5_price2,
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
                'straight': transparent_13x4_price,
                'body wave': transparent_13x4_price,
                'loose body wave': transparent_13x4_price2,
                'deep wave': transparent_13x4_price2,
                'water wave': transparent_13x4_price2,
                'curly': transparent_13x4_price2,
                'loose wave': transparent_13x4_price2,
                'kinky curly': transparent_13x4_price2,
                'kinky straight': transparent_13x4_price2,
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
                'straight': transparent_13x6_price,
                'body wave': transparent_13x6_price,
                'loose body wave': transparent_13x6_price2,
                'deep wave': transparent_13x6_price2,
                'water wave': transparent_13x6_price2,
                'curly': transparent_13x6_price2,
                'loose wave': transparent_13x6_price2,
                'kinky curly': transparent_13x6_price2,
                'kinky straight': transparent_13x6_price2,
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
            'straight': bundle_613_price,
            'body wave': bundle_613_price,

        },
        'closure':
        {
            '4x4':
            {
                'straight': transparent_613_4x4_price,
                'body wave': transparent_613_4x4_price,
            },
            '5x5':
            {
                'straight': transparent_613_5x5_price,
                'body wave': transparent_613_5x5_price,
            }
        },
        'frontal':
        {
            '13x4':
            {
                'straight': transparent_613_13x4_price,
                'body wave': transparent_613_13x4_price,
            }
        },
    }
};
