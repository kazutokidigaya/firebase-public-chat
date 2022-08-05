import { Avatar, HStack, Text } from "@chakra-ui/react";
import React from "react";

const Message = ({ text, uri, user = "other" }) => {
  return (
    <HStack
      alignSelf={user === "me" ? "flex-end" : "flex-start"}
      bg={"green.100"}
      borderRadius="base"
      paddingX={user === "me" ? "4" : "2"}
      paddingY={"2"}
    >
      {user === "other" && <Avatar src={uri} />}
      <Text>{text}</Text>
      {user === "me" && <Avatar src={uri} />}
    </HStack>
  );
};

export default Message;
