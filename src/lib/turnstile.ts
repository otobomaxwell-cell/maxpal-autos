const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

type TurnstileVerifyResponse = {
  readonly success: boolean;
};

export async function verifyTurnstileToken(token: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    console.error("TURNSTILE_SECRET_KEY is not set");
    return false;
  }

  const response = await fetch(VERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret: secretKey, response: token }),
  });

  if (!response.ok) {
    console.error("Turnstile verification request failed", response.status);
    return false;
  }

  const data = (await response.json()) as TurnstileVerifyResponse;
  return data.success;
}
