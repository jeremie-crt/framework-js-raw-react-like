import {Component} from "./Component.js";

export class Input extends Component {
	constructor(props) {
		super(props);
		this.elementHtml
	}

	createInput() {
		this.elementHtml = document.createElement('input')

		for(const key in this.props) {
			this.elementHtml[key] = this.props[key]
		}
	}

	render() {
		this.createInput()
		this.props.html = this.elementHtml
	}
}