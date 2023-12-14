import { Stack } from '@mui/material';
import { format } from 'date-fns';
import AccessTimeIcon from 'src/assets/icons/AccessTimeIcon';
import AppointmentStatus from 'src/components/appointments/appointment-status/AppointmentStatus';
import { formatTimeToTimezone } from 'src/utils/formatTime';
import { DISPLAY_DATE_FORMAT, DISPLAY_TIME_FORMAT } from 'src/constants';
import {
  AppointmentDay,
  AppointmentDetails,
  AppointmentHeader,
  AppointmentInfo,
  Arrow,
  AvatarIcon,
  Details,
  Task,
  TaskText,
  Text,
} from './styles';
import { CaregiverAppointmentI } from './types';

type Props = {
  appointmentDays: CaregiverAppointmentI[];
  appointmentDay: Date;
  openDrawer: (appointmentId: string) => void;
};

export default function CaregiverAppointment({
  appointmentDays,
  appointmentDay,
  openDrawer,
}: Props): JSX.Element {
  return (
    <Stack>
      <AppointmentDay>{format(appointmentDay, DISPLAY_DATE_FORMAT)}</AppointmentDay>

      {appointmentDays.map((appointment) => (
        <Task key={appointment.id}>
          <AppointmentInfo>
            <AppointmentHeader>
              <TaskText>{appointment.name}</TaskText>
              <AppointmentStatus status={appointment.status} />
            </AppointmentHeader>
            <AppointmentDetails>
              <Details>
                <AccessTimeIcon />
                <Text>
                  {formatTimeToTimezone(
                    appointment.startDate,
                    appointment.caregiverInfo.timeZone,
                    DISPLAY_TIME_FORMAT
                  )}
                </Text>
              </Details>
              <Details>
                <AvatarIcon />
                <Text>{`${appointment.user.firstName} ${appointment.user.lastName}`}</Text>
              </Details>
            </AppointmentDetails>
          </AppointmentInfo>
          <Arrow onClick={(): void => openDrawer(appointment.id)} />
        </Task>
      ))}
    </Stack>
  );
}
