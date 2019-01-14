import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeAction from '../../actions/home';
import logo from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';
import styles1 from './app.module.css';
import styles2 from './app.module.less';
import styles3 from './app.module.scss';

import './noModule.css';
import './noModule.less';
import './noModule.scss';

@connect(
  state => ({
    count: state.home.count,
  }),
  (dispatch) => ({
    actions: bindActionCreators(Object.assign({}, homeAction), dispatch),
  })
)
class Home extends PureComponent {
  static propTypes = {
   
  }
  componentWillMount() {}
  click=() => {
    const {actions} = this.props;
    actions.add();

  }
  render() {
    const {count} = this.props;
    return (
      <div>
        <h1 >Home1</h1>
        <h2>{count}</h2>
        <p className={styles1.test}>测试module css</p>
        <p className={styles2.test}>测试module less</p>
        <p className={styles3.test}>测试module scss</p>

        <p>下面为 普通样式加载</p>
        <p className="no-css">测试 css</p>
        <p className="no-less">测试 less</p>
        <p className="no-scss">测试m scss</p>
        <button onClick={this.click}>add</button>
        <img src={logo} alt="logo" />
        <Link to="/about">To About</Link>
        
      </div>
    );
  }
}

export default Home;
