import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TimeInput from 'react-timeinput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'thwip'
    };
  }
  render(){
    return (
      <div>
        <TimeInput
          value={this.state.value}
          onChange={(e) => this.setState({value: e.target.value})}
        />
      </div>
    );
  }
}


(() => {
  ReactDOM.render(<App />, document.getElementById('app'));
})();
