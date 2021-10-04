import { CSSProperties } from '@mui/styles';

export type Classes =
  'toolbar' |
  'toolbarRight' |
  'languageSelect' |
  'toolbarLeft' |
  'setLanguageLabel' |
  'menuButton' |
  'hide' |
  'appBar';

export const styles: any = (): Record<Classes, CSSProperties> => ({
  appBar: {
    paddingLeft: '10px',
    boxShadow: 'none',
    zIndex: 10,
  },
  toolbar: {
    color: '#fff',
  },
  toolbarLeft: {
    flexGrow: 1,
  },
  toolbarRight: {
    margin: 5,
    padding: 5,
    display: 'flex',
    backgroundColor: 'inherit',
  },
  setLanguageLabel: {
    color: '#fff',
    padding: 5,
  },
  languageSelect: {
    color: '#fff',
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 15,
  },
  hide: {
    display: 'none',
  },
});
