import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './style/Modal.less';

export default class Modal extends React.Component {
  static defaultProps = {
    title: '标题',
    visible: false,
    mask: true,
    leftText: '取消',
    rightText: '确定',
    onCancel() {},
    onOk() {},
  }

  static propTypes = {
    title: PropTypes.string,
    visible: PropTypes.bool,
    mask: PropTypes.bool,
    leftText: PropTypes.string,
    rightText: PropTypes.string,
    onCancel: PropTypes.func,
    onOk: PropTypes.func,
  }

  componentWillReceiveProps(props) {
    if(props.visible) {
      document.body.style.overflow = 'hidden';
    }
  }

  handlerCancel = () => {
    const { onCancel } = this.props;
    document.body.removeAttribute('style');
    onCancel();
  }

  handlerOk = () => {
    const { onOk } = this.props;
    document.body.removeAttribute('style');
    onOk();
  }
  render() {
    const { handlerCancel, handlerOk } = this;
    const { children, title, visible, mask, leftText, rightText } = this.props;

    return (
      <div className={classNames({"dui-modal-main": true, "dui-modal-show": visible})}>
        {
          mask ? <div className="dui-modal-mask" onClick={handlerCancel}></div> : null
        }
        <div className="dui-modal-wrapper">
          <div className="dui-modal-header">
            <div className="dui-modal-title">{title}</div>
          </div>
          <div className="dui-modal-content">{children}</div>
          <div className="dui-modal-footer">
            <button className="dui-modal-btn" onClick={handlerCancel}>{leftText}</button>
            <button className="dui-modal-btn" onClick={handlerOk}>{rightText}</button>
          </div>
        </div>
      </div>
    );
  }
}