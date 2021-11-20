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

const transparent_4x4_price = { '10': 33, '12': 53, '14': 55, '16': 59, '18': 61, '20': 67 };
const transparent_4x4_price2 = { '10': 35, '12': 55, '14': 57, '16': 61, '18': 63, '20': 69 };

const hd_4x4_price = { '10': 0, '12': 63, '14': 66, '16': 70, '18': 73, '20': 76 };
const hd_4x4_price2 = { '10': 0, '12': 65, '14': 68, '16': 72, '18': 75, '20': 78 };

const transparent_5x5_price = { '10': 0, '12': 68, '14': 71, '16': 75, '18': 80, '20': 83 };
const transparent_5x5_price2 = { '10': 0, '12': 70, '14': 73, '16': 77, '18': 82, '20': 85 };

const hd_5x5_price = { '10': 0, '12': 78, '14': 82, '16': 85, '18': 89, '20': 92 };
const hd_5x5_price2 = { '10': 0, '12': 80, '14': 84, '16': 87, '18': 91, '20': 94 };

const transparent_13x4_price = { '10': 53, '12': 90, '14': 93, '16': 100, '18': 106, '20': 111 };
const transparent_13x4_price2 = { '10': 55, '12': 92, '14': 95, '16': 102, '18': 108, '20': 113 };

const hd_13x4_price = { '10': 0, '12': 115, '14': 118, '16': 123, '18': 128, '20': 133 };
const hd_13x4_price2 = { '10': 0, '12': 117, '14': 120, '16': 125, '18': 130, '20': 135 };

// const transparent_13x6_price = { '10': 95, '12': 118, '14': 134, '16': 140, '18': 150, '20': 160 };
// const transparent_13x6_price2 = { '10': 97, '12': 120, '14': 136, '16': 142, '18': 152, '20': 162 };

const transparent_13x6_price = { '10': 96, '12': 116, '14': 130, '16': 140, '18': 150, '20': 160 };
const transparent_13x6_price2 = { '10': 98, '12': 118, '14': 132, '16': 142, '18': 152, '20': 162 };

const transparent_360_price = { '10': 76, '12': 86, '14': 95, '16': 110, '18': 120, '20': 124 };
const transparent_360_price2 = { '10': 78, '12': 88, '14': 97, '16': 112, '18': 122, '20': 126 };

// const bundle_613_price = { '10': 19, '12': 23, '14': 27, '16': 31, '18': 35, '20': 43, '22': 49, '24': 54, '26': 59, '28': 63, '30': 67 };
const bundle_613_price = { '10': 20, '12': 23, '14': 27, '16': 31, '18': 38, '20': 46, '22': 52, '24': 58, '26': 61, '28': 65, '30': 71 };

const transparent_613_4x4_price = { '10': 35, '12': 57, '14': 60, '16': 64, '18': 68, '20': 71 };
const transparent_613_5x5_price = { '10': 0, '12': 67, '14': 71, '16': 74, '18': 79, '20': 83 };
const transparent_613_13x4_price = { '10': 86, '12': 95, '14': 98, '16': 108, '18': 111, '20': 125 };
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
