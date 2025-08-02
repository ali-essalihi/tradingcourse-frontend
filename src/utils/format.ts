export function formatVideoDuration(durationSeconds: number) {
  const hours = Math.floor(durationSeconds / 3600);
  const minutes = Math.floor((durationSeconds % 3600) / 60);
  const seconds = durationSeconds % 60;
  const formatted = [hours, minutes, seconds];
  if (!hours) {
    formatted.shift();
  }
  return formatted.map(e => e.toString().padStart(2, "0")).join(":");
}
