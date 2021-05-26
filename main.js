var hair_keyword = ['color', 'shipping fee:', 'discont:', 'paypal fee:', 'making fee:'];
var hair_type = ['bundle', 'closure', 'frontal', 'wig'];
var hair_texture = ['straight', 'body wave', 'loose body wave', 'deep wave', 'water wave', 'curly', 'loose wave', 'kinky curly', 'kinky straight'];
var hair_color = ['natural', '613', 'blond'];
var closure_category = ['4x4', 'hd 5x5', '5x5 hd', '5x5', '6x6', '7x7'];
var frontal_category = ['13x4', '13x6', '360'];
var hair_length = ['10', '12', '14', '16', '18', '20', '22', '24', '26', '28', '30'];
var hair_weight = { 'bundle': 110, 'closure': 45, 'frontal': 80, 'wig': 225 };

var dic_hd_category = { '5x5 hd': 'hd 5x5' };

var bundle_price = { '10': 18, '12': 22, '14': 26, '16': 30, '18': 34, '20': 38, '22': 44, '24': 49, '26': 57, '28': 62, '30': 66 };
var bundle_price2 = { '10': 19, '12': 23, '14': 27, '16': 31, '18': 35, '20': 43, '22': 49, '24': 54, '26': 59, '28': 63, '30': 67 };
var _4x4_price = { '10': 29, '12': 33, '14': 31, '16': 62, '18': 65, '20': 70 };
var _5x5_price = { '10': 47, '12': 51, '14': 73, '16': 81, '18': 91, '20': 96 };
var _13x4_price = { '10': 48, '12': 53, '14': 96, '16': 109, '18': 116, '20': 124 };
var _13x6_price = { '10': 61, '12': 67, '14': 77, '16': 0, '18': 0, '20': 0 };
var _360_price = { '10': 76, '12': 86, '14': 95, '16': 110, '18': 120, '20': 124 };
var hd_5x5_price = { '10': 0, '12': 0, '14': 76, '16': 82, '18': 87, '20': 90 };

