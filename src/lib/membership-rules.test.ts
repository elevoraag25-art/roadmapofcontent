import {test,expect} from "bun:test";
import {accessGrant,ownerCanAdminister} from "./membership-rules";
test("only the designated owner with admin role can administer",()=>{
 expect(ownerCanAdminister("582d60fd-82f8-49cd-9aaa-9b799b9a5655",true)).toBe(true);
 expect(ownerCanAdminister("c83c6674-def0-4c5b-a3c1-2b6931226836",true)).toBe(false);
 expect(ownerCanAdminister("582d60fd-82f8-49cd-9aaa-9b799b9a5655",false)).toBe(false);
});
test("free trial starts at approval and lasts exactly three days",()=>{
 const now=Date.parse("2026-11-21T09:00:00Z");
 expect(accessGrant(3,false,now).access_expires_at).toBe("2026-11-24T09:00:00.000Z");
 expect(accessGrant(3,false,now).approved_at).toBe("2026-11-21T09:00:00.000Z");
});
test("monthly access lasts thirty days",()=>expect(accessGrant(30,false,Date.parse("2026-11-21T09:00:00Z")).access_expires_at).toBe("2026-12-21T09:00:00.000Z"));
test("lifetime access has no expiry",()=>{expect(accessGrant(null,true).is_lifetime).toBe(true);expect(accessGrant(null,true).access_expires_at).toBe(null)});