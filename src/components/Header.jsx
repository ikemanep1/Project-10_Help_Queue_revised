import React from 'react'

function Header(props){
  return (
    <div>
      <h1 className="color-toggle">Help Queue!</h1>
      <style jsx global>{`
        .color-toggle {
          color: red;
        }
        .color-toggle:hover {
          color: purple;
        }
        `}</style>
      </div>
    )
  }

  export default Header
