import { ObjectType } from "@/components/Reports";

export const filter = (data: ObjectType[]) => {
  // Get current date
  let t = new Date();
  // Create UTC date for daysAgo
  let d = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate() - 30));
  // Filter and sort data

  return data
    .filter((item) => new Date(item.time.date) >= d)
    .sort((a, b) => a.time.date.localeCompare(b.time.date));
};
