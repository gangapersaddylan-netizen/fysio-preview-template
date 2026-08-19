export function opnameActief(): boolean {
  if (typeof window === "undefined") return false;
  return new URLSearchParams(window.location.search).has("opname");
}
