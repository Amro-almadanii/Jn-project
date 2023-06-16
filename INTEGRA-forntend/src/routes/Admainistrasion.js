import RootLayout from '../pages/Root';
import ErrorPage from '../pages/Error';
import { checkAuthLoader, tokenLoader } from '../hooks/auth';

import RolesPage, {
  loader as RoleLoader,
} from '../pages/Admainistrasion/Role/Role';

import NewRolePage from '../pages/Admainistrasion/Role/NewRole';
import { action as manipulateRoleAction } from '../components/Admainistrasion/Role/RoleForm';

import RoleDetailPage, {
  loader as RoleDetailLoader,
} from '../pages/Admainistrasion/Role/RoleDetail';

import { action as deleteRoleAction } from '../pages/Admainistrasion/Role/RoleDetail';

import EditRolePage from '../pages/Admainistrasion/Role/EditRole';

// import { action as manipulateRoleAction } from '../components/Admainistrasion/Role/RoleForm';

import UsersPage, {
  loader as UserLoader,
} from '../pages/Admainistrasion/User/User';

import NewUserPage from '../pages/Admainistrasion/User/NewUser';

import UserDetailPage, {
  loader as UserDetailLoader,
} from '../pages/Admainistrasion/User/UserDetail';

import { action as deleteUserAction } from '../pages/Admainistrasion/User/UserDetail';

import EditUserPage from '../pages/Admainistrasion/User/EditUser';

import { action as manipulateUserAction } from '../components/Admainistrasion/User/UserForm';

import PermissionPage, {
  loader as PermissionLoader,
} from '../pages/Admainistrasion/Permission/Permission';

import PermissionsDetailPage, {
  loader as PermissionDetailLoader,
} from '../pages/Admainistrasion/Permission/PermissionDetail';

import { action as deletePermissionAction } from '../pages/Admainistrasion/Permission/PermissionDetail';

export const AdmainistrasionRoute = {
  path: '/userMangement',
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  loader: tokenLoader,
  children: [
    {
      path: '/userMangement/roles',
      children: [
        {
          index: true,
          element: <RolesPage />,
          loader: RoleLoader,
        },
        {
          path: '/userMangement/roles/new',
          element: <NewRolePage />,
          action: manipulateRoleAction,
          loader: checkAuthLoader,
        },

        {
          path: '/userMangement/roles/role-detail',
          id: 'role-detail',
          loader: RoleDetailLoader,
          children: [
            {
              path: '/userMangement/roles/role-detail/:roleId',
              element: <RoleDetailPage />,
              action: deleteRoleAction,
              loader: checkAuthLoader,
            },
            {
              path: '/userMangement/roles/role-detail/edit/:roleId',
              element: <EditRolePage />,
              action: manipulateRoleAction,
              loader: checkAuthLoader,
            },
          ],
        },
      ],
    },
    {
      path: '/userMangement/users',
      children: [
        {
          index: true,
          element: <UsersPage />,
          loader: UserLoader,
        },
        {
          path: '/userMangement/users/new',
          element: <NewUserPage />,
          action: manipulateUserAction,
          loader: checkAuthLoader,
        },

        {
          path: '/userMangement/users/user-detail',
          id: 'user-detail',
          loader: UserDetailLoader,
          children: [
            {
              path: '/userMangement/users/user-detail/:userId',
              element: <UserDetailPage />,
              action: deleteUserAction,
              loader: checkAuthLoader,
            },
            {
              path: '/userMangement/users/user-detail/edit/:userId',
              element: <EditUserPage />,
              action: manipulateUserAction,
              loader: checkAuthLoader,
            },
          ],
        },
      ],
    },
    {
      path: '/userMangement/permissions',
      children: [
        {
          index: true,
          element: <PermissionPage />,
          loader: PermissionLoader,
        },

        {
          path: '/userMangement/permissions/permission-detail',
          id: 'permission-detail',
          loader: PermissionDetailLoader,
          children: [
            {
              path: '/userMangement/permissions/permission-detail/:permissionId',
              element: <PermissionsDetailPage />,
              action: deletePermissionAction,
              loader: checkAuthLoader,
            },
          ],
        },
      ],
    },
    //
  ],
};
