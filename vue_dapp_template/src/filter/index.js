import Vue from 'vue'
import {calcShowAmount} from '@/utils/ethersUtils/helper/number'

export const subNumber = (value, arg1 = 4) =>{
  return calcShowAmount(value, arg1)
}
export const timestamp2Time = (timestamp) =>{
  if(!timestamp){
    return '0000:00:00 00:00'
  }
  var date = new Date(Number(timestamp) * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
  var Y = date.getFullYear() + "-";
  var M =
    (date.getMonth() + 1 < 10
      ? "0" + (date.getMonth() + 1)
      : date.getMonth() + 1) + "-";
  var D = (date.getDate() < 10 ? "0"+date.getDate() : date.getDate()) + " ";
  var h = (date.getHours() < 10 ? "0"+date.getHours() : date.getHours()) + ":";
  var m = (date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes())  + ":";
  var s = (date.getSeconds() < 10 ? "0"+date.getSeconds() : date.getSeconds());
  return Y + M + D + h + m + s;
}
export const formatNumber = (num, dot = 0) =>{
  num = Number(num);
	if (num == 0) {
		return num + '';
	} else
	if (num > 1 && num < 10000) {
		return num + '';
	} else {
		return (num / 10000).toFixed(dot);
	}
}

export const formatNumberUnit = (num, dot = 0) =>{
  num = Number(num);
	if (num == 0) {
		return num + '';
	} else
	if (num > 1 && num < 10000) {
		return num + '';
	} else {
		return (num / 10000).toFixed(dot)+'万';
	}
}

export const formatNumberMore = (value) =>{
  var param = {};
  var k = 100000000,
      sizes = ['', '万', '亿', '万亿'],
      i;
      if(value < k){
        param.value =value
        param.unit=''
      }else{
        i = Math.floor(Math.log(value) / Math.log(k)); 
        console.log(i)
        param.value = ((value / Math.pow(k, i))).toFixed(2);
        param.unit = sizes[i];
      }
    console.log(param.unit)
    return value
}

export const subAddress = (value, arg1 = 17) =>{
  const address = value
  if (address !== '') {
    const prevStr = address.substring(0, arg1)
    const lastStr = address.substring(
      address.length - arg1,
      address.length,
    )
    return prevStr + '...' + lastStr
  } else {
    return ''
  }
  // return calcShowAmount(value, arg1)
}

export const uppercase = (value) =>{
  return value.toUpperCase()
}