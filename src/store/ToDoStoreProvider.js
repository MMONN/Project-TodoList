import React, { useState, createContext } from "react"

export const ToDoContext = createContext(null);

export default function ToDoStoreProvider({ children }) {

      const [List, setList] = useState([]);
      const [item, setItem] = useState({
            title: '',
            key: '',
            done: false,
      });

      const ToDoData = {
            List,setList,item,setItem
      }
      return (
            <ToDoContext.Provider value={ToDoData}>
                  {children}
            </ToDoContext.Provider>
      );
}
