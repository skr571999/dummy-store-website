import React, { useGlobal } from "reactn";
import { Link as RouterLink } from "react-router-dom";

import clsx from "clsx";
import { Box, Button, Grid, Link, Paper, Typography } from "@material-ui/core";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    textField: {
      width: "25ch",
    },
    w100: {
      width: "100%",
    },
    center: {
      textAlign: "center",
    },
    left: {
      textAlign: "left",
    },
    right: {
      textAlign: "right",
    },
    bold: {
      fontWeight: "bold",
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(12),
      height: theme.spacing(12),
      margin: "auto",
    },
  })
);

const ProfileView = () => {
  const classes = useStyles();
  const { email, name } = useGlobal("userDetail")[0];

  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={10} md={8} lg={6}>
        <Box component={Paper} my={1}>
          <Grid container justify="center">
            <Grid item xs={11}>
              <Box className={classes.center} mt="40px">
                <Typography variant="h4">iStore Profile</Typography>
              </Box>

              <Box mt="40px">
                <Avatar className={classes.large} />
              </Box>

              <Box className={classes.center} mt="40px">
                <Typography variant="h5">{name}</Typography>
              </Box>

              <Box my={2}>
                <Grid container>
                  <Grid item xs={12}>
                    <Box component={Paper} px={3}>
                      <Grid container>
                        <Grid item xs={5}>
                          {["Email", "Mobile No.", "Address"].map(
                            (val, index) => (
                              <Box
                                key={index}
                                className={classes.center}
                                mt="30px"
                              >
                                <Typography
                                  className={clsx(classes.bold, classes.left)}
                                >
                                  {val}
                                </Typography>
                              </Box>
                            )
                          )}
                        </Grid>
                        <Grid item xs={7}>
                          {[email, "Not Available", "Not Available"].map(
                            (val, index) => (
                              <Box
                                key={index}
                                className={classes.center}
                                mt="30px"
                              >
                                <Typography className={classes.left}>
                                  {val}
                                </Typography>
                              </Box>
                            )
                          )}
                        </Grid>
                        <Grid item xs={12}>
                          <Box
                            mt="30px"
                            className={clsx(classes.w100, classes.right)}
                          >
                            <Link component={RouterLink} to="/register">
                              Reset Password
                            </Link>
                          </Box>
                        </Grid>
                        <Grid item xs={12}>
                          <Box
                            my="30px"
                            className={clsx(classes.w100, classes.center)}
                          >
                            <Button
                              variant="contained"
                              color="primary"
                              // onClick={handleLogin}
                            >
                              Edit
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProfileView;
