
import { CategoryType, ICategoryItem } from "@app/models"

export const featureExpenseHeader = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
]

export const featureExpenseItem: ICategoryItem[] = [
    {
      key: "food",
      name: "Food",
      type: CategoryType.EXPENSE
    },
    {
      key: "transport",
      name: "Transport",
      type: CategoryType.EXPENSE
    },
  ];