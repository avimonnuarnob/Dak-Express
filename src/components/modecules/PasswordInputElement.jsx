/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable prettier/prettier */
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Box, FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { useCallback, useState } from 'react';
import InputHelperIcon from '../atoms/InputHelperIcon';
import InputHelperText from '../atoms/InputHelperText';

const PasswordInputElement = ({ label = 'Password', error = '', boxStyles = {}, elementStyles = {}, fullWidth = false, helperText = '', ...rest }) => {
  const [passwordVisibility, setPasswordVisibility] = useState({ showPassword: false });

  const handleClickOnIcon = useCallback(() => setPasswordVisibility({ ...passwordVisibility, showPassword: !passwordVisibility.showPassword }), [passwordVisibility]);
  const handleMouseDownOnIcon = useCallback((event) => event.preventDefault(), []);

  return (
    <Box sx={boxStyles} autoComplete="off">
      <FormControl variant="outlined" fullWidth={fullWidth} error={!!error}>
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={passwordVisibility.showPassword ? 'text' : 'password'}
          label={label}
          sx={elementStyles}
          endAdornment={<InputHelperIcon
            visibility={passwordVisibility.showPassword}
            InitialIcon={VisibilityOffOutlinedIcon}
            ToggledIcon={VisibilityOutlinedIcon}
            onClick={handleClickOnIcon} 
            onMouseDown={handleMouseDownOnIcon}
            position='end'
            edge='end'
          />}
          {...rest}
        />

        <InputHelperText error={helperText} />
      </FormControl>
    </Box>
  )
};

export default PasswordInputElement;