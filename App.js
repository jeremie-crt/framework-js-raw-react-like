import {styles} from "./styles.js";
import {Component} from "./components/Component.js";
import {Form} from "./components/Form.js";
import {Div} from "./components/Div.js";
import {Input} from "./components/Input.js";
import {Select} from "./components/Select.js";
import {Textarea} from "./components/Textarea.js";
import {Button} from "./components/Button.js";
import {React} from "./React.js";

export class App extends Component {
    constructor(props = {}) {
        super(props);
        this.appComponent
    }

    onClickButton() {
        let button = document.querySelector('button')
        button.addEventListener('click', (e) => {
            window.alert('On déclenche le bouton');
        })
    }

    render() {
        let react = new React()
        let wrapper = document.createElement('section')

        //Solution pour AddStyles = NEW STYLES
        let input1 = react.createElement(Input, {id: 'lastName', type: 'text', name: 'lastName', placeholder:'Lastname' , style: styles.inputStyle})
        //Return full object
        let input1Element = input1.elementHtml
        input1.addStyle({color:'red', fontSize:'20px', borderBottom:'2px solid rgb(255,0,0)'})


        //Give Direct HTML ELEMENTS
        let input = react.createElementHtml(Input, {id: 'firstname', type: 'text', name: 'firstname', placeholder:'Firstname', style: styles.inputStyle})

        let button = react.createElementHtml(Button, {id: 'button', type: 'submit', name: 'submit', textContent: 'SEND', style: styles.buttonStyle})

        let textarea = react.createElementHtml(Textarea, {id: 'textarea', name: 'description', placeholder: 'Type a description in this area...', cols: '50', rows: '50', style: styles.textareaStyle})

        let select = react.createElementHtml(Select, {id: 'select', name: 'select', options: [{value: '25', textContent: '25'}, {value: '26', textContent: '26'}, {value: '27', textContent: '27'}, {value: '28', textContent: '28'}], style: styles.selectStyle})

        let formWithChilds = react.createElementWithChildrens(Form, {id: 'form-subscription', method: 'post'}, '', {
            input1Element,
            input,
            select,
            textarea,
            button
            }
        )

        let div = react.createElementWithChildrens(Div, {id: 'div-subscription', className: 'container'}, '', {formWithChilds})

        wrapper.insertAdjacentElement('beforeend', div)

        this.props.html = wrapper
    }
}