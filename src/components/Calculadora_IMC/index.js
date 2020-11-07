import React, {Component} from 'react';

import Input from '../Input'

class CalculadoraImc extends Component {
    constructor (props) {
        super(props);
        this.state = {
            resultado: '0',
            mensagem: undefined,
            altura: '0',
            peso: '0'
        }
    }

    lidarComMudanca = (event) => {
        let id = event.target.id    
        let valor = event.target.value
        this.setState({
            [id]: valor
        })
    }

    lidarComSubmit = (event) => {
        event.preventDefault()
        let {altura, peso} = this.state

        altura = parseFloat(altura)
        peso = parseFloat(peso)

        let imc = peso / (altura * altura)

        this.setState({
            resultado: imc.toFixed(2)
        })

        setTimeout (() => {
            this.lidarComMensagem()
        }, 0)

    }

    lidarComMensagem = () => {
        let imc = this.state.resultado
        console.log(imc);

        if (imc < 17) {
            this.setState({
                mensagem: 'Você está muito abaixo do peso ideal!'
            })
        } else if (imc > 17 && imc < 18.49) {
            this.setState({
                mensagem: 'Você está abaixo do peso ideal!'
            })
        } else if (imc > 18.5 && imc < 24.99) {
            this.setState({
                mensagem: 'Você está no peso ideal!'
            })
        } else if (imc > 25 && imc < 29.99) {
            this.setState({
                mensagem: 'Você está acima do peso ideal!'
            })
        } else if (imc > 30 && imc < 34.99) {
            this.setState({
                mensagem: 'Você está com nível 1 de obesidade!'
            })
        } else if (imc > 35 && imc < 39.99) {
            this.setState({
                mensagem: 'Você está com nível 2 (severa) de obesidade!'
            })
        } else if (imc > 40) {
            this.setState({
                mensagem: 'Você está com nível 3 (mórbida) de obesidade!'
            })
        } else {
            this.setState({
                mensagem: 'Imc inválido'
            })
        }
    }

    render () {
        return (
            <div className="calculadora">
                <div>
                    <form>
                        <Input titulo="ALTURA" id="altura" acao={this.lidarComMudanca} descricao="1.60"/>
                        <Input titulo="PESO" id="peso" acao={this.lidarComMudanca} descricao="62.2"/>
                        <div className="btn"><button type="submit" onClick={this.lidarComSubmit}>Calcular</button></div>
                    </form>

                    <div className="resultado">
                        <h2>Seu IMC</h2>
                        <h2>{this.state.resultado}</h2>
                        <h2>Sua situação</h2>
                        <h4 className="mensagem">{this.state.mensagem}</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default CalculadoraImc;