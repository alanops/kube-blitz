const prompts = [
  {
    category: 'pods', difficulty: 'easy',
    title: 'Pod Warmup',
    text: 'Create a pod named web using image nginx.',
    acceptable: ['kubectl run web --image=nginx'],
    explanation: 'kubectl run creates a single pod imperatively when you provide a name and image.',
    docs: 'https://kubernetes.io/docs/reference/kubectl/generated/kubectl_run/'
  },
  {
    category: 'pods', difficulty: 'easy',
    title: 'Namespace Prep',
    text: 'Create namespace payments.',
    acceptable: ['kubectl create namespace payments'],
    explanation: 'Namespaces are created imperatively with kubectl create namespace.',
    docs: 'https://kubernetes.io/docs/reference/kubectl/generated/kubectl_create/kubectl_create_namespace/'
  },
  {
    category: 'deployments', difficulty: 'easy',
    title: 'Scale It',
    text: 'Scale deployment api to 3 replicas.',
    acceptable: ['kubectl scale deployment api --replicas=3'],
    explanation: 'kubectl scale updates the desired replica count for scalable resources.',
    docs: 'https://kubernetes.io/docs/reference/kubectl/generated/kubectl_scale/'
  },
  {
    category: 'services', difficulty: 'medium',
    title: 'Expose Frontend',
    text: 'Expose deployment frontend on port 80.',
    acceptable: ['kubectl expose deployment frontend --port=80'],
    explanation: 'kubectl expose generates a Service from an existing resource such as a Deployment.',
    docs: 'https://kubernetes.io/docs/reference/kubectl/generated/kubectl_expose/'
  },
  {
    category: 'ops', difficulty: 'medium',
    title: 'Image Rollout',
    text: 'Set image on deployment shop, container shop, to nginx:1.27.',
    acceptable: ['kubectl set image deployment/shop shop=nginx:1.27'],
    explanation: 'kubectl set image updates the image for a named container on a workload.',
    docs: 'https://kubernetes.io/docs/reference/kubectl/generated/kubectl_set/kubectl_set_image/'
  },
  {
    category: 'deployments', difficulty: 'medium',
    title: 'Create Deployment',
    text: 'Create deployment api using image nginx.',
    acceptable: ['kubectl create deployment api --image=nginx'],
    explanation: 'kubectl create deployment is the imperative form for quickly starting a Deployment.',
    docs: 'https://kubernetes.io/docs/reference/kubectl/generated/kubectl_create/kubectl_create_deployment/'
  },
  {
    category: 'config', difficulty: 'medium',
    title: 'ConfigMap Literal',
    text: 'Create configmap app-config from literal mode=prod.',
    acceptable: ['kubectl create configmap app-config --from-literal=mode=prod'],
    explanation: 'Use kubectl create configmap with --from-literal to generate config quickly.',
    docs: 'https://kubernetes.io/docs/reference/kubectl/generated/kubectl_create/kubectl_create_configmap/'
  },
  {
    category: 'config', difficulty: 'hard',
    title: 'Secret Literal',
    text: 'Create secret generic db-secret from literal password=swordfish.',
    acceptable: ['kubectl create secret generic db-secret --from-literal=password=swordfish'],
    explanation: 'Secrets can be created imperatively with kubectl create secret generic and --from-literal.',
    docs: 'https://kubernetes.io/docs/reference/kubectl/generated/kubectl_create/kubectl_create_secret_generic/'
  },
  {
    category: 'deployments', difficulty: 'hard',
    title: 'Three Replica Deployment',
    text: 'Create deployment web using image nginx with 3 replicas.',
    acceptable: ['kubectl create deployment web --image=nginx --replicas=3'],
    explanation: 'You can include --replicas during kubectl create deployment.',
    docs: 'https://kubernetes.io/docs/reference/kubectl/generated/kubectl_create/kubectl_create_deployment/'
  },
  {
    category: 'pods', difficulty: 'hard',
    title: 'Generate YAML Only',
    text: 'Generate YAML for a pod named debug using image busybox without creating it.',
    acceptable: [
      'kubectl run debug --image=busybox --dry-run=client -o yaml',
      'kubectl run debug --image=busybox -o yaml --dry-run=client'
    ],
    explanation: 'Use --dry-run=client -o yaml to generate manifest YAML without creating the resource.',
    docs: 'https://kubernetes.io/docs/reference/kubectl/generated/kubectl_run/'
  },
  {
    category: 'services', difficulty: 'hard',
    title: 'NodePort Exposure',
    text: 'Expose pod web on port 80 as a NodePort service.',
    acceptable: ['kubectl expose pod web --port=80 --type=NodePort'],
    explanation: 'kubectl expose can create different service types when you specify --type.',
    docs: 'https://kubernetes.io/docs/reference/kubectl/generated/kubectl_expose/'
  },
  {
    category: 'ops', difficulty: 'hard',
    title: 'Annotate Deployment',
    text: 'Annotate deployment api with owner=ops.',
    acceptable: ['kubectl annotate deployment api owner=ops'],
    explanation: 'kubectl annotate applies metadata imperatively to a resource.',
    docs: 'https://kubernetes.io/docs/reference/kubectl/generated/kubectl_annotate/'
  },
  {
    category: 'pods', difficulty: 'easy',
    title: 'Busybox Scout',
    text: 'Create a pod named scout using image busybox.',
    acceptable: ['kubectl run scout --image=busybox'],
    explanation: 'kubectl run remains a fast imperative way to create a single pod from an image.',
    docs: 'https://kubernetes.io/docs/reference/kubectl/generated/kubectl_run/'
  },
  {
    category: 'deployments', difficulty: 'medium',
    title: 'Scale Frontend',
    text: 'Scale deployment frontend to 5 replicas.',
    acceptable: ['kubectl scale deployment frontend --replicas=5'],
    explanation: 'Use kubectl scale to adjust replicas on a deployment imperatively.',
    docs: 'https://kubernetes.io/docs/reference/kubectl/generated/kubectl_scale/'
  },
  {
    category: 'services', difficulty: 'medium',
    title: 'Expose API',
    text: 'Expose deployment api on port 8080.',
    acceptable: ['kubectl expose deployment api --port=8080'],
    explanation: 'kubectl expose creates a service directly from a workload resource.',
    docs: 'https://kubernetes.io/docs/reference/kubectl/generated/kubectl_expose/'
  },
  {
    category: 'config', difficulty: 'easy',
    title: 'Namespace Ops',
    text: 'Create namespace staging.',
    acceptable: ['kubectl create namespace staging'],
    explanation: 'Creating namespaces quickly is a common imperative task in the CKA.',
    docs: 'https://kubernetes.io/docs/reference/kubectl/generated/kubectl_create/kubectl_create_namespace/'
  },
  {
    category: 'config', difficulty: 'hard',
    title: 'ConfigMap Region',
    text: 'Create configmap region-config from literal region=eu-west-1.',
    acceptable: ['kubectl create configmap region-config --from-literal=region=eu-west-1'],
    explanation: 'ConfigMaps built from literals are common imperative setup tasks.',
    docs: 'https://kubernetes.io/docs/reference/kubectl/generated/kubectl_create/kubectl_create_configmap/'
  },
  {
    category: 'ops', difficulty: 'medium',
    title: 'Label Nodes',
    text: 'Annotate deployment frontend with team=platform.',
    acceptable: ['kubectl annotate deployment frontend team=platform'],
    explanation: 'Imperative annotation commands are useful for quick metadata updates.',
    docs: 'https://kubernetes.io/docs/reference/kubectl/generated/kubectl_annotate/'
  },
  {
    category: 'services', difficulty: 'hard',
    title: 'Messaging Service',
    text: 'Create a service named messaging-service to expose the messaging pod within the cluster on port 6379. The messaging pod is running in the default namespace.',
    details: [
      ['Service', 'messaging-service'],
      ['Port', '6379'],
      ['Type', 'ClusterIP'],
      ['Namespace', 'default'],
      ['Constraint', 'Use imperative commands'],
      ['Note', 'Use the right labels']
    ],
    weight: 8,
    acceptable: [
      'kubectl expose pod messaging --name=messaging-service --port=6379 --type=ClusterIP'
    ],
    explanation: 'kubectl expose pod creates a ClusterIP Service with selectors derived from the pod labels, which satisfies the requirement to use the right labels.',
    docs: 'https://kubernetes.io/docs/reference/kubectl/generated/kubectl_expose/'
  },
  {
    category: 'ops', difficulty: 'hard',
    title: 'Orange Rescue',
    text: 'A new application orange is deployed. There is something wrong with it. Identify and fix the issue.',
    details: [
      ['Question', 'Is the issue fixed?'],
      ['Target', 'deployment/orange'],
      ['Constraint', 'Use imperative commands'],
      ['Fix', 'Repair the deployment image']
    ],
    weight: 12,
    acceptable: [
      'kubectl set image deployment/orange orange=nginx:1.27'
    ],
    explanation: 'This blitz version focuses on the imperative repair step. The expected command updates the orange deployment to a healthy image.',
    docs: 'https://kubernetes.io/docs/reference/kubectl/generated/kubectl_set/kubectl_set_image/'
  },
  {
    category: 'services', difficulty: 'hard',
    title: 'HR Web App Service',
    text: 'Expose the hr-web-app created in the previous task as a service named hr-web-app-service, accessible on port 30082 on the nodes of the cluster. The web application listens on port 8080.',
    details: [
      ['Name', 'hr-web-app-service'],
      ['Type', 'NodePort'],
      ['Endpoints', '2'],
      ['Port', '8080'],
      ['NodePort', '30082']
    ],
    weight: 8,
    acceptable: [
      'kubectl expose deployment hr-web-app --name=hr-web-app-service --type=NodePort --port=8080 --target-port=8080 --node-port=30082',
      'kubectl expose deployment hr-web-app --name=hr-web-app-service --port=8080 --target-port=8080 --type=NodePort --node-port=30082'
    ],
    explanation: 'Use kubectl expose deployment with NodePort and the required node-port value to publish the app on cluster nodes.',
    docs: 'https://kubernetes.io/docs/reference/kubectl/generated/kubectl_expose/'
  },
  {
    category: 'config', difficulty: 'hard',
    title: 'PV Analytics',
    text: 'Create a Persistent Volume with the given specification.',
    details: [
      ['Volume name', 'pv-analytics'],
      ['Storage', '100Mi'],
      ['Access mode', 'ReadWriteMany'],
      ['Host path', '/pv/data-analytics'],
      ['Checks', 'Volume name, storage capacity, accessMode, hostPath']
    ],
    weight: 8,
    acceptable: [
      'kubectl create -f pv-analytics.yaml'
    ],
    explanation: 'This one is intentionally exam-style: imperative workflow often means generating or applying a manifest file for PV resources. In this blitz version, the expected answer is the apply/create step after preparing the YAML.',
    docs: 'https://kubernetes.io/docs/concepts/storage/persistent-volumes/'
  },
  {
    category: 'ops', difficulty: 'hard',
    title: 'Webapp HPA',
    text: 'Create a Horizontal Pod Autoscaler (HPA) with name webapp-hpa for the deployment named kkapp-deploy in the default namespace with the webapp-hpa.yaml file located under the root folder.',
    details: [
      ['HPA name', 'webapp-hpa'],
      ['Deployment', 'kkapp-deploy'],
      ['Metric', 'CPU utilization'],
      ['Target average', '50%'],
      ['Scale-down stabilization', '300 seconds'],
      ['File', '/webapp-hpa.yaml']
    ],
    weight: 10,
    acceptable: [
      'kubectl apply -f webapp-hpa.yaml',
      'kubectl create -f webapp-hpa.yaml'
    ],
    explanation: 'Like the PV task, this prompt represents the imperative apply/create step after preparing the required manifest. The file-based workflow is common in exam-style Kubernetes tasks.',
    docs: 'https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/'
  },
  {
    category: 'ops', difficulty: 'hard',
    title: 'Analytics VPA',
    text: 'Deploy a Vertical Pod Autoscaler (VPA) with name analytics-vpa for the deployment named analytics-deployment in the default namespace.',
    details: [
      ['VPA name', 'analytics-vpa'],
      ['Deployment', 'analytics-deployment'],
      ['Requests', 'Adjust CPU and memory automatically'],
      ['Update policy', 'Recreate'],
      ['Checks', 'Created for deployment and updatePolicy set to Recreate']
    ],
    weight: 9,
    acceptable: [
      'kubectl apply -f analytics-vpa.yaml',
      'kubectl create -f analytics-vpa.yaml'
    ],
    explanation: 'This exam-style task assumes you prepare the VPA manifest and then deploy it imperatively with kubectl apply/create.',
    docs: 'https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler'
  },
  {
    category: 'services', difficulty: 'hard',
    title: 'Web Gateway',
    text: 'Create a Kubernetes Gateway resource with the required listener configuration.',
    details: [
      ['Name', 'web-gateway'],
      ['Namespace', 'nginx-gateway'],
      ['Gateway Class Name', 'nginx'],
      ['Listener protocol', 'HTTP'],
      ['Listener port', '80'],
      ['Listener name', 'http']
    ],
    weight: 6,
    acceptable: [
      'kubectl apply -f web-gateway.yaml',
      'kubectl create -f web-gateway.yaml'
    ],
    explanation: 'Gateway API resources are usually created from manifests. This prompt focuses on the imperative apply/create step once the file is ready.',
    docs: 'https://kubernetes.io/docs/concepts/services-networking/gateway/'
  },
  {
    category: 'ops', difficulty: 'hard',
    title: 'Helm Chart Upgrade',
    text: 'Update the helm repository and then upgrade the kk-mock1 release in namespace kk-ns to chart version 6.11.2.',
    details: [
      ['Release', 'kk-mock1'],
      ['Namespace', 'kk-ns'],
      ['Action', 'Update repo and upgrade chart'],
      ['Chart version', '6.11.2'],
      ['Checks', 'Deployment running and chart version upgraded']
    ],
    weight: 8,
    acceptable: [
      'helm repo update && helm upgrade kk-mock1 podinfo/podinfo --version 6.11.2 -n kk-ns',
      'helm repo update && helm upgrade kk-mock1 podinfo/podinfo -n kk-ns --version 6.11.2'
    ],
    explanation: 'This prompt captures the imperative two-step workflow: refresh repository metadata, then run helm upgrade with the target chart version.',
    docs: 'https://helm.sh/docs/helm/helm_upgrade/'
  }
];

