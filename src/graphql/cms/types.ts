// Shared CMS types for type-safe GraphQL operations

export interface CmsPage {
  _id: string;
  name?: string;
  slug?: string;
  content?: string;
  customFieldsData?: Record<string, unknown>;
}

export interface CmsPost {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  thumbnail?: { url: string; name: string };
  customFieldsData?: {
    price?: number;
    currency?: string;
    sku?: string;
    inStock?: boolean;
  };
  categories?: { name: string; slug: string }[];
}

export interface CmsCategory {
  _id: string;
  name: string;
  slug: string;
}

export interface CmsTag {
  _id: string;
  name: string;
  slug: string;
}

export interface CmsMenuItem {
   _id: string;
   clientPortalId?: string;
   webId?: string;
   parentId?: string;
   parent?: CmsMenuItem;
   label?: string;
   contentType?: string;
   contentTypeId?: string;
   kind?: string;
   icon?: string;
   url?: string;
   order?: number;
   target?: string;
 }