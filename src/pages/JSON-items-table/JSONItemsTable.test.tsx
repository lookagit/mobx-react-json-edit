import { shallow } from 'enzyme';
import * as React from 'react';
import { JsonStore } from '../../stores/JSONStore';

import { getClassNamesFromStyles } from '../../common/test-utils';
import { muiTheme } from '../app/mui-theme';

import { JSONItemsTable } from './JSONItemsTable';
import { styles } from './styles';

describe('Test Page: JSONItemsTable', () => {
  let JSONItemsTableComponent: JSX.Element;
  let jsonStore: JsonStore;
  let classes: { [key: string]: string };

  beforeAll(() => {
    classes = getClassNamesFromStyles(styles, muiTheme);
  });

  beforeEach(() => {
    jsonStore = new JsonStore();
    JSONItemsTableComponent = <JSONItemsTable classes={classes} jsonStore={jsonStore} />
  });

  it('should render', () => {
    const result = shallow(JSONItemsTableComponent);
    expect(result).toBeTruthy();
  });
});
