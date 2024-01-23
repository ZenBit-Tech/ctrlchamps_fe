import { Button, FormControl, Rating, Typography, styled } from '@mui/material';

import { PRIMARY, SECONDARY } from 'src/theme/colors';
import { TYPOGRAPHY } from 'src/theme/fonts';
import typography from 'src/theme/typography';

export const CaregiverInfo = styled('div')`
  width: 375px;
  margin-top: -10px;
  background-color: ${PRIMARY.white};
  padding-inline: 15px;
  margin-inline: -16px;
  padding-bottom: 5px;
`;

export const CaregiverName = styled(Typography)`
  font-size: ${TYPOGRAPHY.base_sm}px;
  font-weight: ${typography.fontWeightBold};
  margin-left: 13px;
`;

export const UserRole = styled(Typography)`
  font-size: ${TYPOGRAPHY.xss}px;
  color: ${SECONDARY.lg_gray};
  padding-bottom: 5px;
`;

export const SubTitle = styled(Typography)`
  font-size: ${TYPOGRAPHY.base}px;
  color: ${SECONDARY.lg_gray};
  margin-block: 5px;
`;

export const RatingWrapper = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;
  background-color: ${PRIMARY.white};
  padding-inline: 15px;
  padding-top: 15px;
  padding-bottom: 30px;
  margin-inline: -16px;
  border-block: 1px solid ${SECONDARY.light_gray};

  &::after {
    content: '';
    position: absolute;
    width: 92%;
    height: 2px;
    background-color: ${SECONDARY.light_gray};
    margin-top: 40px;
  }
`;

export const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    marginRight: '8px',
  },
  '& .MuiRating-iconEmpty': {
    marginRight: '8px',
  },
});

export const ErrorMessage = styled(Typography)`
  color: ${({ theme }): string => theme.palette.error.main};
  font-size: ${TYPOGRAPHY.xss}px;
  font-weight: ${typography.fontWeightMedium};
`;

export const StyledFormControl = styled(FormControl)`
display: flex;
justify-content: center;
background-color: ${PRIMARY.white};
width: 375px;
padding-inline: 15px;
margin-inline: -16px;
padding-block: 12px;
border-block: 1px solid ${SECONDARY.light_gray};
`

export const StyledSubmitButton = styled(Button)`
  border-radius: 4px;
  width: 100%;
  height: 40px;
  margin-top: 100px;
`;