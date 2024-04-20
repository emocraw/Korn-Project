import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Choices from "./choices";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const Quiz = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            flexGrow: 1,
            my: "3rem",
          }}
        >
          <TextField
            id="standard-basic"
            label="โจทย์ปัญหา"
            variant="standard"
          />
          <Choices />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              p: "3rem",
              m: 1,
              bgcolor: "background.paper",
              borderRadius: 1,
            }}
          >
            <Button variant="contained" color="success">
              Add Quiz
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Quiz;
