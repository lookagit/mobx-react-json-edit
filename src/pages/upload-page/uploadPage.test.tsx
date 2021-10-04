
import { shallow } from 'enzyme';
import * as React from 'react';
import { JsonStore } from '../../stores/JSONStore';

import { getClassNamesFromStyles } from '../../common/test-utils';
import { muiTheme } from '../app/mui-theme';

import { UploadPage } from './uploadPage';

describe('Test Page: Upload page', () => {
  let UploadPageComponent: JSX.Element;
  let jsonStore: JsonStore;

  beforeEach(() => {
    jsonStore = new JsonStore();
    UploadPageComponent = <UploadPage jsonStore={jsonStore} />
  });

  it('should render', () => {
    const result = shallow(UploadPageComponent);
    expect(result).toBeTruthy();
  });
});
