import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type NewTabLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode;
  };

export function NewTabLink({
  children,
  rel,
  target,
  ...props
}: NewTabLinkProps) {
  return (
    <Link
      {...props}
      rel={rel ?? "noopener noreferrer"}
      target={target ?? "_blank"}
    >
      {children}
    </Link>
  );
}
