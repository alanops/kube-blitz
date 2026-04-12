# Kube Blitz

Fast arcade-style Kubernetes command trainer for imperative CKA practice.

## What it is
Kube Blitz focuses on command recall at speed.

You get a prompt such as:
- create a pod
- expose a deployment
- scale a deployment
- create a namespace
- create a configmap
- set an image
- update a Helm repo
- add a Helm repo
- upgrade a Helm release
- inspect Helm values/history
- uninstall a Helm release
- verify a Helm rollout

You type the exact `kubectl` or `helm` command as fast and accurately as possible.

## Modes
- **Speed 60** - score as much as possible in 60 seconds
- **Speed 180** - longer speed round
- **Survival** - 3 lives, mistakes cost you
- **Drill** - no time pressure, just repetition

## Categories
- Pods
- Deployments
- Services
- Ops
- Config
- Helm
- All

## Run locally
```bash
cd kube-blitz
python3 -m http.server 8090
```

Then open:

```text
http://localhost:8090
```
