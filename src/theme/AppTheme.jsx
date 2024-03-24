import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from '@mui/material';
import { preferTheme } from "./preferTheme";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ preferTheme }>
      <CssBaseline />

      {children}
    </ThemeProvider>
  )
}
