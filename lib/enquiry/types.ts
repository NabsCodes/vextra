export type EnquirySuccessStatus = "sent";

export type EnquiryErrorStatus =
  | "invalid_input"
  | "rate_limited"
  | "verification_failed"
  | "service_unavailable"
  | "server_error";

export type EnquirySuccessResponse = {
  success: true;
  status: EnquirySuccessStatus;
  message: string;
};

export type EnquiryErrorResponse = {
  success: false;
  status: EnquiryErrorStatus;
  message: string;
};

export type EnquiryApiResponse = EnquirySuccessResponse | EnquiryErrorResponse;
