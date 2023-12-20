import React from 'react';
import CashierNavBar from '../components/navbar/CashierNavBar';
import CashierSideBar from '../components/sidebar/CashierSideBar';
import MedicineGrid from '../components/table/MedicineGrid';
import OrderDetailsSideBar from '../components/order/OrderDetailsSideBar';

type Props = {};

function CashierDashBoardPage({}: Props) {
  return (
    <div className='flex items-center justify-center flex-col'>
      <CashierNavBar />
      <div className='flex flex-row'>
        <CashierSideBar />
        <MedicineGrid />
        {/* Order details side bar */}
        <OrderDetailsSideBar />
      </div>
    </div>
  );
}

export default CashierDashBoardPage;
