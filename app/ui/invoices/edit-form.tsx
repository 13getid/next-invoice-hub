'use client';

import { CustomerField, InvoiceForm } from '@/app/lib/definitions';
import { updateInvoice, State } from '@/app/lib/actions';
import { useActionState } from 'react';

export default function EditInvoiceForm({
  invoice,
  customers,
}: {
  invoice: InvoiceForm;
  customers: CustomerField[];
}) {
  const initialState: State = { message: null, errors: {} };
  
  // Bind the invoice ID to the updateInvoice action
  const updateInvoiceWithId = updateInvoice.bind(null, invoice.id);
  
  // Connect to useActionState
  const [state, formAction] = useActionState(updateInvoiceWithId, initialState);

  return (
    <form action={formAction}>
      {/* Form content and inputs remain here */}
    </form>
  );
}