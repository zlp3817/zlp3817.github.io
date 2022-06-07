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

const transparent_4x4_price = { '10': 35, '12': 46, '14': 49, '16': 52, '18': 55, '20': 60 };
const transparent_4x4_price2 = { '10': 37, '12': 48, '14': 51, '16': 54, '18': 57, '20': 62 };

const transparent_5x5_price = { '10': 0, '12': 58, '14': 62, '16': 65, '18': 70, '20': 74 };
const transparent_5x5_price2 = { '10': 0, '12': 60, '14': 64, '16': 67, '18': 72, '20': 76 };

const transparent_13x4_price = { '10': 53, '12': 74, '14': 77, '16': 85, '18': 89, '20': 97 };
const transparent_13x4_price2 = { '10': 55, '12': 76, '14': 79, '16': 87, '18': 91, '20': 99 };

const transparent_13x6_price = { '10': 0, '12': 0, '14': 109, '16': 115, '18': 123, '20': 129 };
const transparent_13x6_price2 = { '10': 0, '12': 0, '14': 111, '16': 117, '18': 125, '20': 131 };

// const transparent_360_price = { '10': 76, '12': 86, '14': 95, '16': 110, '18': 120, '20': 124 };
// const transparent_360_price2 = { '10': 78, '12': 88, '14': 97, '16': 112, '18': 122, '20': 126 };

const hd_4x4_price = { '10': 0, '12': 56, '14': 60, '16': 63, '18': 66, '20': 70 };
const hd_4x4_price2 = { '10': 0, '12': 58, '14': 62, '16': 65, '18': 68, '20': 72 };

const hd_5x5_price = { '10': 0, '12': 68, '14': 72, '16': 75, '18': 79, '20': 82 };
const hd_5x5_price2 = { '10': 0, '12': 70, '14': 74, '16': 77, '18': 81, '20': 84 };

const hd_13x4_price = { '10': 0, '12': 100, '14': 103, '16': 108, '18': 113, '20': 128 };
const hd_13x4_price2 = { '10': 0, '12': 102, '14': 105, '16': 110, '18': 115, '20': 130 };

// const bundle_613_price = { '10': 19, '12': 23, '14': 27, '16': 31, '18': 35, '20': 43, '22': 49, '24': 54, '26': 59, '28': 63, '30': 67 };
const bundle_613_price = { '10': 20, '12': 23, '14': 27, '16': 31, '18': 38, '20': 46, '22': 52, '24': 58, '26': 61, '28': 65, '30': 71 };

const transparent_613_4x4_price = { '10': 35, '12': 50, '14': 54, '16': 57, '18': 61, '20': 65 };
const transparent_613_5x5_price = { '10': 0, '12': 57, '14': 61, '16': 64, '18': 69, '20': 73 };
const transparent_613_13x4_price = { '10': 76, '12': 78, '14': 81, '16': 91, '18': 95, '20': 108 };

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
