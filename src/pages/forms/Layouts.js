import React, { Component } from 'react';
import ShowCase from '../../components/showcase/showcase';
import FormCodes from '../../codeExamples/forms/codes';

const defaultFormGuide = () =>
  <div>
    <p>
      É o tipo formulário que pode/deve ser usado na maioria dos cenários. Observe o uso dos elementos{' '}
      <code>fieldset</code> e <code>legend</code> para organizar o formulário em setores.
    </p>
    <p>
      O uso do form padrão é muito simples, apenas use a classe <code>.sv-form</code> no formulário que desejar, e
      distribuir os campos conforme sua necessidade.
    </p>
    <p>
      O grid do Saturn-V é usado para ajudar na disposição dos elementos do formulário.
    </p>
  </div>;

const defaultForm = () =>
  <form className="sv-form ">
    <fieldset>
      <legend>Dados do Usuário</legend>
      <div className="sv-row--with-gutter">
        <div className="sv-column">
          <label>
            <span>Nome</span>
            <input type="text" />
          </label>
        </div>
        <div className="sv-column">
          <label>
            <span>E-mail</span>
            <input type="text" />
          </label>
        </div>
        <div className="sv-column">
          <label>
            <span>Telefone</span>
            <input type="text" />
          </label>
        </div>
      </div>
      <div className="sv-row--with-gutter">
        <div className="sv-column">
          <label>
            <span>Endereço</span>
            <input type="text" />
          </label>
        </div>
      </div>
      <div className="sv-row--with-gutter">
        <div className="sv-column">
          <label>
            <span>Bairro</span>
            <input type="text" />
          </label>
        </div>
        <div className="sv-column">
          <label>
            <span>Cidade</span>
            <input type="text" />
          </label>
        </div>
        <div className="sv-column">
          <label>
            <span>Estado</span>
            <select>
              <option>Escolha</option>
              <option value="SP">São Paulo</option>
              <option value="RJ">Rio de Janeiro</option>
            </select>
          </label>
        </div>
      </div>

      <div className="sv-form-action">
        <button className="sv-button link link-default sv-mr--25" type="button">Cancelar</button>
        <button className="sv-button info" type="button">Salvar</button>
      </div>

    </fieldset>
  </form>;

const compactForm = () =>
  <form className="sv-form sv-compact">
    <fieldset className="bordered">
      <legend>Dados do Usuário</legend>
      <div className="sv-row--with-gutter">
        <div className="sv-column">
          <label>
            <span>Nome</span>
            <input type="text" />
          </label>
        </div>
        <div className="sv-column">
          <label>
            <span>E-mail</span>
            <input type="text" />
          </label>
        </div>
        <div className="sv-column">
          <label>
            <span>Telefone</span>
            <input type="text" />
          </label>
        </div>
      </div>
      <div className="sv-row--with-gutter">
        <div className="sv-column">
          <label>
            <span>Endereço</span>
            <input type="text" />
          </label>
        </div>
      </div>
      <div className="sv-row--with-gutter">
        <div className="sv-column">
          <label>
            <span>Bairro</span>
            <input type="text" />
          </label>
        </div>
        <div className="sv-column">
          <label>
            <span>Cidade</span>
            <input type="text" />
          </label>
        </div>
        <div className="sv-column">
          <label>
            <span>Estado</span>
            <select>
              <option>Escolha</option>
              <option value="SP">São Paulo</option>
              <option value="RJ">Rio de Janeiro</option>
            </select>
          </label>
        </div>
      </div>
    </fieldset>
    <fieldset className="bordered">
      <legend>Prefêrencias</legend>
      <div className="sv-row--with-gutter">
        <div className="sv-column">
          <label>
            <span>Nome</span>
            <input type="text" />
          </label>
        </div>
        <div className="sv-column">
          <label>
            <span>Nome</span>
            <input type="text" />
          </label>
        </div>
        <div className="sv-column">
          <label>
            <span>Nome</span>
            <input type="text" />
          </label>
        </div>
      </div>
    </fieldset>

    <div className="sv-form-action">
      <button className="sv-button link link-default sv-mr--25" type="button">Cancelar</button>
      <button className="sv-button info" type="button">Salvar</button>
    </div>

  </form>;

class FormLayouts extends Component {
  render() {
    return (
      <div>
        <div className="sv-row sv-mt--80">
          <h1>Layouts de Formulários</h1>
        </div>

        <h5 className="sv-mt--25">Formulário Padrão</h5>

        <ShowCase example={defaultForm} code={FormCodes.example1} height="360px" />

        <h5 className="sv-mt--25">Formulário Compacto</h5>

        <ShowCase example={compactForm} code={FormCodes.example2} height="640px" />

      </div>
    );
  }
}

export default FormLayouts;
