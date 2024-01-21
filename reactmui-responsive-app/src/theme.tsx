import { createTheme } from "@mui/material";
import { cyan, teal } from "@mui/material/colors";


export const theme = createTheme({
    palette: {
        primary: {
          main: teal[500],
        },
        secondary: {
          main: cyan[500],
        },
      },
})