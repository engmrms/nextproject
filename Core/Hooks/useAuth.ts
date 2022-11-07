/* eslint-disable complexity */
import { useGetUserProfileQuery, useGetUserRolesQuery } from "~/API/store/Auth";
import { DTO } from "~/Models/DTO";
import { Roles } from "~/Models/enums";

function useAuth(): { auth: DTO.UserProfile | undefined } {
  let { data } = useGetUserProfileQuery();

  const { data: userRoles, isSuccess } = useGetUserRolesQuery(undefined, {
    skip: !data?.IsAuthenticated,
  });

  // trick add user roles if user logged in **to do in BE
  if (!data?.IsAuthenticated) return { auth: data };
  if (!isSuccess) return { auth: undefined };
  if (data?.NationalId && userRoles?.IsNominated) data = { ...data, roles: [Roles.NominatedUser, Roles.User] };
  if (data?.NationalId && !userRoles?.IsNominated) data = { ...data, roles: [Roles.User] };
  return { auth: data };
}

export default useAuth;
