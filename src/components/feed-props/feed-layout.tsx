import UserPanel from "./user-panel";
import TopicPanel from "./topic-panel";
import HomePanel from "./home-panel";
import React from "react";

const FeedLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <>
      <div className="max-w-screen-lg mx-auto">
        <div className="w-full flex flex-row justify-between lg:gap-4 pt-4 h-full">
          <div className="h-full w-full px-4 flex flex-col gap-4 overflow-y-auto rounded-lg">
            {children}
          </div>
          <div className="hidden w-2/5 h-full lg:flex lg:flex-col gap-4">
            {/* USER PROFILE */}
            <UserPanel/>
            {/* HOT TOPICS */}
            <TopicPanel/>
            {/* HOME */}
            <HomePanel/>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeedLayout