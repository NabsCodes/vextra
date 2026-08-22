import "server-only";

import { createElement } from "react";
import { renderEmailTemplate } from "@/lib/email/render";
import { TeamNotificationEmailTemplate } from "@/lib/email/templates/team-notification";

function formatSignedUpAt(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "UTC",
    timeZoneName: "short",
  }).format(date);
}

function formatSignedUpAtForTeam({
  date,
  locale,
  timeZone,
}: {
  date: Date;
  locale: string;
  timeZone: string;
}): string {
  try {
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone,
      timeZoneName: "short",
    }).format(date);
  } catch {
    return formatSignedUpAt(date);
  }
}

export function buildTeamNotificationEmail({
  subscriberEmail,
  signupId,
  signedUpAt,
  teamTimeZone,
  teamLocale,
}: {
  subscriberEmail: string;
  signupId: string;
  signedUpAt: Date;
  teamTimeZone: string;
  teamLocale: string;
}) {
  return renderEmailTemplate(
    createElement(TeamNotificationEmailTemplate, {
      subscriberEmail,
      signupId,
      signedUpAtLocal: formatSignedUpAtForTeam({
        date: signedUpAt,
        locale: teamLocale,
        timeZone: teamTimeZone,
      }),
      signedUpAtUtc: formatSignedUpAt(signedUpAt),
      signedUpAtIso: signedUpAt.toISOString(),
      teamTimeZone,
    }),
  );
}
