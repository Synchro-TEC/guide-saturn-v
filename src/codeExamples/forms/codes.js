export default {
  example1: `
<form class="sv-form">
  <fieldset>
    <legend>Dados do Usuário</legend>
    <div class="sv-row--with-gutter">
      <div class="sv-column">
        <label>
          <span>Nome</span>
          <input type="text" />
        </label>
      </div>
      <div class="sv-column">
        <label>
          <span>E-mail</span>
          <input type="text" />
        </label>
      </div>
      <div class="sv-column">
        <label>
          <span>Telefone</span>
          <input type="text" />
        </label>
      </div>
    </div>
    <div class="sv-row--with-gutter">
      <div class="sv-column">
        <label>
          <span>Endereço</span>
          <input type="text" />
        </label>
      </div>
    </div>
    <div class="sv-row--with-gutter">
      <div class="sv-column">
        <label>
          <span>Bairro</span>
          <input type="text" />
        </label>
      </div>
      <div class="sv-column">
        <label>
          <span>Cidade</span>
          <input type="text" />
        </label>
      </div>
      <div class="sv-column">
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

    <div class="sv-form-action">
      <button class="sv-button link link-default sv-mr--25" type="button">Cancelar</button>
      <button class="sv-button info" type="button">Salvar</button>
    </div>

  </fieldset>
</form>
`,
  example2: `
<form class="sv-form sv-compact">
  <fieldset>
    <legend>Dados do Usuário</legend>
    <div class="sv-row--with-gutter">
      <div class="sv-column">
        <label>
          <span>Nome</span>
          <input type="text" />
        </label>
      </div>
      <div class="sv-column">
        <label>
          <span>E-mail</span>
          <input type="text" />
        </label>
      </div>
      <div class="sv-column">
        <label>
          <span>Telefone</span>
          <input type="text" />
        </label>
      </div>
    </div>
    <div class="sv-row--with-gutter">
      <div class="sv-column">
        <label>
          <span>Endereço</span>
          <input type="text" />
        </label>
      </div>
    </div>
    <div class="sv-row--with-gutter">
      <div class="sv-column">
        <label>
          <span>Bairro</span>
          <input type="text" />
        </label>
      </div>
      <div class="sv-column">
        <label>
          <span>Cidade</span>
          <input type="text" />
        </label>
      </div>
      <div class="sv-column">
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

    <div class="sv-form-action">
      <button class="sv-button link link-default sv-mr--25" type="button">Cancelar</button>
      <button class="sv-button info" type="button">Salvar</button>
    </div>

  </fieldset>
</form>
`,
};
