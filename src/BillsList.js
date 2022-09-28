import React from 'react';
import Bill from './Bill';

export default function BillsList( { bills } ) {
  return (
    bills.map(bill => {
        return <Bill key={bill.id} bill={bill} />
    })
  )
}
