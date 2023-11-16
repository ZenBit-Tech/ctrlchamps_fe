import React, { useState, useCallback } from 'react';

import { Container } from '@mui/system';
import { useTranslation } from 'react-i18next';
import { useSubmitVerificationCodeMutation } from 'src/redux/api/accountVerificationAPI';

import EmailInboxIcon from 'src/assets/icons/EmailInboxIcon';

import { FilledButton } from 'src/components/reusable/FilledButton';
import DigitTextField from 'src/components/sendOTP/digiticTextField';

import { AccountVerificationContainer, IconContainer, StyledParagraph, StyledParagraphMain, SubmitButtonContainer } from 'src/components/sendOTP/styles';

interface OTPMessageFieldProps { 
  onSubmit: () => void;
}

const OTPMessageField: React.FC<OTPMessageFieldProps> = ({ onSubmit }): JSX.Element => {
  const { t } = useTranslation();
  const [submitCode] = useSubmitVerificationCodeMutation();

  const [code, setCode] = useState<string[]>(['', '', '', '']);
  const [codeDoesNotMatch, setCodeDoesNotMatch] = useState<boolean>(false);

  const handleInputChange = useCallback((index: number) => (value: string) => {
    setCode((prevCode) => {
      const newCode = [...prevCode];
      newCode[index] = value;
      return newCode;
    });
    setCodeDoesNotMatch(false); 
  }, []);


  const handleSubmit = async (): Promise<void> => {
    try {
      const verificationCode = code.join('');
      const response = await submitCode({ code: verificationCode });
      if ("error" in response) {
        setCodeDoesNotMatch(true);
        setCode(['', '', '', '']);
      } else {
        onSubmit();
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  


  return (
    <Container component="main" maxWidth="sm">
      <AccountVerificationContainer>
        <IconContainer>
          <EmailInboxIcon />
        </IconContainer>
        <StyledParagraph>{t('account_verification.sent_code')}</StyledParagraph>
        <form>
          <div style={{ display: 'flex' }}>
            {[0, 1, 2, 3].map((index) => (
              <DigitTextField
                key={index}
                placeholder={index.toString()}
                value={code[index]}
                onChange={handleInputChange(index)}
                className={codeDoesNotMatch ? 'error' : ''}
              />
            ))}
          </div>
        </form>
        <StyledParagraphMain href='#'>{t('account_verification.request_code')}</StyledParagraphMain>
        <SubmitButtonContainer>
          <FilledButton
            fullWidth
            disabled={code.join('').length !== code.length}
            onClick={handleSubmit}
          >
            {t('account_verification.btn_submit')}
          </FilledButton>
        </SubmitButtonContainer>
      </AccountVerificationContainer>
    </Container>
  );
}

export default OTPMessageField;