const STORAGE_KEY = 'kube-blitz-best-v1';

const ui = {
  modeSelect: document.getElementById('modeSelect'),
  difficultySelect: document.getElementById('difficultySelect'),
  categorySelect: document.getElementById('categorySelect'),
  startButton: document.getElementById('startButton'),
  prevButton: document.getElementById('prevButton'),
  nextButton: document.getElementById('nextButton'),
  revealButton: document.getElementById('revealButton'),
  ghostToggle: document.getElementById('ghostToggle'),
  scoreValue: document.getElementById('scoreValue'),
  bestValue: document.getElementById('bestValue'),
  streakValue: document.getElementById('streakValue'),
  timerValue: document.getElementById('timerValue'),
  modeValue: document.getElementById('modeValue'),
  livesValue: document.getElementById('livesValue'),
  feedbackValue: document.getElementById('feedbackValue'),
  promptCounter: document.getElementById('promptCounter'),
  promptDifficulty: document.getElementById('promptDifficulty'),
  promptTitle: document.getElementById('promptTitle'),
  promptWeight: document.getElementById('promptWeight'),
  promptText: document.getElementById('promptText'),
  promptMeta: document.getElementById('promptMeta'),
  promptDetails: document.getElementById('promptDetails'),
  answerForm: document.getElementById('answerForm'),
  answerInput: document.getElementById('answerInput'),
  answerGhost: document.getElementById('answerGhost'),
  helperText: document.getElementById('helperText'),
  answerPanel: document.getElementById('answerPanel'),
  expectedCommand: document.getElementById('expectedCommand'),
  explanationText: document.getElementById('explanationText'),
  docLink: document.getElementById('docLink'),
  summaryPanel: document.getElementById('summaryPanel'),
  summaryText: document.getElementById('summaryText'),
  progressFill: document.getElementById('progressFill'),
  progressText: document.getElementById('progressText'),
  correctValue: document.getElementById('correctValue'),
  incorrectValue: document.getElementById('incorrectValue'),
  accuracyValue: document.getElementById('accuracyValue'),
  historyList: document.getElementById('historyList')
};

