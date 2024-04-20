import React from "react";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import { TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Choices = () => {
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "left",
    boxShadow: "none",
  }));
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>
            <Radio
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              name="radio-buttons"
              inputProps={{ "aria-label": "A" }}
              sx={{
                pb: 0,
                "& .MuiSvgIcon-root": {
                  fontSize: 35,
                },
              }}
            />
            <TextField
              id="standard-basic"
              label="Answer A"
              variant="standard"
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Radio
              checked={selectedValue === "b"}
              onChange={handleChange}
              value="b"
              name="radio-buttons"
              inputProps={{ "aria-label": "B" }}
              sx={{
                pb: 0,
                "& .MuiSvgIcon-root": {
                  fontSize: 35,
                },
              }}
            />
            <TextField
              id="standard-basic"
              label="Answer B"
              variant="standard"
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Radio
              checked={selectedValue === "c"}
              onChange={handleChange}
              value="c"
              name="radio-buttons"
              inputProps={{ "aria-label": "C" }}
              sx={{
                pb: 0,
                "& .MuiSvgIcon-root": {
                  fontSize: 35,
                },
              }}
            />
            <TextField
              id="standard-basic"
              label="Answer C"
              variant="standard"
            />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Radio
              checked={selectedValue === "d"}
              onChange={handleChange}
              value="d"
              name="radio-buttons"
              inputProps={{ "aria-label": "D" }}
              sx={{
                pb: 0,
                "& .MuiSvgIcon-root": {
                  fontSize: 35,
                },
              }}
            />
            <TextField
              id="standard-basic"
              label="Answer D"
              variant="standard"
            />
          </Item>
        </Grid>
      </Grid>
    </>
  );
};

export default Choices;
