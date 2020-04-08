import React, { Component } from "react";

import HeaderSearch from "./HeaderSearch";
import { makeStyles } from "@material-ui/core/styles";

import DishListHomeContainer from "./DishListHomeContainer";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

function HomeContainer(props) {
  const classes = useStyles();

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
      <DishListHomeContainer classes={classes} />
    </>
  );
}

export default HomeContainer;
// render() {
//   const mainFeaturedPost = {
//     title: "Find the best cook in your area",
//     description:
//       "Let our cook take care of the food while you take care of something more important... spending time with your family and friends",
//     image:
//       "https://richmondmagazine.com/downloads/27931/download/Feature_BestRestaurants_RestaurantAdarra_Stuffed-squid_white-beans_greens_ShawneeCustalow_rp1219_teaser.jpg?cb=9072e3a62ddb7a279d5fc9cdbb1089c9&w=640&h=",
//     imgText: "main image description",
//     linkText: "Search"
//   };
