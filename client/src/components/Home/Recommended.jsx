import "./Recommended.css"
const Recommended=({color,link,author,tag})=>{
    return(
        <div>
            <div>
        <div className="recom-parent">
            <div className="recom" style={{background :`${color}`}}>
                <div className="recom-img">
                <img src={link} alt="recom img" />
            </div>
            </div>
        </div>
            <p className="tag">{tag}</p>
            <p className="author">{author}</p>
        </div>
        </div>
    )
}

export default Recommended;

// import "./Trending.css"
// export const Trending=({color,link,tag,author})=>{
    
//     return (
//        <div>
            
//             <div>
            
           
    
//         <div className="trending-parent">
      

//         <div className="trending" style={{background :`${color}`}}>
            
//             <div className="coverImage">
//                 <img src={link} alt="coverimg"  />
//                 </div>
            
//         </div>
//         </div>
//         <p className="tag">{tag}</p>
//         <p className="author">{author}</p>
//         </div>
//        </div>
    
        
//     )
// }
