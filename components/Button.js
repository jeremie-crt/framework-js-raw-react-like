import {Component} from "./Component.js";

export class Button extends Component {
	constructor(props) {
		super(props);
		this.elementHtml
	}

	createButton() {
		this.elementHtml = document.createElement('button')

		for(const key in this.props) {
			this.elementHtml[key] = this.props[key]
		}

		this.elementHtml.addEventListener('click', this.props.onclick)
	}

	render() {
		this.createButton()
		this.props.html = this.elementHtml
	}
}
