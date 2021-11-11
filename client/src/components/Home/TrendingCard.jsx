import { Trending } from "./Trending"
export const Card=()=>{
    return(
    <div className="trending-parent">
{/* <p className="trending-heading">Trending this week</p> */}
<Trending color={"#E89285"} link={"/trending-img1.png"} author={"by Barrack Obama"} tag={"The Promised Land"} />
<Trending color={"#A6D4EA"} link={"/trending-img2.png"} author={"by Brit Bennet"} tag={"The Vanishing Half"} />
<Trending color={"#FABBD0"} link={"/trending-img3.png"} author={"by Jay Shetty"} tag={"Think like a moron"}/>
</div>
    )
}
