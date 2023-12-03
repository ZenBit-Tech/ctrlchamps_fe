import { useTypedSelector } from 'src/redux/store';
import FlowHeader from 'src/components/reusable/header/FlowHeader';
import { useLocales } from 'src/locales';
import {
  CancelAppointmentModal,
  useCancelAppointmentModal,
} from 'src/components/modal-cancel-appointment';
import OneTimeAppointment from './OneTimeAppointment';
import RecurringAppointment from './RecurringAppointment';
import { Background } from './styles';
import { Appointment } from './enums';

type Props = {
  onNext: () => void;
};

export default function AppointmentScheduling({ onNext }: Props): JSX.Element {
  const { translate } = useLocales();
  const { appointmentType } = useTypedSelector((state) => state.appointment);
  const { modalOpen, setModalOpen, handleOpen } = useCancelAppointmentModal();

  return (
    <>
      <FlowHeader
        text={
          appointmentType === Appointment.oneTime
            ? translate('create_appointment.header_one_time')
            : translate('create_appointment.header_recurring')
        }
        iconType="close"
        callback={handleOpen}
      />
      <Background>
        {appointmentType === Appointment.oneTime ? (
          <OneTimeAppointment onNext={onNext} />
        ) : (
          <RecurringAppointment onNext={onNext} />
        )}
      </Background>
      <CancelAppointmentModal open={modalOpen} setOpen={setModalOpen} />
    </>
  );
}
