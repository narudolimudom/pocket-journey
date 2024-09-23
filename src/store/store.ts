import { create } from 'zustand';

interface IFeatureExpense {
  key: string;
  name: string;
}

interface IFeatureExpenseState {
  featureExpenses: IFeatureExpense[];
  addFeatureExpense: (item: IFeatureExpense) => void;
  removeFeatureExpense: (name: string) => void;
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
