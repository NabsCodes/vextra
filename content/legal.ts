import { siteContent } from "@/content/site";
import type { LegalDocument } from "@/types/legal";

export const privacyPolicy: LegalDocument = {
  eyebrow: "Legal",
  title: "Privacy Policy",
  lastUpdated: "February 5, 2026",
  sections: [
    {
      title: "Introduction",
      blocks: [
        {
          type: "paragraph",
          parts: [
            'Vextra Limited ("Vextra," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at vextralimited.com and use our services.',
          ],
        },
        {
          type: "paragraph",
          parts: [
            "By accessing or using our services, you agree to the terms of this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access or use our services.",
          ],
        },
      ],
    },
    {
      title: "Information We Collect",
      blocks: [
        {
          type: "paragraph",
          parts: [
            "We may collect information about you in a variety of ways. The information we may collect includes:",
          ],
        },
        { type: "subheading", text: "Personal Data" },
        {
          type: "paragraph",
          parts: [
            "Personally identifiable information that you voluntarily provide to us when you sign up for our website launch list, contact us, or otherwise engage with our services. This may include:",
          ],
        },
        {
          type: "list",
          items: [
            { parts: ["Email address"] },
            { parts: ["Name (if provided)"] },
            { parts: ["Company or organization name (if provided)"] },
            { parts: ["Any other information you choose to provide"] },
          ],
        },
        { type: "subheading", text: "Automatically Collected Data" },
        {
          type: "paragraph",
          parts: [
            "When you visit our website, we may automatically collect certain information about your device and usage patterns, including:",
          ],
        },
        {
          type: "list",
          items: [
            { parts: ["IP address and approximate location"] },
            { parts: ["Browser type and version"] },
            { parts: ["Operating system"] },
            { parts: ["Referring URLs and pages visited"] },
            { parts: ["Time and date of your visit"] },
            { parts: ["Time spent on pages"] },
          ],
        },
      ],
    },
    {
      title: "How We Use Your Information",
      blocks: [
        {
          type: "paragraph",
          parts: [
            "We use the information we collect for various purposes, including to:",
          ],
        },
        {
          type: "list",
          items: [
            {
              parts: [
                "Notify you about our product launches, updates, and services",
              ],
            },
            {
              parts: ["Respond to your inquiries and provide customer support"],
            },
            {
              parts: [
                "Analyze usage patterns to improve our website and services",
              ],
            },
            {
              parts: ["Send you marketing communications (with your consent)"],
            },
            {
              parts: [
                "Comply with legal obligations and protect our rights and interests",
              ],
            },
            { parts: ["Detect and prevent fraud or unauthorized access"] },
          ],
        },
      ],
    },
    {
      title: "Information Sharing and Disclosure",
      blocks: [
        {
          type: "paragraph",
          parts: [
            "We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:",
          ],
        },
        { type: "subheading", text: "Service Providers" },
        {
          type: "paragraph",
          parts: [
            "We may share your information with third-party service providers who perform services on our behalf, such as email delivery (Resend), analytics (Vercel Analytics), and hosting services. These providers are bound by contractual obligations to keep your information confidential and use it only for the purposes for which we disclose it to them.",
          ],
        },
        { type: "subheading", text: "Legal Requirements" },
        {
          type: "paragraph",
          parts: [
            "We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).",
          ],
        },
        { type: "subheading", text: "Business Transfers" },
        {
          type: "paragraph",
          parts: [
            "If Vextra is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. We will provide notice before your information becomes subject to a different privacy policy.",
          ],
        },
      ],
    },
    {
      title: "Data Security",
      blocks: [
        {
          type: "paragraph",
          parts: [
            "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.",
          ],
        },
      ],
    },
    {
      title: "Data Retention",
      blocks: [
        {
          type: "paragraph",
          parts: [
            "We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.",
          ],
        },
      ],
    },
    {
      title: "Your Rights",
      blocks: [
        {
          type: "paragraph",
          parts: [
            "Depending on your location, you may have certain rights regarding your personal information, including:",
          ],
        },
        {
          type: "list",
          items: [
            {
              label: "Access:",
              parts: ["Request access to your personal data we hold"],
            },
            {
              label: "Correction:",
              parts: ["Request correction of inaccurate or incomplete data"],
            },
            {
              label: "Deletion:",
              parts: ["Request deletion of your personal data"],
            },
            {
              label: "Portability:",
              parts: ["Request a copy of your data in a portable format"],
            },
            {
              label: "Objection:",
              parts: ["Object to the processing of your personal data"],
            },
            {
              label: "Withdrawal:",
              parts: ["Withdraw consent at any time where we rely on consent"],
            },
          ],
        },
        {
          type: "paragraph",
          parts: [
            "To exercise any of these rights, please contact us at ",
            {
              type: "link",
              label: siteContent.contact.email,
              href: siteContent.contact.emailHref,
            },
            ".",
          ],
        },
      ],
    },
    {
      title: "Cookies and Tracking Technologies",
      blocks: [
        {
          type: "paragraph",
          parts: [
            "We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.",
          ],
        },
        {
          type: "paragraph",
          parts: [
            "We use analytics services (such as Vercel Analytics) to help us understand how visitors engage with our website. These services may use cookies and similar technologies to collect information about your use of the website.",
          ],
        },
        {
          type: "paragraph",
          parts: [
            "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our services.",
          ],
        },
      ],
    },
    {
      title: "Third-Party Links",
      blocks: [
        {
          type: "paragraph",
          parts: [
            "Our website may contain links to third-party websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.",
          ],
        },
      ],
    },
    {
      title: "Children's Privacy",
      blocks: [
        {
          type: "paragraph",
          parts: [
            "Our services are not intended for individuals under the age of 18. We do not knowingly collect personally identifiable information from children under 18. If we become aware that we have collected personal data from a child under 18 without verification of parental consent, we take steps to remove that information from our servers.",
          ],
        },
      ],
    },
    {
      title: "International Data Transfers",
      blocks: [
        {
          type: "paragraph",
          parts: [
            "Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those of your jurisdiction. By providing us with your information, you consent to such transfer.",
          ],
        },
      ],
    },
    {
      title: "Changes to This Privacy Policy",
      blocks: [
        {
          type: "paragraph",
          parts: [
            'We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy Policy. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.',
          ],
        },
      ],
    },
    {
      title: "Contact Us",
      blocks: [
        {
          type: "paragraph",
          parts: [
            "If you have any questions about this Privacy Policy or our data practices, please contact us:",
          ],
        },
        {
          type: "list",
          items: [
            {
              label: "Email:",
              parts: [
                {
                  type: "link",
                  label: siteContent.contact.email,
                  href: siteContent.contact.emailHref,
                },
              ],
            },
            {
              label: "Phone:",
              parts: [
                {
                  type: "link",
                  label: siteContent.contact.phone,
                  href: siteContent.contact.phoneHref,
                },
              ],
            },
          ],
        },
        {
          type: "paragraph",
          parts: [siteContent.company.name, { type: "break" }, "Nigeria"],
        },
      ],
    },
  ],
};
