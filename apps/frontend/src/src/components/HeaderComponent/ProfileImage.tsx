import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const ProfileImage = () => {
  return (
    <Avatar className=" size-7">
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>DP</AvatarFallback>
    </Avatar>
  );
};

export default ProfileImage;
