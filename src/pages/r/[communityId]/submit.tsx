import { communityState } from "@/atoms/communitiesAtom";
import PageContentLayout from "@/components/Layout/PageContent";
import NewPostForm from "@/components/Posts/PostForm/NewPostForm";
import { auth } from "@/firebase/clientApp";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilValue } from "recoil";

const SubmitPostPage: React.FC = () => {
  const [user] = useAuthState(auth);
  const communityStateValue = useRecoilValue(communityState);
  console.log(communityStateValue);

  return (
    <PageContentLayout>
      <>
        <Box p="14px 0px" borderBottom="1px solid" borderColor="white">
          <Text fontWeight={600}>Create a post</Text>
        </Box>
        {user && <NewPostForm user={user} />}
      </>
      <>about component</>
    </PageContentLayout>
  );
};
export default SubmitPostPage;
