import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import CalculadoraImc from './components/Calculadora_IMC'

ReactDOM.render(
  <>
    <div className="container">
      <CalculadoraImc />
    </div>
  </>,
  document.getElementById('root')
);

serviceWorker.unregister();
