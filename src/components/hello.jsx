import React from 'react';
import * as actions from '../actions';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.context); // undefined
    const store = this.context.store; // FIXME
    this.props = {
      fruit: store.getStore().fruit, // FIXME
      onDeleteFruit: (name) => store.dispatch(actions.deleteFruit(name))
    }
  }

  render() {
    const {fruit, onDeleteFruit} = this.props;
    return <div>
      <h1>Hello, I like:</h1>
      <ul>
        {
          fruit.map(name => <li>
            {name}
            <button title="delete" onClick={() => onDeleteFruit(name)}>x</button>
          </li>)
        }
      </ul>
    </div>
  }
}

export default Hello;
