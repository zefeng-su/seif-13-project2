import React from 'react'
import CocktailDetails from './CocktailDetails'
import Loader from './Loader';
import "./CocktailList.css"
import { useGlobalContext } from '../context/apiContext'
import missing from '../images/missing.png'

function CocktailList() {
  const {cocktail, loading} = useGlobalContext();

  if(loading) {
    return <Loader/>
  };

  if(cocktail.length < 1) {
    return (
      <section className='cocktail-list'>
      <div className='container'>
        <div className='section-title'>
          <h2 className='text-uppercase'>no matches found</h2>
          <img className='missing' src={missing} alt="missing-img" />
        </div>
      </div>
    </section>
    )
  };

  return (
    <section className='cocktail-list'>
      <div className='container'>
        <div className='section-title'>
          <h2 className='text-uppercase'>
            your search results
          </h2>
          <div className='cocktail-content grid'>
            {cocktail.map((item) => {
              return <CocktailDetails key={item.id} {...item}/>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CocktailList