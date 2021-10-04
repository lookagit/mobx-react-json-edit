import { Typography } from '@mui/material';
import * as React from 'react';
import { PageContent } from '~components/page-content/page-content';
import { PageHeader } from '~components/page-header/page-header';

const RouteError: React.FunctionComponent<RouteErrorProps> = (props: RouteErrorProps): JSX.Element => {
  const { errorText } = props;

  return (
    <div>
      <PageHeader headerTitle={"EROR HEADER"} />
      <PageContent>
        <Typography variant="h4">
          ERROR
        </Typography>
        {errorText}
      </PageContent>
    </div>
  );
};

interface RouteErrorProps {
  /** Error text to show in page */
  errorText: string;
}

export {
  RouteError
};