var _613_bundle_price = { '10': 19, '12': 23, '14': 27, '16': 31, '18': 35, '20': 43, '22': 49, '24': 54, '26': 59, '28': 63, '30': 67 };
var _613_4x4_price = { '10': 51, '12': 56, '14': 77, '16': 82, '18': 87, '20': 98 };
var _613_5x5_price = { '10': 70, '12': 77, '14': 82, '16': 90, '18': 98, '20': 106 };
var _613_13x4_price = { '10': 98, '12': 104, '14': 116, '16': 129, '18': 137, '20': 149 };
var hair_price = {
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
            '13x6':
            {
                'straight': _13x6_price,
                'body bave': _13x6_price,
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
        'fontal':
        {
            '13x4':
            {
                'straight': _613_13x4_price,
                'body wave': _613_13x4_price,
            }
        },
    }
};
function trim(str) {
    return str.replace(/\s+/g, '').toLocaleLowerCase();
}
//构造信息
function Hair(color, type, texture, category) {
    if (color == null) {
        this.color = hair_color[0];
    } else {
        this.color = color;
    }

    if (type == null) {
        if (closure_category.indexOf(category) >= 0) {
            this.type = hair_type[1];
        } else if (frontal_category.indexOf(category) >= 0) {
            this.type = hair_type[2];
        }
    } else {
        this.type = type;
    }

    if (category == null) {
        if (hair_type[1] == type) {
            this.category = closure_category[0];
        } else if (hair_type[2] == type) {
            this.category = frontal_category[0];
        }
    } else {
        if (dic_hd_category.hasOwnProperty(category)) {
            this.category = dic_hd_category[category];
        } else {
            this.category = category;
        }
    }

    this.texture = texture;
    this.volume = new Array();

    console.log('Hair:', this.color, this.type, this.texture, this.category);

    this.price = function (length) {
        if (null == this.category) {
            console.log
            return hair_price[this.color][this.type][this.texture][length];
        }
        return hair_price[this.color][this.type][this.category][this.texture][length];
    };
    this.count = function () {
        var count = 0;
        for (var length in this.volume) {
            count += this.volume[length][1];
        }
        return count;
    }
    this.weight = function () {
        return hair_weight[this.type] * this.count();
    }
}
//序列化
function serialize(arrHair, dicFee = []) {
    var output = '';
    var count = 0;
    var weight = 0;
    var totalAmount = 0;
    var dicCount = new Array();

    for (const hair of arrHair) {
        if (null == hair.category) {
            output += hair.texture + ' ' + hair.type + ' ' + hair.color + ' color\n';
        } else {
            output += hair.texture + ' ' + hair.category + ' ' + hair.type + ' ' + hair.color + ' color\n';
        }
        var dic = hair.volume;
        for (var length in dic) {
            var price = dic[length][0];
            var volume = dic[length][1];
            output += volume + '-' + length + '": $' + price + 'x' + volume + '=$' + price * volume + '\n';
            totalAmount += price * volume;
        }
        count += hair.count();
        weight += hair.weight();

        if (dicCount.hasOwnProperty(hair.type)) {
            dicCount[hair.type] += hair.count();
        } else {
            dicCount[hair.type] = hair.count();
        }
    }

    console.log('totalAmount: ', totalAmount)
    output += '[--';
    output += 'total: ' + count;
    for (var key in dicCount) {
        output += ', ' + dicCount[key] + ' ' + key;
    }

    // output += '-weight: ' + weight / 1000 + 'kg--]\n';
    output += '--]\n';
    console.log('weight:', weight / 1000, 'kg');

    if (count > 0) {
        console.log(dicFee);
        console.log(Object.keys(dicFee).length);
        if (Object.keys(dicFee).length > 0) {
            var otherFee = 0;
            for (var key in dicFee) {
                output += key + '$' + dicFee[key] + '\n';
                if (key.indexOf('discount') >= 0) {
                    otherFee -= dicFee[key];
                } else {
                    otherFee += dicFee[key];
                }
            }
            totalAmount = totalAmount + otherFee;
        } else {
            shippingFee = 25 + Math.floor(weight / 500) * 10;

            output += 'shipping fee: $' + shippingFee + '\n';
            var paypalFee = (totalAmount + shippingFee) * 0.05;
            paypalFee = Number(paypalFee.toFixed(2));
            output += 'paypal fee: $' + paypalFee + '\n';
            discount = paypalFee % 1;
            discount = 3 + Number(discount.toFixed(2));
            output += 'discount: $' + discount + '\n';
            totalAmount = totalAmount + shippingFee + paypalFee - discount;
        }

    }

    output += '\n';
    output += 'the total best payment is: $' + totalAmount.toFixed(2) + '\n';

    return output;
}
//反序列化
function unserialize(str) {
    var arrHair = [];
    var dicFee = new Array();
    var shippingFee = 0;
    var discount = 0;
    var text = str.split('[-')[0];
    var arrStr = text.match(/[^\r\n]+/g);
    for (const line of arrStr) {
        console.log('line:', line);
        var texture = find_hair_keyword(line, hair_texture);
        var type = find_hair_keyword(line, hair_type);
        var category = find_hair_keyword(line, closure_category.concat(frontal_category));
        var color = find_hair_keyword(line, hair_color);

        if (texture != null) {
            console.log('unserialize:', color, type, texture, category);
            var hair = new Hair(color, type, texture, category);
            arrHair.push(hair);
        } else {
            var arrVolume = line.split(':');
            var numArr = arrVolume[0].match(/\d+/g);
            var volume = numArr[0];
            var length = numArr[1];
            var priceArr = arrVolume[1].match(/\d+/g);
            var price = priceArr[0];
            var hair = arrHair[arrHair.length - 1];
            hair.volume[length] = [Number(price), Number(volume)];
            console.log('unserialize:', length, price, volume);
        }
    }

    text = str.split('-]')[1];
    arrStr = text.match(/[^\r\n]+/g);
    var isOtrherFee = true;
    for (const line of arrStr) {
        if (line.length < 2) {
            continue;
        }

        if (line.indexOf('total') >= 0) {
            continue;
        }
        else {
            var feeArr = line.split('$');
            dicFee[feeArr[0]] = Number(feeArr[1]);
        }
    }

    console.log(arrHair, dicFee);

    return [arrHair, dicFee];
}
//获取关键词
function find_hair_keyword(text, list) {
    var line = trim(text);
    for (const name of list) {
        var keyWord = trim(name);
        if (line.indexOf(keyWord) >= 0) {
            return name;
        }
    }

    return null;
}
//获取尺寸和长度
function find_length_volume(text, list) {
    var content = text;
    var hair_category = closure_category.concat(frontal_category);
    for (var keyword of hair_category) {
        content = content.replace(keyword, '');
    }
    var numArr = content.match(/\d+/g);
    if (numArr) {
        var length = 0;
        var num = 1;
        for (var len of numArr) {
            if (list.indexOf(len) >= 0) {
                length = len;
            } else if (len < 10) {
                num = Number(len);
            }
        }
    }
    return [length, num];
}
//解析
function parse(str) {
    var arrHair = [];
    var arrStr = str.match(/[^\r\n]+/g);
    for (const line of arrStr) {
        if (line.length < 2) {
            continue;
        }
        var texture = find_hair_keyword(line, hair_texture);
        var type = find_hair_keyword(line, hair_type);
        var category = find_hair_keyword(line, closure_category.concat(frontal_category));
        var color = find_hair_keyword(line, hair_color);
        if (color == hair_color[2]) {
            color = hair_color[1];
        }

        if (texture == null) {
            if (category != null) {
                var hair = arrHair[arrHair.length - 1];
                texture = hair.texture;
            }
        }
        if (texture != null) {
            console.log('parse:', color, type, texture, category);
            var hair = new Hair(color, type, texture, category);
            arrHair.push(hair);
        }

        var volume = find_length_volume(line, hair_length)
        if (volume[0] > 0) {
            var length = volume[0];
            var number = volume[1];
            var hair = arrHair[arrHair.length - 1];
            var price = hair.price(length);
            hair.volume[length] = [price, number];
            console.log('parse:', length, price, number);
        }

    }
    return serialize(arrHair);
}

function init() {
    var pwd_md5 = getCookie('pwd');
    if (pwd_md5 == null) {
        var pwd = prompt("password", "");
        pwd_md5 = md5(pwd);
    }
    console.log('md5:', pwd_md5);
    // if (pwd_md5 == 'c4ca4238a0b923820dcc509a6f75849b') {
    if (pwd_md5 == '0be175e8b2abfbd2bd6cf8c567148906') {
        setCookie('pwd', pwd_md5);
        document.getElementById('wrap').style.visibility = 'visible';
    } else {
        delCookie('pwd');
        location.reload();
    }
}
//set cookie
function setCookie(name, value, day = 120) {
    var date = new Date();
    date.setDate(date.getDate() + day);
    document.cookie = name + '=' + value + ';expires=' + date;
};

//get cookie
function getCookie(name) {
    var reg = RegExp(name + '=([^;]+)');
    var arr = document.cookie.match(reg);
    if (arr) {
        return arr[1];
    } else {
        return null;
    }
};

//删除cookie
function delCookie(name) {
    setCookie(name, null, -1);
};