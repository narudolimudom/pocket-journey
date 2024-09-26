import SingleButton from "@components/button/SingleButton";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import CreateIncomeModal from "../components/income/createIncome/CreateIncomeModal";
import IncomeTable from "../components/income/IncomeTable";

const Income: React.FC = () => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const handleSuccess = () => {
    setOpenSuccessModal(true);
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
      <IncomeTable />
      <CreateIncomeModal
        updateOpenModal={setOpenCreateModal}
        isOpenModal={openCreateModal}
        onSuccess={handleSuccess}
      />
    </>
  );
};

export default Income;
