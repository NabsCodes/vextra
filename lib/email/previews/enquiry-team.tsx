import { EnquiryTeamEmailTemplate } from "@/lib/email/templates/enquiry-team";

export default function EnquiryTeamEmailPreview() {
  return (
    <EnquiryTeamEmailTemplate
      name="Ada Okonkwo"
      email="ada@example.com"
      company="Northstar Operations"
      serviceLabel="Web application"
      serviceDetails=""
      message="We need an operations platform that gives field teams a clear workflow and gives managers reliable reporting."
    />
  );
}
