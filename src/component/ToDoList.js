import React from 'react';
import './TodoListcss.css';

class ToDoList extends React.Component {
      constructor(props) {
            super(props);
      }
      render() {
            const { items } = this.props;
            const listItems = items.map((item) =>
                  <div key={item.key} className="container-list">
                        <div className="item">
                              <input type="text"
                                    id={item.key}
                                    value={item.title}
                                    onChange={(e) => this.props.update(e.target.value, item.key)} />
                              <div className="manage">
                                    <input type="checkbox" />
                                    <button onClick={() => this.props.remove(item.key)}>&times;</button>
                              </div>

                        </div>
                  </div>)

            return (
                  <div>
                        {listItems}
                  </div >
            );
      }

}

export default ToDoList;
