import React, { useState } from "react";
import { Button, Dropdown, Table } from "antd";
import { featureExpenseHeader } from "../../constants/table";
import { useFeatureExpenseStore } from "@app/store/store";
import DeleteExpenseModal from "./deleteExpense/DeleteExpenseModal";

const { Column } = Table;

const ExpenseTable: React.FC = () => {
  const handleDelete = (name: string) => {
    setSelectData(name);
    setOpenDeleteExpenseModal(true);
  };

  const { featureExpenses } = useFeatureExpenseStore();
  const [openDeleteExpenseModal, setOpenDeleteExpenseModal] = useState(false);
  const [selectData, setSelectData] = useState("");
  const renderActions = (record: any) => {
    if (featureExpenses.length < 1) return null;
    const menuItems = [
      { key: "edit", label: <a>Edit</a> },
      { key: "advanced", label: <a>Advanced</a> },
      {
        key: "delete",
        label: <a onClick={() => handleDelete(record.name)}>delete</a>,
      },
    ];

    return (
      <Dropdown menu={{ items: menuItems }} placement="bottomLeft" arrow>
        <Button>More</Button>
      </Dropdown>
    );
  };

  return (
    <>
      <Table dataSource={featureExpenses} pagination={{ pageSize: 8 }}>
        {featureExpenseHeader.map((header) => (
          <Column
            width={1400}
            title={header.title}
            dataIndex={header.dataIndex}
            key={header.key}
          />
        ))}
        <Column title="Action" key="action" render={renderActions} />
      </Table>
      <DeleteExpenseModal
        deleteData={selectData}
        isOpenModal={openDeleteExpenseModal}
        updateOpenModal={setOpenDeleteExpenseModal}
        onSuccess={() => console.log("qwe")}
      />
    </>
  );
};

export default ExpenseTable;
