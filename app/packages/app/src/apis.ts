import {
  ScmIntegrationsApi, scmIntegrationsApiRef
} from '@backstage/integration-react';
import { AnyApiFactory, configApiRef, createApiFactory } from '@backstage/core-plugin-api';
import { costInsightsApiRef, ExampleCostInsightsClient } from '@backstage/plugin-cost-insights';
import { exploreToolsConfigRef } from '@backstage/plugin-explore-react';

const tools = [
  {
    title: 'Tech Radar',
    description:
      'Tech Radar is a list of technologies, complemented by an assessment result, called ring assignment.',
    url: '/tech-radar',
    image: '/tech-radar.png',
    tags: ['standards', 'landscape'],
  },
  {
    title: 'Cost Insights',
    description: 'Insights into cloud costs for your organization.',
    url: '/cost-insights',
    image: '/google-cloud.png',
    tags: ['cloud', 'finops'],
  },
];

export const apis: AnyApiFactory[] = [
  createApiFactory({
    api: scmIntegrationsApiRef,
    deps: { configApi: configApiRef },
    factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
  }),
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


