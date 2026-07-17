import { SmartLink } from "@/components/SmartLink";

export default function NotFound() {
  return (
    <section className="not-found content-band">
      <p className="eyebrow">404</p>
      <h1>This room is not in the house yet.</h1>
      <p>
        The site is built as a personal universe, but this path has not been
        given a door.
      </p>
      <SmartLink className="text-link" href="/">
        Return home
      </SmartLink>
    </section>
  );
}
