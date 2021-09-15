import {Component} from "./Component.js";

export class Textarea extends Component {
	constructor(props) {
		super(props);
		this.elementHtml
	}

	createTextarea() {
		this.elementHtml = document.createElement('textarea')

		for(const key in this.props) {
			this.elementHtml[key] = this.props[key]
		}
	}

	render() {
		this.createTextarea()
		this.props.html = this.elementHtml
	}
}