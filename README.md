# Backstage As Devops

How to setup Backstage with DevOps in mind.

## Setup Application

* npx @backstage/create-app
* cd app && yarn dev
* Add Github Discovery
  * yarn add --cwd packages/backend @backstage/plugin-catalog-backend-module-github
* Add Roadie Github PR
  * yarn add --cwd packages/app @roadiehq/backstage-plugin-github-pull-requests
* Add Roadie Github Insights
  * yarn add --cwd packages/app @roadiehq/backstage-plugin-github-insights
* Add K8s plugin
  * yarn add --cwd packages/app @backstage/plugin-kubernetes
  * yarn add --cwd packages/backend @backstage/plugin-kubernetes-backend