import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import AppointmentDrawer from 'src/components/appointments/appointment-drawer/AppointmentDrawer';
import { Background } from 'src/components/appointments/styles';
import MainHeader from 'src/components/reusable/header/MainHeader';
import TransactionsModal from 'src/components/transactions/TransactionsModal';
import { DEFAULT_REDIRECT_PATH } from 'src/constants';
import { useLocales } from 'src/locales';
import { useGetTransactionsQuery } from 'src/redux/api/transactionsApi';
import { UserRole } from 'src/redux/slices/userSlice';
import { useTypedSelector } from 'src/redux/store';

const TransactionsModalPage = (): JSX.Element | null => {
  const router = useRouter();
  const { translate } = useLocales();
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [selectedAppointmentId, setSelectedAppointmentId] = useState<string>('');

  const user = useTypedSelector((state) => state.user.user);

  useEffect(() => {
    if (!user) {
      router.replace(DEFAULT_REDIRECT_PATH);
    }
  }, [user, router]);

  const { id, role } = user || { id: '', role: '' };
  const { data: transactions } = useGetTransactionsQuery(id);

  if (!user) {
    return null;
  }

  const openDrawer = (appointmentId: string): void => {
    setIsDrawerOpen(true);
    setSelectedAppointmentId(appointmentId);
  };
  const closeDrawer = (): void => setIsDrawerOpen(false);

  return (
    <>
      <Head>
        <title>{translate('app_title')}</title>
      </Head>
      <MainHeader />
      <Background>
        <TransactionsModal
          transactions={transactions?.data || []}
          count={transactions?.count || 0}
          role={role as UserRole}
          openDrawer={openDrawer}
        />
        {selectedAppointmentId && (
          <AppointmentDrawer
            role={role}
            selectedAppointmentId={selectedAppointmentId}
            isOpen={isDrawerOpen}
            onClose={closeDrawer}
            setIsDrawerOpen={setIsDrawerOpen}
          />
        )}
      </Background>
    </>
  );
};

export default TransactionsModalPage;
