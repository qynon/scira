// Stub email service - add your own implementation (e.g., Resend, SendGrid, etc.)

interface SendLookoutCompletionEmailParams {
  to: string;
  chatTitle: string;
  assistantResponse: string;
  chatId: string;
}

export async function sendLookoutCompletionEmail({
  to,
  chatTitle,
  assistantResponse,
  chatId,
}: SendLookoutCompletionEmailParams) {
  // Add your email provider implementation here
  console.log('Email sending is not configured. Would send to:', to, 'Chat:', chatTitle, chatId, assistantResponse);
  return { success: false, error: 'Email service not configured' };
}
