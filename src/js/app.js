import hello from "./hello";
import React from "react";
import ReactDOM from "react-dom";
// import style from '../css/style'	// style.css의 내용을 html로 읽어들임

hello();

ReactDOM.render(
	<h1>Hello, Frontend Engineer!</h1>,
	document.getElementById('root')
)