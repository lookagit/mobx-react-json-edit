import { CSSProperties } from '@mui/styles';

export type Classes =
  'container';

export const PAGE_HEADER_HEIGHT = 50;

export const styles: any= (): Record<Classes, CSSProperties> => ({
  container: {
    backgroundColor: '#dd2c00',
    color: '#fff',
    padding: 11,
    width: '100%',
    height: PAGE_HEADER_HEIGHT,
    borderRadius: 0,
  },
});
