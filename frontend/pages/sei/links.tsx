import React from "react";
import useSWR from "swr";
import LinkList from "../../components/LinkList";
import { fetchSocialLinks } from "../../src/apis/socialLink";

export default function LinksPage() {
  const { data: socialLinks, error } = useSWR("/links", fetchSocialLinks);

  if (error) return <div>failed to load</div>;
  if (!socialLinks) return <div>loading...</div>;

  return <LinkList socialLinks={socialLinks} />;
}
