import Head from 'next/head';
import { useState } from 'react';
import CaregiverSchedule from 'src/components/caregiver-schedule/CaregiverSchedule';
import Appointments from 'src/components/appointments/Appointments';
import BookAppointment from 'src/components/book-appointment/BookAppointment';
import MainHeader from 'src/components/reusable/header/MainHeader';
import { TabType } from 'src/components/reusable/header/enums';
import { ActiveTab } from 'src/components/reusable/header/types';
import { useLocales } from 'src/locales';
import { useGetAllAppointmentsQuery } from 'src/redux/api/appointmentApi';
import { USER_ROLE } from 'src/constants';

export default function HomePage(): JSX.Element | null {
  const { translate } = useLocales();
  const [activeTab, setActiveTab] = useState<ActiveTab>(null);
  const role = USER_ROLE.seeker;

  const { data: appointments, isSuccess, isLoading } = useGetAllAppointmentsQuery();

  if (isLoading) return null;

  return (
    <>
      <Head>
        <title>{translate('app_title')}</title>
      </Head>
      <MainHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {role === USER_ROLE.caregiver && (
        <CaregiverSchedule isCalendarVisible={activeTab === TabType.appointment} />
      )}
      {role === USER_ROLE.seeker && isSuccess && appointments.length > 0 && (
        <Appointments appointments={appointments} />
      )}
      {(role === USER_ROLE.seeker && !isSuccess) ||
        (role === USER_ROLE.seeker && appointments?.length === 0 && <BookAppointment />)}
    </>
  );
}
