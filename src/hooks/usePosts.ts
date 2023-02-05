import { Community } from "@/atoms/communitiesAtom";
import { postState } from "@/atoms/postsAtom";
import { useRecoilState } from "recoil";

export const usePosts = (communityData?: Community) => {
  const [postStateValue, setPostStateValue] = useRecoilState(postState);

  const onVote = async () => {};

  const onSelectPost = () => {};

  const onDeletePost = async () => {};

  return {
    postStateValue,
    setPostStateValue,
    onVote,
    onSelectPost,
    onDeletePost,
  };
};
