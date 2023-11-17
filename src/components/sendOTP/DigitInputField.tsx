import React, { FC } from 'react';

import { DigitInput } from 'src/components/sendOTP/styles';

interface DigitTextFieldProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className: string;
}

const DigitTextField: FC<DigitTextFieldProps> = ({ value, onChange, placeholder, className }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const digitValue:string = event.target.value.replace(/\D/g, '').slice(0, 1);
    onChange(digitValue);
  };

  return (
    <DigitInput
      variant="standard"
      margin="normal"
      className={className}
      value={value}
      onChange={handleInputChange}
      placeholder={placeholder}
    />
  );
};

export default DigitTextField;