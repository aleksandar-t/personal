import { siteIdentity } from "@/content/site";
import { socialLinks } from "@/content/social";
import { NewTabLink } from "./NewTabLink";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div>
          <p className="footer-name">{siteIdentity.name}</p>
          <p className="footer-role">
            Software Engineer <span aria-hidden="true">&middot;</span> Photographer{" "}
            <span aria-hidden="true">&middot;</span> Filmmaker{" "}
            <span aria-hidden="true">&middot;</span> Writer
          </p>
        </div>
        <p className="footer-principle">{siteIdentity.principle}</p>
      </div>
      <div className="site-footer__links" aria-label="Footer links">
        {socialLinks.slice(0, 5).map((link) => (
          <NewTabLink key={link.label} href={link.href}>
            {link.label}
          </NewTabLink>
        ))}
      </div>
      <p className="footer-closing">{siteIdentity.closing}</p>
    </footer>
  );
}
