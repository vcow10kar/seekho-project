import "./Trending.css";
export const Trending = ({ color, link, tag, author }) => {
  return (
    <div>
      <div>
        
          <div className="trending-parent">
            <div className="trending" style={{ background: `${color}` }}>
              <div className="escape"></div>

              <div className="coverImage">
                <img src={link} alt="coverimg" />
              
            </div>
          </div>
        </div>
        <div className="tag">{tag}</div>
        <div className="author">{author}</div>
      </div>
    </div>
  );
};
