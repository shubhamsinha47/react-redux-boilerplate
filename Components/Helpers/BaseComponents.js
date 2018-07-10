import React from 'react'
import env from "./../Config/Env"

export const Button = (props) => { 
	if (props.is_loading) { 
		return <button className={ `${props.className}` } style = {{ background: "whitesmoke" }} disabled >
					<span style = {{ color: "#8ac247" }}>Loading <img src={`${env.baseImageUrl}loader.gif`} style = {{ height: "15px" }} alt="loader"/> </span>
				</button>
	}
	return <button className={ props.className }>{props.children}</button>
}

export const Display = (props) => {
	return (props.if) ? <div className={ props.className }>{props.children}</div> : null
}