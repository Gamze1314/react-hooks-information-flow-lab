// refactor Header element

// pass callback function as a prop ' onDarkdModeClick to the Header component

import React from 'react' 

function Header({ isDarkMode , onDarkModeClick }){
// clicking on button element should stil toggle dark mode on and off 

    return (
    <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
}

export default Header 