import React from 'react';
import {useState} from 'react';
import fetchJsonp from 'fetch-jsonp';
import Track from './Track';
// import FavService from './FavService';

function Home(props) {


const [title, setTitle] = useState('');
const [orderBy, setOrderBy] = useState('ALBUM_ASC');
const [musics, setMusics] = useState([]);

function changeTitle(event) {
setTitle(event.target.value);
}

function changeOrder(event) {
setOrderBy(event.target.value);
}

function setMusic(event) {
setMusic(event.target.value);
}

function onSearch(event) {
 event.preventDefault(); 
 
 const encodedTitle = encodeURIComponent(title);

 fetchJsonp(
`https://api.deezer.com/search?q=${encodedTitle}&order=${orderBy}&output=jsonp`
 )
 .then(res => res.json())
 .then(data => data.data)
 .then(musics => {
     setMusics(musics);
 });

}

// function onFavorites(music) {
//     FavService.toggleFavorite(music);
//     setMusics([...musics]);
// }

return (
<div>
 <main className="container mt-3">
<h1>Recherche {title}</h1>
  <p>Recherchez un titre sur Deezer en utilisant le formulaire suivant :</p>
  <hr />
  <form onSubmit={onSearch}>
   <div className="row">
    <label htmlFor="searchText" className="col-sm-2 col-form-label text-right">Titre&nbsp;:</label>
    <div className="col-sm-4">
     <input onChange={changeTitle} type="text" className="form-control" id="searchText"
      placeholder="Eminem, Armin Van Buuren, Rihanna, ..." />
    </div>
    <label htmlFor="searchText" className="col-sm-2 col-form-label text-right">Trier par :</label>
    <div className="col-sm-2">
     <select id="order" className="custom-select" onChange={changeOrder}>
      <option value="ALBUM_ASC">Album</option>
      <option value="ARTIST_ASC">Artiste</option>
      <option value="TRACK_ASC">Musique</option>
      <option value="RANKING">Les plus populaires</option>
      <option value="RATING_ASC">Les mieux notés</option>
     </select>
    </div>
    <div className="col-sm-2 text-right">
     <input type="submit" className="btn btn-primary" value="Go" />
    </div>
   </div>
  </form>
  <hr />
  {/* <h3>Aucun résultat pour cette recherche ...</h3> */}
  <h2>Résultats</h2>
  <div className="card-group search-results">
   {/* {musics.map(music => {
       return (
           <div>
               <div className="card w-50" style={{flex: 'initial'}}>
                <div className="card-body text-left">
                    <div className="media mb-2">
                        <img className="align-self-center mr-2 w-25"
                            src={music.album.cover} alt="" />
                        <div className="media-body">
                            <h5 className="card-title">{music.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{music.artist.name}/{music.album.title}</h6>
                        </div>
                    </div>
                    <audio src={music.preview} className="w-100" controls></audio><br />
                    <a href="#" className="btn btn-sm btn-danger"><i className="fas fa-heart"></i> Ajouter aux
                        favoris</a>
                </div>
            </div>
           </div>
       );
   })
} */}

    {musics.map(music => (
        // <Track key={music.id} music={music} onClick={onFavorites} />
        <Track key={music.id} music={music}/>
    ))}

  </div>
 </main>
</div>
);

// function changeTitle(){

// }
}

export default Home;