const hair_keyword = ['natural color', '613 color', 'shipping fee:', 'discount:', 'paypal fee:', 'making fee:', 'made with'];
const hair_type = ['bundle', 'closure', 'frontal', 'wig'];
const hair_texture = ['straight', 'body wave', 'loose body wave', 'deep wave', 'water wave', 'curly', 'loose wave', 'kinky curly', 'kinky straight'];
const hair_color = ['natural', '613', 'blond'];
const closure_category = ['4x4', 'hd 4x4', '4x4 hd', 'hd 5x5', '5x5 hd', '5x5', '6x6', '7x7'];
const frontal_category = ['13x4', 'hd 13x4', '13x4 hd', '13x6', '360'];
const hair_length = ['10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36', '38', '40'];
const hair_weight = { 'bundle': 110, 'closure': 45, 'frontal': 125, 'wig': 225 };

const dic_hd_category = { '4x4 hd': 'hd 4x4', '5x5 hd': 'hd 5x5', '13x4 hd': 'hd 13x4' };

// straight, bodywave
const bundle_price = { '10': 18, '12': 22, '14': 26, '16': 30, '18': 34, '20': 39, '22': 46, '24': 51, '26': 59, '28': 64, '30': 68, '32': 78, '34': 86, '36': 98, '38': 104, '40': 109  };
// loosebodywave, deepwave, waterwave, curly, loosewave
// const bundle_price2 = { '10': 19, '12': 23, '14': 27, '16': 31, '18': 35, '20': 40, '22': 47, '24': 52, '26': 60, '28': 65, '30': 69 };
//kinkycurly
// const bundle_price3 = { '10': 21, '12': 25, '14': 29, '16': 33, '18': 37, '20': 41, '22': 49, '24': 54, '26': 62, '28': 67, '30': 71 };
//kinkystraight
// const bundle_price4 = { '10': 23, '12': 27, '14': 31, '16': 35, '18': 39, '20': 43, '22': 51, '24': 56, '26': 64, '28': 69, '30': 73 };

const transparent_4x4_price = { '10': 0, '12': 39, '14': 42, '16': 46, '18': 49, '20': 52 };
const transparent_5x5_price = { '10': 0, '12': 46, '14': 49, '16': 52, '18': 55, '20': 58 };
const transparent_6x6_price = { '10': 0, '12': 56, '14': 59, '16': 62, '18': 67, '20': 73 };
const transparent_13x4_price = { '10': 0, '12': 54, '14': 57, '16': 60, '18': 69, '20': 72 };
const transparent_13x6_price = { '10': 0, '12': 69, '14': 72, '16': 78, '18': 82, '20': 85 };
// const transparent_4x4_price2 = { '10': 0, '12': 45, '14': 48, '16': 52, '18': 55, '20': 58 };
// const transparent_5x5_price2 = { '10': 0, '12': 58, '14': 62, '16': 65, '18': 70, '20': 72 };
// const transparent_6x6_price2 = { '10': 0, '12': 0, '14': 76, '16': 82, '18': 88, '20': 94 };
// const transparent_13x4_price2 = { '10': 0, '12': 74, '14': 77, '16': 84, '18': 88, '20': 94 };
// const transparent_13x6_price2 = { '10': 0, '12': 0, '14': 106, '16': 112, '18': 121, '20': 130 };

const hd_4x4_price = { '10': 0, '12': 48, '14': 50, '16': 52, '18': 56, '20': 60 };
const hd_5x5_price = { '10': 0, '12': 0, '14': 54, '16': 58, '18': 60, '20': 64 };
const hd_6x6_price = { '10': 0, '12': 0, '14': 65, '16': 68, '18': 72, '20': 78 };
const hd_13x4_price = { '10': 0, '12': 0, '14': 66, '16': 70, '18': 76, '20': 82 };
const hd_13x6_price = { '10': 0, '12': 0, '14': 79, '16': 85, '18': 94, '20': 99 };
// const hd_4x4_price2 = { '10': 0, '12': 52, '14': 56, '16': 58, '18': 60, '20': 62 };
// const hd_5x5_price2 = { '10': 0, '12': 64, '14': 68, '16': 70, '18': 72, '20': 74 };
// const hd_6x6_price2 = { '10': 0, '12': 86, '14': 88, '16': 92, '18': 97, '20': 104 };
// const hd_13x4_price2 = { '10': 0, '12': 88, '14': 90, '16': 94, '18': 98, '20': 112 };

const bundle_613_price = { '10': 20, '12': 23, '14': 27, '16': 31, '18': 38, '20': 45, '22': 52, '24': 58, '26': 61, '28': 65, '30': 71, '32': 87, '34': 94, '36': 102, '38': 115, '40': 121  };

const transparent_613_4x4_price = { '10': 0, '12': 42, '14': 46, '16': 50, '18': 54, '20': 59 };
const transparent_613_5x5_price = { '10': 0, '12': 50, '14': 55, '16': 59, '18': 65, '20': 71 };
const transparent_613_13x4_price = { '10': 0, '12': 59, '14': 65, '16': 72, '18': 80, '20': 84 };
const transparent_613_13x6_price = { '10': 0, '12': 68, '14': 75, '16': 84, '18': 93, '20': 99 };

const hd_613_4x4_price = { '10': 0, '12': 48, '14': 52, '16': 56, '18': 60, '20': 64 };
const hd_613_5x5_price = { '10': 0, '12': 58, '14': 62, '16': 66, '18': 72, '20': 76 };
const hd_613_13x4_price = { '10': 0, '12': 70, '14': 76, '16': 82, '18': 92, '20': 98 };
const hd_613_13x6_price = { '10': 0, '12': 82, '14': 88, '16': 98, '18': 108, '20': 116 };

const shipping_cost = 25;
const shipping_unit = 10
const wig_making_cost = 25;

const is_invoice = true;

const hair_price = {
    'natural':
    {
        'bundle': bundle_price,
        'closure': {
            '4x4': transparent_4x4_price,
            '5x5': transparent_5x5_price,
            '6x6': transparent_6x6_price,
            'hd 4x4': hd_4x4_price,
            'hd 5x5': hd_5x5_price,
            'hd 6x6': hd_6x6_price,
        },        
        'frontal':
        {
            '13x4': transparent_13x4_price,
            '13x6': transparent_13x6_price,
            'hd 13x4': hd_13x4_price,
            'hd 13x6': hd_13x6_price,
        },
        'wig':
        {
        },
    },
    '613':
    {
        'bundle': bundle_613_price,
        'closure': {
            '4x4': transparent_613_4x4_price,
            '5x5': transparent_613_5x5_price,
            'hd 4x4': hd_613_4x4_price,
            'hd 5x5': hd_613_5x5_price,
        },        
        'frontal':
        {
            '13x4': transparent_613_13x4_price,
            '13x6': transparent_613_13x6_price,
            'hd 13x4': hd_613_13x4_price,
            'hd 13x6': hd_613_13x6_price,
        },
        'wig':
        {
        },
    }
};