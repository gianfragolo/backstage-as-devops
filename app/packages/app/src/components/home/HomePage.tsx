import React from 'react';
import {
  HomePageToolkit,
  HomePageStarredEntities,
} from '@backstage/plugin-home';

import { Content, Page, Header } from '@backstage/core-components';
import { HomePageSearchBar } from '@backstage/plugin-search';
import { SearchContextProvider } from '@backstage/plugin-search-react';
import { Grid, makeStyles } from '@material-ui/core';
import { HomePageIFrameCard } from '@roadiehq/backstage-plugin-iframe';
import { VisualStudioCodeLogoIcon } from './icons/VisualStudioCodeLogoIcon';
import { AzureDevOpsLogoIcon } from './icons/AzureDevOpsLogoIcon';
import { AzureLogoIcon } from './icons/AzureLogoIcon';
import { GitHubActionsLogoIcon } from './icons/GitHubActionsLogoIcon';
import { GitHubLogoIcon } from './icons/GitHubLogoIcon';

const useStyles = makeStyles(theme => ({
  searchBar: {
    display: 'flex',
    maxWidth: '60vw',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    padding: '8px 0',
    borderRadius: '50px',
    margin: 'auto',
  },
}));

export const HomePage = () => {
  const classes = useStyles();

  const links = [
    {
      url: 'https://github.com/features/codespaces',
      label: 'VS Code',
      icon: <VisualStudioCodeLogoIcon />,
    },
    {
      url: '#2',
      label: 'AzureDevOps',
      icon: <AzureDevOpsLogoIcon />,
    },
    {
      url: '#3',
      label: 'Azure',
      icon: <AzureLogoIcon />,
    },
    {
      url: 'https://github.com/gianfragolo',
      label: 'GitHub',
      icon: <GitHubLogoIcon />,
    },    
    {
      url: '#6',
      label: 'GitHub Actions',
      icon: <GitHubActionsLogoIcon />,
    },
  ];

  return (
    <SearchContextProvider>
      <Page themeId="home">
      <Header
        title="Welcome to the DevOps Heroes Developer Portal"
        subtitle="A developer experience platform providing a hub to identify and discover technologies."
      />

        <Content>
          <Grid container justifyContent="center" spacing={6} direction="row">
            {/* <HomePageCompanyLogo className={container} logo={<DohLogo />} /> */}
            <Grid container item xs={12} alignItems="center" direction="row">
              <HomePageSearchBar
                classes={{ root: classes.searchBar }}
                placeholder="Search"
              />
            </Grid>
            <Grid item xs={12}>
              <HomePageIFrameCard
                title="Our Speakers"
                height="290"
                src="https://devopsheroes-2022.sessionize.com/speakers"
              />
            </Grid>
            <Grid container item xs={12} justifyContent="center">
              <Grid item xs={12} md={6}>
                <HomePageStarredEntities />
              </Grid>
              <Grid item xs={12} md={6}>
                <HomePageToolkit title="Links" tools={links} />
              </Grid>
            </Grid>
          </Grid>
        </Content>
      </Page>
    </SearchContextProvider>
  );
};
