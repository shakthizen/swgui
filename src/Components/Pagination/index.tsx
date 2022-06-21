import React from "react";
import {
  AppBar as MUIAppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

type Props = {
  total?: number;
  prevLink?: null | string;
  nextLink?: null | string;
  onChange?: (url: string) => void;
};

const Pagination = ({ total, prevLink, nextLink, onChange }: Props) => {
  const handleClick = (url?: null | string) => {
    if (url && onChange) onChange(url);
  };

  return (
    <MUIAppBar position="static">
      <Toolbar>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          flex={1}
        >
          {total && <Typography>Total : {total}</Typography>}
          <Stack direction="row" spacing={2}>
            <IconButton
              sx={{ color: "white" }}
              disabled={!prevLink}
              onClick={() => handleClick(prevLink)}
            >
              <ArrowLeft />
            </IconButton>
            <IconButton
              sx={{ color: "white" }}
              disabled={!nextLink}
              onClick={() => handleClick(nextLink)}
            >
              <ArrowRight />
            </IconButton>
          </Stack>
        </Stack>
      </Toolbar>
    </MUIAppBar>
  );
};

export default Pagination;
