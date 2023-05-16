import './App.css';
import AppHeader from './Components/AppHeader';
import ArtItems from './Components/ArtItems';
import arts from './Data/arts';
import ArtPost from './Components/ArtPost'
import {useState} from 'react'

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchText, setSearchtext] = useState('');

  // show image detail when click on the image
  function onImageSelected(theImage) {
    setSelectedImage(theImage);
  }

  // Close image popup when click outside image  popup
  function closeImagePopup(){
    setSelectedImage(null)
  }

  const filteredImages = arts.filter((art) => {
    return art.title.includes(searchText);
  });

  const artElements = filteredImages.map((art, index) => {
    return <ArtItems key={index} art={art} onImageClick={onImageSelected} />
  });

  let artPost = null
  if (!!selectedImage) {
    artPost = <ArtPost art = {selectedImage} onBgClick={closeImagePopup} />
  }

  return (
    <div className="app">
      <title>Art</title>
      <AppHeader />
      <div className='search'>
        <input 
        className='search-input'
        placeholder='search here' 
        value={searchText}
        onChange={(event) => {setSearchtext(event.target.value)}}
      />
      </div>
      <div className="app-grid">
        {artElements}
      </div>
      {artPost}
    </div>
  );
}

export default App;
