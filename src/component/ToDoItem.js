// import React from 'react';


// class ToDoItem extends React.Component {
//       constructor(props) {
//             super(props);
//             this.state = {
//                   done: false,

//             }
//             this.remark = this.remark.bind(this);
//             this.removeTodo = this.removeTodo.bind(this);

//       }

//       remark() {
//             this.setState({
//                   done: !this.state.done
//             })
//       }
//       removeTodo() {
//             var index = parseInt(this.props.index);
//             this.props.remove(index);
//       }

//       render() {
//             const { list } = this.props
//             // if (this.state.done){
//             //       return "DONE" +content
//             // }
//             return (
//                   <div>
//                         {list}
//                         <input type="checkbox"
//                               value={this.state.done}
//                               onClick={this.remark} />
//                         {this.state.done ? "DONE" + list : list}
//                         <button onClick={this.removeTodo}>&times;</button>

//                   </div>
//             );
//       }

// }

// export default ToDoItem;