const game = {
  mode: 'speed60',
  score: 0,
  streak: 0,
  timer: 60,
  timerId: null,
  running: false,
  lives: Infinity,
  correct: 0,
  incorrect: 0,
  asked: 0,
  currentPrompt: null,
  filteredPrompts: [],
  remainingPrompts: [],
  bestScore: 0,
  ghostEnabled: true,
  roundTotal: 0,
  currentPromptNumber: 1,
  promptHistory: [],
  historyIndex: -1,
  roundTimerBase: Infinity,
  timerCap: Infinity
};

function normalizeCommand(command) {
  return command
    .trim()
    .replace(/^k(\s+)/i, 'kubectl$1')
    .replace(/\s+/g, ' ')
    .replace(/\s*=\s*/g, '=')
    .replace(/\s+([{}])/g, '$1')
    .toLowerCase();
}

function loadBest() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    game.bestScore = Number(parsed.bestScore || 0);
    game.ghostEnabled = parsed.ghostEnabled !== false;
  } catch {
    game.bestScore = 0;
    game.ghostEnabled = true;
  }
}

function saveBest() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({
    bestScore: game.bestScore,
    ghostEnabled: game.ghostEnabled
  }));
}

function getFilteredPrompts() {
  return prompts.filter((prompt) => {
    const categoryOk = ui.categorySelect.value === 'all' || prompt.category === ui.categorySelect.value;
    const difficultyOk = ui.difficultySelect.value === 'mixed' || prompt.difficulty === ui.difficultySelect.value;
    return categoryOk && difficultyOk;
  });
}

