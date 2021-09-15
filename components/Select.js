import {Component} from "./Component.js";

export class Select extends Component {
    constructor(props) {
        super(props);
        this.elementHtml
    }

    createSelect() {
        this.elementHtml = document.createElement('select')

        for (const key in this.props) {
            if (key === 'options') {
                for (const val in this.props.options) {
                    let dataInOption = this.props.options[val]
                    let optionElmt = document.createElement('option')

                    for (const data in dataInOption) {
                        optionElmt[data] = dataInOption[data]
                    }
                    this.elementHtml.insertAdjacentElement('beforeend', optionElmt)
                }
            } else {
                this.elementHtml[key] = this.props[key]
            }
        }
    }

    render() {
        this.createSelect()
        this.props.html = this.elementHtml
    }
}