import React, { Component } from 'react';
import ShowCase from '../../components/showcase/showcase';
import inputCodes from '../../codeExamples/forms/inputCodes';

const inputDefault = () =>
  <form className="sv-form">
    <label>
      <span>Input padrão</span>
      <input type="text" placeholder="Default Input" />
    </label>
  </form>;

const inputInvalid = () =>
  <form className="sv-form">
    <label>
      <span>Input com status inválido</span>
      <input type="text" placeholder="Invalid Input" className="is--invalid" />
    </label>
  </form>;

const inputValid = () =>
  <form className="sv-form">
    <label>
      <span>Input com staus válido</span>
      <input type="text" placeholder="Valid Input" className="is--valid" />
    </label>
  </form>;

const inputDisabled = () =>
  <form className="sv-form">
    <label>
      <span>Input Desabilitado</span>
      <input type="text" placeholder="Disabled Input" disabled />
    </label>
  </form>;

const defaultForm = () =>
  <form className="sv-form">
    <p>
      <input type="text" className="is--20-of-100 code" placeholder="is--20-of-100" defaultValue="is--20-of-100" />
      <input type="text" className="is--20-of-100 code" placeholder="is--20-of-100" defaultValue="is--20-of-100" />
      <input type="text" className="is--60-of-100 code" placeholder="is--60-of-100" defaultValue="is--60-of-100" />
    </p>
    <p>
      <input type="text" className="is--20-of-100 code" placeholder="is--20-of-100" defaultValue="is--20-of-100" />
      <input type="text" className="is--20-of-100 code" placeholder="is--20-of-100" defaultValue="is--20-of-100" />
      <input type="text" className="is--20-of-100 code" placeholder="is--20-of-100" defaultValue="is--20-of-100" />
      <input type="text" className="is--20-of-100 code" placeholder="is--20-of-100" defaultValue="is--20-of-100" />
      <input type="text" className="is--20-of-100 code" placeholder="is--20-of-100" defaultValue="is--20-of-100" />
    </p>
    <p>
      <input type="text" className="is--10-of-100 code" placeholder="is--10-of-100" defaultValue="is--10-of-100" />
      <input type="text" className="is--10-of-100 code" placeholder="is--10-of-100" defaultValue="is--10-of-100" />
      <input type="text" className="is--10-of-100 code" placeholder="is--10-of-100" defaultValue="is--10-of-100" />
      <input type="text" className="is--10-of-100 code" placeholder="is--10-of-100" defaultValue="is--10-of-100" />
      <input type="text" className="is--10-of-100 code" placeholder="is--10-of-100" defaultValue="is--10-of-100" />
      <input type="text" className="is--10-of-100 code" placeholder="is--10-of-100" defaultValue="is--10-of-100" />
      <input type="text" className="is--10-of-100 code" placeholder="is--10-of-100" defaultValue="is--10-of-100" />
      <input type="text" className="is--10-of-100 code" placeholder="is--10-of-100" defaultValue="is--10-of-100" />
      <input type="text" className="is--10-of-100 code" placeholder="is--10-of-100" defaultValue="is--10-of-100" />
      <input type="text" className="is--10-of-100 code" placeholder="is--10-of-100" defaultValue="is--10-of-100" />
    </p>
    <p>
      <input type="text" className="is--15-of-100 code" placeholder="is--15-of-100" defaultValue="is--15-of-100" />
      <input type="text" className="is--15-of-100 code" placeholder="is--15-of-100" defaultValue="is--15-of-100" />
      <input type="text" className="is--15-of-100 code" placeholder="is--15-of-100" defaultValue="is--15-of-100" />
      <input type="text" className="is--15-of-100 code" placeholder="is--15-of-100" defaultValue="is--15-of-100" />
      <input type="text" className="is--40-of-100 code" placeholder="is--40-of-100" defaultValue="is--40-of-100" />
    </p>
  </form>;

class Inputs extends Component {
  render() {
    return (
      <div>
        <div className="sv-row sv-mt--80">
          <h1>Inputs</h1>
        </div>
        <h5 className="sv-mt--25">Estilos de inputs</h5>

        <ShowCase example={inputDefault} code={inputCodes.inputDefault} height="100px" />
        <ShowCase example={inputInvalid} code={inputCodes.inputInvalid} height="100px" />
        <ShowCase example={inputValid} code={inputCodes.inputValid} height="100px" />
        <ShowCase example={inputDisabled} code={inputCodes.inputDisabled} height="100px" />

      </div>
    );
  }
}

export default Inputs;
