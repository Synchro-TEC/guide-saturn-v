import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light';
import html from 'react-syntax-highlighter/dist/languages/xml';
import atom from 'react-syntax-highlighter/dist/styles/atom-one-light';
import { v4 } from 'node-uuid';
import CopyToClipboard from 'react-copy-to-clipboard';
import './showcase.css';

registerLanguage('html', html);

class ShowCase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      copied: false,
    };

    this._prepareToRender = this._prepareToRender.bind(this);
  }

  _prepareToRender() {
    let tabs = [];
    let panels = [];

    if (this.props.hasOwnProperty('guide')) {
      tabs.push(<Tab key={v4()}>Guia de Uso</Tab>);
      panels.push(
        <TabPanel key={v4()}>
          <div className="bg-content" style={{ height: this.props.height }}>
            {this.props.guide()}
          </div>
        </TabPanel>
      );
    }

    if (this.props.hasOwnProperty('example')) {
      tabs.push(<Tab key={v4()}>Exemplo</Tab>);
      panels.push(
        <TabPanel key={v4()}>
          <div className="bg-content" style={{ height: this.props.height }}>
            {this.props.example()}
          </div>
        </TabPanel>
      );
    }

    if (this.props.hasOwnProperty('code')) {
      tabs.push(<Tab key={v4()}>Código</Tab>);
      panels.push(
        <TabPanel key={v4()}>
          <div className="bg-code" style={{ height: this.props.height }}>
            <span className="copy">{this.state.copied ? 'Copiado!' : 'Click no código para copiar.'}</span>
            <CopyToClipboard text={this.props.code} onCopy={() => this.setState({ copied: true })}>
              <SyntaxHighlighter language="html" style={atom}>
                {this.props.code}
              </SyntaxHighlighter>
            </CopyToClipboard>
          </div>
        </TabPanel>
      );
    }

    return { tabs, panels };
  }

  render() {
    const { tabs, panels } = this._prepareToRender();

    return (
      <div className="show-case">
        <Tabs onSelect={() => this.setState({ copied: false })}>
          <TabList>
            {tabs}
          </TabList>
          {panels}
        </Tabs>
      </div>
    );
  }
}

ShowCase.displayName = 'ShowCase';

ShowCase.PropTypes = {
  code: PropTypes.string,
  example: PropTypes.element,
  guide: PropTypes.element,
  height: PropTypes.string,
};

export default ShowCase;
