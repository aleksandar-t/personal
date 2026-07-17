import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type SmartLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode;
  };

function isExternalWebHref(href: LinkProps["href"]) {
  return (
    typeof href === "string" &&
    (/^https?:\/\//i.test(href) || href.startsWith("//"))
  );
}

export function SmartLink({
  children,
  href,
  rel,
  target,
  ...props
}: SmartLinkProps) {
  const external = isExternalWebHref(href);

  return (
    <Link
      {...props}
      href={href}
      rel={external ? (rel ?? "noopener noreferrer") : rel}
      target={external ? (target ?? "_blank") : target}
    >
      {children}
    </Link>
  );
}
