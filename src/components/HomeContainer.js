import React, { Component } from "react";

import HeaderSearch from "./HeaderSearch";

export default class HomeContainer extends Component {
  render() {
    const mainFeaturedPost = {
      title: "Find the best cook in your area",
      description:
        "Let our cook take care of the food while you take care of something more important... spending time with your family and friends",
      image:
        "https://richmondmagazine.com/downloads/27931/download/Feature_BestRestaurants_RestaurantAdarra_Stuffed-squid_white-beans_greens_ShawneeCustalow_rp1219_teaser.jpg?cb=9072e3a62ddb7a279d5fc9cdbb1089c9&w=640&h=",
      imgText: "main image description",
      linkText: "Search"
    };
    return (
      <>
        <HeaderSearch post={mainFeaturedPost} />
      </>
    );
  }
}
