import React, { Component } from 'react';
import ShowCase from '../../components/showcase/showcase';
import loadersCode from '../../codeExamples/components/loaders';

const loaderBar = () => <span className="sv-bar-loader" />;
const loaderBarLarge = () => <span className="sv-bar-loader large" />;

const spinLoader = () => <span className="sv-spin-loader" />;
const spinLoaderLarge = () => <span className="sv-spin-loader large" />;

class Loaders extends Component {
  render() {
    return (
      <div>
        <div className="sv-row sv-top-marged-75">
          <h1>Loaders</h1>
        </div>

        <h6>Loader em barra default</h6>
        <ShowCase example={loaderBar} code={loadersCode.loaderBar} height="70px" />
        <h6>Loader em barra large</h6>
        <ShowCase example={loaderBarLarge} code={loadersCode.loaderBarLarge} height="70px" />

        <h6>Loader spin default</h6>
        <ShowCase example={spinLoader} code={loadersCode.spinLoader} height="70px" />
        <h6>Loader spin large</h6>
        <ShowCase example={spinLoaderLarge} code={loadersCode.spinLoaderLarge} height="70px" />

      </div>
    );
  }
}

export default Loaders;
