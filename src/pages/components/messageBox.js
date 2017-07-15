import React, { Component } from 'react';
import ShowCase from '../../components/showcase/showcase';
import tagsCodes from '../../codeExamples/components/tags';

const MessageBoxInfo = () =>
  <div className="sv-messagebox info">
    <button className="sv-messagebox__close">&times;</button>
    <header>
      <h6>Info Message</h6>
    </header>
    <main>
      <p>Message to show</p>
    </main>
  </div>;

const MessageBoxSuccess = () =>
  <div className="sv-messagebox success">
    <button className="sv-messagebox__close">&times;</button>
    <header>
      <h6>Success Message</h6>
    </header>
    <main>
      <p>Message to show</p>
    </main>
  </div>;

const MessageBoxError = () =>
  <div className="sv-messagebox error">
    <button className="sv-messagebox__close">&times;</button>
    <header>
      <h6>Error Message</h6>
    </header>
    <main>
      <p>Message to show</p>
    </main>
  </div>;

const MessageBoxWarning = () =>
  <div className="sv-messagebox warning">
    <button className="sv-messagebox__close">&times;</button>
    <header>
      <h6>Warning Message</h6>
    </header>
    <main>
      <p>Message to show</p>
    </main>
  </div>;

class MessageBox extends Component {
  render() {
    return (
      <div>
        <div className="sv-row sv-top-marged-75">
          <h1>Tags</h1>
        </div>

        <h6>Tag default</h6>
        <ShowCase example={MessageBoxInfo} code={tagsCodes.tagDefault} height="135px" />
        <h6>Tag danger</h6>
        <ShowCase example={MessageBoxSuccess} code={tagsCodes.tagDanger} height="135px" />
        <h6>Tag info</h6>
        <ShowCase example={MessageBoxError} code={tagsCodes.tagInfo} height="135px" />
        <h6>Tag warning</h6>
        <ShowCase example={MessageBoxWarning} code={tagsCodes.tagWarning} height="135px" />

      </div>
    );
  }
}

export default MessageBox;
