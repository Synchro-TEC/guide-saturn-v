import React, { Component } from 'react';
import ShowCase from '../components/showcase/showcase';
import GridExamples from '../codeExamples/grid/codes';

const gridExampe1Show = () =>
  <div className="dm-grid-show">
    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50">Column</div>
    </div>

    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50">Column</div>
      <div className="sv-column sv-bg-color--blue-100">Column</div>
    </div>

    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50">Column</div>
      <div className="sv-column sv-bg-color--blue-100">Column</div>
      <div className="sv-column sv-bg-color--blue-200">Column</div>
    </div>

    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50">Column</div>
      <div className="sv-column sv-bg-color--blue-100">Column</div>
      <div className="sv-column sv-bg-color--blue-200">Column</div>
      <div className="sv-column sv-bg-color--blue-300">Column</div>
    </div>

    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50">Column</div>
      <div className="sv-column sv-bg-color--blue-100">Column</div>
      <div className="sv-column sv-bg-color--blue-200">Column</div>
      <div className="sv-column sv-bg-color--blue-300">Column</div>
      <div className="sv-column sv-bg-color--blue-400">Column</div>
    </div>

    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50">Column</div>
      <div className="sv-column sv-bg-color--blue-100">Column</div>
      <div className="sv-column sv-bg-color--blue-200">Column</div>
      <div className="sv-column sv-bg-color--blue-300">Column</div>
      <div className="sv-column sv-bg-color--blue-400">Column</div>
      <div className="sv-column sv-bg-color--blue-500">Column</div>
    </div>
  </div>;

const gridExampe2Show = () =>
  <div className="dm-grid-show">
    <div className="sv-row--with-gutter">
      <div className="sv-column sv-bg-color--green-50">Column</div>
    </div>

    <div className="sv-row--with-gutter">
      <div className="sv-column sv-bg-color--green-50">Column</div>
      <div className="sv-column sv-bg-color--green-100">Column</div>
    </div>

    <div className="sv-row--with-gutter">
      <div className="sv-column sv-bg-color--green-50">Column</div>
      <div className="sv-column sv-bg-color--green-100">Column</div>
      <div className="sv-column sv-bg-color--green-200">Column</div>
    </div>

    <div className="sv-row--with-gutter">
      <div className="sv-column sv-bg-color--green-50">Column</div>
      <div className="sv-column sv-bg-color--green-100">Column</div>
      <div className="sv-column sv-bg-color--green-200">Column</div>
      <div className="sv-column sv-bg-color--green-300">Column</div>
    </div>

    <div className="sv-row--with-gutter">
      <div className="sv-column sv-bg-color--green-50">Column</div>
      <div className="sv-column sv-bg-color--green-100">Column</div>
      <div className="sv-column sv-bg-color--green-200">Column</div>
      <div className="sv-column sv-bg-color--green-300">Column</div>
      <div className="sv-column sv-bg-color--green-400">Column</div>
    </div>

    <div className="sv-row--with-gutter">
      <div className="sv-column sv-bg-color--green-50">Column</div>
      <div className="sv-column sv-bg-color--green-100">Column</div>
      <div className="sv-column sv-bg-color--green-200">Column</div>
      <div className="sv-column sv-bg-color--green-300">Column</div>
      <div className="sv-column sv-bg-color--green-400">Column</div>
      <div className="sv-column sv-bg-color--green-500">Column</div>
    </div>
  </div>;

const gridExampe3Show = () =>
  <div className="dm-grid-show">
    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50 _20">_20</div>
      <div className="sv-column sv-bg-color--blue-200 _80">_80</div>
    </div>

    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50 _25">_25</div>
      <div className="sv-column sv-bg-color--blue-200 _75">_75</div>
    </div>

    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50 _20">_20</div>
      <div className="sv-column sv-bg-color--blue-200 _20">_20</div>
      <div className="sv-column sv-bg-color--blue-400 _60">_60</div>
    </div>

    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50 _40">_40</div>
      <div className="sv-column sv-bg-color--blue-200 _60">_60</div>
    </div>
  </div>;