function updateGhost() {
  if (!game.ghostEnabled || !game.currentPrompt) {
    ui.answerGhost.textContent = '';
    return;
  }
  const raw = ui.answerInput.value;
  const target = game.currentPrompt.acceptable[0] || '';
  if (!raw.trim()) {
    ui.answerGhost.textContent = target;
    return;
  }
  if (target.toLowerCase().startsWith(raw.trim().toLowerCase())) {
    ui.answerGhost.textContent = raw + target.slice(raw.length);
  } else {
    ui.answerGhost.textContent = '';
  }
}

function renderCurrentPrompt() {
  const next = game.currentPrompt;
  if (!next) return;
  ui.promptCounter.textContent = `${game.currentPromptNumber} / ${game.roundTotal || 1}`;
  ui.promptDifficulty.textContent = next.difficulty[0].toUpperCase() + next.difficulty.slice(1);
  ui.promptTitle.textContent = next.title;
  ui.promptWeight.textContent = `Weight: ${next.weight || 5}`;
  ui.promptText.textContent = next.text;
  ui.promptMeta.textContent = `${next.category} · type the imperative kubectl command`;
  if (next.details?.length) {
    ui.promptDetails.classList.remove('hidden');
    ui.promptDetails.innerHTML = next.details.map(([label, value]) => `<div class="prompt-detail-item"><strong>${label}:</strong> ${value}</div>`).join('');
  } else {
    ui.promptDetails.classList.add('hidden');
    ui.promptDetails.innerHTML = '';
  }
  ui.answerPanel.classList.add('hidden');
  ui.summaryPanel.classList.add('hidden');
  ui.answerInput.value = '';
  resetPromptTimer();
  updateGhost();
  ui.answerInput.focus();
  ui.prevButton.disabled = game.historyIndex <= 0;
}

