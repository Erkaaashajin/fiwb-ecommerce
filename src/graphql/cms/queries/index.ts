// Barrel exports for CMS GraphQL queries
export { CP_PAGES, CP_PAGE_LIST } from "./page";
export type { Page, PageList, CpPagesVariables, CpPageListVariables, CpPagesData, CpPageListData } from "./page";

export { CP_POST, CP_POSTS, CP_POST_LIST, CP_MOST_VIEWED_POSTS } from "./post";
export type { Post, PostList, CpPostVariables, CpPostsVariables, CpPostListVariables, CpPostData, CpPostsData, CpPostListData } from "./post";

export { CP_CATEGORIES } from "./category";
export type { PostCategory, PostCategoryListResponse, CpCategoriesVariables, CpCategoriesData } from "./category";

export { CP_CMS_TAGS } from "./tag";
export type { PostTag, PostTagList, CpCmsTagsVariables, CpCmsTagsData } from "./tag";

export { CP_MENUS, CP_CMS_MENU_LIST } from "./menu";
export type { MenuItem, CpMenusVariables, CpCmsMenuListVariables, CpMenusData, CpCmsMenuListData } from "./menu";

export { CP_CUSTOM_POST_TYPES, CP_CUSTOM_FIELD_GROUPS } from "./customPostType";
export type { CustomPostType, CustomFieldGroup, CpCustomPostTypesVariables, CpCustomFieldGroupsVariables } from "./customPostType";

export type { CmsPage, CmsPost, CmsCategory, CmsTag, CmsMenuItem } from "../types";