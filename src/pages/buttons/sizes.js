import React, { Component } from 'react';
import ShowCase from '../../components/showcase/showcase';
import ButtonExamples from '../../codeExamples/buttons/codes';

const smallButtons = () =>
  <div>
    <p className="sv-text-center">
      <button className="sv-button primary small sv-mr--5">Primary</button>
      <button className="sv-button info small sv-mr--5">Info</button>
      <button className="sv-button danger small sv-mr--5">Danger</button>
      <button className="sv-button warning small sv-mr--5">Warning</button>
      <button className="sv-button default small sv-mr--5">Default</button>
    </p>
    <p className="sv-padd-5" />
    <p className="sv-text-center">
      <button className="sv-button out-primary small sv-mr--5">Primary</button>
      <button className="sv-button out-info small sv-mr--5">Info</button>
      <button className="sv-button out-danger small sv-mr--5">Danger</button>
      <button className="sv-button out-warning small sv-mr--5">Warning</button>
      <button className="sv-button out-default small sv-mr--5">Default</button>
    </p>
    <p className="sv-padd-5" />
    <p className="sv-text-center">
      <button className="sv-button link link-primary small sv-mr--5">Primary</button>
      <button className="sv-button link link-info small sv-mr--5">Info</button>
      <button className="sv-button link link-danger small sv-mr--5">Danger</button>
      <button className="sv-button link link-warning small sv-mr--5">Warning</button>
      <button className="sv-button link link-default small sv-mr--5">Default</button>
    </p>
  </div>;

const fullButtons = () =>
  <div>
    <p><button className="sv-button primary full">Primary full</button></p>
    <p><button className="sv-button out-primary full">Primary full</button></p>
  </div>;

class SizeButtonsPage extends Component {
  render() {
    return (
      <div className="sv-row sv-mt--80">

        <h1>Variações de Tamanhos</h1>

        <p className="sv-text-big sv-mt--25">
          No Saturn-V temos algumas opções de tamanhos para os buttons, além do tamanho padrão.
        </p>

        <h3>Small Buttons</h3>

        <ShowCase example={smallButtons} code={ButtonExamples.example3} height="220px" />

        <h3>Full Buttons</h3>

        <ShowCase example={fullButtons} code={ButtonExamples.example4} height="130px" />

        <button className="sv-bt-animated primary mail sv-mr--5"><span>Enviar</span></button>
        <button className="sv-bt-animated danger delete sv-mr--5"><span>Excluir</span></button>
        <button className="sv-bt-animated default view sv-mr--5"><span>Visualizar</span></button>
        <button className="sv-bt-animated info exit sv-mr--5"><span>Sair</span></button>
        <button className="sv-bt-animated info search sv-mr--5"><span>Procurar</span></button>
        <button className="sv-bt-animated info open sv-mr--5"><span>Abrir</span></button>
        <button className="sv-bt-animated info upload sv-mr--5"><span>Upload</span></button>
        <button className="sv-bt-animated info download sv-mr--5"><span>Download</span></button>

      </div>
    );
  }
}

export default SizeButtonsPage;
