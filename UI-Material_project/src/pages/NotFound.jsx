import { Box, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material";

const NotFound = () => {
  const theme = useTheme();
  return (
    <Box>
      <Typography color={theme.palette.error.main} variant="h4">
        There is no design yet
        <br />
        <br />
        Please try again later..
      </Typography>
    </Box>
  );
};
export default NotFound;
