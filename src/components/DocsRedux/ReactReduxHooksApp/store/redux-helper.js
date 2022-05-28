 /**
  * actionCreator 的辅助工具,生成一个actionCreator
  * @param action的type字段
  * @return actionCreator
  */
export const actionCreatorHelper = (type) => {
    const actionCreator = (payload) => {
        return { type, payload }
    }
    return actionCreator;
}

 /**
  *  创建Reducer的辅助工具
  * @param action的type字段
  * @return actionCreator
  */
export const createReducerHelper = (handlers, initialState) => {
    const reducer = (state = initialState, action) => {
        for (const key in handlers) {
            if (action.type === key) {
                return handlers[key](state, action)
            } else {
                return initialState;
            }
        }
    }
    return reducer;
}