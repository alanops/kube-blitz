const TIPS_URL = 'https://alanops.github.io/cka-tips/tips.json';

export async function loadTips() {
  const res = await fetch(TIPS_URL, { cache: 'no-cache' });
  if (!res.ok) throw new Error(`tips fetch failed: ${res.status}`);
  return res.json();
}

export function tipToPrompt(tip) {
  return {
    id: tip.id,
    category: mapDomainToCategory(tip.domain, tip.subtopic),
    difficulty: ['easy', 'medium', 'hard'][tip.difficulty - 1] || 'easy',
    title: tip.principle,
    text: tip.prompt,
    acceptable: [tip.answer, ...(tip.alternates || [])],
    explanation: tip.principle,
    docs: tip.docs,
  };
}

function mapDomainToCategory(domain, subtopic) {
  if (subtopic === 'helm') return 'helm';
  if (domain === 'workloads' && subtopic === 'deployments') return 'deployments';
  if (domain === 'workloads') return 'deployments';
  if (domain === 'networking') return 'services';
  if (domain === 'troubleshooting') return 'ops';
  if (subtopic === 'config') return 'config';
  return 'ops';
}
