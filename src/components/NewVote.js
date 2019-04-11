import { FormControlLabel, Radio as Checkbox, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React from 'react';
import { buttonStyle } from '../utils/themes';
import { ResultProvider } from './ResultContext';

const Group = React.lazy(() => import('./'));

function NewVote() {
  return (
    <ResultProvider>
      {({ state, save }) => (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ margin: 30, width: 480 }}>
            <div style={{ textAlign: 'center' }}>
              <img src="/img/logo-ctm.png" alt="logo" style={{ height: 100 }} />
            </div>
            <React.Suspense fallback={<p>Loading....</p>}>
              <Group label="1. Sexe" name="sexe" divided category="personal-information">
                <FormControlLabel value="m" control={<Checkbox />} label="Homme" />
                <FormControlLabel value="f" control={<Checkbox />} label="Femme" />
              </Group>
              <Group label="2. Age" name="age" divided category="personal-information">
                <FormControlLabel value="1" control={<Checkbox />} label="25-30 ans" />
                <FormControlLabel value="2" control={<Checkbox />} label="30-45 ans" />
                <FormControlLabel value="3" control={<Checkbox />} label="45-60 ans" />
                <FormControlLabel value="4" control={<Checkbox />} label="Plus de 60 ans" />
              </Group>
              <Group label="3. Est-ce que cous connaissez CTmotors?" name="identity">
                <FormControlLabel value="yes" control={<Checkbox />} label="Oui" />
                <FormControlLabel value="no" control={<Checkbox />} label="Non" />
              </Group>
              <Group label="4. Si oui, où et comment l’avez-vous connu?" name="identity-response">
                <FormControlLabel value="media" control={<Checkbox />} label="Media" />
                <FormControlLabel value="social" control={<Checkbox />} label="Réseaux Sociaux" />
                <FormControlLabel
                  value="pub"
                  control={<Checkbox />}
                  label="Publicité TV - Radio - Magazine / Panneau publicitaire / Insertion dans les journaux / Evènements"
                />
                <FormControlLabel
                  value="friends"
                  control={<Checkbox />}
                  label="Amis - Bouche à oreille"
                />
                <TextField
                  margin="normal"
                  variant="outlined"
                  placeholder="Autres, précisez..."
                  style={{ marginBottom: 20, marginTop: 0 }}
                />
              </Group>
              <Group
                label="5. Connaissez-vous des produits de chez CTmotors ?"
                name="products"
                divided
              >
                <FormControlLabel value="yes" control={<Checkbox />} label="Oui" />
                <FormControlLabel value="no" control={<Checkbox />} label="Non" />
              </Group>
              <Group label="6. Si oui, précisez" name="products-response">
                <FormControlLabel value="moto" control={<Checkbox />} label="Moto" />
                <FormControlLabel value="velo" control={<Checkbox />} label="Vélo" />
                <FormControlLabel value="tuk-tuk" control={<Checkbox />} label="Tuk tuk" />
                <FormControlLabel value="buggy" control={<Checkbox />} label="Buggy" />
                <FormControlLabel value="ssv" control={<Checkbox />} label="SSV" />
                <FormControlLabel value="accessories" control={<Checkbox />} label="Accessoires" />
                <FormControlLabel
                  value="atelier"
                  control={<Checkbox />}
                  label="Atelier, entretien, réparation"
                />
              </Group>
              <Group
                label="7.	Si vous entendez ou voyez le mot CTmotors, vous pensez à quoi ?"
                name="idea"
              >
                <TextField
                  margin="normal"
                  variant="outlined"
                  placeholder="Votre réponse ici"
                  multiline
                  style={{ marginBottom: 20, marginTop: 0 }}
                />
              </Group>
              <Group label="8. Savez-vous ou se place CTmotors ?" name="localization">
                <TextField
                  margin="normal"
                  variant="outlined"
                  placeholder="Votre réponse ici"
                  multiline
                  style={{ marginBottom: 20, marginTop: 0 }}
                />
              </Group>

              <Group
                label="9. Vous avez déjà achetés des produits chez CTmotors ?"
                name="rent"
                divided
              >
                <FormControlLabel value="yes" control={<Checkbox />} label="Oui" />
                <FormControlLabel value="no" control={<Checkbox />} label="Non" />
              </Group>
              <Group
                label="10. Si oui, lesquels ?"
                name="rent-response"
                disabled={state.rent !== 'no'}
                divided
              >
                <FormControlLabel value="moto" control={<Checkbox />} label="Moto" />
                <FormControlLabel value="velo" control={<Checkbox />} label="Vélo" />
                <FormControlLabel value="tuk-tuk" control={<Checkbox />} label="Tuk tuk" />
                <FormControlLabel value="buggy" control={<Checkbox />} label="Buggy" />
                <FormControlLabel value="ssv" control={<Checkbox />} label="SSV" />
                <FormControlLabel value="accessories" control={<Checkbox />} label="Accessoires" />
                <FormControlLabel
                  value="atelier"
                  control={<Checkbox />}
                  label="Atelier, entretien, réparation"
                />
              </Group>
              <Group label="13. Si non, pourquoi pas ?" name="rent-response">
                <TextField
                  disabled={state.rent !== 'no'}
                  margin="normal"
                  variant="outlined"
                  placeholder="Votre réponse ici"
                  style={{ marginBottom: 20, marginTop: 0 }}
                />
              </Group>
              <Button
                variant="contained"
                color="primary"
                style={buttonStyle}
                size="large"
                onClick={save}
              >
                Enregister
              </Button>
            </React.Suspense>
          </div>
        </div>
      )}
    </ResultProvider>
  );
}

export default NewVote;
