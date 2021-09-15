export class Component {
	constructor(props = {}) {
		this.props = props;
		this.render();
		this.createStyle();
	}

	createStyle() {
		for(const key in this.props.style) {
			this.props.html.style[key] = this.props.style[key]
		}
	}

	addStyle = (newStyle)=>{
		let style = this.props.style;
		for(let key in newStyle) {
			style[key] = newStyle[key];
		}
		this.props.style = style;
	}

	inject = (dom)=>{
		let result = document.querySelector(dom);
		result.innerHTML = "";
		result.append(this.props.html);
	}

	appendChildrens(childs) {
		let parent = this.props.html

		for (const child in childs) {
			parent.insertAdjacentElement('beforeend', childs[child])
		}

		return parent
	}
}