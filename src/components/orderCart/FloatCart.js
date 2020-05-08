import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
  Avatar,
  Typography
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper
    },
    inline: {
      display: "inline"
    },
    listItem: {
      padding: theme.spacing(1, 0),
      justifyContent: "flex-end"
    },
    total: {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: theme.typography.fontSize * 2
    }
  })
);

const cart = [
  {
    id: 1,
    title: "Adobo",
    price: 7.0,
    image:
      "https://img.theculturetrip.com/1024x/smart/wp-content/uploads/2017/12/33374361143_e5a03d3d1d_k.jpg",
    unit: 1
  },
  {
    id: 2,
    title: "Tinola",
    price: 7.0,
    image:
      "https://img.theculturetrip.com/1024x/smart/wp-content/uploads/2017/12/33374361143_e5a03d3d1d_k.jpg",
    unit: 1
  }
];

function FloatCart() {
  const classes = useStyles({});

  return (
    <>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Your Order
      </Typography>
      <Typography component="p" variant="body1">
        You have {cart.length} items in your basket
      </Typography>
      <List className={classes.root}>
        {cart.map(product => (
          <React.Fragment key={product.id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Product" src={product.image} />
              </ListItemAvatar>
              <ListItemText
                primary={product.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      &euro;{product.price.toFixed(2)}
                    </Typography>
                    {` — ${product.unit}`}
                  </React.Fragment>
                }
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  //   onClick={() => store.dispatch(remove({ id: product.id }))}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        ))}
        <ListItem className={classes.listItem}>
          <Typography variant="subtitle1" className={classes.total}>
            &euro;
            {cart
              .reduce((acc, current) => (acc += current.price), 0)
              .toFixed(2)}
          </Typography>
        </ListItem>
      </List>
    </>
  );
}

export default FloatCart;

// import React, { Component } from "react";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
// import AppBar from "@material-ui/core/AppBar";
// import { makeStyles } from "@material-ui/core/styles";

// import Paper from "@material-ui/core/Paper";

// import FloatCartItem from "./FloatCartItems";

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1
//   },
//   paper: {
//     padding: theme.spacing(1),
//     margin: "auto",
//     maxWidth: 500
//   },
//   image: {
//     width: 128,
//     height: 128
//   },
//   img: {
//     margin: "auto",
//     display: "block",
//     maxWidth: "100%",
//     maxHeight: "100%"
//   }
// }));

// export default function FloatCart() {
//   const classes = useStyles();
//   const cart = [
//     {
//       id: 1,
//       title: "Adobo",
//       price: 7.0,
//       image:
//         "https://img.theculturetrip.com/1024x/smart/wp-content/uploads/2017/12/33374361143_e5a03d3d1d_k.jpg",
//       unit: 1
//     },
//     {
//       id: 2,
//       title: "Tinola",
//       price: 7.0,
//       image:
//         "https://img.theculturetrip.com/1024x/smart/wp-content/uploads/2017/12/33374361143_e5a03d3d1d_k.jpg",
//       unit: 1
//     }
//   ];

//   return (
//     <React.Fragment>
//       <div className={classes.root}>
//         <CssBaseline />
//         <AppBar position="relative">
//           <Typography variant="h6" color="inherit" noWrap>
//             Order Cart
//           </Typography>
//         </AppBar>
//         <Paper className={classes.paper}>
//           {cart.map(cartItem => (
//             <FloatCartItem classes={classes} cartItem={cartItem} />
//           ))}
//         </Paper>
//       </div>
//     </React.Fragment>
//   );
// }
