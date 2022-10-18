import {
  ScmIntegrationsApi, scmIntegrationsApiRef, ScmAuth
} from '@backstage/integration-react';
import { AnyApiFactory, configApiRef, createApiFactory } from '@backstage/core-plugin-api';
import { costInsightsApiRef, ExampleCostInsightsClient } from '@backstage/plugin-cost-insights';
import { exploreToolsConfigRef } from '@backstage/plugin-explore-react';
import {MyRadarApi} from "./MyRadarApi";
import {techRadarApiRef} from "@backstage/plugin-tech-radar";

const tools = [
  {
    title: 'Tech Radar',
    description:
      'Tech Radar is a list of technologies, complemented by an assessment result, called ring assignment.',
    url: '/tech-radar',
    image: '/radar.png',
    tags: ['standards', 'landscape'],
  },
  {
    title: 'GitHub Actions',
    description:
      "GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. Make code reviews, branch management, and issue triaging work the way you want.",
    url: '#',
    image:
      'https://avatars.githubusercontent.com/u/54465427?v=4',
    tags: ['ci/cd','automation'],
  },
  {
    title: 'Cost Insights',
    description: 'Insights into Okteto cloud costs for your organization.',
    url: '/cost-insights',
    image: '/okteto.png',
    tags: ['cloud', 'finops'],
  },
];

export const apis: AnyApiFactory[] = [
  createApiFactory({
    api: scmIntegrationsApiRef,
    deps: { configApi: configApiRef },
    factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
  }),
  ScmAuth.createDefaultApiFactory(),
  createApiFactory(techRadarApiRef, new MyRadarApi()),
  createApiFactory(costInsightsApiRef, new ExampleCostInsightsClient()),
  createApiFactory({
    api: exploreToolsConfigRef,
    deps: {},
    factory: () => ({
      async getTools() {
        return tools;
      },
    }),
  }),
];


