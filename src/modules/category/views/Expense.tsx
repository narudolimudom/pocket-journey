import SingleButton from "@components/button/SingleButton";
import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import ExpenseTable from "../components/expense/ExpenseTable";
import ActionModal from "@components/modal/ActionModal";
import SuccessModal from "@components/modal/SuccessModal";
import SuccessCreateExpenseModal from "../components/expense/createExpense/SuccessCreateExpenseModal";
import CreateExpenseModal from "../components/expense/createExpense/CreateExpenseModal";
// import ExpenseTable from "@modules/category/components/ExpenseTable"

const Expense: React.FC = () => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);


  // useEffect(() => {
  //   console.log("fast")
  // }, [openCreateModal]);

  const handleSuccess = () => {
    // console.log("actuive")?
    setOpenSuccessModal(true)
  };

  return (
    <>
      <div className="flex justify-end pb-[12px]">
        <SingleButton
          label="Create"
          icon={<PlusOutlined />}
          iconPosition="end"
          onClick={() => setOpenCreateModal(true)}
        />
      </div>
      <ExpenseTable />
      <CreateExpenseModal updateOpenModal={setOpenCreateModal} isOpenModal={openCreateModal} onSuccess={handleSuccess}/>
      {/* <SuccessCreateExpenseModal updateOpenModal={setOpenSuccessModal} isOpenModal={openSuccessModal} /> */}
      {/* <ActionModal
        isOpenModal={openCreateModal}
        onOk={() => setopenCreateModal(false)}
        onCancel={() => setopenCreateModal(false)}
      >
      fast
      </ActionModal> */}
    </>
  );
};

export default Expense;
