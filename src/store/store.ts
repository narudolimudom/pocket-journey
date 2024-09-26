import { create } from 'zustand';

interface IFeatureExpense {
  key: string;
  name: string;
}

interface IFeatureIncome {
  key: string;
  name: string;
}

interface IFeatureExpenseState {
  featureExpenses: IFeatureExpense[];
  addFeatureExpense: (item: IFeatureExpense) => void;
  removeFeatureExpense: (name: string) => void;
}

interface IFeatureIncomesState {
  featureIncomes: IFeatureIncome[];
  addFeatureIncome: (item: IFeatureIncome) => void;
  removeFeatureIncome: (name: string) => void;
}

export const useFeatureExpenseStore = create<IFeatureExpenseState>((set) => ({
  featureExpenses: [],
  addFeatureExpense: (item: IFeatureExpense) =>
    set((state) => {
      if (state.featureExpenses.some(expense => expense.name === item.name)) {
        throw new Error(`Feature expense with name "${item.name}" already exists.`);
      }
      return {
        featureExpenses: [...state.featureExpenses, item]
      };
    }),
  removeFeatureExpense: (name: string) =>
    set((state) => ({
      featureExpenses: state.featureExpenses.filter(expense => expense.name !== name)
    })),
}));

export const useFeatureIncomeStore = create<IFeatureIncomesState>((set) => ({
  featureIncomes: [],
  addFeatureIncome: (item: IFeatureIncome) =>
    set((state) => {
      if (state.featureIncomes.some(income => income.name === item.name)) {
        throw new Error(`Feature income with name "${item.name}" already exists.`);
      }
      return {
        featureIncomes: [...state.featureIncomes, item]
      };
    }),
  removeFeatureIncome: (name: string) =>
    set((state) => ({
      featureIncomes: state.featureIncomes.filter(income => income.name !== name)
    })),
}));

