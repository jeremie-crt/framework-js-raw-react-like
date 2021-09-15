export class React {
	constructor() {
	}

	createElement(Component, attributes = {}, textContent = null) {
		return (new Component(attributes))
	}

	createElementHtml(Component, attributes = {}, textContent = null) {
		return (new Component(attributes)).elementHtml
	}

	createElementWithChildrens(Component, attributes = {}, textContent = null, childrens) {
		return (new Component(attributes)).appendChildrens(childrens)
	}

}