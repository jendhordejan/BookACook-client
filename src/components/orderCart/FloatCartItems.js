// import React, { Component } from "react";

// import Grid from "@material-ui/core/Grid";
// import ButtonBase from "@material-ui/core/ButtonBase";
// import Typography from "@material-ui/core/Typography";

// export default class FloatCartItems extends Component {
//   render() {
//     const { classes, cartItem } = this.props;
//     return (
//       <Grid container spacing={2}>
//         <Grid item>
//           <ButtonBase className={classes.image}>
//             <img className={classes.img} alt="complex" src={cartItem.image} />
//           </ButtonBase>
//         </Grid>
//         <Grid item xs={12} sm container>
//           <Grid item xs container direction="column" spacing={1}>
//             <Grid
//               item
//               xs
//               container
//               direction="row"
//               justify="space-between"
//               alignContent="center"
//               spacing={0}
//             >
//               <Grid item xs>
//                 <Typography gutterBottom variant="subtitle1">
//                   {cartItem.title}
//                 </Typography>
//               </Grid>
//               <button>-</button>
//               <Typography gutterBottom variant="subtitle1">
//                 {cartItem.unit}
//               </Typography>
//               <button>+</button>
//               <span></span>
//             </Grid>
//             <Grid item>
//               <Typography variant="subtitle1">$19.00</Typography>
//             </Grid>
//             <Grid item>
//               <Typography variant="body2" style={{ cursor: "pointer" }}>
//                 Remove
//               </Typography>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     );
//   }
// }
