import {Component} from "./Component.js";

export class Div extends Component {
	constructor(props) {
		super(props);
		this.elementHtml
	}

	createDiv() {
		this.elementHtml = document.createElement('div')

		for(const key in this.props) {
			this.elementHtml[key] = this.props[key]
		}
	}

	render() {
		this.createDiv()
		this.props.html = this.elementHtml
	}
}