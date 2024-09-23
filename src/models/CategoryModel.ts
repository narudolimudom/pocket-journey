export enum CategoryType {
    EXPENSE = "EXPENSE",
    INCOME = "INCOME"
}


export interface ICategoryItem {
    key: React.Key;
    name: string;
    type: CategoryType;
    subCategory?: ISubCategoryItem[]
    // firstName: string;
    // lastName: string;
    // age: number;
    // address: string;
    // tags: string[];
};

export interface ISubCategoryItem {
    key: React.Key;
    name: string;
    type: CategoryType;
}
