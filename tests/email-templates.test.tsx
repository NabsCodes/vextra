import { render } from "@react-email/render";
import { describe, expect, it } from "vitest";
import { EnquiryTeamEmailTemplate } from "@/lib/email/templates/enquiry-team";
import { GeneralEmailTemplate } from "@/lib/email/templates/general";
import { SiteLaunchEmailTemplate } from "@/lib/email/templates/site-launch";
import { TeamNotificationEmailTemplate } from "@/lib/email/templates/team-notification";
import { WelcomeEmailTemplate } from "@/lib/email/templates/welcome";

describe("React Email templates", () => {
  it("renders the project-enquiry example as HTML and plain text", async () => {
    const template = (
      <EnquiryTeamEmailTemplate
        name="Ada Okonkwo"
        email="ada@example.com"
        company="Northstar Operations"
        serviceLabel="Web application"
        serviceDetails=""
        message="We need a dependable operations platform."
      />
    );

    const [html, text] = await Promise.all([
      render(template),
      render(template, { plainText: true }),
    ]);

    expect(html).toContain("New project enquiry");
    expect(html).toContain("Ada Okonkwo wants to talk");
    expect(html).not.toContain("Not provided");
    expect(text).toContain("ada@example.com");
  });

  it("renders the launch-list team notification example", async () => {
    const html = await render(
      <TeamNotificationEmailTemplate
        subscriberEmail="ada@example.com"
        signedUpAtLocal="August 21, 2026 at 4:30 PM GMT+1"
        signedUpAtUtc="August 21, 2026 at 3:30 PM UTC"
      />,
    );

    expect(html).toContain("New launch-list signup");
    expect(html).toContain("ada@example.com");
    expect(html).toContain("Signed up");
    expect(html).toContain("UTC");
    expect(html).not.toContain("Signup ID");
    expect(html).not.toContain("Timestamp ISO");
  });

  it("renders the subscriber welcome example", async () => {
    const html = await render(<WelcomeEmailTemplate />);

    expect(html).toContain("on the list");
    expect(html).toContain("one email");
    expect(html).toContain("LinkedIn");
    expect(html).toContain("Follow along");
  });

  it("renders the general broadcast example", async () => {
    const html = await render(<GeneralEmailTemplate />);

    expect(html).toContain("An update from Vextra");
    expect(html).toContain("Studio update");
    expect(html).toContain("Visit the site");
    expect(html).toContain("You received this email from Vextra Limited.");
  });

  it("renders the site-launch broadcast example", async () => {
    const html = await render(<SiteLaunchEmailTemplate />);

    expect(html).toContain("fuller site is live");
    expect(html).toContain("Now live");
    expect(html).toContain("Visit the site");
    expect(html).toContain("Start a Project");
    expect(html).toContain("https://vextralimited.com/contact");
    expect(html).toContain("#2f3a3f");
    expect(html).toContain("Follow along");
  });
});
