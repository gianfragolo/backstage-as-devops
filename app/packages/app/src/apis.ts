import {
  ScmIntegrationsApi, scmIntegrationsApiRef
} from '@backstage/integration-react';
import { AnyApiFactory, configApiRef, createApiFactory } from '@backstage/core-plugin-api';
import { costInsightsApiRef, ExampleCostInsightsClient } from '@backstage/plugin-cost-insights';

export const apis: AnyApiFactory[] = [
  createApiFactory({
    api: scmIntegrationsApiRef,
    deps: { configApi: configApiRef },
    factory: ({ configApi }) => ScmIntegrationsApi.fromConfig(configApi),
  }),
  createApiFactory(costInsightsApiRef, new ExampleCostInsightsClient()),
  
];