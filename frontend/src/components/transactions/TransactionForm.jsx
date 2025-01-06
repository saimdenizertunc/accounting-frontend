import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Calendar, ChevronDown } from 'lucide-react';
import { format } from 'date-fns';

const TransactionSchema = Yup.object().shape({
  type: Yup.string().oneOf(['income', 'expense', 'transfer']).required(),
  amount: Yup.number().positive().required('Amount is required'),
  category: Yup.string().required('Category is required'),
  date: Yup.date().required('Date is required'),
  description: Yup.string(),
  account_id: Yup.string().required('Account is required'),
  target_account_id: Yup.string().when('type', {
    is: 'transfer',
    then: () => Yup.string().required('Target account is required'),
  }),
});

function TransactionForm() {
  const formik = useFormik({
    initialValues: {
      type: 'expense',
      amount: '',
      category: '',
      date: format(new Date(), 'yyyy-MM-dd'),
      description: '',
      account_id: '',
      target_account_id: '',
    },
    validationSchema: TransactionSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      {/* Transaction Type */}
      <div className="grid grid-cols-3 gap-2">
        <button
          type="button"
          className={`py-2 px-4 rounded-lg ${
            formik.values.type === 'income'
              ? 'bg-success text-white'
              : 'bg-gray-100'
          }`}
          onClick={() => formik.setFieldValue('type', 'income')}
        >
          Income
        </button>
        <button
          type="button"
          className={`py-2 px-4 rounded-lg ${
            formik.values.type === 'expense'
              ? 'bg-danger text-white'
              : 'bg-gray-100'
          }`}
          onClick={() => formik.setFieldValue('type', 'expense')}
        >
          Expense
        </button>
        <button
          type="button"
          className={`py-2 px-4 rounded-lg ${
            formik.values.type === 'transfer'
              ? 'bg-primary text-white'
              : 'bg-gray-100'
          }`}
          onClick={() => formik.setFieldValue('type', 'transfer')}
        >
          Transfer
        </button>
      </div>

      {/* Amount */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Amount
        </label>
        <input
          type="number"
          name="amount"
          step="0.01"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          {...formik.getFieldProps('amount')}
        />
        {formik.touched.amount && formik.errors.amount && (
          <div className="text-danger text-sm mt-1">{formik.errors.amount}</div>
        )}
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <div className="relative">
          <select
            name="category"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
            {...formik.getFieldProps('category')}
          >
            <option value="">Select category</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="utilities">Utilities</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
      </div>

      {/* Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Date
        </label>
        <div className="relative">
          <input
            type="date"
            name="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            {...formik.getFieldProps('date')}
          />
          <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <textarea
          name="description"
          rows="3"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          {...formik.getFieldProps('description')}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90 transition-colors"
      >
        Save Transaction
      </button>
    </form>
  );
}

export default TransactionForm;