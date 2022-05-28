import { useDispatch } from 'react-redux'

export default () => {
    const dispatch = useDispatch();
    const btnClick = () => {
        dispatch({
            type: 'SET_MSG',
            payload: '李四'
        });
    }
    return (
        <button className="Tips" onClick={btnClick}>
            子组件按钮
        </button>
    );
}
