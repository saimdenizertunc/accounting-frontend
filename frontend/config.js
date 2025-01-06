import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      common: {
        dashboard: 'Dashboard',
        accounts: 'Accounts',
        transactions: 'Transactions',
        reports: 'Reports',
        settings: 'Settings',
      },
      accounts: {
        totalBalance: 'TOTAL BALANCE',
        newAccount: 'New Account',
        cash: 'CASH',
        bank: 'BANK',
        savings: 'SAVINGS',
        payable: 'PAYABLE',
      },
      transactions: {
        newTransaction: 'New Transaction',
        income: 'Income',
        expense: 'Expense',
        transfer: 'Transfer',
        amount: 'Amount',
        category: 'Category',
        date: 'Date',
        description: 'Description',
      }
    }
  },
  es: {
    translation: {
      common: {
        dashboard: 'Panel',
        accounts: 'Cuentas',
        transactions: 'Transacciones',
        reports: 'Informes',
        settings: 'Ajustes',
      },
      accounts: {
        totalBalance: 'BALANCE TOTAL',
        newAccount: 'Nueva Cuenta',
        cash: 'EFECTIVO',
        bank: 'BANCO',
        savings: 'AHORROS',
        payable: 'PAGABLE',
      },
      transactions: {
        newTransaction: 'Nueva Transacción',
        income: 'Ingreso',
        expense: 'Gasto',
        transfer: 'Transferencia',
        amount: 'Monto',
        category: 'Categoría',
        date: 'Fecha',
        description: 'Descripción',
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;