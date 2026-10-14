/**
 * Staging ticket template. No Resend, SendGrid, or other provider is called.
 * This module must not grow into a live 500-message send.
 */

export type TicketDispatchResult = {
  sent: 0;
  reason: "provider-not-connected";
};

export function championshipTicketHtml() {
  return `<!DOCTYPE html>
<html>
  <body style="margin:0;background:#020203;color:#f5f3ec;font-family:Segoe UI,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#020203;padding:32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#0B0B0C;border:2px solid #FFD700;padding:28px;">
            <tr>
              <td style="color:#FFD700;font-size:13px;font-weight:800;letter-spacing:0.14em;">
                A.C.E. CHAMPIONSHIP LAYOUT TICKET
              </td>
            </tr>
            <tr>
              <td style="padding-top:16px;color:#f5f3ec;font-size:16px;line-height:1.6;">
                This is a staging template. It was not delivered. No season clock is running, no clan count has been verified, and this website does not run a biometric check or an anti-cheat client.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function dispatchChampionshipTickets(): Promise<TicketDispatchResult> {
  return { sent: 0, reason: "provider-not-connected" };
}
