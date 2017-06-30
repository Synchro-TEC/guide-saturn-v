import React, { Component } from 'react';
import ShowCase from '../components/showcase/showcase';
import ButtonExamples from '../codeExamples/buttons/codes';

const guideButtons = () =>
  <div className="sv-row--with-gutter">
    <div className="sv-column sv-text-center sv-padd-10">
      <div className="sv-vertical-marged-25">
        <button className="sv-button primary">Solid Button</button>
      </div>
      <div className="sv-vertical-marged-10 sv-padd-10 sv-text-left">
        É o tipo padrão de button, este tipo de botão sempre deve ser usado para a ação principal do usuário, exemplo:
        salvar, deletar, enviar, etc...
      </div>
    </div>
    <div className="sv-column sv-text-center sv-padd-10">
      <div className="sv-vertical-marged-25">
        <button className="sv-button out-primary">Outline Button</button>
      </div>
      <div className="sv-vertical-marged-10 sv-padd-10 sv-text-left">
        Usado para ações secundárias, não devem ser o único botão disponível em uma ação,
        eles sempre devem ser usados como auxiliar aos botões sólidos, exemplo: desfazer, voltar, cancelar, etc...
      </div>
    </div>
    <div className="sv-column sv-text-center sv-padd-10">
      <div className="sv-vertical-marged-25">
        <button className="sv-button link link-primary">Link Button</button>
      </div>
      <div className="sv-vertical-marged-10 sv-padd-10 sv-text-left">
        Usado onde as ações se parecem com um link, Eles também são usados em ações que propositalmente não queremos dar
        destaque, como cancelar o preenchimento de um formulário.
      </div>
    </div>
  </div>;

const buttonStyles = () =>
  <div>
    <p className="sv-text-center">
      <button className="sv-button primary marged">Primary</button>
      <button className="sv-button info marged">Info</button>
      <button className="sv-button danger marged">Danger</button>
      <button className="sv-button warning marged">Warning</button>
      <button className="sv-button default marged">Default</button>
    </p>
    <p className="sv-padd-5" />
    <p className="sv-text-center">
      <button className="sv-button out-primary marged">Primary</button>
      <button className="sv-button out-info marged">Info</button>
      <button className="sv-button out-danger marged">Danger</button>
      <button className="sv-button out-warning marged">Warning</button>
      <button className="sv-button out-default marged">Default</button>
    </p>
    <p className="sv-padd-5" />
    <p className="sv-text-center">
      <button className="sv-button link link-primary marged">Primary</button>
      <button className="sv-button link link-info marged">Info</button>
      <button className="sv-button link link-danger marged">Danger</button>
      <button className="sv-button link link-warning marged">Warning</button>
      <button className="sv-button link link-default marged">Default</button>
    </p>
  </div>;

const smallButtons = () =>
  <div>
    <p className="sv-text-center">
      <button className="sv-button primary small marged">Primary</button>
      <button className="sv-button info small marged">Info</button>
      <button className="sv-button danger small marged">Danger</button>
      <button className="sv-button warning small marged">Warning</button>
      <button className="sv-button default small marged">Default</button>
    </p>
    <p className="sv-padd-5" />
    <p className="sv-text-center">
      <button className="sv-button out-primary small marged">Primary</button>
      <button className="sv-button out-info small marged">Info</button>
      <button className="sv-button out-danger small marged">Danger</button>
      <button className="sv-button out-warning small marged">Warning</button>
      <button className="sv-button out-default small marged">Default</button>
    </p>
    <p className="sv-padd-5" />
    <p className="sv-text-center">
      <button className="sv-button link link-primary small marged">Primary</button>
      <button className="sv-button link link-info small marged">Info</button>
      <button className="sv-button link link-danger small marged">Danger</button>
      <button className="sv-button link link-warning small marged">Warning</button>
      <button className="sv-button link link-default small marged">Default</button>
    </p>
  </div>;

const fullButtons = () =>
  <div>
    <p><button className="sv-button primary full">Primary full</button></p>
    <p><button className="sv-button out-primary full">Primary full</button></p>
  </div>;

class ButtonsPage extends Component {
  render() {
    return (
      <div className="sv-row sv-top-marged-75">

        <h1>Buttons</h1>

        <p className="sv-text-big sv-top-marged-25">
          No Saturn-V temos algumas opções de estilo para buttons, esses estilos devem sempre ser aplicados seguindo o
          guia de estilhos.
        </p>

        <ShowCase guide={guideButtons} code={ButtonExamples.example1} height="280px" />

        <h3>Estilos</h3>

        <p className="sv-text-big sv-top-marged-15">
          Solid, Outline e Link buttons possuem variantes de estilos.
        </p>

        <ShowCase example={buttonStyles} code={ButtonExamples.example2} height="220px" />

        <h3>Small Buttons</h3>

        <ShowCase example={smallButtons} code={ButtonExamples.example3} height="220px" />

        <h3>Full Buttons</h3>

        <ShowCase example={fullButtons} code={ButtonExamples.example4} height="130px" />

      </div>
    );
  }
}

export default ButtonsPage;
