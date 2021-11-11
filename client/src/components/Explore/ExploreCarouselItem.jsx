import styles from './explore.module.css';
import styled from 'styled-components';

function ExploreCarouselItem({imageUrl, title, color}) {
    // const Para = styled.p`
    //     color: {color}

    // `
    return (
        <div>
            <img className = {styles.exploreCarouselImage} src = {imageUrl} alt = "images"/>
            {/* <p className = {styles.centered}>{title}</p> */}
        </div>
    )
}

export default ExploreCarouselItem;