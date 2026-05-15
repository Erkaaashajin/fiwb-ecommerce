import { gql } from "@apollo/client";

// Re-export existing queries
export { CP_PAGES } from "./queries/page";
export { CP_POSTS } from "./queries/post";
export { CP_CATEGORIES } from "./queries/category";
export { CP_CMS_TAGS } from "./queries/tag";
export { CP_MENUS } from "./queries/menu";
export { CP_CUSTOM_POST_TYPES } from "./queries/customPostType";
export { CP_CMS_PAGES_ADD } from "./mutations/page";
export { CP_CMS_POSTS_ADD } from "./mutations/post";
export { CP_CMS_CATEGORIES_ADD } from "./mutations/category";
export { CP_CMS_TAGS_ADD } from "./mutations/tag";
export { CP_CMS_ADD_MENU } from "./mutations/menu";
export { CP_CMS_CUSTOM_POST_TYPES_ADD } from "./mutations/customPostType";

// Re-export types
export type { Page } from "./queries/page";
export type { Post } from "./queries/post";
export type { PostCategory } from "./queries/category";
export type { PostTag } from "./queries/tag";
export type { MenuItem } from "./queries/menu";