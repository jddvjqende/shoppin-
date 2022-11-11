const Todo = (props) => {
    return (
       <div>
        <input type = "checkbox"/>
        <label>{props.children}</label>
        <button onClick ={props.onClickFn}></button>
       </div> 
    )
}
export default Todo