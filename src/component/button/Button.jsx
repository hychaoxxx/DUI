import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style/Button.less';

export default class Button extends React.Component {
  static defaultProps = {
    type: '',
    size: '',
    disabled: false,
  }

  static propTypes = {
    type: PropTypes.string,
    size: PropTypes.string,
    disabled: PropTypes.bool,
  }

  render() {
    const { children, type, size, disabled, className, ...other } = this.props;
    const cls = classNames({
      'dui-btn': true,
      'dui-btn-primary': type === 'primary',
      'dui-btn-dashed': type === 'dashed',
      'dui-btn-danger': type === 'danger',
      'dui-btn-lg': size === 'large',
      'dui-btn-sm': size === 'small',
      'dui-btn-disabled': disabled,
      [className]: className,
    })

  return (
    <button {...other} disabled={disabled} className={cls}>{ children }</button>);
  }
}
