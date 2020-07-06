import React, { useState } from 'react';
import './css/App.css';
import AddToDo from './component/AddToDo';
import ToDoList from './component/ToDoList';
import Header from './component/Header';
import Calendars from './component/Calendar';


function App() {
  const [List, setList] = useState([]);
  const [item, setItem] = useState({
    title: '',
    key: '',
    done: false,
  });
  const [user, setUser] = useState('MMONN');

  const handleInput = (e) =>
    setItem({
        title: e.target.value,
        key: new Date,
    })

  const addItem = (e) => {
    e.preventDefault();
    const newItem = item;
    const keys = item.key;
    const newKey = { keys }.length + 1
    // console.log(newItem)s
    if (newItem.title !== "") {
      const Lists = [...List, newItem];
      setList(Lists)
      console.log(Lists)
      setItem(
        {
          title: '',
          key: ''
        }
      )
      console.log(item)
    }
  }

  const removeItem = (key) => {
    const filterItem = List.filter(item =>
      item.key !== key);
    setList(filterItem)
  }

  const update = (title, key) => {
    const items = List;
    items.map(item => {
      if (item.key === key) {
        item.title = title
      }
    })
    setItem({
      items: items
    })
  }

  // const  todoDone = () => {
  //   const index = {item.key}
  //   console.log(index)
  // }

  return (
    <>
      <Header user={user} />
      <Calendars />
      <AddToDo value={item.title} onSubmit={addItem} onChange={handleInput} />
      <ToDoList items={List}
        remove={removeItem}
        update={update}
        // remark={remark}
        value={item.done}
      />
    </>
  )
}

export default App;
