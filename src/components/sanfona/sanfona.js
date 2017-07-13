import React from 'react';
import PropTypes from 'prop-types';
import './sanfona.css';
import { observer } from 'mobx-react';
import AnimateHeight from 'react-animate-height';

const Sanfona = props => {
  let cssTitle;
  let height;
  if (props.opened) {
    cssTitle = 'sanfona-title active';
    height = 'auto';
  } else {
    cssTitle = 'sanfona-title';
    height = 0;
  }

  return (
    <div className="sanfona">
      <div className={cssTitle} onClick={() => props.toggle()}>{props.title} <span /></div>
      <AnimateHeight className="sanfona-container" duration={200} height={height}>
        {props.children}
      </AnimateHeight>
    </div>
  );
};

Sanfona.displayName = 'Sanfona';

Sanfona.defaultProps = {
  opened: false,
};

Sanfona.propTypes = {
  title: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
  opened: PropTypes.bool,
};

export default observer(Sanfona);
