export function generateGoogleCalendarLink({
  title,
  description,
  location,
  start,
  end,
}: {
  title: string;
  description?: string;
  location?: string;
  start: Date;
  end: Date;
}) {
  const formatDate = (date: Date) =>
    date.toISOString().replace(/-|:|\.\d\d\d/g, "");

  const url = new URL("https://calendar.google.com/calendar/render");
  url.searchParams.set("action", "TEMPLATE");
  url.searchParams.set("text", title);
  if (description) url.searchParams.set("details", description);
  if (location) url.searchParams.set("location", location);
  url.searchParams.set("dates", `${formatDate(start)}/${formatDate(end)}`);

  return url.toString();
}