function choosePrompt() {
  const pool = game.remainingPrompts.length ? game.remainingPrompts : (game.filteredPrompts.length ? [...game.filteredPrompts] : [...prompts]);
  if (!game.remainingPrompts.length) {
    game.remainingPrompts = [...pool];
  }
  const index = Math.floor(Math.random() * game.remainingPrompts.length);
  const [next] = game.remainingPrompts.splice(index, 1);
  game.currentPrompt = next;
  game.currentPromptNumber = Math.min(game.roundTotal - game.remainingPrompts.length, game.roundTotal || 1);
  if (game.historyIndex < game.promptHistory.length - 1) {
    game.promptHistory = game.promptHistory.slice(0, game.historyIndex + 1);
  }
  game.promptHistory.push(next);
  game.historyIndex = game.promptHistory.length - 1;
  renderCurrentPrompt();
}

function showPreviousPrompt() {
  if (game.historyIndex <= 0) return;
  game.historyIndex -= 1;
  game.currentPrompt = game.promptHistory[game.historyIndex];
  game.currentPromptNumber = Math.max(1, game.historyIndex + 1);
  renderCurrentPrompt();
}

function setFeedback(text, cls = '') {
  ui.feedbackValue.className = cls;
  ui.feedbackValue.textContent = text;
}

