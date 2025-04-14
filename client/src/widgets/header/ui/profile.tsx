"use client";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import React from "react";
import { useRouter } from "next/navigation";

import { useLogout } from "@/features/auth/model/use-logout";
import { routes } from "@/shared/constants/routes";
import { useAppSelector } from "@/shared/lib/redux";

export const Profile = () => {
  const { logout } = useLogout();
  const id = useAppSelector((state) => state.session.session?.id);
  const avatarUrl = useAppSelector((state) => state.session.session?.avatarUrl);
  const router = useRouter();

  return (
    <Dropdown>
      <DropdownTrigger>
        <img
          alt="profiel"
          className="w-10 h-10 cursor-pointer rounded-full"
          src={`http://localhost:5000/static/avatars/${avatarUrl}`}
        />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem
          key="new"
          onPress={() => router.push(routes.ARTIST + `/${id}`)}
        >
          Profile
        </DropdownItem>
        <DropdownItem key="copy">Account</DropdownItem>
        <DropdownItem key="edit">Settings</DropdownItem>
        <DropdownItem
          key="delete"
          className="text-danger"
          color="danger"
          onPress={() => logout({})}
        >
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
