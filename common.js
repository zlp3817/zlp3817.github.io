const hair_keyword = ['natural color', '613 color', 'shipping fee:', 'discount:', 'paypal fee:', 'making fee:', 'made with'];
const hair_type = ['bundle', 'closure', 'frontal', 'wig'];
const hair_texture = ['straight', 'body wave', 'loose body wave', 'deep wave', 'water wave', 'curly', 'loose wave', 'kinky curly', 'kinky straight'];
const hair_color = ['natural', '613', 'blond'];
const closure_category = ['4x4', 'hd 4x4', '4x4 hd', 'hd 5x5', '5x5 hd', '5x5', '6x6', '7x7'];
const frontal_category = ['13x4', 'hd 13x4', '13x4 hd', '13x6', '360'];
const hair_length = ['10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30', '32', '34', '36', '38', '40'];
const hair_weight = { 'bundle': 110, 'closure': 45, 'frontal': 125, 'wig': 225 };

const dic_hd_category = { '4x4 hd': 'hd 4x4', '5x5 hd': 'hd 5x5', '6x6 hd': 'hd 6x6', '7x7 hd': 'hd 7x7','13x4 hd': 'hd 13x4', '13x6 hd': 'hd 13x6' };

// straight, bodywave
const bundle_price = { '10': 18, '12': 21, '14': 24, '16': 31, '18': 35, '20': 40, '22': 46, '24': 53, '26': 59, '28': 66, '30': 69, '32': 80, '34': 90, '36': 100, '38': 113, '40': 119  };

const transparent_4x4_price = { '10': 0, '12': 23, '14': 25, '16': 29, '18': 33, '20': 37, '22': 40 };
const transparent_5x5_price = { '10': 0, '12': 30, '14': 32, '16': 37, '18': 41, '20': 46, '22': 55 }; 
const transparent_6x6_price = { '10': 0, '12': 39, '14': 44, '16': 52, '18': 59, '20': 64, '22': 72 };
const transparent_13x4_price = { '10': 0, '12': 40, '14': 44, '16': 48, '18': 59, '20': 64, '22': 72 };
const transparent_13x6_price = { '10': 0, '12': 46, '14': 53, '16': 61, '18': 71, '20': 80, '22': 92 };


const hd_4x4_price = { '10': 0, '12': 32, '14': 34, '16': 36, '18': 41, '20': 44, '22': 53 };
const hd_5x5_price = { '10': 0, '12': 0, '14': 40, '16': 45, '18': 48, '20': 54, '22': 64 };
const hd_6x6_price = { '10': 0, '12': 0, '14': 57, '16': 61, '18': 67, '20': 75, '22': 84 };
const hd_7x7_price = { '10': 0, '12': 0, '14': 73, '16': 80, '18': 90, '20': 98, '22': 107 };
const hd_13x4_price = { '10': 0, '12': 0, '14': 59, '16': 65, '18': 75, '20': 80, '22': 88 };
const hd_13x6_price = { '10': 0, '12': 0, '14': 80, '16': 88, '18': 100, '20': 109, '22': 115 };

const bundle_613_price = { '10': 20, '12': 22, '14': 27, '16': 31, '18': 38, '20': 45, '22': 53, '24': 58, '26': 63, '28': 67, '30': 73, '32': 90, '34': 96, '36': 103, '38': 119, '40': 123  };

const transparent_613_4x4_price = { '10': 0, '12': 28, '14': 32, '16': 36, '18': 40, '20': 46, '22': 53 };
const transparent_613_5x5_price = { '10': 0, '12': 33, '14': 39, '16': 45, '18': 53, '20': 58, '22': 63 };
const transparent_613_13x4_price = { '10': 0, '12': 40, '14': 48, '16': 55, '18': 63, '20': 75, '22': 86 };
const transparent_613_13x6_price = { '10': 0, '12': 55, '14': 65, '16': 75, '18': 88, '20': 98, '22': 106 };

const hd_613_4x4_price = { '10': 0, '12': 36, '14': 40, '16': 44, '18': 48, '20': 55, '22': 61 };
const hd_613_5x5_price = { '10': 0, '12': 42, '14': 44, '16': 50, '18': 57, '20': 63, '22': 69 };
const hd_613_13x4_price = { '10': 0, '12': 61, '14': 69, '16': 75, '18': 85, '20': 90, '22': 105 };
const hd_613_13x6_price = { '10': 0, '12': 80, '14': 90, '16': 100, '18': 113, '20': 123, '22': 130 };

const shipping_cost = 25;
const shipping_unit = 10
const wig_making_cost = 15;
//美元报价
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