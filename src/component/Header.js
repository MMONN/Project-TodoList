import React from 'react';
import '../css/Headercss.css'

function Header(props) {
      return (
            <>
                  <div className="Header">
                        <p className="greeting">Hello, </p>
                        <p className="userName">{props.user}</p>
                  </div>
            </>
      )
}
export default Header;