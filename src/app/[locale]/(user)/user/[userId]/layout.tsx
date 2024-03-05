import Navbar from "@/components/feed-props/navbar";
import SettingsModal from "@/components/forms/settings-form";
import { useTranslations } from "next-intl";
import React from "react";
import PostModal from "@/components/post-props/create-post-modal";

export default function UserPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations("Index.FeedPage");

  return (
    <div className="bg-zinc-950 min-h-screen">
      <Navbar
        Search={t("Navbar.Search")}
        Profile={t("Navbar.Modal.Profile")}
        Settings={t("Navbar.Modal.Settings")}
        NewPost={t("Navbar.Modal.NewPost")}
        Logout={t("Navbar.Modal.Logout")}
        ContactLink={t("Navbar.Modal.ContactLink")}
        SourceLink={t("Navbar.Modal.SourceLink")}
      />
      <PostModal
        Title={t("Modals.CreatePostModal.Title")}
        ButtonLabel={t("Modals.CreatePostModal.ButtonLabel")}
        TagLabel={t("Modals.CreatePostModal.TagLabel")}
        TitleInput={t("Modals.CreatePostModal.TitleInput")}
        FooterContentI={t("Modals.CreatePostModal.FooterContent")}
        FooterContentLink={t("Modals.CreatePostModal.FooterContentLink")}
      />
      <SettingsModal />
      {children}
    </div>
  );
}
