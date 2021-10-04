import { Theme } from '@mui/material';
import { ClassNameMap } from '@mui/styles';

export interface StyledComponentProps<ClassName extends string> {
  /** classes provided from material styles */
  classes: ClassNameMap<ClassName>;
  /** Material theme */
  theme?: Theme;
}
