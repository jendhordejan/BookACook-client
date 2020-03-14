import React, { useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useSelector } from "react-redux";

export const Snack = () => {
  const processStatus = useSelector(state => state.status.code);
  const processMessage = useSelector(state => state.status.message);
  const [open, setOpen] = React.useState(false);

  const Alert = props => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  };

  const status200Range = status => {
    return status >= 200 && status < 300;
  };

  const status400Range = status => {
    return status >= 400 && status < 500;
  };

  const status500Range = status => {
    return status >= 500 && status < 600;
  };

  const severity = status200Range(processStatus)
    ? "success"
    : status400Range(processStatus) || status500Range(processStatus)
    ? "error"
    : "info";

  const snackBarText = (status, message) => {
    if (status200Range(status)) return message;
    if (status400Range(status))
      return `There was an error. Status code: ${status}. ${message}`;
    if (status500Range(status))
      return `There was a server-side error. Status code: ${status}. ${message}`;
  };

  useEffect(() => {
    setOpen(true);
  }, [processStatus, processMessage]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        {snackBarText(processStatus, processMessage)}
      </Alert>
    </Snackbar>
  );
};
