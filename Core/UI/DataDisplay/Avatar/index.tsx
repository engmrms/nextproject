import React, { HTMLAttributes, ReactNode } from "react";

interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  src?: string;
  alt?: string;
}

function Avatar({ src, children, className = "", alt, ...rest }: AvatarProps) {
  return src ? (
    <img src={src} className={`flex  items-center justify-center rounded-full    ${className}`} {...rest} alt={alt} />
  ) : (
    <span className={` ${className} flex  items-center justify-center rounded-full   `} {...rest}>
      {children}
    </span>
  );
}
export default Avatar;
