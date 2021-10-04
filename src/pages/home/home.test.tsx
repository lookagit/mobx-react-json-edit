import { mount, shallow } from 'enzyme';
import { Provider } from 'mobx-react';
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Appbar } from '../../components/appbar/appbar';
import { UploadPage } from '../../pages/upload-page/uploadPage';
import { stores } from '../../stores/index';
import { getClassNamesFromStyles } from '../../common/test-utils';
import { styles as homeStyles } from '../../pages/home/styles';
import { muiTheme } from '../app/mui-theme';

import { Home } from './home';

describe('Test Page: Home', () => {
  let HomeComponent: JSX.Element;
  let classes: { [key: string]: string };

  beforeAll(() => {
    classes = {
       ...getClassNamesFromStyles(homeStyles, muiTheme),
    };
    HomeComponent = (
      <Provider {...stores}>
        <HashRouter>
          <React.Suspense fallback={<div>Loading ....</div>}>
            <Home classes={classes} />
          </React.Suspense>
        </HashRouter>
      </Provider>
    );
  });

  it('should render home component without problem', () => {
    const compo = shallow(HomeComponent);

    expect(compo).toHaveLength(1);
  });
});
