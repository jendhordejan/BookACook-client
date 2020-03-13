import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
// Material UI
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
//functions
import { userLogin } from "../UserCook/action";

class SignInForm extends Component {
  state = {
    email: "jendhordejan@gmail.com",
    password: "password"
  };

  handleChange = event => {
    const { value } = event.target;
    console.log("value in handleChange:", value);
    console.log(event);
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log("state is", this.state);
  };

  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;

    const userLoginData = { email, password };
    console.log("HANDLESUBMIT userLoginData", userLoginData);

    await this.props.userLogin(userLoginData, this.props.history);
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            className={classes.form}
            onSubmit={this.handleSubmit}
            // noValidate
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={this.handleChange}
              defaultValue={this.state.email}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={this.handleChange}
              defaultValue={this.state.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              href=""
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    );
  }
}

export default withRouter(connect("", { userLogin })(SignInForm));
