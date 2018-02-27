import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style/Textarea.less';

export default class Textarea extends React.Component {
  static defaultProps = {
    showCounter: true,
    defaultValue: undefined,
  }

  static propTypes = {
    showCounter: PropTypes.bool,
    maxLength: PropTypes.number,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func,
  }

  state = {
    counterNum: this.props.defaultValue ? this.props.defaultValue.length : 0,
  }

  handlerChange = (e) => {
    const { onChange } = this.props;
    this.setState({
      counterNum: e.target.value.length,
    });
    if(onChange) {
      onChange(e.target.value);
    }
  }
  render() {
    const { handlerChange } = this;
    const { className, showCounter, maxLength, ...others } = this.props;
    const { counterNum } = this.state;
    const cls = classNames({
      'dui-textarea': true,
      [className]: className,
    });

    return (
      <div className='dui-textarea-main'>
        <textarea
          className='dui-textarea'
          maxLength={maxLength}
          onChange={handlerChange}
          {...others}
        />
        {
          showCounter ?
          <div className='dui-textarea-counter'>
            <span>{counterNum}</span>{maxLength ? '/' + maxLength : null}
          </div> : null
        }
      </div>
    )
  }
}