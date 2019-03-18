import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from './components/ResultContext';

import { FormControlLabel, Radio as Checkbox, TextField } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#54B648'
    },
    secondary: {
      main: '#54B648'
    }
  }
});

const merge = (oldState, newState) => ({ ...oldState, ...newState });

const Group = React.lazy(() => import('./components'));

function App() {
  const [state, dispatch] = React.useReducer(merge, {});

  return (
    <MuiThemeProvider theme={theme}>
      <Provider value={[state, dispatch]}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ margin: 30, width: 480 }}>
            <div style={{ textAlign: 'center' }}>
              <img src="/img/logo-ctm.png" alt="logo" style={{ height: 100 }} />
            </div>
            <React.Suspense fallback={<p>Loading....</p>}>
              <Group label="1. Sexe" name="q1" divided>
                <FormControlLabel value="m" control={<Checkbox />} label="Homme" />
                <FormControlLabel value="f" control={<Checkbox />} label="Femme" />
              </Group>
              <Group label="2. Age" name="q2" divided>
                <FormControlLabel value="1" control={<Checkbox />} label="25-30 ans" />
                <FormControlLabel value="2" control={<Checkbox />} label="30-45 ans" />
                <FormControlLabel value="3" control={<Checkbox />} label="45-60 ans" />
                <FormControlLabel value="4" control={<Checkbox />} label="Plus de 60 ans" />
              </Group>
              <Group label="3. Nationalité" name="q3">
                <FormControlLabel value="mg" control={<Checkbox />} label="Malagasy" />
                <FormControlLabel value="fr" control={<Checkbox />} label="Français" />
                <TextField
                  margin="normal"
                  variant="outlined"
                  placeholder="Autre, précisez"
                  style={{ marginBottom: 20, marginTop: 0 }}
                />
              </Group>
              <Group label="4. Connaissez-vous CTmotors ?" name="q4">
                <FormControlLabel value="yes" control={<Checkbox />} label="Oui" />
                <FormControlLabel value="no" control={<Checkbox />} label="Non" />
              </Group>
              <Group label="5. Si oui, Comment l’avez- vous connu?">
                <FormControlLabel value="yes" control={<Checkbox />} label="Oui" />
                <FormControlLabel value="no" control={<Checkbox />} label="Non" />
              </Group>
              <Group
                label="6.	Si vous entendez ou voyez le mot CTmotors, vous pensez à quoi ?"
                name="q6"
              >
                <TextField
                  margin="normal"
                  variant="outlined"
                  placeholder="Votre réponse ici"
                  multiline
                  style={{ marginBottom: 20, marginTop: 0 }}
                />
              </Group>
              <Group label="7. Savez-vous ou se place CTmotors ?" name="q7">
                <TextField
                  margin="normal"
                  variant="outlined"
                  placeholder="Votre réponse ici"
                  multiline
                  style={{ marginBottom: 20, marginTop: 0 }}
                />
              </Group>
              <Group label="8. Connaissez-vous des produits de chez CTmotors ?" name="q8" divided>
                <FormControlLabel value="yes" control={<Checkbox />} label="Oui" />
                <FormControlLabel value="no" control={<Checkbox />} label="Non" />
              </Group>
              <Group label="9. Si oui, précisez" name="q9">
                <FormControlLabel value="moto" control={<Checkbox />} label="Moto" />
                <FormControlLabel value="velo" control={<Checkbox />} label="Vélo" />
                <FormControlLabel value="tuk-tuk" control={<Checkbox />} label="Tuk tuk" />
                <FormControlLabel value="buggy" control={<Checkbox />} label="Buggy" />
                <FormControlLabel value="ssv" control={<Checkbox />} label="SSV" />
                <FormControlLabel
                  value="others"
                  control={<Checkbox />}
                  label="Atelier entretien réparation"
                />
                <TextField
                  margin="normal"
                  variant="outlined"
                  placeholder="Autre, précisez"
                  style={{ marginBottom: 20, marginTop: 0 }}
                />
              </Group>
              <Group label="9 à achetés des produits chez CTmotors ?" name="q11" divided>
                <FormControlLabel value="yes" control={<Checkbox />} label="Oui" />
                <FormControlLabel value="no" control={<Checkbox />} label="Non" />
              </Group>
              <Group label="12. Si oui, lesquels ?" name="q12" divided>
                <TextField
                  margin="normal"
                  variant="outlined"
                  placeholder="Precisez le produit et la marque"
                  style={{ marginBottom: 20, marginTop: 0 }}
                />
              </Group>
              <Group label="13. Si non, pourquoi pas ?" name="q13">
                <TextField
                  margin="normal"
                  variant="outlined"
                  placeholder="Votre réponse ici"
                  style={{ marginBottom: 20, marginTop: 0 }}
                />
              </Group>
            </React.Suspense>
          </div>
        </div>
      </Provider>
    </MuiThemeProvider>
  );
}

export default App;
