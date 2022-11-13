import React from 'react';

import Box from 'utils/Box';

const Filter = ({ value, onChange }) => {
  return (
    <Box mb={ 4 }>
      <label htmlFor='filter'>Find contacts by name</label>
      <Box mt={ 2 }>
        <input
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </Box>
    </Box>
  );
};

export default Filter;
