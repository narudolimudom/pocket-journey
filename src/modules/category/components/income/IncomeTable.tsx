import React, { useState } from "react";
import { Button, Dropdown, Table } from "antd";
import { featureExpenseHeader } from "../../constants/table";
import { useFeatureIncomeStore } from "@app/store/store";
import DeleteIncomeModal from "./deleteIncome/DeleteIncomeModal";

const { Column } = Table;

const IncomeTable: React.FC = () => {
  const handleDelete = (name: string) => {
    setSelectData(name);
    setOpenDeleteExpenseModal(true);
  };

  const { featureIncomes } = useFeatureIncomeStore();
  const [openDeleteExpenseModal, setOpenDeleteExpenseModal] = useState(false);
  const [selectData, setSelectData] = useState("");
  const renderActions = (record: any) => {
    if (featureIncomes.length < 1) return null;
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
      <Table dataSource={featureIncomes} pagination={{ pageSize: 8 }}>
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
      <DeleteIncomeModal
        deleteData={selectData}
        isOpenModal={openDeleteExpenseModal}
        updateOpenModal={setOpenDeleteExpenseModal}
        onSuccess={() => console.log("qwe")}
      />
    </>
  );
};

export default IncomeTable;
