import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { RouteError } from '~pages/route-error/route-error';

/**
 * Load module dynamically.
 * Handles exception, renders error page in that case
 */
// tslint:disable-next-line:no-any completed-docs
const loadModule = async (loadingFactory: () => Promise<any>, moduleName: string): Promise<{default: any}> => {
  try {
    return {
      default: (await loadingFactory())[moduleName],
    };
  } catch (err) {
    return {
      default: () => <div><RouteError errorText={"ERROR"} /></div>,
    };
  }
}

const UploadPage = React.lazy(() => loadModule(() => import('~pages/upload-page/uploadPage'), 'UploadPage'));
const JSONItemsTable = React.lazy(() => loadModule(() => import('~pages/JSON-items-table/JSONItemsTable'), 'JSONItemsTable'));

const routes: RouteProps[] = [
  {
    path: '/',
    render: (props) => <UploadPage {...props} />,
  },
  {
    path: '/JSONList',
    render: (props) => <JSONItemsTable {...props} />,
  },
];

const getRoutes = (): JSX.Element[] => {
  return routes.map((route: RouteProps) => (
    <Route
      key={route.path as string}
      exact={true}
      path={route.path}
      render={route.render}
    />
  ));
}

/**
 * All Routes of app
 */
export const Routes: React.FunctionComponent = (): JSX.Element => (
  <React.Fragment>
    {getRoutes()}
  </React.Fragment>
);
