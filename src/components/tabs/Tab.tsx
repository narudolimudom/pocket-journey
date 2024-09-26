import { TabsProps, Tabs } from "antd";
import "@app/styles/NevigationBar.css";
import Expense from "@app/modules/category/views/Expense";
import Income from "@app/modules/category/views/Income";
// import SingleButton from "@components/button/SingleButton";
// import { PlusOutlined } from "@ant-design/icons";

const onChange = (key: string) => {
  console.log(key);
};


const items: TabsProps["items"] = [
  {
    key: "1",
    label: "Expense",
    children: <Expense />,
  },
  {
    key: "2",
    label: "Income",
    children: <Income/>,
  },
];

const Tab: React.FC = () => {

  return (
    <>
    <div className="flex justify-end">
      {/* <SingleButton label="Create" icon={<PlusOutlined />} iconPosition="end"/> */}
      </div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
   </>
  );
};

export default Tab;
