function trim(str) {
    return str.replace(/\s+/g, '').toLocaleLowerCase();
}
function get_hair_type(category) {
    if (closure_category.indexOf(category) >= 0) {
        return hair_type[1];
    } else if (frontal_category.indexOf(category) >= 0) {
        return hair_type[2];
    }

    return hair_type[0];
}

function get_hair_type2(type) {
    console.log(type)
    transparent_category = ['4x4', '5x5', '6x6', '7x7', '13x4', '13x6']
    if (transparent_category.indexOf(type) >= 0) {
        return 'transparent ' + type
    }

    return type
}
//构造信息
function Hair(color, type, texture, category) {
    if (color == null) {
        this.color = hair_color[0];
    } else {
        this.color = color;
    }

    if (type == null) {
        this.type = get_hair_type(category);
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
            if (this.texture == hair_texture[2] || this.texture == hair_texture[3] || this.texture == hair_texture[4] || this.texture == hair_texture[5]  || this.texture == hair_texture[6]) {
                return hair_price[this.color][this.type][length] + 1;
            } else if (this.texture == hair_texture[7]) {
                return hair_price[this.color][this.type][length] + 4;
            }  else if (this.texture == hair_texture[8]) {
                return hair_price[this.color][this.type][length] + 5;
            } 
            return hair_price[this.color][this.type][length];

        }

        try {
            if (this.type == hair_type[1] || this.type == hair_type[2]) {
                if (this.texture == hair_texture[2] || this.texture == hair_texture[3] || this.texture == hair_texture[4] || this.texture == hair_texture[5]  || this.texture == hair_texture[6]) {
                    return hair_price[this.color][this.type][this.category][length] + 2;
                } else if (this.texture == hair_texture[7] || this.texture == hair_texture[8]) {
                    return hair_price[this.color][this.type][this.category][length] + 5;
                }
            }

            return hair_price[this.color][this.type][this.category][length];

        } catch (error) {
            console.log('hair_price[' + this.color + '][' + this.type + '][' + this.category + '][' + this.texture + '][' + length + ']');
            console.log(error);
        }
        return 0;
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
function serialize(arrHair, dicFee, is_us, is_paypal, is_discount) {
    var output = '';
    var count = 0;
    var weight = 0;
    var wigCount = 0;
    var totalAmount = 0;
    var totalPrice = 0;
    var zellePrice = 0;
    var dicCount = new Array();

    for (const hair of arrHair) {
        if (null == hair.category) {
            output += hair.texture + ' ' + hair.type + ' ' + hair.color + ' color\n';
        } else {
            if (hair_type[3] == hair.type) {
                output += hair.texture + ' ' + hair.category + ' ' + get_hair_type(hair.category) + ' ' + hair.type + ' ' + hair.color + ' color\n';
                output += '( made with 3 bundles + 1 ' + get_hair_type(hair.category) + ' )\n'; 
            }
            else {
                output += hair.texture + ' ' + get_hair_type2(hair.category) + ' ' + hair.type + ' ' + hair.color + ' color\n';
            }
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

    output += '[--total: ' + count;

    for (var key in dicCount) {
        if (dicCount[key] > 1) {
            output += ', ' + dicCount[key] + ' ' + key + 's';
        }
        else {
            output += ', ' + dicCount[key] + ' ' + key;
        }
    }

    console.log('======================>totalAmount: ', totalAmount)



    // output += '-weight: ' + weight / 1000 + 'kg--]\n';
    output += '--]\n';
    console.log('weight:', weight / 1000, 'kg');

    if (count == 0)
        console.log('hair count is null');

    console.log('dicFee:', dicFee);
    //判断是output还是update
    if (Object.keys(dicFee).length > 0 && is_invoice) {
        //output
        var otherFee = 0;
        for (var key in dicFee) {
            if (key.indexOf('discount') >= 0 || key.indexOf('paypal') >= 0) {
                continue;
            } else {
                otherFee += dicFee[key];
            }
        }

      
        var paypalFee = Math.ceil((totalAmount + otherFee) * 0.05);
        if (is_paypal) {
            dicFee['paypal fee: '] = paypalFee;
            console.log('paypal fee:', paypalFee);
        }
        // for (var key in dicFee) {
        //     if (key.indexOf('paypal') >= 0) {
        //         dicFee[key] = paypalFee;
        //         console.log('paypal fee:', dicFee[key]);
        //         break;
        //     }
        // }
  

        totalFee = 0;
        var discount = 0
        for (var key in dicFee) {
            output += key + '$' + dicFee[key] + '\n';
            if (key.indexOf('discount') >= 0) {
                discount = dicFee[key];
            } else {
                totalFee += dicFee[key];
            }
        }

        if (is_discount) {
            if (key.indexOf('discount') < 0) {
                discount = parseInt(totalAmount / 100) * 5;
                output += 'discount: $' + discount + '\n';
            }
        } else {
            discount = 0;
        }

        totalPrice = totalAmount + otherFee + paypalFee - discount
        zellePrice = totalAmount + otherFee - discount;
    } else {
        shippingFee = shipping_cost + Math.floor(weight / 500) * shipping_unit;

        if (count > 40) {
            shippingFee += shipping_unit*2;
        }
        output += 'shipping fee: $' + shippingFee + '\n';

        if (is_invoice) {
            var paypalFee = (totalAmount + shippingFee) * 0.05;
            paypalFee = Math.ceil(paypalFee);
            if (is_paypal) {
                output += 'paypal fee: $' + paypalFee + '\n';
            }
            discount = 0;
            if (is_discount) {
                discount = parseInt(totalAmount / 100) * 5;
                output += 'discount: $' + discount + '\n';
            }
            totalPrice = totalAmount + shippingFee + paypalFee - discount;
            zellePrice = totalAmount + shippingFee - discount;
        } else {
            totalPrice = totalAmount + shippingFee;
        }
        
    }


    if (is_invoice) {
        output += '\n';
        if (is_paypal) {
            output += 'the total best payment is: $' + totalPrice.toFixed(2);
            if (is_us) {
                output += '\n';
                console.log('the total best payment is: $' + zellePrice.toFixed(2) + '\n');
                output += 'or $' + zellePrice.toFixed(2) + ' (Zelle)\n';
            }
            else {
                output += '\n';
                console.log('the total best payment is: $' + zellePrice.toFixed(2) + '\n');
                output += 'or $' + zellePrice.toFixed(2) + ' (Bank Transfer)\n';
            }
        } else {
            if (is_us) {
                output += 'the total best payment is: $' + zellePrice.toFixed(2) + ' (Zelle)\n';
                console.log('the total best payment is: $' + zellePrice.toFixed(2) + '\n');
            }
            else {
                output += 'the total best payment is: $' + zellePrice.toFixed(2) + ' (Bank Transfer)\n';
                console.log('the total best payment is: $' + zellePrice.toFixed(2) + '\n');
            }
        }

        
    } else {
        output += '\n';
        output += 'the total best payment is: ¥' + totalPrice.toFixed(2);
    } 
    

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
        if (line.indexOf('made with') >= 0) {
            continue;
        }
        var texture = find_hair_keyword(line, hair_texture);
        var type = find_hair_keyword(line, hair_type, true);
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
        else if (line.indexOf('or $') >= 0) {
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
function find_hair_keyword(text, list, is_type = false) {
    var line = trim(text);
    var arrName = [];
    for (const name of list) {
        var keyWord = trim(name);
        if (line.indexOf(keyWord) >= 0) {
            arrName.push(name);
        }
    }

    if (arrName.length == 1) {
        return arrName[0]
    } else if (arrName.length > 1) {
        console.log(arrName);
        if (is_type) {
            //判断是否是wig
            for (const name of arrName) {
                if (name.indexOf(hair_type[3]) >= 0) {
                    return name;
                }
            }
        }
        //获取名字长的关键词
        return arrName.sort(function (a, b) {
            return b.length - a.length;
        })[0];
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
    // var numArr = content.match(/\d+/g);
    var numArr = content.match(/\d+(\.\d)?/g);
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
function parse(str, is_us, is_paypal, is_discount) {
    var arrHair = [];
    try {
        var arrStr = str.match(/[^\r\n]+/g);
        for (const line of arrStr) {
            if (line.length < 2) {
                continue;
            }
            var texture = find_hair_keyword(line, hair_texture);
            var type = find_hair_keyword(line, hair_type, true);
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
    } catch (error) {
        console.error();
    }

    return serialize(arrHair, [], is_us, is_paypal, is_discount);
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