import { useSession } from "next-auth/react";

function Dashbaord() {
  const { data, status } = useSession();
  return <h1>Welcome to Dashbaord</h1>;
}

export default Dashbaord;

Dashbaord.auth = true;
