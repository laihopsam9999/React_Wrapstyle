import { Avatar } from "@material-ui/core";
import { Stack } from "@mui/material";
import React from "react";

function AvatarUser() {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src="https://picsum.photos/200" />
      </Stack>
    </div>
  );
}
export default AvatarUser;
