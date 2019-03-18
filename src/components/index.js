import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Divider from '@material-ui/core/Divider';

import ResultContext from './ResultContext';

const Wrapper = React.memo(function Wrapper({ label, children, divided }) {
  return (
    <React.Fragment>
      <FormControl fullWidth component="fieldset">
        <FormLabel component="legend">
          <h3 style={{ margin: 0, marginTop: 20, marginBottom: 10 }}>{label}</h3>
        </FormLabel>
        <div style={{ paddingLeft: 20 }}>{children}</div>
      </FormControl>
      {divided && <Divider style={{ marginBottom: 10 }} />}
    </React.Fragment>
  );
});

function Group({ name, divided, label, children }) {
  const [value, setValue] = React.useState(null);
  const [state, dispatch] = React.useContext(ResultContext);

  function onChange(e) {
    setValue(e.target.value);
    dispatch({ [e.target.name]: e.target.value });
  }

  return (
    <Wrapper label={label} divided={divided}>
      {JSON.stringify({ state, value })}
      <RadioGroup aria-label={name} name={name} value={state[name]} onChange={onChange}>
        {children}
      </RadioGroup>
    </Wrapper>
  );
}

export { Wrapper };

export default Group;
