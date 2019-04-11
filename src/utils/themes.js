import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#54B648'
    },
    secondary: {
      main: '#54B648'
    }
  }
});

export const buttonStyle = {
  boxShadow: 'none',
  fontSize: 18,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#54B648',
  borderColor: '#54B648',
  color: 'white',
  '&:hover': {
    backgroundColor: '#32CF30',
    borderColor: '#32CF30'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#32CF30',
    borderColor: '#32CF30'
  }
};