const gridExampe4Show = () =>
  <div className="dm-grid-show">
    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50 _100--fixed">100px</div>
      <div className="sv-column sv-bg-color--blue-200">column</div>
      <div className="sv-column sv-bg-color--blue-400">column</div>
    </div>

    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50 _150--fixed">150px</div>
      <div className="sv-column sv-bg-color--blue-200">column</div>
    </div>

    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50 _150--fixed">150px</div>
      <div className="sv-column sv-bg-color--blue-200 _150--fixed">150px</div>
      <div className="sv-column sv-bg-color--blue-500">column</div>
    </div>

    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50 _200--fixed">200px</div>
      <div className="sv-column sv-bg-color--blue-200 _250--fixed">250px</div>
      <div className="sv-column sv-bg-color--blue-500">column</div>
    </div>

    <div className="sv-row">
      <div className="sv-column sv-bg-color--blue-50 _300--fixed">300px</div>
      <div className="sv-column sv-bg-color--blue-300">column</div>
    </div>
  </div>;

const gridExampe5Show = () =>
  <div className="dm-grid-show">
    <div className="sv-row sv-no-margins">
      <div className="sv-column sv-bg-color--blue-50">Column</div>
    </div>

    <div className="sv-row sv-no-margins">
      <div className="sv-column sv-bg-color--blue-100">Column</div>
      <div className="sv-column sv-bg-color--blue-200">Column</div>
    </div>
  </div>;

class Grid extends Component {
  render() {
    return (
      <div className="sv-row sv-mt--80">

        <h1>Grid</h1>

        <p className="sv-text-big sv-mt--25">
          Ridiculamente simples de usar, basta declarar <code>sv-row</code> e <code>sv-column</code> como filhos.
        </p>

        <ShowCase height="210px" example={gridExampe1Show} code={GridExamples.example1} />

        <div className="sv-row sv-mt--15" />

        <h3>Grid com margens</h3>

        <p className="sv-text-big sv-mt--15">
          O grid também pode ser usado com margem entre as colunas, neste caso, use <code>sv-row--with-gutter</code>.
        </p>

        <ShowCase height="210px" example={gridExampe2Show} code={GridExamples.example2} />

        <h3>Grid com colunas de tamanhos de diferentes</h3>

        <p className="sv-text-big sv-mt--15">
          Nosso grid possui alguns helpers para ajudar em layouts com tamnhos diferentes das colunas. Os helpers
          disponíveis são para colunas com os seguintes tamanhos: 20, 25, 40, 60, 75 e 80 porcento.
        </p>

        <p className="sv-text-big sv-mt--15">
          Para usar um dos helpers, adicione na classe sv-column uma outra classe com _ + valor, ex:
          <code>sv-column _20</code> para criar um coluna com 20% do tamnho disponivel.
        </p>

        <ShowCase height="140px" example={gridExampe3Show} code={GridExamples.example3} />

        <h3>Grid com coluna de tamanho fixo</h3>

        <p className="sv-text-big sv-mt--15">
          Assim como nas colunas de tamanhos variados, estão disponíveis alguns helpers para ajudar em layouts com
          colunas
          de tamnho fixo. Os helpers disponíveis para colunas de tamnho fixo são: 100, 150, 200, 250 and 300 pixels.
          Lembrando que as outras colunas de uma row irão se ajustar automaticamente para preencher os espaços.
        </p>

        <p className="sv-text-big sv-mt--15">
          Para usar um dos helpers, adicione na classe sv-column uma outra classe com _ + valor + --fixed, ex:
          <code>sv-column _100--fixed</code> para criar um coluna com 100px fixo.
        </p>

        <ShowCase height="170px" example={gridExampe4Show} code={GridExamples.example4} />

        <h3>Dicas</h3>
        <p className="sv-text-big sv-mt--15">
          Se você precisa de uma <code>.sv-row</code> ou uma <code>.sv-row--with-gutter</code> sem a margem inferior,
          é só
          adicionar a classe <code>.sv-no-margins</code> na sua row.
        </p>

        <ShowCase height="140px" example={gridExampe5Show} code={GridExamples.example5} />

      </div>
    );
  }
}

export default Grid;
