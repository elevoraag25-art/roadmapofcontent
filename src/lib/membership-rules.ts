export const OWNER_ID = "582d60fd-82f8-49cd-9aaa-9b799b9a5655";
export function ownerCanAdminister(userId: string, hasAdminRole: boolean) {
  return userId === OWNER_ID && hasAdminRole;
}
export function accessGrant(days:number|null, lifetime:boolean, now = Date.now()) {
  if (days !== null && (!Number.isFinite(days) || days <= 0)) throw new Error("المدة يجب أن تكون أكبر من صفر");
  return {is_lifetime:lifetime || days===null, access_expires_at:lifetime || days===null ? null : new Date(now+days*86400000).toISOString(),approved_at:new Date(now).toISOString()};
}