import React from 'react';
import '../css/TodoListcss.css';
import bin from '../img/bin.png';
import check from '../img/checkmark.png';
import edit from '../img/edit.png';


function ToDoList(props) {
      const listItems = props.items.map((item) =>
            <div key={item.key} className="container-list">
                  <div className="item">
                        <input type="text"
                              id={item.key}
                              value={item.title}
                              onChange={(e) => props.update(e.target.value, item.key)} />
                        <div className="manage">
                              <button className="edit">
                                    <img src={edit} />
                              </button>
                              <button className="check">
                                    <img src={check} />
                              </button>
                              <button onClick={() => props.remove(item.key)} className="delete">
                                    <img src={bin} />
                              </button>
                        </div>

                  </div>
            </div>
      )

      return (
            <>
                  {listItems}
            </>
      )
}
export default ToDoList;
