import React from 'react';
import { Link } from 'react-router-dom';
import Sanfona from '../sanfona/sanfona';
import { observer } from 'mobx-react';

const SideBar = observer(
  class Sidebar extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const { sidebarStore } = this.props;
      return (
        <aside className="layout-sidebar sv-column">
          <div className="logo">
            <img src={`${process.env.PUBLIC_URL}images/saturn-v.svg`} width="150" height="auto" />
          </div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/colors">Cores</Link></li>
            <li><Link to="/grid">Grid</Link></li>
            <li><Link to="/buttons">Buttons</Link></li>
            <li><Link to="/espacamentos">Espaçamentos</Link></li>
            <li>
              <Sanfona
                title="Formulários"
                stateKey="formOpened"
                toggle={() => sidebarStore.toggle('formOpened')}
                opened={sidebarStore.sanfonas['formOpened']}
              >
                <ul>
                  <li><Link to="/formularios/inputs">Inputs</Link></li>
                  <li><Link to="/formularios/layouts">Layouts</Link></li>
                </ul>
              </Sanfona>
            </li>
            <li>
              <Sanfona
                title="Componentes"
                stateKey="componentsOpened"
                toggle={() => sidebarStore.toggle('componentsOpened')}
                opened={sidebarStore.sanfonas['componentsOpened']}
              >
                <ul>
                  <li><Link to="/componentes/breadcrumbs">Breadcrumbs</Link></li>
                </ul>
              </Sanfona>
            </li>
          </ul>
        </aside>
      );
    }
  }
);

export default SideBar;
