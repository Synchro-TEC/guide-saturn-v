import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="sv-row sv-mt--80">
          <h1>Introdução</h1>
          <p className="sv-text-big sv-mt--25">
            Depois de várias tentativas que falharam em unificar o padrão visual para as aplicações na Synchro, onde
            temos
            um
            cenário de tecnologias diversificadas, precisavamos de uma maneira de aplicar o mesmo visual em todas as
            nossas
            aplicações independente da tecnologia. Com base nas lições aprendidas, nasceu o Saturn-V.
          </p>

          <p className="sv-text-big sv-mt--15">
            O Saturn-V é nosso framework CSS e apenas CSS, agnóstico e desacoplado de qualquer framework ou lib JS ou
            tecnologias que geram JS e CSS no servidor usando linguagens muito distantes do desenvolvedor e dos
            problemas
            reais. Ele também é um Style Guide vivo com definições de como aplicar e usar os recursos providos.
          </p>
        </div>

        <div className="sv-row sv-mt--80">

          <div className="sv-column sv-text-center">
            <h4>Prototipe Rápido</h4>
            <img src={`${process.env.PUBLIC_URL}images/startup.svg`} width="auto" height="120" className=" sv-mt--25" />
          </div>

          <div className="sv-column sv-text-center">
            <h4>Documentação</h4>
            <img src={`${process.env.PUBLIC_URL}images/file.svg`} width="auto" height="120" className=" sv-mt--25" />
          </div>

          <div className="sv-column sv-text-center">
            <h4>Guia de Estilos</h4>
            <img
              src={`${process.env.PUBLIC_URL}images/pantone-1.svg`}
              width="auto"
              height="120"
              className="sv-mt--25"
            />
          </div>
        </div>

        <div className="sv-row sv-mt--80">
          <h3>Open Source</h3>
          <p className="sv-text-big sv-mt--15">
            Acreditamos que o Saturn-V pode ajudar mais pessoas e equipes a criarem aplicações rápidamente, então
            sinta-se a
            vontade em usar e contribuir com o deselvolvimento.
          </p>
        </div>

        <div className="sv-row sv-mt--25" />

        <hr />

        <div className="sv-row sv-mt--50">
          <img
            src={`${process.env.PUBLIC_URL}images/synchro.svg`}
            width="140"
            height="auto"
            style={{ margin: '0 auto' }}
          />
        </div>

        <div className="sv-row sv-mt--50" />
      </div>
    );
  }
}

export default Home;
