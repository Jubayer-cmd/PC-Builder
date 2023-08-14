import RootLayout from "@/components/layouts/RootLayout";
import { GithubOutlined } from "@ant-design/icons";
import { Card, Space } from "antd";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
function LoginPage() {
  const router = useRouter();
  const { callbackUrl } = router.query;
  return (
    <div className="text-center mt-10">
      <Space direction="vertical" size={16}>
        <Card
          title="Login to PCB-Bangladesh"
          style={{
            width: 500,
          }}
        >
          <p
            className="bg-gray-200 p-2 text-lg font-medium hover:bg-slate-600 cursor-pointer hover:text-white"
            onClick={() =>
              signIn("github", {
                callbackUrl: callbackUrl || `${process.env.apiUrl}`,
              })
            }
          >
            Login with Github{" "}
            <span>
              <GithubOutlined />
            </span>
          </p>
        </Card>
      </Space>
    </div>
  );
}
export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
