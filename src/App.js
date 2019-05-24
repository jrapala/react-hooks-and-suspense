import React from "react"
import { render } from "react-dom"

const App = () => (
	<div>Hello World</div>
)

render(React.createElement(App), document.getElementById("root"))
