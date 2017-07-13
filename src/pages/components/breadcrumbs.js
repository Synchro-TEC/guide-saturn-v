import React, { Component } from 'react';
import ShowCase from '../../components/showcase/showcase';
import breadcrumbsCodes from '../../codeExamples/components/breadcrumbs';

const defaultBreadCrumbs = () =>
  <div>
    <ul className="sv-breadcrumb">
      <li><a href="#"><i className="fa fa-home fa-fw" /></a></li>
      <li><a href="#">Users</a></li>
      <li><a href="#">Items</a></li>
      <li><a href="#">Config</a></li>
    </ul>
    <ul className="sv-breadcrumb">
      <li><a href="#"><i className="fa fa-home fa-fw" /></a></li>
      <li><a href="#"><i className="fa fa-male fa-fw" /> Users</a></li>
      <li><a href="#"><i className="fa fa-database fa-fw" /> Items</a></li>
      <li><a href="#"><i className="fa fa-cog fa-fw" /> Config</a></li>
    </ul>
  </div>;

const thinBreadCrumbs = () =>
  <div>
    <ul className="sv-breadcrumb--thin">
      <li><a href="#"><i className="fa fa-home fa-fw" /></a></li>
      <li><a href="#">Users</a></li>
      <li><a href="#">Items</a></li>
      <li><a href="#">Config</a></li>
    </ul>
    <ul className="sv-breadcrumb--thin">
      <li><a href="#"><i className="fa fa-home fa-fw" /></a></li>
      <li><a href="#">A page with a long name</a></li>
      <li><a href="#">Another page with a long name, very long</a></li>
      <li><a href="#">Another page with a long name, the longest name in a page</a></li>
    </ul>
  </div>;

class Breadcrumbs extends Component {
  render() {
    return (
      <div>
        <div className="sv-row sv-top-marged-75">
          <h1>Breadcrumbs</h1>
        </div>
        <h5 className="sv-mt--25">Breadcrumbs estilizado</h5>

        <ShowCase
          example={defaultBreadCrumbs}
          code={breadcrumbsCodes.defaultBreadcrumb}
          height="220px"
          bgColorContent="#fff"
        />

        <h5 className="sv-mt--25">Breadcrumbs Simplificados</h5>
        <ShowCase example={thinBreadCrumbs} code={breadcrumbsCodes.thinBreadcrumb} height="220px" />

      </div>
    );
  }
}

export default Breadcrumbs;