function addHistory(text, good) {
  const item = document.createElement('div');
  item.className = `history-item ${good ? 'good' : 'bad'}`;
  item.textContent = text;
  ui.historyList.prepend(item);
  while (ui.historyList.children.length > 8) {
    ui.historyList.removeChild(ui.historyList.lastChild);
  }
}

function showReference() {
  if (!game.currentPrompt) return;
  ui.answerPanel.classList.remove('hidden');
  ui.expectedCommand.textContent = game.currentPrompt.acceptable[0];
  ui.explanationText.textContent = game.currentPrompt.explanation;
  ui.docLink.href = game.currentPrompt.docs;
}

function getTimerSettings(mode) {
  if (mode === 'speed60') {
    return { base: 60, cap: 75, perQuestion: false };
  }
  if (mode === 'speed180') {
    return { base: 180, cap: 210, perQuestion: false };
  }
  if (mode === 'question15') {
    return { base: 15, cap: 15, perQuestion: true };
  }
  return { base: Infinity, cap: Infinity, perQuestion: false };
}

function getDifficultyBonus(prompt) {
  const difficulty = prompt?.difficulty || 'medium';
  if (difficulty === 'hard') return 30;
  if (difficulty === 'medium') return 15;
  return 0;
}

function resetPromptTimer() {
  if (game.mode === 'question15') {
    game.timer = game.roundTimerBase;
  }
}

