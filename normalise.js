export function normalise(cmd) {
  return cmd
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/\bdeployment\b/g, 'deploy')
    .replace(/\bservice\b/g, 'svc')
    .replace(/\bnamespace\b/g, 'ns')
    .replace(/\bpods\b/g, 'pod');
}

export function matches(typed, answer, alternates = []) {
  const n = normalise(typed);
  const candidates = [answer, ...alternates].map(normalise);
  return candidates.includes(n);
}
