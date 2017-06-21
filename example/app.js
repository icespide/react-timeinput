import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TimeInput from 'react-timeinput';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: new Date()
    };
  }
  render(){
    return (
      <div>
        <TimeInput
          value={this.state.value}
          onChange={(value) => this.setState({value: value})}
        />
      </div>
    );
  }
}


(() => {
  ReactDOM.render(<App />, document.getElementById('app'));
})();
