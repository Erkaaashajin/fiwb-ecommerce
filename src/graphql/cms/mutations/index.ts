// Barrel exports for CMS GraphQL mutations
export { CP_CMS_PAGES_ADD } from "./page";
export type { PageInput, CpCmsPagesAddVariables, CpCmsPagesAddData } from "./page";

export { CP_CMS_POSTS_ADD } from "./post";
export type { PostInput, CpCmsPostsAddVariables, CpCmsPostsAddData } from "./post";

export { CP_CMS_CATEGORIES_ADD } from "./category";
export type { PostCategoryInput, CpCmsCategoriesAddVariables, CpCmsCategoriesAddData } from "./category";

export { CP_CMS_TAGS_ADD } from "./tag";
export type { PostTagInput, CpCmsTagsAddVariables, CpCmsTagsAddData } from "./tag";

export { CP_CMS_ADD_MENU } from "./menu";
export type { MenuItemInput, CpCmsAddMenuVariables, CpCmsAddMenuData } from "./menu";

export { CP_CMS_CUSTOM_POST_TYPES_ADD } from "./customPostType";
export type { CustomPostTypeInput, CpCmsCustomPostTypesAddVariables, CpCmsCustomPostTypesAddData } from "./customPostType";

// Shared types
export type { AttachmentInput, TranslationInput } from "./post";