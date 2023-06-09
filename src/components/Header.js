import React, { useState }  from 'react'
import SearchForm from '../components/SearchForm'
import './Header.css'
import Navbar from './Navbar'
import Favorites from '../components/Favorites';
 
 
function Header() {

  const [favVisibility, setfavVisibility] = useState(false);  // Initializing state variables using the useState hook
 
  return (
    <div className="holder">

      <Favorites 
        visibility={favVisibility} 
        onClose={() =>setfavVisibility(false)} //toggle visibility of Favorite component to false when closed  
      />
      
      <header className="header">
        <Navbar favVisibility={favVisibility} setfavVisibility={setfavVisibility} />  
          <div className="header-content flex flex-center text-center text-white" >
            <h2 className="header-title"> Cocktail recipes you love, right here.</h2> <br/>
            <p className="header-text fontsize-20 fontwidth-3" >We are #DrinkCrafters</p>
            <SearchForm type="text" placeholder="Search for a Cocktail..."/> <br/>
          </div>
      </header>

    </div>
  )
}

export default Header;