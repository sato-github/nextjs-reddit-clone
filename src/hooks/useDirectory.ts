import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { communityState } from "../atoms/communitiesAtom";
import {
  defaultMenuItem,
  DirectoryMenuItem,
  directoryMenuState,
} from "../atoms/directoryMenuAtom";
import { FaReddit } from "react-icons/fa";

const useDirectory = () => {
  const router = useRouter();
  const [directoryState, setDirectoryState] =
    useRecoilState(directoryMenuState);
  const communityStateValue = useRecoilValue(communityState);

  const toggleMenuOpen = () => {
    setDirectoryState((prev) => ({
      ...prev,
      isOpen: !directoryState.isOpen,
    }));
  };

  const onSelectMenuItem = (menuItem: DirectoryMenuItem) => {
    setDirectoryState((prev) => ({
      ...prev,
      selectedMenuItem: menuItem,
    }));

    router?.push(menuItem.link);
    if (directoryState.isOpen) {
      toggleMenuOpen();
    }
  };

  useEffect(() => {
    const existingCommunity = communityStateValue.currentCommunity;
    if (existingCommunity?.id) {
      setDirectoryState((prev) => ({
        ...prev,
        selectedMenuItem: {
          displayText: `r/${existingCommunity.id}`,
          link: `r/${existingCommunity.id}`,
          icon: FaReddit,
          iconColor: "blue.500",
          imageURL: existingCommunity.imageURL,
        },
      }));
      return;
    }
    setDirectoryState((prev) => ({
      ...prev,
      selectedMenuItem: defaultMenuItem,
    }));
  }, [communityStateValue.currentCommunity]);
  //                              ^ used to be communityStateValue.vistedCommunities

  return { directoryState, onSelectMenuItem, toggleMenuOpen };
};

export default useDirectory;
