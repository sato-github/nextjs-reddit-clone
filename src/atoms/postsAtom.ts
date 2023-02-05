import { atom } from "recoil";
import { Timestamp } from "firebase/firestore";

export type Post = {
  id: string;
  communityId: string;
  creatorId: string;
  creatorDisplayName: string;
  title: string;
  body: string;
  numberOfComments: number;
  voteStatus: number;
  imageURL?: string;
  communityImageURL?: string;
  postIdx?: number;
  createdAt: Timestamp;
};

interface PostState {
  selectedPost: Post | null;
  posts: Post[];
}

export const defaultPostState: PostState = {
  selectedPost: null,
  posts: [],
};

export const postState = atom<PostState>({
  key: "postState",
  default: defaultPostState,
});
