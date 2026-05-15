"use client";

import NextImage, { ImageProps as NextImageProps } from "next/image";
import { useState } from "react";

const PLACEHOLDER = "/placeholder.png";

function getFileUrl(url: string): string {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  // For local files, serve from public/
  const apiDomain = process.env.NEXT_PUBLIC_ERXES_ENDPOINT || "";
  if (apiDomain) {
    return `${apiDomain.replace(/\/gateway\/graphql$/, "")}/read-file?key=${url}`;
  }
  // Fallback: try public path
  return url.startsWith("/") ? url : `/${url}`;
}

type ImageProps = Omit<NextImageProps, "src"> & {
  src?: string | null;
  fallback?: string;
};

export default function Image({
  src,
  fallback = PLACEHOLDER,
  alt = "",
  ...props
}: ImageProps) {
  const resolved = getFileUrl(src || "") || fallback;
  const [imgSrc, setImgSrc] = useState(resolved);

  return (
    <NextImage
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallback)}
    />
  );
}