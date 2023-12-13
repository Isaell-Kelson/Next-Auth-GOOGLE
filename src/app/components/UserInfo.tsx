import React from "react";

interface UserInfoProps {
  user:
    | {
        clientId?: string | null;
        clientSecret?: string | null;
        image?: string | null;
      }
    | undefined;
}

export default function UserInfo({user}: UserInfoProps) {
  return (
    <div>
      <div>Olá {user?.clientId}</div>  
    </div>
  );
}
