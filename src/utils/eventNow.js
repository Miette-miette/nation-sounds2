export function isEventNow(begin_time, end_time) {
  const now = new Date();
  const start = new Date(begin_time);
  const end = new Date(end_time);
  return now >= start && now <= end;
}
