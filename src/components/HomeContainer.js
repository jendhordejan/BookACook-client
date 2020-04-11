import React, { Component } from "react";
import { connect } from "react-redux";

import HeaderSearch from "./HeaderSearch";
import DishListHomeContainer from "./DishListHomeContainer";
import FloatCart from "./orderCart/FloatCart";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Button from "@material-ui/core/Button";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9)
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 240
  }
}));

function HomeContainer(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

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
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        // className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>
            Logo Here
          </Typography>
          <Button color="inherit" href="/">
            Home
          </Button>
          <Button color="inherit" href="/signup">
            Become a cook
          </Button>
          {!props.user.jwt ? (
            <Button color="inherit" href="/signin">
              Login
            </Button>
          ) : (
            <Button color="inherit" href="/">
              Logout
            </Button>
          )}
          {/* <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        {/* <div className={classes.appBarSpacer} /> */}
        <HeaderSearch post={mainFeaturedPost} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <DishListHomeContainer classes={classes} />
              </Paper>
            </Grid>
            {/* Shoping Cart */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <FloatCart />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

function mapStateToProps(reduxState) {
  return {
    user: reduxState.user
  };
}

export default connect(mapStateToProps)(HomeContainer);
