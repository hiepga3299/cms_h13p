import React from "react";
import { IoReorderFourOutline } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <div className="header__container h-54px flex justify-between items-center">
      <div className="header__outline text-4xl ml-2 hover:cursor-pointer">
        <IoReorderFourOutline />
      </div>
      <div className="header__right flex justify-center items-center mr-32px">
        <div className="icon__notification text-2xl mr-4">
          <IoIosNotifications />
        </div>
        <div className="header__profile border-solid border-2 rounded-xl">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex justify-center items-center p-2px">
              <Avatar className="mr-1">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              Nguyễn Minh Hiệp
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Header;
