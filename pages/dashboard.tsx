import { useSession } from "next-auth/react";
import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal } from "react";
import DashboardLayout from "../Components/Layouts/Dashboard";

function Dashbaord() {
  const { data, status } = useSession();
  return <h1>Welcome to Dashbaord</h1>;
}

Dashbaord.getLayout = (
  page: string | number | boolean | ReactFragment | ReactPortal | ReactElement<any, string | JSXElementConstructor<any>> | null | undefined
) => {
  return (
    <DashboardLayout
      meta={{
        title: "Dashbaord",
        name: "description",
        description: "Create next app project",
      }}>
      {page}
    </DashboardLayout>
  );
};
export default Dashbaord;

Dashbaord.auth = true;
