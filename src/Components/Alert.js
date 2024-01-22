import React from 'react'

export default function Alert(props) {
    return (
        props.alert && 
        <div className={`alert alert-${props.alert.type.toLowerCase()}`} role="alert">
            <strong>{props.alert.type}: {props.alert.message}</strong>
        </div>
    )
}
