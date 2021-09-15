import {Component} from "./Component.js";

export class Form extends Component {
	constructor(props) {
		super(props);
		this.elementHtml
	}

	createForm() {
		this.elementHtml = document.createElement('form')

		for(const key in this.props) {
			this.elementHtml[key] = this.props[key]
		}
	}

	render() {
		this.createForm()
		this.props.html = this.elementHtml
	}
}