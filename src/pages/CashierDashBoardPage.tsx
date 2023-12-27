import React from 'react';
import CashierNavBar from '../components/navbar/CashierNavBar';
import CashierSideBar from '../components/sidebar/CashierSideBar';
import MedicineGrid from '../components/medicinetable/MedicineGrid';
import OrderDetailsSideBar from '../components/order/OrderDetailsSideBar';
import Divider from '../components/divider/Divider';

type Props = {};

function CashierDashBoardPage({}: Props) {
  return (
    <div className='flex flex-col'>
      <div className='w-full'>
        <CashierNavBar />
      </div>

      <section>
        <div className='flex flex-row'>
          <CashierSideBar />

          <Divider />

          <MedicineGrid />

          <OrderDetailsSideBar />
        </div>
      </section>
    </div>
  );
}

export default CashierDashBoardPage;
