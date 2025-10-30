# Pet Website

A neat, responsive single-page React app showcasing adoptable pets, built to demonstrate:

- Git workflow and collaboration (branches + PRs)
- CI/CD via GitHub Actions (build, test, docker image, push to registry)
- Containerization with Docker
- Kubernetes manifests for deployment
- Infrastructure as Code example using Terraform

## Quick start (local)

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run locally (dev server):
   ```bash
   npm run dev
   ```

3. Build and run Docker container:
   ```bash
   docker build -t pet-website:latest .
   docker run -p 3000:3000 pet-website:latest
   ```

## New features added

- Favorites: click the heart on a pet card to save favorites (stored in localStorage).
- More sample pets and realistic metadata (breed, location, vaccinated) added.
- Improved UI: hero section, filters, pet detail modal, and responsive grid.

## CI/CD

- GitHub Actions workflow builds, runs tests, builds Docker image and pushes to your registry (configure secrets `REGISTRY`, `REGISTRY_USERNAME`, `REGISTRY_PASSWORD`).

## Deployment

- Apply Kubernetes manifests in `kubernetes/` to deploy to any Kubernetes cluster.

## IaC

- `terraform/` contains a minimal example to provision a container registry and a Kubernetes cluster using a provider of your choice. Replace provider configuration with your cloud provider credentials.

## Collaboration notes

- Use feature branches: `feature/<short-desc>`
- Create PRs, request reviews, and use protected `main` branch with required checks (CI passing, 1 review)