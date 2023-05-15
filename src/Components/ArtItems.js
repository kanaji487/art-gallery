import './ArtItems.css'

function ArtItems(props){
  const { art, onImageClick } = props;
    return(
        <div className="grid-items">
          <img className="" src={art.thumbnailUrl} alt="waterfall near sea" onClick={() => {onImageClick(art)}} />
          <h6>{art.title}</h6>
        </div>
    )
}

export default ArtItems