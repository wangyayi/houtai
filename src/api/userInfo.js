
// 将用户的信息保存在本地
const key = 'userInfo'
const saveInfo = (value) => {
  localStorage.setItem(key, JSON.stringify(value))
}
const removeInfo = () => {
  localStorage.removeItem(key)
}

const getInfo = () => {
  return JSON.parse(localStorage.getItem(key))
}
export default {
  saveInfo, removeInfo, getInfo
}
