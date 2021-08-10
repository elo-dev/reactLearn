import React from 'react'
import style from './FormControl.module.css'

const formControl = (Component) => ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error

    return(
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                <Component {...input} {...props} />
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}

export default formControl