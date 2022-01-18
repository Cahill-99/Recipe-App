import React from 'react';
// import InfiniteScroll from 'react-infinite-scroll-component';
import { useInfiniteScrollHook } from 'use-infinite-scroll-hook/lib';
import { useRef } from 'react';
//import useInfiniteScroll from 'react-infinite-scroll-hook';
import Orangefilters from './Orangefilters';





function Blueblk(props) {

    const targetContainer = useRef(null);

    const loadData = () => props.loadMore();
  
    useInfiniteScrollHook(targetContainer, loadData);


        // const { loading, items, hasNextPage, error, loadMore } = useLoadItems();

        // const [sentryRef, { rootRef }] = useInfiniteScroll({
        //     loading,
        //     hasNextPage,
        //     onLoadMore: loadMore,
        //     disabled: !!error,
        //     rootMargin: '0px 0px 400px 0px',
        //   });


        return (

            <div className = "blue-block-main">
                <Orangefilters toggleGlutenFilter={props.toggleGlutenFilter} 
                glutenFreeColor={props.glutenFreeColor}
                toggleVegetarianFilter={props.toggleVegetarianFilter}
                vegetarianColor={props.vegetarianColor}
                searchState={props.searchState}
                toggleTimeDropdown={props.toggleTimeDropdown}
                dropdown={props.dropdown}
                handleTime={props.handleTime}/>
                
                <div className = "white-block-main" ref = {targetContainer}>
                {/* <InfiniteScroll dataLength={props.recipes.length} next={props.loadMore} hasMore={true} loader={<h5>Loading...</h5>} scrollableTarget="recipes-wrapper"> */}
                    {/* <div className = "recipes-wrapper"> */}




                {props.recipes && props.recipes.map((recipeItem, index) => {
                    return  (

                            <div className = "recipe-card" key = {index}>
                                <img className = "recipe-image" src = {recipeItem.recipe.image} alt = {recipeItem.recipe.label}></img>
                                <div className = "recipe-card-title-bar">
                                    <p key={index} className = "card-text">{recipeItem.recipe.label}</p>
                                </div>
                                <div className = "recipe-card-icon-bar">
                                    <div className = "time-display">
                                    <img className = "clock-logo" src = "Images/clock.png" alt = "time icon"></img>
                                    <p className = "card-icon-text">{recipeItem.recipe.totalTime} min </p>
                                    </div>
                                    <div className = "time-display">
                                    <img className = "diet-logo" src = "Images/diet.png" alt = "time icon"></img>
                                    <p className = "card-icon-text">test</p>
                                    </div>
                                </div>
                            </div>

                    )}
                    
                )}

                {/* {(loading || hasNextPage) && (
                <ListItem ref={sentryRef}>
                    <Loading />
                </ListItem>
                )}
            </List>
        </ListContainer> */}



                    {/* </div> */}
                    {/* </InfiniteScroll> */}
                    {props.recipes.length === 0 && (

                        <img className = "placeholder-plate"  src = "Images/plate.png" alt = "plate with fork"></img>

                        )}
                


                </div>
            </div>
        );
    }

export default Blueblk;