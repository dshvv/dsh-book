import { connect } from "react-redux";

const Tips = (props) => {
    const btnClick = () => {
        props.dispatch({
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

export default connect()(Tips);