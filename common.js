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

const transparent_4x4_price = { '10': 33, '12': 46, '14': 48, '16': 52, '18': 55, '20': 60 };
const transparent_4x4_price2 = { '10': 35, '12': 48, '14': 50, '16': 54, '18': 57, '20': 62 };

const transparent_5x5_price = { '10': 0, '12': 58, '14': 61, '16': 65, '18': 70, '20': 73 };
const transparent_5x5_price2 = { '10': 0, '12': 60, '14': 63, '16': 67, '18': 72, '20': 75 };

const transparent_13x4_price = { '10': 53, '12': 73, '14': 76, '16': 83, '18': 90, '20': 95 };
const transparent_13x4_price2 = { '10': 55, '12': 75, '14': 78, '16': 85, '18': 92, '20': 97 };

const transparent_13x6_price = { '10': 0, '12': 116, '14': 130, '16': 133, '18': 136, '20': 143 };
const transparent_13x6_price2 = { '10': 0, '12': 118, '14': 132, '16': 135, '18': 138, '20': 145 };

const transparent_360_price = { '10': 76, '12': 86, '14': 95, '16': 110, '18': 120, '20': 124 };
const transparent_360_price2 = { '10': 78, '12': 88, '14': 97, '16': 112, '18': 122, '20': 126 };

const hd_4x4_price = { '10': 0, '12': 56, '14': 60, '16': 63, '18': 66, '20': 70 };
const hd_4x4_price2 = { '10': 0, '12': 58, '14': 62, '16': 65, '18': 68, '20': 72 };

const hd_5x5_price = { '10': 0, '12': 68, '14': 72, '16': 75, '18': 79, '20': 82 };
const hd_5x5_price2 = { '10': 0, '12': 70, '14': 74, '16': 77, '18': 81, '20': 84 };

const hd_13x4_price = { '10': 0, '12': 98, '14': 101, '16': 106, '18': 111, '20': 126 };
const hd_13x4_price2 = { '10': 0, '12': 100, '14': 103, '16': 108, '18': 113, '20': 128 };

// const bundle_613_price = { '10': 19, '12': 23, '14': 27, '16': 31, '18': 35, '20': 43, '22': 49, '24': 54, '26': 59, '28': 63, '30': 67 };
const bundle_613_price = { '10': 20, '12': 23, '14': 27, '16': 31, '18': 38, '20': 46, '22': 52, '24': 58, '26': 61, '28': 65, '30': 71 };

const transparent_613_4x4_price = { '10': 35, '12': 50, '14': 54, '16': 57, '18': 61, '20': 65 };
const transparent_613_5x5_price = { '10': 0, '12': 57, '14': 61, '16': 64, '18': 69, '20': 73 };
const transparent_613_13x4_price = { '10': 76, '12': 78, '14': 81, '16': 91, '18': 95, '20': 108 };

const transparent_4x4_wig_price = { '10': 94, '12': 122, '14': 158, '16': 174, '18': 188, '20': 206, '22': 230, '24': 245, '26': 269, '28': 284, '30': 296 };
const transparent_5x5_wig_price = { '10': 0, '12': 137, '14': 174, '16': 190, '18': 207, '20': 222, '22': 246, '24': 261, '26': 285, '28': 300, '30': 312 };

const hd_4x4_wig_price = { '10': 0, '12': 132, '14': 169, '16': 185, '18': 200, '20': 215, '22': 239, '24': 254, '26': 278, '28': 293, '30': 305 };
const hd_5x5_wig_price = { '10': 0, '12': 147, '14': 185, '16': 200, '18': 216, '20': 231, '22': 255, '24': 270, '26': 294, '28': 309, '30': 321 };

const transparent_13x4_wig_price = { '10': 114, '12': 159, '14': 196, '16': 215, '18': 233, '20': 250, '22': 274, '24': 289, '26': 313, '28': 328, '30': 340 };
const transparent_13x6_wig_price = { '10': 157, '12': 185, '14': 233, '16': 255, '18': 277, '20': 299, '22': 323, '24': 338, '26': 362, '28': 377, '30': 389 };

const hd_13x4_wig_price = { '10': 0, '12': 184, '14': 221, '16': 238, '18': 255, '20': 272, '22': 296, '24': 311, '26': 335, '28': 350, '30': 362 };
// const hd_13x6_wig_price = { '10': 0, '12': 147, '14': 185, '16': 200, '18': 216, '20': 231, '22': 255, '24': 270, '26': 294, '28': 309, '30': 321 };

const transparent_613_4x4_wig_price = { '10': 100, '12': 128, '14': 166, '16': 182, '18': 207, '20': 234, '22': 252, '24': 270, '26': 279, '28': 291, '30': 309 };
const transparent_613_5x5_wig_price = { '10': 0, '12': 138, '14': 177, '16': 192, '18': 218, '20': 246, '22': 264, '24': 282, '26': 291, '28': 303, '30': 321 };

const transparent_613_13x4_wig_price = { '10': 151, '12': 166, '14': 204, '16': 226, '18': 250, '20': 288, '22': 306, '24': 324, '26': 333, '28': 345, '30': 363 };

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
