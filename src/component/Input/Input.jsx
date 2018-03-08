import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style/Input.less';

export default class Input extends React.Component {
  static defaultProps = {
    clearable: false,
    defaultValue: undefined,
  }

  static propTypes = {
    clearable: PropTypes.bool,
    defaultValue: PropTypes.string,
    maxLength: PropTypes.number,
    onChange: PropTypes.func,
    onClear: PropTypes.func,
  }

  state = {
    value: this.props.defaultValue ? this.props.defaultValue : '',
  }
  
  handlerChange = (e) => {
    const {onChange} = this.props;
    this.setState({
      value: e.target.value,
    });
    if(typeof onChange === 'function'){
      onChange(e.target.value);
    }
  }

  handlerClear = () => {
    const {onClear} = this.props;
    this.setState({
      value: '',
    });
    if(typeof onClear === 'function'){
      onClear();
    }
  }
  render() {
    const {handlerChange, handlerClear} = this;
    const {children, className, clearable, maxLength, defaultValue, ...others} = this.props;
    const {value} = this.state;
    const cls = classNames({
      'dui-input': true,
      [className]: className,
    })

    return (
      <div className='dui-input-main'>
        <input
          className={cls}
          type="text"
          ref = "myTextInput"
          maxLength={maxLength}
          onChange={handlerChange}
          value={value}
          {...others}
        />
        {
          clearable && value ?
            <i
              className='dui-input-clear'
              onClick={handlerClear}
            /> : null
        }
      </div>
    )
  }
}