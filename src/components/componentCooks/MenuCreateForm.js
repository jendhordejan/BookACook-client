// import React from "react";
// import Avatar from "@material-ui/core/Avatar";

// import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
// import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";
// import Typography from "@material-ui/core/Typography";
// import InputLabel from "@material-ui/core/InputLabel";
// import MenuItem from "@material-ui/core/MenuItem";
// import FormControl from "@material-ui/core/FormControl";

// import Select from "@material-ui/core/Select";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles(theme => ({
//   root: {
//     height: "60vh"
//   },

//   image: {
//     backgroundImage:
//       "url(https://www.sydneycommercialkitchens.com.au/images/blog/PREPARATION.jpg)",
//     backgroundRepeat: "no-repeat",
//     backgroundColor:
//       theme.palette.type === "dark"
//         ? theme.palette.grey[900]
//         : theme.palette.grey[50],
//     backgroundSize: "cover",
//     backgroundPosition: "center"
//   },
//   paper: {
//     margin: theme.spacing(8, 4),
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center"
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main
//   },
//   form: {
//     width: "100%", // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//     height: "20vh"
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2)
//   },
//   fab: {
//     margin: theme.spacing(20)
//   },
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2)
//   }
// }));

// export default function MenuCreateForm(props) {
//   const classes = useStyles();
//   const { category, servings, price } = props.stateValues;
//   return (
//     <Grid container component="main" className={classes.root}>
//       <CssBaseline />
//       <Grid item xs={false} sm={4} md={7} className={classes.image} />
//       <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
//         <div className={classes.paper}>
//           <Avatar className={classes.avatar}>
//             <HourglassEmptyIcon />
//           </Avatar>
//           <Typography component="h1" variant="h6">
//             Let's start creating your menu.
//           </Typography>
//           <form className={classes.form} noValidate>
//             <Typography component="h1" variant="h6">
//               What kind of menu is this?
//             </Typography>
//             <FormControl className={classes.formControl}>
//               <InputLabel id="demo-simple-select-label">Category</InputLabel>
//               <Select
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 name="category"
//                 required
//                 value={category}
//                 onChange={props.handleChange}
//               >
//                 <MenuItem value={"Asian"}>Asian</MenuItem>
//                 <MenuItem value={"French"}>French</MenuItem>
//                 <MenuItem value={"Italian"}>Italian</MenuItem>
//               </Select>
//               {console.log(
//                 `check AFTER CHANGE state:
//                 category: ${category}
//                 servings: ${servings}
//                 price: ${price}`
//               )}
//             </FormControl>
//             <FormControl className={classes.formControl}>
//               <InputLabel id="demo-simple-select-label">Servings</InputLabel>
//               <Select
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select"
//                 name="servings"
//                 required
//                 value={servings}
//                 onChange={props.handleChange}
//               >
//                 <MenuItem value={1}>1</MenuItem>
//                 <MenuItem value={2}>2</MenuItem>
//                 <MenuItem value={3}>3</MenuItem>
//                 <MenuItem value={4}>4</MenuItem>
//                 <MenuItem value={5}>5</MenuItem>
//                 <MenuItem value={6}>6</MenuItem>
//               </Select>
//             </FormControl>

//             {/* <TextField
//               variant="outlined"
//               margin="normal"
//               required
//               fullWidth
//               name="price"
//               label="Price (€) per person"
//               type="price"
//               id="price"
//               value={price}
//               onChange={props.handleChange}
//             />
//             <Typography component="h1" variant="h6">
//               Total Price for this Menu: € {price * servings}
//             </Typography> */}
//           </form>
//         </div>
//       </Grid>
//     </Grid>
//   );
// }
