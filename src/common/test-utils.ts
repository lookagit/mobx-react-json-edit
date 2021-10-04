/* eslint-disable */
import { Theme } from '@mui/material';
/** Gives mocked event object initialized with given value  */
export function getMockChangeEventObj(value: string):
Partial<React.ChangeEvent<Partial<HTMLSelectElement>>> {
  return {
    target: {
      value,
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    },
  };
}

/** Gives classes only from given styles in form : {classname: classname} */
export function getClassNamesFromStyles(styles: any, muiTheme: Theme):
{ [key: string]: string } {
  return Object
    .keys(styles(muiTheme))
    .reduce((prev, curr) => ({ ...prev, [curr]: curr }), {});
}
