import React from 'react';

function Favorites(props) {
 return (
  <div>
   <main className="container mt-3">
   <h1>Mes favoris</h1>
   <p>Liste de mes titres favoris</p>
   <hr />
   
   {/* <h3>Aucun favoris dans votre liste ...</h3> */}

   <div className="card-group search-results">
       {/* ... */}
   </div>
</main>

  </div>
 );
}

export default Favorites;