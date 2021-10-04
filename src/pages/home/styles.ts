
import { Theme } from '@mui/material';
import { CSSProperties } from '@mui/styles';

export type Classes =
  'container' |
  'mainContent' |
  'mainWrapper' |
  'toolbar' |
  'innerWrapper' |
  'pageLoading';

const MAIN_CONTENT_PADDING = 3;

export const styles: any = (theme: Theme): Record<Classes, CSSProperties> => ({
  container: {
    display: 'flex',
  },
  mainContent: {
    flexGrow: 1,
    paddingTop: 15 + MAIN_CONTENT_PADDING,
    maxHeight: '100%',
    overflow: 'hidden',
  },
  mainWrapper: {
    width: '100%',
    height: '100%',
  },
  innerWrapper: {
    height: '100%',
    marginTop: '20px',
    boxShadow: '3px 3px 6px #e0e0e0, -3px 3px 6px #e0e0e0',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    marginBottom: '50px'
  },
  pageLoading: {
    margin: 15,
  },
});
