import React from 'react';
import fakeMedicines from '../../../../assets/fakedata/medicine';
import CountRoundButton from '../../../../shared/buttons/CountRoundButton';
import { useCashierContext } from '../../../cashier-management/layout/AddCashier';
import {
  OrderedMedicine,
  usePaymentContext,
} from '../../layout/MainCashierDashboard';
import { MedicineType } from './MedicineColumns';
import { IoIosAdd } from 'react-icons/io';

type Props = {};

function Medicine({}: Props) {
  const { orderedMedicine, setOrderedMedicine } = usePaymentContext();

  //function to add medicine to ordered medicine
  const handleAddClick = (medicine: MedicineType) => {
    setOrderedMedicine([
      ...orderedMedicine,
      {
        id: medicine.id,
        name: medicine.name,
        unitPrice: medicine.price,
        amount: 0,
        availableQuantity: medicine.quantity,
      },
    ]);
  };
  return (
    <div className='max-h-[750px] overflow-y-scroll w-full'>
      <table className='text-sm text-left text-gray-500 dark:text-gray-400 max-h-screen overflow-scroll w-full'>
        <thead className='text-xs uppercase bg-slate-300 sticky top-0'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Medicine ID
            </th>
            <th scope='col' className='px-6 py-3'>
              Image
            </th>
            <th scope='col' className='px-6 py-3'>
              Name
            </th>
            <th scope='col' className='px-6 py-3'>
              Price
            </th>
            <th scope='col' className='px-6 py-3'>
              Quantity
            </th>
            <th scope='col' className='px-6 py-3'>
              Status
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {fakeMedicines.map((cashier) => (
            <tr className='bg-slate-50 border-b'>
              <td className='px-6 py-4'>{cashier.id}</td>
              <td className='px-6 py-4 w-8 h-8'>
                <img src={cashier.image} alt='image' />
              </td>
              <td className='px-6 py-4'>{cashier.name}</td>
              <td className='px-6 py-4'>{cashier.price}</td>
              <td className='px-6 py-4'>{cashier.quantity}</td>
              <td className='px-6 py-4'>{cashier.status}</td>
              <td className='px-6 py-4'>
                <CountRoundButton
                  onClick={() => handleAddClick(cashier)}
                  icon={<IoIosAdd />}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Medicine;