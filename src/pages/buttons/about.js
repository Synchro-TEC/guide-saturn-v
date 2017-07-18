import React, { Component } from 'react';
import ShowCase from '../../components/showcase/showcase';
import ButtonExamples from '../../codeExamples/buttons/codes';

const guideButtons = () =>
  <div className="sv-row--with-gutter">
    <div className="sv-column sv-text-center sv-mp--10">
      <div className="sv-mv--25">
        <button className="sv-button primary">Solid Button</button>
      </div>
      <div className="sv-vertical-marged-10 sv-mp--10 sv-text-left">
        É o tipo padrão de button, este tipo de botão sempre deve ser usado para a ação principal do usuário, exemplo:
        salvar, deletar, enviar, etc...
      </div>
    </div>
    <div className="sv-column sv-text-center sv-mp--10">
      <div className="sv-mv--25">
        <button className="sv-button out-primary">Outline Button</button>
      </div>
      <div className="sv-vertical-marged-10 sv-mp--10 sv-text-left">
        Usado para ações secundárias, não devem ser o único botão disponível em uma ação,
        eles sempre devem ser usados como auxiliar aos botões sólidos, exemplo: desfazer, voltar, cancelar, etc...
      </div>
    </div>
    <div className="sv-column sv-text-center sv-mp--10">
      <div className="sv-mv--25">
        <button className="sv-button link link-primary">Link Button</button>
      </div>
      <div className="sv-mv--10 sv-mp--10 sv-text-left">
        Usado onde as ações se parecem com um link, Eles também são usados em ações que propositalmente não queremos dar
        destaque, como cancelar o preenchimento de um formulário.
      </div>
    </div>
  </div>;

const buttonStyles = () =>
  <div>
    <p className="sv-text-center">
      <button className="sv-button primary sv-mr--5">Primary</button>
      <button className="sv-button info sv-mr--5">Info</button>
      <button className="sv-button danger sv-mr--5">Danger</button>
      <button className="sv-button warning sv-mr--5">Warning</button>
      <button className="sv-button default sv-mr--5">Default</button>
    </p>
    <p className="sv-padd-5" />
    <p className="sv-text-center">
      <button className="sv-button out-primary sv-mr--5">Primary</button>
      <button className="sv-button out-info sv-mr--5">Info</button>
      <button className="sv-button out-danger sv-mr--5">Danger</button>
      <button className="sv-button out-warning sv-mr--5">Warning</button>
      <button className="sv-button out-default sv-mr--5">Default</button>
    </p>
    <p className="sv-padd-5" />
    <p className="sv-text-center">
      <button className="sv-button link link-primary sv-mr--5">Primary</button>
      <button className="sv-button link link-info sv-mr--5">Info</button>
      <button className="sv-button link link-danger sv-mr--5">Danger</button>
      <button className="sv-button link link-warning sv-mr--5">Warning</button>
      <button className="sv-button link link-default sv-mr--5">Default</button>
    </p>
  </div>;

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

class AboutButtonsPage extends Component {
  render() {
    return (
      <div className="sv-row sv-mt--80">

        <h1>Buttons</h1>

        <p className="sv-text-big sv-mt--25">
          No Saturn-V temos algumas opções de estilo para buttons, esses estilos devem sempre ser aplicados seguindo o
          guia de estilhos.
        </p>

        <ShowCase guide={guideButtons} code={ButtonExamples.example1} height="280px" />

        <h3>Estilos</h3>

        <p className="sv-text-big sv-mt--15">
          Solid, Outline e Link buttons possuem variantes de estilos.
        </p>

        <ShowCase example={buttonStyles} code={ButtonExamples.example2} height="220px" />

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

export default AboutButtonsPage;
