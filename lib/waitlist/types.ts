export type WaitlistSuccessStatus =
  | "subscribed_new"
  | "already_subscribed"
  | "subscribed_pending_email";

export type WaitlistErrorStatus =
  | "invalid_email"
  | "rate_limited"
  | "server_error";

export type WaitlistSuccessResponse = {
  success: true;
  status: WaitlistSuccessStatus;
  message: string;
};

export type WaitlistErrorResponse = {
  success: false;
  status: WaitlistErrorStatus;
  message: string;
};

export type WaitlistApiResponse =
  | WaitlistSuccessResponse
  | WaitlistErrorResponse;

export type WaitlistSuccessResult = {
  status: WaitlistSuccessStatus;
  message: string;
};
