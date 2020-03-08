import React, { Component } from "react";

import HeaderSearch from "./HeaderSearch";

export default class HomeContainer extends Component {
  render() {
    const mainFeaturedPost = {
      title: "Find the best cook in your area",
      description:
        "Let our cook take care of the food while you take care of something more important... spending time with your family and friends",
      image: "https://fashion-diplomacy.com/wp-content/uploads/2017/06/1.jpg",
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
