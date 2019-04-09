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
  textTransform: 'none',
  fontSize: 18,
  padding: '6px 12px',
  border: '1px solid',
  lineHeight: 1.5,
  backgroundColor: '#007bff',
  borderColor: '#007bff',
  color: 'white',
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc'
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf'
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
  }
};
