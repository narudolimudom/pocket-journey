import React, { useState } from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  HomeOutlined,
  StarOutlined,
  UnorderedListOutlined,
  FolderOpenOutlined,
  MoneyCollectOutlined,
  BankOutlined,
  DollarOutlined,
  CreditCardOutlined,
  MinusCircleOutlined,
  BarChartOutlined,
  TagsOutlined,
  PieChartOutlined,
  TransactionOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import "@app/styles/NevigationBar.css";
import Sider from "antd/es/layout/Sider";

type MenuItem = Required<MenuProps>["items"][number];

const menuItem: MenuItem[] = [
  {
    key: "home",
    // label: "Home",
    label: <Link to="/">Home</Link>,
    icon: <HomeOutlined />,
  },
  {
    key: "features",
    label: "Features",
    icon: <StarOutlined />,
    children: [
      {
        key: "category",
        label: <Link to="/category">Category</Link>,
        icon: <UnorderedListOutlined />,
      },
      {
        key: "sub_category",
        label: "Sub-category",
        icon: <FolderOpenOutlined />,
      },
      {
        key: "expense_group",
        label: "Expense group",
        icon: <MoneyCollectOutlined />,
      },
      { key: "bank_account", label: "Bank account", icon: <BankOutlined /> },
      { key: "saving_money", label: "Saving money", icon: <DollarOutlined /> },
      {
        key: "credit_card",
        label: "Credit Card",
        icon: <CreditCardOutlined />,
      },
      { key: "debt", label: "Debt", icon: <MinusCircleOutlined /> },
      {
        key: "revenue_receivable",
        label: "Revenue receivable",
        icon: <BarChartOutlined />,
      },
      { key: "tag", label: "Tag", icon: <TagsOutlined /> },
    ],
  },
  {
    type: "divider",
  },
  {
    key: "transactions",
    label: "Transactions",
    icon: <TransactionOutlined />,
  },
  {
    type: "divider",
  },
  {
    key: "summaries",
    label: "Summaries",
    icon: <PieChartOutlined />,
  },
  {
    key: "extension",
    label: "Extension",
    icon: <PlusCircleOutlined />,
  },
];

const NevigationBar: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ width: "256px", background: "white" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        theme="light"
      >
        <span
        className="font-bold text-center py-[25px] bg-white"
        >
          POCKET JOURNEY
        </span>
        <hr
          className="h-[1px] border-0 mb-[12px] bg-line-gradient"
          style={{
            background:
              "linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, rgb(224, 225, 226) 49.52%, rgba(224, 225, 226, 0) 100%)",
          }}
        />
        <Menu
          //FIXME: CLassname
          className="fast"
          onClick={onClick}
          style={{ width: 256 }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={menuItem}
        />
      </Sider>
      {/* <a href="catetory">
       Home
      </a>
      <a href="/">
       Home
      </a> */}
    </Layout>
  );
};

export default NevigationBar;
