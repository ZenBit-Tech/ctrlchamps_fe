import Head from 'next/head';
import { useState } from 'react';

import Appointments from 'src/components/appointments/Appointments';
import BookAppointment from 'src/components/book-appointment/BookAppointment';
import { PrivateRoute } from 'src/components/private-route/PrivateRoute';
import MainHeader from 'src/components/reusable/header/MainHeader';
import { USER_ROLE } from 'src/constants';
import { useLocales } from 'src/locales';
import { useGetAllAppointmentsQuery } from 'src/redux/api/appointmentApi';
import { TabType } from '../reusable/header/enums';
import { ActiveTab } from '../reusable/header/types';

export default function AppointmentsPage(): JSX.Element | null {
  const { translate } = useLocales();
  const [activeTab, setActiveTab] = useState<ActiveTab>(TabType.mainPage);

  const { data: appointments, isSuccess, isLoading } = useGetAllAppointmentsQuery();

  if (isLoading) return null;

  return (
    <PrivateRoute allowedRole={USER_ROLE.Seeker}>
      <Head>
        <title>{translate('app_title')}</title>
      </Head>
      <MainHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {isSuccess && appointments.length > 0 ? (
        <Appointments appointments={appointments} />
      ) : (
        <BookAppointment />
      )}
    </PrivateRoute>
  );
}