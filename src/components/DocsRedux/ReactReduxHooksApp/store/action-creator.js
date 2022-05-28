 /**
  * actionCreator，定义一个用于 创建type为SET_MSG 的actioCreator
  * @param action的type字段
  * @return actionCreator
  */
export const setMsg = (payload) => {
  return {
    type: 'SET_MSG',
    payload
  }
}