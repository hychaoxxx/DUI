import React from 'react';
import ReactDOM from 'react-dom';
import Button from './component/Button/Button';
import Modal from './component/Modal/Modal';
import Input from './component/Input/Input';
import Textarea from './component/Textarea/Textarea';

class App extends React.Component {
  state = {
    modalShow: false,
  }
  handlerModalShow = () => {
    this.setState({
      modalShow: true,
    })
  }
  handlerModalCancel = () => {
    this.setState({
      modalShow: false,
    });
  }
  handlerModalOk = () => {
    const {handlerModalCancel} = this;
    console.log('Click Ok!');
    handlerModalCancel();
  }
  render() {
    const {handlerModalShow, handlerModalCancel, handlerModalOk} = this;
    const {modalShow} = this.state;
    return (
      <div style={{marginLeft: 10, marginRight: 10}}>
        <div>
          <h2>Button</h2>
          <h3>Size: Default</h3>
          <Button className="demo-btn">Default</Button>
          <Button className="demo-btn" type="primary">Primary</Button>
          <Button className="demo-btn" type="dashed">Dashed</Button>
          <Button className="demo-btn" type="danger">Danger</Button>
          <Button className="demo-btn" disabled type="primary">Disabled</Button>
          <h3>Size: Large</h3>
          <Button className="demo-btn" size="large">Default</Button>
          <Button className="demo-btn" type="primary" size="large">Primary</Button>
          <Button className="demo-btn" type="dashed" size="large">Dashed</Button>
          <Button className="demo-btn" type="danger" size="large">Danger</Button>
          <Button className="demo-btn" disabled type="primary" size="large">Disabled</Button>
          <h3>Size: Small</h3>
          <Button className="demo-btn" size="small">Default</Button>
          <Button className="demo-btn" type="primary" size="small">Primary</Button>
          <Button className="demo-btn" type="dashed" size="small">Dashed</Button>
          <Button className="demo-btn" type="danger" size="small">Danger</Button>
          <Button className="demo-btn" disabled type="primary" size="small">Disabled</Button>
        </div>
        <h2>Modal</h2>
        <Button type="primary" onClick={handlerModalShow}>Click!</Button>
        <Modal
          title="弹窗"
          visible={modalShow}
          leftText="取消"
          rightText="确定"
          onCancel={handlerModalCancel}
          onOk={handlerModalOk}
        >
          <p style={{textAlign: 'center'}}>content...</p>
        </Modal>
        <h2>Textarea</h2>
        <Textarea
          placeholder="请输入"
          rows="3"
          maxLength={40}
          />
        <h2>Input</h2>
        <div style={{background: '#fff'}}>
          <Input
            placeholder="请输入"
            clearable={true}
          />
        </div>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

const node = document.getElementById('app');
ReactDOM.render(<App />, node);
