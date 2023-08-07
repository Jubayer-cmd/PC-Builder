import styles from "@/styles/Home.module.css";
import {
  FacebookFilled,
  GoogleSquareFilled,
  LinkedinFilled,
  LoginOutlined,
  TwitterSquareFilled,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
const { Header, Content, Footer } = Layout;

const RootLayout = ({ children }) => {
  const { data: session } = useSession();
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("");

  // Handle category selection change
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);
    router.push(`/category/${selectedCategory}`);
  };
  console.log(selectedCategory);
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="brand-logo">
          <h1>
            <Link
              href="/"
              style={{
                color: "white",
                backgroundColor: "#404040",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              PCB-Bangladesh
            </Link>
          </h1>
        </div>
        <Menu theme="dark" mode="vertical" className={styles.menu_items}>
          <select
            className="bg-gray-200 text-gray-800 font-bold py-2 px-4 pr-8 rounded border-none outline-none"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="Motherboard">Motherboard</option>
            <option value="RAM">RAM</option>
            <option value="CPU">CPU</option>
            <option value="Power Supply">Power Supply</option>
            <option value="Storage Device">Storage Device</option>
            <option value="Monitor">Monitor</option>
            <option value="Others">Others</option>
          </select>
          <Link href="/about">
            <items
              style={{
                margin: "0px 25px",
              }}
            >
              <UserOutlined />
              About Us
            </items>
          </Link>

          {session?.user ? (
            <button
              className="px-3 bg-violet-500 text-lg text-white border-0 rounded cursor-pointer hover:bg-violet-400"
              onClick={() => {
                signOut();
              }}
            >
              logout
            </button>
          ) : (
            <Link href="/login">
              <items>
                <LoginOutlined />
                Login
              </items>
            </Link>
          )}
        </Menu>
      </Header>

      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          PCB-Bangladesh
        </h2>
        <p className={styles.social_icons}>
          <Link href="https://web.facebook.com/groups/programmingherocommunity">
            <FacebookFilled />
          </Link>
          <Link href="www.twitter.com">
            <TwitterSquareFilled />
          </Link>
          <Link href="https://web.programming-hero.com/home/">
            <GoogleSquareFilled />
          </Link>
          <Link href="www.linkedin.com">
            <LinkedinFilled />
          </Link>
        </p>
        PCB-Bangladesh ©2023 Created by PCB
      </Footer>
    </Layout>
  );
};
export default RootLayout;
