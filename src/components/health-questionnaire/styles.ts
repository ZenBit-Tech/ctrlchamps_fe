import { Button, CardActions, Typography, styled } from '@mui/material';
import typography from 'src/theme/typography';
import { PRIMARY, SECONDARY } from 'src/theme/colors';
import { TYPOGRAPHY } from 'src/theme/fonts';
import { HEADER } from 'src/config-global';
import { FilledButton } from '../reusable';

export const Background = styled('div')`
  background-color: ${PRIMARY.light_main};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const QuestionnaireContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 550px;
  background-color: ${PRIMARY.white};
  border-radius: 4px;
  box-shadow: 0px 1px 16px 0px rgba(0, 0, 0, 0.1);
  margin-top: calc(24px + ${HEADER.FLOW_HEIGHT}px);
  margin-bottom: 5%;

  @media (max-width: 600px) {
    width: 300px;
  }
`;

export const QuestionnaireContainerContent = styled('div')`
  padding: 18px;
  border-bottom: 1px solid ${SECONDARY.light_gray};
`;

export const QuestionnaireTypeText = styled(Typography)`
  color: ${PRIMARY.black};
  font-size: ${TYPOGRAPHY.md}px;
  font-weight: ${typography.fontWeightMedium};
  padding-bottom: 10px;
`;

export const ActionButton = styled(Button)`
  width: 250px;
`;

export const SubmitButton = styled(FilledButton)`
  width: 90%;
  display: flex;
  margin: 20px auto;
  text-align: center;
  padding: 8px;
  font-size: ${TYPOGRAPHY.base_xs}px;
  text-transform: none;
  font-weight: ${typography.fontWeightMedium};
`;

export const CardActionsStyled = styled(CardActions)`
  justify-content: space-around;
`;
