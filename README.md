# Backstage As Devops

How to setup Backstage with DevOps in mind.

## Setup Application

* npx @backstage/create-app
* cd app && yarn dev
* Add Github Discovery
  * yarn add --cwd packages/backend @backstage/plugin-catalog-backend-module-github
* Add Github PR
  * yarn add --cwd packages/backend @roadiehq/backstage-plugin-github-pull-requests
