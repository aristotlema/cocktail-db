import React from 'react';
import './DrinkList.scss';
import Link from './Link';
import Spinner from './Spinner';

const DrinkList = ({ cocktailResults, passDrinkID, loading }) => {

    const loadDetails = (event, idDrink) => {
        event.preventDefault();
        passDrinkID(idDrink);
    };
    // Keep in one function for readability 
    const isCocktailResults = () => {
        if(!cocktailResults) {
            return <h1>No results found</h1>;
        } else if(loading){
            return <Spinner />;
        } else if (cocktailResults.length > 0) {
            return cocktailResults.map(({ idDrink, strDrinkThumb, strDrink, strCategory }) => {
                return (
                    <div onClick={(e) => loadDetails(e, idDrink)} key={idDrink} className="drink-list-card">
                        <Link href={`/details/${idDrink}`}>
                            <img src={strDrinkThumb} alt={strDrink} className="drink-list-card-image"/>
                            <div className="drink-list-card-body">
                                <div className="card-title">{strCategory}</div>
                                <div className="card-drink-name">{strDrink}</div>
                                <button className="card-button">Details</button>
                            </div>
                        </Link>
                    </div>
                );
            });
        } else {
            return <h1>Something went wrong, try reloading the page</h1>;
        }
    };

    return (
        <section className="drink-list">
            {isCocktailResults()}
        </section>
    );
};

export default DrinkList;