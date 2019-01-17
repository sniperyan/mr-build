import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

@withRouter
@connect(
  state => ({
    
  }),
  {},
)
class NotFound extends PureComponent {
  static propTypes = {
   
  }
  componentWillMount() {}
  click = () => {
    this.props.history.push('/home');
  }
  render() {
    return (
      <div>
        <h1>404</h1>
        <button onClick={this.click}>To Home</button>
      </div>
    );
  }
}

export default NotFound;
