import { CalendarPicker } from '@mui/x-date-pickers';
import { useState } from 'react';
import { format } from 'date-fns';
import CreateAppointmentIcon from 'src/assets/icons/CreateAppointmentIcon';
import AppointmentDrawer from 'src/components/appointments/appointment-drawer/AppointmentDrawer';
import { CURRENT_DAY, BACKEND_DATE_FORMAT, USER_ROLE } from 'src/constants';
import { useLocales } from 'src/locales';
import { useGetAppointmentsByDateQuery } from 'src/redux/api/appointmentApi';
import CaregiverAppointment from './CaregiverAppointment';
import {
  AppointmentsContainer,
  Background,
  CalendarBtn,
  CalendarContainer,
  Container,
  IconBackground,
  MainText,
  NoAppointmentsContainer,
  TextContainer,
} from './styles';

export default function CaregiverSchedule({
  isCalendarVisible,
}: {
  isCalendarVisible: boolean;
}): JSX.Element | null {
  const { translate } = useLocales();

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [chosenDay, setChosenDay] = useState<Date>(CURRENT_DAY);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState<string>('');

  const formattedDate = format(chosenDay, BACKEND_DATE_FORMAT);

  const { data: appointments, isSuccess, isLoading } = useGetAppointmentsByDateQuery(formattedDate);

  if (isLoading) return null;

  const chooseDay = (date: Date | null): void => {
    if (date) {
      setChosenDay(date);
    }
  };

  const chooseCurrentDate = (): void => {
    setChosenDay(CURRENT_DAY);
  };

  const openDrawer = (appointmentId: string): void => {
    setIsDrawerOpen(true);
    setSelectedAppointmentId(appointmentId);
  };
  const closeDrawer = (): void => setIsDrawerOpen(false);

  return (
    <Background>
      <Container>
        {isCalendarVisible && (
          <CalendarContainer>
            <CalendarPicker
              className="calendar-picker"
              date={chosenDay}
              onChange={(date): void => chooseDay(date)}
            />
            <CalendarBtn onClick={chooseCurrentDate}>
              {translate('schedule_page.choose_today')}
            </CalendarBtn>
          </CalendarContainer>
        )}

        {isSuccess && appointments.length > 0 ? (
          <AppointmentsContainer>
            {selectedAppointmentId && (
              <AppointmentDrawer
                role={USER_ROLE.caregiver}
                selectedAppointmentId={selectedAppointmentId}
                isOpen={isDrawerOpen}
                onClose={closeDrawer}
                setIsDrawerOpen={setIsDrawerOpen}
              />
            )}
            <CaregiverAppointment
              appointmentDays={appointments}
              appointmentDay={chosenDay}
              openDrawer={openDrawer}
            />
          </AppointmentsContainer>
        ) : (
          <NoAppointmentsContainer>
            <IconBackground>
              <CreateAppointmentIcon />
            </IconBackground>
            <TextContainer>
              <MainText>{translate('schedule_page.no_appointments')}</MainText>
            </TextContainer>
          </NoAppointmentsContainer>
        )}
      </Container>
    </Background>
  );
}
