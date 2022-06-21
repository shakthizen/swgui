import React from "react";
import { AppBar as MUIAppBar, Box, Toolbar, Typography } from "@mui/material";

type Props = { title?: string };

const AppBar = ({ title }: Props) => {
  return (
    <MUIAppBar position="static">
      <Toolbar>
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
    </MUIAppBar>
  );
};

export default AppBar;
