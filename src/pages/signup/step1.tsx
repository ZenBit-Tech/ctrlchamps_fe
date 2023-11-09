import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { FormControlLabel, Radio, FormLabel, FormHelperText, Button } from '@mui/material';
import { Box, Container } from '@mui/system';
import { useTranslation } from 'react-i18next';
import palette from 'src/theme/palette';
import typography from 'src/theme/typography';
import styled from '@emotion/styled';

const lightTheme = palette('light');
const lightFontWeight = typography.fontWeightRegular; 
const signupColorInLightTheme = lightTheme.common.signup;
const selectedItemColorLigthTheme = lightTheme.common.selected;

const BoxWrapper = styled(Box)`
  margin-top: 8px;
  position: relative;
  height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const NextButton = styled(Button)`
  width: 100%;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  height: 2.5em;
  background-color: ${signupColorInLightTheme};
  color: ${lightTheme.common.white};
  &:hover {
    background-color: ${signupColorInLightTheme}; // Retaining the same color on hover
  }
`;

const StyledParagraph = styled.p`
  width: 100%;
  color: grey;
  font-weight: ${lightFontWeight};
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;


interface Step1FormProps {
  onNext: () => void;
}

interface CustomRadioProps {
  label: string;
  description: string;
  value: string;
  selectedOption: string;
  handleOptionChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Step1Form: React.FC<Step1FormProps> = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>):void => {
    setSelectedOption(event.target.value);
  };

  const handleNext = ():void => {
    if (selectedOption) {
      onNext();
    }
  };
  const { t } = useTranslation();

  return (
    <Container component="main" maxWidth="sm">
      <BoxWrapper>
        <CustomRadio
          label="Seeker"
          description={t("seeker")}
          value="seeker"
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
        />
        <CustomRadio
          label="Caregiver"
          description={t("caregiver")}
          value="caregiver"
          selectedOption={selectedOption}
          handleOptionChange={handleOptionChange}
        />

        <div><NextButton
        disabled={!selectedOption}
        onClick={handleNext}
        >
          Next
        </NextButton>
        <StyledParagraph>
          {t("BySigningUp")} <a href="#">{t("terms_conditions")}</a>
        </StyledParagraph>
        </div> 
      </BoxWrapper>
    </Container>
  );
};

const CustomRadio: React.FC<CustomRadioProps> = ({
  label,
  description,
  value,
  selectedOption,
  handleOptionChange,
}) => {
  const backgroundColor = selectedOption === value ? selectedItemColorLigthTheme : 'transparent';

  return (
    <Box
      sx={{
        p: 2,
        border: `1px solid ${signupColorInLightTheme}`,
        borderRadius: '8px',
        backgroundColor,
        '&:hover': {
          cursor: 'pointer',
        },
      }}
      onClick={() => handleOptionChange({ target: { value } } as React.ChangeEvent<HTMLInputElement>)}
    >
      <FormControlLabel
        control={
          <Radio
            color="success"
            checked={selectedOption === value}
            onChange={handleOptionChange}
            value={value}
          />
        }
        label={
          <div>
            <FormLabel>
              <strong>{label}</strong>
            </FormLabel>
            <FormHelperText>{description}</FormHelperText>
          </div>
        }
      />
    </Box>
  );
};

export default Step1Form;
