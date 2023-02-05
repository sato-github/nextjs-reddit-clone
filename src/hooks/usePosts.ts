import { Community } from "@/atoms/communitiesAtom";
import { Post, postState } from "@/atoms/postsAtom";
import { firestore, storage } from "@/firebase/clientApp";
import { doc, deleteDoc } from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import { useRecoilState } from "recoil";

export const usePosts = (communityData?: Community) => {
  const [postStateValue, setPostStateValue] = useRecoilState(postState);

  const onVote = async () => {};

  const onSelectPost = () => {};

  const onDeletePost = async (post: Post): Promise<boolean> => {
    try {
      // if post has an image, delete it from storage
      if (post.imageURL) {
        const imageRef = ref(storage, `posts/${post.id}/image`);
        await deleteObject(imageRef);
      }

      // delete post from posts collection
      const postDocRef = doc(firestore, "posts", post.id);
      await deleteDoc(postDocRef);

      // update post state
      setPostStateValue((prev) => ({
        ...prev,
        posts: prev.posts.filter((item) => item.id !== post.id),
      }));

      return true;
    } catch (error: any) {
      console.error("THERE WAS AN ERROR", error.message);
      return false;
    }
  };

  return {
    postStateValue,
    setPostStateValue,
    onVote,
    onSelectPost,
    onDeletePost,
  };
};
