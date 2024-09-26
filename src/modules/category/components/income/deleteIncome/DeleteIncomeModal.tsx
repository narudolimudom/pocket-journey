import { useFeatureIncomeStore } from "@app/store/store";
import ActionModal from "@components/modal/ActionModal";
import { useEffect, useState } from "react";

interface ActionModalProps {
  isOpenModal: boolean;
  updateOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteData: string;
  onSuccess: () => void;
}

const DeleteIncomeModal: React.FC<ActionModalProps> = ({
  isOpenModal,
  updateOpenModal,
  onSuccess,
  deleteData
}) => {
  const { removeFeatureIncome } = useFeatureIncomeStore();
  const [_, setInputValue] = useState("");
  useEffect(() => {
    setInputValue("");
  }, [isOpenModal]);

  const handleSubmit = async () => {
    removeFeatureIncome(deleteData)
    updateOpenModal((prev) => !prev);
    onSuccess();
  };

  return (
    <ActionModal
      title="Delete Category"
      isOpenModal={isOpenModal}
      onSubmit={handleSubmit}
      onCancel={() => updateOpenModal((prev) => !prev)}
    >
    </ActionModal>
  );
};

export default DeleteIncomeModal;
