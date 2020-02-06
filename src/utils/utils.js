// 生成随机字符串
export const randomStr = function (len = 32) {
  const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  const maxLength = 32
  let str = ''
  for (let i = 0; i < maxLength; i++) {
    let idx = Math.floor(Math.random() * maxLength)
    str += $chars.charAt(idx)
  }
  return str
}
