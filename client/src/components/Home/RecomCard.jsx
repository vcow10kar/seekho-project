import Recommended from "./Recommended";

const RecomCard=()=>{
    return(
        <div className="recom-parent">
            {/* <p className="trending-heading">Trending this week</p> */}
            {/* <Recommended color={"#E89285"} link={"/img1obama.png"} author={"by Barrack Obama"} tag={"The Promised Land"} /> */}
            <Recommended color={"#FABBD0"} link={"/home_images/recom-image1.png"} author={"by Khaled Hossinie"} tag={"The Kite Runner"} />
            <Recommended color={"#FABBD0"} link={"/home_images/recom-image2.png"} author={"by Maria Hinojossa"} tag={"Once I was You"}/>
        </div>
    )
}

export default RecomCard;