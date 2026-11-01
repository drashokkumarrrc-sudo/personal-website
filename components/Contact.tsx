import { profile } from "@/content/data";
import { asset, telHref } from "@/lib/links";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { BuildingIcon, DownloadIcon, MailIcon, PhoneIcon } from "./Icons";

export function Contact() {
  const items = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: MailIcon },
    { label: "Official email", value: profile.officialEmail, href: `mailto:${profile.officialEmail}`, Icon: MailIcon },
    { label: "Phone", value: profile.phone, href: telHref(profile.phone), Icon: PhoneIcon },
    { label: "Office", value: `${profile.organisation}, Uttar Pradesh`, Icon: BuildingIcon },
  ].filter((item) => item.value);

  const card = "flex h-full items-start gap-3 rounded-xl border border-line p-4";

  return (
    <Section id="contact" title="Contact" kicker="Get in touch">
      <ul className="grid gap-4 sm:grid-cols-2">
        {items.map(({ label, value, href, Icon }, i) => {
          const body = (
            <>
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                <Icon className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-[0.14em] text-faint">{label}</span>
                <span className="mt-1 block text-ink [overflow-wrap:anywhere]">{value}</span>
              </span>
            </>
          );
          return (
            <Reveal as="li" key={label} delay={(i % 2) * 70}>
              {href ? (
                <a href={href} className={`lift ${card} hover:border-accent/50`}>
                  {body}
                </a>
              ) : (
                <div className={card}>{body}</div>
              )}
            </Reveal>
          );
        })}
      </ul>

      {profile.cv && (
        <Reveal className="mt-8">
          <a href={asset(profile.cv)} download className="btn-primary">
            <DownloadIcon className="h-4 w-4" />
            Download full CV (PDF)
          </a>
        </Reveal>
      )}
    </Section>
  );
}
