import React, {Component} from 'react';

class Input extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        const {titulo, acao, id, descricao} = this.props

        return (
            <div className="forms">
                <form>
                    <p>{titulo}</p>
                    <input placeholder={descricao} className="input" id={id} onChange={acao}></input>
                </form>
            </div>
        )
    }
}

export default Input;