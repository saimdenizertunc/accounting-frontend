import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ChevronDown } from 'lucide-react';

const AccountSchema = Yup.object().shape({
  type: Yup.string()
    .oneOf(['CASH', 'BANK', 'SAVINGS', 'PAYABLE'])
    .required('Account type is required'),
  name: Yup.string().required('Account name is required'),
  balance: Yup.number().required('Initial balance is required'),
  currency: Yup.string().required('Currency is required'),
  description: Yup.string(),
});

function AccountForm() {
  const formik = useFormik({
    initialValues: {
      type: '',
      name: '',
      balance: '',
      currency: 'USD',
      description: '',
    },
    validationSchema: AccountSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Account Type
        </label>
        <div className="relative">
          <select
            name="type"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
            {...formik.getFieldProps('type')}
          >
            <option value="">Select type</option>
            <option value="CASH">Cash</option>
            <option value="BANK">Bank</option>
            <option value="SAVINGS">Savings</option>
            <option value="PAYABLE">Payable</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        </div>
        {formik.touched.type && formik.errors.type && (
          <div className="text-danger text-sm mt-1">{formik.errors.type}</div>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Account Name
        </label>
        <input
          type="text"
          name="name"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="text-danger text-sm mt-1">{formik.errors.name}</div>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Initial Balance
          </label>
          <input
            type="number"
            name="balance"
            step="0.01"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            {...formik.getFieldProps('balance')}
          />
          {formik.touched.balance && formik.errors.balance && (
            <div className="text-danger text-sm mt-1">{formik.errors.balance}</div>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Currency
          </label>
          <select
            name="currency"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none"
            {...formik.getFieldProps('currency')}
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
          </select>
        </div>
      </div>

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
        Create Account
      </button>
    </form>
  );
}

export default AccountForm;