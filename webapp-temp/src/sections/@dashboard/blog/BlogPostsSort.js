import PropTypes from 'prop-types';
// @mui
import { MenuItem, TextField } from '@mui/material';

// ----------------------------------------------------------------------

BlogPostsSort.propTypes = {
  options: PropTypes.array,
  onSort: PropTypes.func,
  selectedIndex: PropTypes.number
};

export default function BlogPostsSort({ options, onSort, selectedIndex }) {
  return (
    <TextField select size="small" value={`${selectedIndex}`} onChange={onSort}>
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
