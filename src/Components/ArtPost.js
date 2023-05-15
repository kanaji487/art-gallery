import './ArtPost.css'

function ArtPost(props) {
    const {art, onBgClick} = props;
    return(
        <div className="art-post">
            <div className="art-bg" onClick={onBgClick} />
            <div className="art-content">
                <img src={art.thumbnailUrl} alt="some" />
                <h3>{art.title}</h3>
            </div>       
        </div>
    );
};

export default ArtPost