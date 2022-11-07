import { Roles } from "../../../../Models/enums";
import useAuth from "../../../Hooks/useAuth";

const ChildrenAuth = ({ children, allowedRoles }: { children: JSX.Element | null; allowedRoles: Roles[] }) => {
  const { auth } = useAuth();

  if (allowedRoles?.some(role => role === Roles.Anonymous)) return children;

  return auth?.roles?.find(role => allowedRoles?.includes(role)) ? children : null;
};

export default ChildrenAuth;
