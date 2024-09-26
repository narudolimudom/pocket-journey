import { useFeatureExpenseStore } from "@app/store/store";
import ActionModal from "@components/modal/ActionModal";
import { useEffect, useState } from "react";

interface ActionModalProps {
  isOpenModal: boolean;
  updateOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  deleteData: string;
  onSuccess: () => void;
}

const DeleteExpenseModal: React.FC<ActionModalProps> = ({
  isOpenModal,
  updateOpenModal,
  onSuccess,
  deleteData
}) => {
  const { removeFeatureExpense } = useFeatureExpenseStore();
  const [_, setInputValue] = useState("");
  useEffect(() => {
    setInputValue("");
  }, [isOpenModal]);

  const handleSubmit = async () => {
    removeFeatureExpense(deleteData)
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

export default DeleteExpenseModal;
