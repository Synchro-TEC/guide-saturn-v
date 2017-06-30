import React, { Component } from 'react';
import SideBar from './../sidebar/Sidebar';

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sv-row sv-no-margins">
        <SideBar sidebarStore={this.props.sidebarStore} />
        <div className="sv-column content">
          <div className="sv-row">
            <div className="sv-column" />
            <div className="sv-column _80 sv-ph--20">
              {this.props.children}
            </div>
            <div className="sv-column" />
          </div>
        </div>
      </div>
    );
  }
}

export default Layout;
