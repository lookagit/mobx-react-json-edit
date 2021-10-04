import { Paper, TextareaAutosize, TextField } from '@mui/material';
import { withStyles } from '@mui/styles';
import * as React from 'react';
import isDate from '../../utils/isDate';
import RadioButtonGroup from '../../components/radio-button-group/radio-button-group';
import { StyledComponentProps } from '../../types/styled';
import checkEmail from '../../utils/checkEmail'
import { Classes, styles } from './styles';
import { inject, observer } from 'mobx-react';
import { JsonStore } from '../../stores/JSONStore';
import str2bool from '../../utils/getBoolean';

/**
 * Common wrapper container component for a page. To have common page style
 */
const EditComponent: React.FunctionComponent<InjectedPropsEditComponent> = inject("jsonStore")(observer((({classes, value, keyName, objectForEdit, index, jsonStore }: InjectedPropsEditComponent): JSX.Element => {
  if (keyName === 'id' || keyName === '_id') {
    return (<div></div>);
  }
  if (typeof value == "boolean") {
    return <RadioButtonGroup
      value={value} 
      onChange={(valueFromRadio: string) => {
        jsonStore && jsonStore.updateJSON({
          ...objectForEdit,
          [keyName]: str2bool(valueFromRadio)
        }, index)}
    } />
  }
  if (typeof value === 'number') {
    return (
      <TextField
        value={value}
        style={{ width: '100%'}}
        onChange={(e: any) => {
          jsonStore && jsonStore.updateJSON({
            ...objectForEdit,
            [keyName]: e.target.value
          }, index)}
        }
        id="outlined-number"
        label="Number"
        type="number"
        InputLabelProps={{ shrink: true }}
      />
    )
  }
  if (typeof value === 'string') {
    if(isDate(value)) {
      return (
        <input 
          type="date"
          value={value}
          onChange={(e: any) => {
            jsonStore && jsonStore.updateJSON({
              ...objectForEdit,
              [keyName]: e.target.value
            }, index)}
          }
        />
      )
    }
    if (checkEmail(value)) {
      return (
        <TextField
          style={{ width: '100%'}}
          value={value}
          onChange={(e: any) => {
            jsonStore && jsonStore.updateJSON({
              ...objectForEdit,
              [keyName]: e.target.value
            }, index)}
          }
          id="outlined-number"
          label="Email"
          type="email"
          InputLabelProps={{ shrink: true }}
        />
      )
    }
    if (value.length < 60) {
      return (
        <TextField
          value={value}
          style={{ width: '100%'}}
          onChange={(e: any) => {
            jsonStore && jsonStore.updateJSON({
              ...objectForEdit,
              [keyName]: e.target.value
            }, index)}
          }
          id="outlined-number"
          label={keyName.toUpperCase()}
          type="text"
          InputLabelProps={{ shrink: true }}
        />
      )
    }
    return <TextareaAutosize
      aria-label="empty textarea"
      placeholder="Empty"
      value={value}
      style={{ width: 200 }}
      onChange={(e: any) => {
        jsonStore && jsonStore.updateJSON({
          ...objectForEdit,
          [keyName]: e.target.value
        }, index)}
      }
    />
  }
  
  return (
    <Paper className={classes.editComponentContainer}>
      <div></div>
    </Paper>
  );
})));

interface PageContentProps extends StyledComponentProps<Classes> {
  value: Array<any> | string | number | Date | boolean | Object | JSON;
  keyName: string;
  objectForEdit: Object,
  index: number,
}

type InjectedPropsStore  = {
  jsonStore: JsonStore
}

type PageContentType = PageContentProps;

type InjectedPropsEditComponent = Partial<InjectedPropsStore> & PageContentType

const StyledEditComponent =  withStyles(styles)(EditComponent);

export { StyledEditComponent as EditComponent };
