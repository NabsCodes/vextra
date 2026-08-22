import "server-only";

import { createElement } from "react";
import { renderEmailTemplate } from "@/lib/email/render";
import {
  EnquiryTeamEmailTemplate,
  type EnquiryTeamEmailProps,
} from "@/lib/email/templates/enquiry-team";

export function buildEnquiryTeamEmail(props: EnquiryTeamEmailProps) {
  return renderEmailTemplate(createElement(EnquiryTeamEmailTemplate, props));
}
