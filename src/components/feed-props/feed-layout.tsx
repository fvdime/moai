import UserPanel from "./user-panel";
import TopicPanel from "./topic-panel";
import HomePanel from "./home-panel";
import React from "react";
import { UserParams } from "@/libs/types";

type FeedLayoutProps = {
  Search: string;
  Profile: string;
  Settings: string;
  NewPost: string;
  Logout: string;
  ContactLink: string;
  SourceLink: string;
};

const FeedLayout = ({
  children,
  isUserPage,
  user,
  isOwnPage,
}: {
  children: React.ReactNode;
  isUserPage: Boolean;
  user?: UserParams;
  isOwnPage?: Boolean;
}) => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className="w-full flex flex-row justify-between lg:gap-4 pt-4 h-full">
          <div className="h-full w-full px-4 flex flex-col gap-4 overflow-y-auto rounded-lg">
            {children}
          </div>
          <div className="hidden w-2/5 h-full lg:flex lg:flex-col gap-4 sticky top-16">
            {isUserPage === true ? (
              <UserPanel
                username={user?.username}
                profilePic={user?.profileImage}
                isOwnPage={isOwnPage}
              />
            ) : (
              <>
                {/* HOT TOPICS */}
                {/* <TopicPanel/> */}
                {/* HOME */}
                <HomePanel />
              </>
            )}
            {/* USER PROFILE */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedLayout;
