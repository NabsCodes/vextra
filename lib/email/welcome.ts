import "server-only";

import { createElement } from "react";
import { renderEmailTemplate } from "@/lib/email/render";
import { WelcomeEmailTemplate } from "@/lib/email/templates/welcome";

export function buildWelcomeEmail() {
  return renderEmailTemplate(createElement(WelcomeEmailTemplate));
}
