export function convertISO8601ToHMS(iso8601Duration: string) {
  const regex = /PT(\d+H)?(\d+M)?(\d+S)?/;
  const matches = iso8601Duration.match(regex);

  if (matches === null || matches.length < 4) return "0:0:0";

  let hours = matches[1] ? matches[1].slice(0, -1) : "0";
  let minutes = matches[2] ? matches[2].slice(0, -1) : "0";
  let seconds = matches[3] ? matches[3].slice(0, -1) : "0";
  hours = hours.padStart(2, "0");
  minutes = minutes.padStart(2, "0");
  seconds = seconds.padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}
