import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import * as React from 'react';


const RadioButtonGroup = ({ onChange, value }: { onChange: Function, value: boolean }) => (
    <FormControl component="fieldset" style={{ width: 'max-content' }}>
      <RadioGroup
        value={value}
        onChange={(e) => onChange(e.target.value)}
        row aria-label="boolean"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="true" control={<Radio onChange={(e) => { console.log(e)}} />} label="True" />
        <FormControlLabel value="false" control={<Radio onChange={(e) => { console.log(e)}} />} label="False" />
      </RadioGroup>
    </FormControl>
)

export default RadioButtonGroup;