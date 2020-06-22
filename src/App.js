import React from 'react';
import './css/App.css';
import AddToDo from './component/AddToDo';
import ToDoList from './component/ToDoList';
import Header from './component/Header';
import Calendar from './component/Calendar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [],
      item: {
        title: '',
        key: '',
        done: false
      },
      user: 'MMONN',
    }
    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.update = this.update.bind(this);
    this.todoDone = this.todoDone.bind(this)
  }
  handleInput(e) {
    this.setState({
      item: {
        title: e.target.value,
        key: new Date,
      }
    })
  }
  addItem(e) {
    e.preventDefault();
    const newItem = this.state.item
    const key = this.state.item.key
    const newKey = key.length + 1
    console.log(newItem)
    if (newItem.title !== "") {
      const List = [...this.state.List, newItem];
      this.setState({
        List: List,
        item: {
          title: '',
          key: ''
        }
      })
    }
  }
  removeItem(key) {
    const filterItem = this.state.List.filter(item =>
      item.key !== key);
    this.setState({
      List: filterItem
    })
  }
  update(title, key) {
    const items = this.state.List;
    items.map(item => {
      if (item.key === key) {
        item.title = title
      }
    })
    this.setState({
      items: items
    })
  }
  todoDone() {
    const index = this.state.item.key
    console.log(index)
  }
  render() {
    return (
      <div className="container">
        <Header user={this.state.user}/>
        <Calendar />
        <AddToDo value={this.state.item.title} onSubmit={this.addItem} onChange={this.handleInput} />
        <ToDoList items={this.state.List}
          remove={this.removeItem}
          update={this.update}
          remark={this.remark}
          value={this.state.item.done}
        />
      </div>
    );
  }

}
export default App;
