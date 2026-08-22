import { Link, Text } from "@react-email/components";
import { socialLinks } from "@/content/site";
import { EmailShell } from "@/lib/email/components/email-shell";
import { emailColors, emailType } from "@/lib/email/styles";

export function WelcomeEmailTemplate() {
  return (
    <EmailShell
      preview="You're on the Vextra website launch list."
      eyebrow="You're on the list"
      audience="subscriber"
    >
      <Text className="email-display" style={emailType.display}>
        Thanks for joining us.
      </Text>
      <Text style={emailType.lead}>
        You&apos;re on the Vextra website launch list. We&apos;ll send one email
        when the fuller site is live.
      </Text>
      <Text style={emailType.text}>
        In the meantime, follow the work and studio updates on{" "}
        {socialLinks.map((social) => (
          <Link key={social.href} href={social.href} style={styles.link}>
            {social.label}
            {social.key === "instagram" ? "." : ", "}
          </Link>
        ))}
      </Text>
    </EmailShell>
  );
}

const styles = {
  link: { color: emailColors.link, textDecoration: "underline" },
};
