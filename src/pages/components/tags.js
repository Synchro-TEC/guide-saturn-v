import React, { Component } from 'react';
import ShowCase from '../../components/showcase/showcase';
import tagsCodes from '../../codeExamples/components/tags';

const tagDefault = () =>
  <div className="sv-tag default">
    <span className="sv-tag__close">×</span>
    <span className="sv-tag__content">Tag Text Default</span>
  </div>;

const tagPrimary = () =>
  <div className="sv-tag primary">
    <span className="sv-tag__close">×</span>
    <span className="sv-tag__content">Tag Text Primary</span>
  </div>;

const tagDanger = () =>
  <div className="sv-tag danger">
    <span className="sv-tag__close">×</span>
    <span className="sv-tag__content">Tag Text Danger</span>
  </div>;

const tagInfo = () =>
  <div className="sv-tag info">
    <span className="sv-tag__close">×</span>
    <span className="sv-tag__content">Tag Text Info</span>
  </div>;

const tagWarning = () =>
  <div className="sv-tag warning">
    <span className="sv-tag__close">×</span>
    <span className="sv-tag__content">Tag Text Warning</span>
  </div>;

class Tags extends Component {
  render() {
    return (
      <div>
        <div className="sv-row sv-top-marged-75">
          <h1>Tags</h1>
        </div>

        <h6>Tag default</h6>
        <ShowCase example={tagDefault} code={tagsCodes.tagDefault} height="90px" />
        <h6>Tag primary</h6>
        <ShowCase example={tagPrimary} code={tagsCodes.tagPrimary} height="90px" />
        <h6>Tag danger</h6>
        <ShowCase example={tagDanger} code={tagsCodes.tagDanger} height="90px" />
        <h6>Tag info</h6>
        <ShowCase example={tagInfo} code={tagsCodes.tagInfo} height="90px" />
        <h6>Tag warning</h6>
        <ShowCase example={tagWarning} code={tagsCodes.tagWarning} height="90px" />

      </div>
    );
  }
}

export default Tags;
