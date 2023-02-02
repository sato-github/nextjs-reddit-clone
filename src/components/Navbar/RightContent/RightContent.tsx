import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthButton from "./AuthButton";

type RightContentProps = {
  // user:
};

const RightContent: React.FC<RightContentProps> = () => {
  return (
    <>
      <Flex justify="center" align="center">
        <AuthButton />
      </Flex>
    </>
  );
};
export default RightContent;
