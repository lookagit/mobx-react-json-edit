import { CSSProperties } from '@mui/styles';
import { PAGE_HEADER_HEIGHT } from '../../components/page-header/styles';

export type Classes =
  'pageContent';

export const styles: any = (): Record<Classes, CSSProperties> => ({
  pageContent: {
    padding: 5,
    height: `calc(100% - ${PAGE_HEADER_HEIGHT}px)`,
    overflowY: 'auto',
  },
});
