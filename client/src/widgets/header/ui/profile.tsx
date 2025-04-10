"use client";
import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import React from "react";

export const Profile = () => {
  return (
    <Dropdown>
      <DropdownTrigger>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">Profile</DropdownItem>
        <DropdownItem key="copy">Account</DropdownItem>
        <DropdownItem key="edit">Settings</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