function awardTimeBonus() {
  if (!Number.isFinite(game.timer) || game.mode === 'question15') {
    return 0;
  }
  const weight = game.currentPrompt?.weight || 5;
  const difficulty = game.currentPrompt?.difficulty || 'medium';
  const baseBonus = game.mode === 'speed180' ? 5 : 4;
  const weightBonus = Math.min(Math.floor(weight / 3), 4);
  const difficultyBonus = difficulty === 'hard' ? 3 : difficulty === 'medium' ? 1 : 0;
  const streakBonus = Math.min(game.streak, 3);
  const bonus = baseBonus + weightBonus + difficultyBonus + streakBonus;
  game.timer = Math.min(game.timer + bonus, game.timerCap);
  return bonus;
}

function applySkipPenalty() {
  if (!game.running || !game.currentPrompt) return;
  const penalty = 25 + Math.round((game.currentPrompt.weight || 5) * 1.5);
  game.score = Math.max(0, game.score - penalty);
  game.streak = 0;
  if (Number.isFinite(game.timer) && game.mode !== 'question15') {
    game.timer = Math.max(1, game.timer - 3);
  }
  addHistory(`⏭️ ${game.currentPrompt.title}`, false);
  choosePrompt();
  setFeedback(`Skipped. -${penalty} points${Number.isFinite(game.timer) && game.mode !== 'question15' ? ' · -3s' : ''}`, 'feedback-warn');
  updateStats();
}

function handlePromptTimeout() {
  if (game.mode !== 'question15' || !game.currentPrompt) {
    game.timer = 0;
    updateStats();
    endRound('time expired');
    return;
  }
  game.asked += 1;
  game.streak = 0;
  game.incorrect += 1;
  addHistory(`⏱️ ${game.currentPrompt.title}`, false);
  setFeedback('Time up. Fresh prompt loaded.', 'feedback-bad');
  choosePrompt();
  updateStats();
}

function updateStats() {
  ui.ghostToggle.checked = game.ghostEnabled;
  const total = game.correct + game.incorrect;
  const accuracy = total ? Math.round((game.correct / total) * 100) : 0;
  ui.scoreValue.textContent = game.score;
  ui.bestValue.textContent = game.bestScore;
  ui.streakValue.textContent = game.streak;
  ui.timerValue.textContent = Number.isFinite(game.timer) ? game.timer : '∞';
  ui.modeValue.textContent = ui.modeSelect.options[ui.modeSelect.selectedIndex].text;
  ui.livesValue.textContent = Number.isFinite(game.lives) ? game.lives : '∞';
  ui.correctValue.textContent = game.correct;
  ui.incorrectValue.textContent = game.incorrect;
  ui.accuracyValue.textContent = `${accuracy}%`;
  ui.progressFill.style.width = `${Math.min((total / 20) * 100, 100)}%`;
  ui.progressText.textContent = `Questions answered: ${total}`;
}

function endRound(reason) {
  clearInterval(game.timerId);
  game.running = false;
  if (game.score > game.bestScore) {
    game.bestScore = game.score;
    saveBest();
  }
  setFeedback(`Round over: ${reason}`, 'feedback-warn');
  ui.summaryPanel.classList.remove('hidden');
  ui.summaryText.textContent = `Final score: ${game.score}. Correct: ${game.correct}. Incorrect: ${game.incorrect}. Best score: ${game.bestScore}.`;
  showReference();
  updateStats();
}

function startRound() {
  clearInterval(game.timerId);
  game.mode = ui.modeSelect.value;
  game.score = 0;
  game.streak = 0;
  game.correct = 0;
  game.incorrect = 0;
  game.asked = 0;
  game.filteredPrompts = getFilteredPrompts();
  game.remainingPrompts = [...(game.filteredPrompts.length ? game.filteredPrompts : prompts)];
  game.roundTotal = game.remainingPrompts.length;
  game.currentPromptNumber = 1;
  game.promptHistory = [];
  game.historyIndex = -1;
  game.running = true;
  ui.historyList.innerHTML = '';
  ui.summaryPanel.classList.add('hidden');
  setFeedback('Round started. Go fast, stay precise.');

  const timerSettings = getTimerSettings(game.mode);
  game.roundTimerBase = timerSettings.base;
  game.timerCap = timerSettings.cap;

  if (game.mode === 'speed60' || game.mode === 'speed180' || game.mode === 'question15') {
    game.timer = timerSettings.base;
    game.lives = Infinity;
  } else if (game.mode === 'survival') {
    game.timer = Infinity;
    game.lives = 3;
  } else {
    game.timer = Infinity;
    game.lives = Infinity;
  }

  choosePrompt();
  updateStats();

  if (Number.isFinite(game.timer)) {
    game.timerId = setInterval(() => {
      game.timer -= 1;
      if (game.timer <= 0) {
        handlePromptTimeout();
        return;
      }
      updateStats();
    }, 1000);
  }
}

