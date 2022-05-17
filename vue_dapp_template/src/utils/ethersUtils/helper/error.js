export function cacheResponseError (error) {
  let errorsArr = {
    'isTemp error': '土地体验活动已关闭',
    'userTemp error': '已拥有体验土地',
    'maxNft overflow error': '全网土地数已达上限',
    'Staking: amount must be greater than 0': '质押数量须大于0',
    'Staking: out of staked': '解押数量过多',
    'Staking: staked is 0': '当前未质押',
    'Staking: reward duration': '奖励周期未到',
    'Error: not land owner': '土地拥有权错误',
    'already start game': '已开始游戏',
    'game is already started': '已开始游戏',
    'not start game': '游戏未开始',
    'game is not started': '游戏未开始',
    'position is not valid': '土地位置异常',
    'land is already open': '已开启的土地',
    'game level is max': '游戏等级已达上限',
    'game is temp': '体验土地无法使用,请开启永久土地',
    'not upgrade time': '土地升级未完成',
    'land is not open': '土地未开启',
    'land is already planted': '当前土地已种植',
    'steal is not open': '功能已关闭',
    'can not steal yourself': '不能偷自己',
    'game level is not enough': '游戏等级过低',
    'land is not ready': '作物还未成熟',
    'steal is not ready': '收获次数已达上限',
    'steal is max': '收获次数已达上限',
    'Error: nextHarvestAt epoch': '作物还未成熟',
    'inviter must be binded': '邀请人须先完成绑定'
  }
  
  try {
    if (error.code === 'UNPREDICTABLE_GAS_LIMIT') {
      let errorTxt = '错误:' + error.error.message
      for(let keyName in errorsArr) {
        if(error.error.message.indexOf(keyName) > -1) {
          errorTxt = '错误:'+errorsArr[keyName]
          break;
        }
      }
      return errorTxt
    } else if (error.code === 'INSUFFICIENT_FUNDS') {
      return '矿工费不足'
    } else if (error.code === 4001 || error === 'cancelled') {
      return '交易取消'
    } else {
      let errorTxt = '错误:' + error.data.message
      for(let keyName in errorsArr) {
        if(error.data.message.indexOf(keyName) > -1) {
          errorTxt = '错误:'+errorsArr[keyName]
          break;
        }
      }
      return errorTxt
    }
  } catch (e) {
    return '异常'
  }
}
