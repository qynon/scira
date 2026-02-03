// Stub rate limiter - add your own implementation
export const unauthenticatedRateLimit = {
  limit: async (_identifier: string) => ({
    success: true,
    limit: 100,
    reset: Date.now() + 86400000,
    remaining: 100,
  }),
};

// Helper function to get IP address from request
export function getClientIdentifier(req: Request): string {
  const forwarded = req.headers.get('x-forwarded-for');
  const realIp = req.headers.get('x-real-ip');
  const ip = forwarded?.split(',')[0] ?? realIp ?? 'unknown';
  return `ip:${ip}`;
}