function submitAnswer() {
  if (!game.running || !game.currentPrompt) return;
  const answer = normalizeCommand(ui.answerInput.value);
  const valid = game.currentPrompt.acceptable.map(normalizeCommand).includes(answer);
  game.asked += 1;

  if (valid) {
    const speedBonus = Number.isFinite(game.timer) ? Math.max(5, Math.floor(game.timer / 10)) : 10;
    const streakBonus = Math.min(game.streak * 5, 40);
    const weightBonus = (game.currentPrompt.weight || 5) * 5;
    const difficultyBonus = getDifficultyBonus(game.currentPrompt);
    const points = 100 + speedBonus + streakBonus + weightBonus + difficultyBonus;
    game.score += points;
    game.streak += 1;
    game.correct += 1;
    const timeBonus = awardTimeBonus();
    const feedbackClass = game.streak >= 3 ? 'combo-hot' : 'feedback-good';
    const timeBonusText = timeBonus ? ` · +${timeBonus}s` : '';
    setFeedback(game.streak >= 3 ? `Combo x${game.streak}. +${points} points${timeBonusText}` : `Correct. +${points} points${timeBonusText}`, feedbackClass);
    addHistory(`✅ ${game.currentPrompt.title}`, true);
    choosePrompt();
  } else {
    game.streak = 0;
    game.incorrect += 1;
    if (Number.isFinite(game.lives)) {
      game.lives -= 1;
    }
    setFeedback('Incorrect command. Study the reference and try again.', 'feedback-bad');
    addHistory(`❌ ${game.currentPrompt.title}`, false);
    showReference();
    if (game.mode === 'survival' && game.lives <= 0) {
      updateStats();
      endRound('out of lives');
      return;
    }
  }

  updateStats();
}

ui.startButton.addEventListener('click', startRound);
ui.prevButton.addEventListener('click', () => {
  if (!game.running) return;
  showPreviousPrompt();
  setFeedback('Moved to previous prompt.', 'feedback-warn');
});
ui.nextButton.addEventListener('click', () => {
  if (!game.running) return;
  applySkipPenalty();
});
ui.revealButton.addEventListener('click', () => {
  showReference();
  setFeedback('Reference revealed. Study the command shape.', 'feedback-warn');
});
ui.answerForm.addEventListener('submit', (event) => {
  event.preventDefault();
  submitAnswer();
});
ui.answerInput.addEventListener('input', updateGhost);
ui.ghostToggle.addEventListener('change', () => {
  game.ghostEnabled = ui.ghostToggle.checked;
  saveBest();
  updateGhost();
});

document.addEventListener('keydown', (event) => {
  const target = event.target;
  const typing = target === ui.answerInput;
  if (event.code === 'KeyS' && !typing) {
    event.preventDefault();
    startRound();
  } else if (event.code === 'KeyN' && !typing) {
    event.preventDefault();
    if (game.running) {
      applySkipPenalty();
    }
  } else if (event.code === 'KeyD' && !typing) {
    event.preventDefault();
    showReference();
    setFeedback('Reference revealed. Study the command shape.', 'feedback-warn');
  }
});

loadBest();
updateStats();
