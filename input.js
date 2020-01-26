import React from "react";
import classes from './input.module.css'

const Input=(props)=> {
    console.log({...props.elementConfig})
    let InputHtml = null
    switch (props.elementType) {
        case('input'):
            InputHtml =(<input  className={classes.InputElement} {...props.elementConfig} />)
            break
        case('textarea'):
            InputHtml =(<textarea  className={classes.InputElement} {...props.elementConfig} value={props.value}/>)
            break
        case('select'):
            InputHtml =(<select  className={classes.InputElement}  value={props.value}>
                {props.elementConfig.options.map((value,index)=>(
                    <option key={index} value={value.value}>{value.displayName}</option>
                ))}
            </select>)
            break
        default:
            InputHtml =(<input  className={classes.InputElement} {...props.elementConfig} />)

    }
    return(
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {InputHtml}
        </div>)
}
export default Input