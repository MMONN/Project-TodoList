import React from 'react';
import '../css/AddToDocss.css'


class AddToDo extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  NewList: ""
            }
            
      }
      render() {
            const { onSubmit, onChange, value } = this.props
            return (
                  <div className="container-Add">
                        <form onSubmit={onSubmit}>
                              <input value={value}
                                    onChange={onChange}
                                    placeholder="add a new todo..." />
                              <button type="submit">ADD</button>
                        </form>
                  </div >
            );
      }

}

export default AddToDo;
