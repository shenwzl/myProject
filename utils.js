/*
 * author: shenzhi
 * email: 1126765230@qq.com
 * date: 2017-08-01
*/

/*
 * @method 清除字符串中的空格
 * @params string str 传入的字符串
 * @params int type 清除字符串的类型：1-所有空格，2-前后空格，3-前空格，4-后空格
 * @return string 返回新的字符串
*/

function trim (str, type) {
	switch (type) {
		case 1 : 
			return str.replace(/\s+/g, "");
		case 2 :
			return str.replace(/(^\s*)|(\s*$)/g, "");
		case 3 : 
			return str.replace(/(^\s*)/g, "");
		case 4 :
			return str.replace(/(\s*$)/g, "");
		default :
		  	return str;
	}
}

/*
 * @method 字母大小写切换
 * @params string str 传入的字符串
 * @params int type 字母大小切换的类型：1-首字母大写，其余小写，2-首字母小写，其余大写，3-大小写反转，4-全部大写，5-全部小写
 * @return string 返回新的字符串
*/

function changeCase(str, type) {
	function ToggleCase(str) {
		var itemText = '';
		str.split('').forEach(function(item) {
			if (/^([a-z]+)/.test(item)) {
				itemText += item.toUpperCase();
			} else if (/^([A-Z]+)/.test(item)) {
				itemText += item.toLowerCase();
			} else {
				itemText += item;
			}
		});
		return itemText;
	}
	switch (type) {
		case 1 : 
			return str.replace(/^(\w)(\w+)/, function(v, v1, v2) {
				return v1.toUpperCase() + v2.toLowerCase();
			});
		case 2 : 
			return str.replace(/^(\w)(\w+)/, function(v, v1, v2) {
				return v1.toLowerCase() + v2.toUpperCase();
			});
		case 3 :
			return ToggleCase(str);
		case 4 : 
			return str.toUpperCase();
		case 5 : 
			return str.toLowerCase();
		default : 
			return str;
	}
}

/*
 * @method 字符串循环复制
 * @params string str 传入的字符串
 * @params int count 需要复制的字符串次数
 * @return string 返回新的字符串
*/

function repeatStr(str, count) {
	var text = '';
	for (var i = 0; i < count; i++) {
		text += str;
	}
	return text;
}

/*
 * @method 字符串替换
 * @params string str 传入的字符串
 * @params string AFindText 要替换的字符串
 * @params string ARepText 替换后的字符串
 * @return string 返回新的字符串
*/

function replaceAll(str, AFindText, ARepText) {
	var raRegExp = new RegExp(AFindText, 'g');
	return str.replace(raRegExp, ARepText);
}

/*
 * @method 检测字符串
 * @params string str 传入的字符串
 * @params string type email-邮箱，phone-手机，tel-电话，number-全部为数字，english-全部为英文，chinese-全部为中文，lower-全部为小写，upper-全部为大写
 * @return boolean true/false
*/

function checkType(str, type) {
	switch(type) {
		case 'email':
            return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
        case 'phone':
            return /^1[3|4|5|7|8][0-9]{9}$/.test(str);
        case 'tel':
            return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
        case 'number':
            return /^[0-9]$/.test(str);
        case 'english':
            return /^[a-zA-Z]+$/.test(str);
        case 'chinese':
            return /^[\u4E00-\u9FA5]+$/.test(str);
        case 'lower':
            return /^[a-z]+$/.test(str);
        case 'upper':
            return /^[A-Z]+$/.test(str);
        default :
            return true;
    }
}

/*
 * @method 检测密码强度
 * @params string str 传入的字符串
 * @return int nowLv
*/

function checkPwd(str) {
	var nowLv = 0;
	if (str.length < 6) {
		return nowLv;
	}
	if (/[0-9]/.test(str)) {
		nowLv++;
	}
	if (/[a-z]/.test(str)) {
		nowLv++;
	}
	if (/[A-Z]/.test(str)) {
		nowLv++;
	}
	if (/[\.|-|_]/.test(str)) {
		nowLv++;
	}
	return nowLv;
}

/*
 * @method 生成随机码
 * @params int count count取值2～36
 * @return string 随机码
*/

function randomNumber(count) {
	return Math.random().toString(count).substring(2);
}

/*
 * @method 查找某个字符串在当前字符里出现的次数
 * @params string str 当前字符串
 * @params string strSplit 被查找的字符串
 * @return int 字符串出现的次数
*/

function countStr(str, strSplit) {
	return str.split(strSplit).length - 1;
}

/*
 * @method 数组去重 (ES6)
 * @params Array arr 初始数组
 * @return Array 去重后的数组
*/

function removeRepeatArrage(arr) {
	return Array.from(new Set(arr));
}

/*
 * @method 数组去重 (ES5)
 * @params Array arr 初始数组
 * @return Array 去重后的数组
*/

function uniqueArr(arr) {
	var obj = {};
	var newArr = [];
	for (var i = 0, len = arr.length; i < len; i++) {
		if (!obj[arr[i]]) {
			newArr.push(arr[i]);
			obj[arr[i]] = 1;
		}
	}
	return newArr;
}

/*
 * @method 数组打乱顺序
 * @params Array arr 初始数组
 * @return Array 打乱顺序后的数组
*/

function upsetArr(arr) {
	return arr.sort(function() {
		return Math.random() - 0.5;
	});
}

/*
 * @method 数组最大值
 * @params Array arr 初始数组
 * @return int 数组最大值
*/

function maxArr(arr) {
	return Math.max.apply(null, arr);
}

/*
 * @method 数组最小值
 * @params Array arr 初始数组
 * @return int 数组最小值
*/

function minArr(arr) {
	return Math.min.apply(null, arr);
}

/*
 * @method 返回数组中每个元素出现的次数并排序
 * @params Array arr 初始数组
 * @params int rank 显示前几名出线的次数，默认全部
 * @params int rankType 升序or降序，1代表升序or其他
 * @return int 数组最小值
*/

function getCount(arr, rank, rankType) {
	var obj = {};
	var k;
	var arr1 = [];
	for (var i = 0, len = arr.length; i < len; i++) {
		k = arr[i];
		if (obj[k]) {
			obj[k] ++;
		} else {
			obj[k] = 1;
		}
	}
	for (var o in obj) {
		arr1.push({
			el: o,
			count: obj[o]
		});
	}
	arr1.sort(function(n1, n2) {
		return n2.count - n1.count;
	});
	if (rankType === 1) {
		arr1 = arr1.reverse();
	}
	var rank1 = rank || arr1.length;
	return arr1.slice(0, rank1);
}

function getArrayNum(arr, n1, n2) {
	var arr1 = [];
	var len = n2 || arr.length - 1;
	for (var i = n1; i <= len; i++) {
		arr1.push(arr[i]);
	}
	return arr1;
}


