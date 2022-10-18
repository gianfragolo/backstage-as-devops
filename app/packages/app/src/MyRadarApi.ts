import {
    RadarEntry,
    RadarQuadrant,
    RadarRing,
    TechRadarApi,
    TechRadarLoaderResponse,
  } from '@backstage/plugin-tech-radar';
  
  const rings = new Array<RadarRing>();
  rings.push({ id: 'use', name: 'USE', color: '#93c47d' });
  rings.push({ id: 'trial', name: 'TRIAL', color: '#93d2c2' });
  rings.push({ id: 'assess', name: 'ASSESS', color: '#fbdb84' });
  rings.push({ id: 'hold', name: 'HOLD', color: '#efafa9' });
  
  const quadrants = new Array<RadarQuadrant>();
  quadrants.push({ id: 'infrastructure', name: 'Infrastructure' });
  quadrants.push({ id: 'frameworks', name: 'Frameworks' });
  quadrants.push({ id: 'languages', name: 'Languages' });
  quadrants.push({ id: 'process', name: 'Process' });
  
  const entries = new Array<RadarEntry>();
  entries.push({
    timeline: [
      {
        moved: 0,
        ringId: 'use',
        date: new Date('2022-10-22'),
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
    ],
    url: '#',
    key: 'javascript',
    id: 'javascript',
    title: 'JavaScript',
    quadrant: 'languages',
    description:
      'Excepteur **sint** occaecat *cupidatat* non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n```ts\nvar x = "3";\n```\n',
  });
  entries.push({
    timeline: [
      {
        moved: 0,
        ringId: 'use',
        date: new Date('2022-10-22'),
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      },
    ],
    url: '#',
    key: 'csharp',
    id: 'csharp',
    title: 'C#',
    quadrant: 'languages',
    description:
      'Excepteur **sint** occaecat *cupidatat* non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n\n```ts\nconst x = "3";\n```\n',
  });
  entries.push({
    timeline: [
      {
        moved: -1,
        ringId: 'use',
        date: new Date('2022-10-22'),
        description:
          'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      },
    ],
    url: '#',
    key: 'typescript',
    id: 'typescript',
    title: 'TypeScript',
    quadrant: 'languages',
    description:
      'Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat',
  });
  entries.push({
    timeline: [
      {
        moved: 1,
        ringId: 'use',
        date: new Date('2022-10-22'),
        description:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur',
      },
    ],
    url: 'https://webpack.js.org/',
    key: 'webpack',
    id: 'webpack',
    title: 'Webpack',
    quadrant: 'frameworks',
  });
  entries.push({
    timeline: [
      {
        moved: 0,
        ringId: 'use',
        date: new Date('2022-10-22'),
      },
    ],
    url: 'https://reactjs.org/',
    key: 'react',
    id: 'react',
    title: 'React',
    quadrant: 'frameworks',
  });
  entries.push({
    timeline: [
      {
        moved: 0,
        ringId: 'use',
        date: new Date('2022-10-22'),
      },
    ],
    url: 'https://about.gitlab.com/topics/version-control/what-is-code-review/#:~:text=Code%20reviews%20are%20methodical%20assessments,code%20from%20shipping%20to%20customers',
    key: 'code-reviews',
    id: 'code-reviews',
    title: 'Code Reviews',
    description: 'Code reviews are methodical assessments of code designed to identify bugs, increase code quality, and help developers learn the source code. Developing a strong code review process, or utilizing version control, sets a foundation for continuous improvement and prevents unstable code from shipping to customers',
    quadrant: 'process',
  });
  entries.push({
    timeline: [
      {
        moved: 0,
        ringId: 'use',
        date: new Date('2022-10-22'),
      },
    ],
    url: 'https://www.agilealliance.org/agile101/',
    key: 'agile-development',
    id: 'agile-development',
    title: 'Agile Development',
    description: 'Agile is the ability to create and respond to change. It is a way of dealing with, and ultimately succeeding in, an uncertain and turbulent environment.',
    quadrant: 'process',
  });
  entries.push({
    timeline: [
      {
        moved: 0,
        ringId: 'assess',
        date: new Date('2022-10-22'),
      },
    ],
    url: 'https://docs.microsoft.com/en-us/devops/deliver/what-is-infrastructure-as-code',
    key: 'infrastructure-as-code',
    id: 'infrastructure-as-code',
    title: 'Infrastructure As Code',
    description: 'nfrastructure as Code (IaC) is the managing and provisioning of infrastructure through code instead of through manual processes. With IaC, configuration files are created that contain your infrastructure specifications, which makes it easier to edit and distribute configurations.',
    quadrant: 'process',
  });
  entries.push({
    timeline: [
      {
        moved: 0,
        ringId: 'use',
        date: new Date('2022-10-22'),
      },
    ],
    url: 'https://www.docslikecode.com/',
    key: 'docs-like-code',
    id: 'docs-like-code',
    title: 'Docs-like-code',
    description: 'Lets Treat Docs Like Code - Technical documentation with tools and techniques like version control (GitHub) and automation (CICD) with static site generators (SSG) and more.',
    quadrant: 'process',
  });
  entries.push({
    timeline: [
      {
        ringId: 'trial',
        date: new Date('2022-10-22'),
        description: 'long description',
      },
    ],
    url: 'https://backstage.io/',
    key: 'backstage',
    id: 'backstage',
    title: 'Backstage IDP',
    description: 'Powered by a centralized software catalog, Backstage restores order to your infrastructure and enables your product teams to ship high-quality code quickly — without compromising autonomy.',
    quadrant: 'process',
  });
  
  entries.push({
    timeline: [
      {
        ringId: 'use',
        date: new Date('2022-10-22'),
        description: 'long description',
      },
    ],
    url: 'https://github.com',
    key: 'github-actions',
    id: 'github-actions',
    title: 'GitHub Actions',
    description: 'GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. Make code reviews, branch management, and issue triaging work the way you want.',
    quadrant: 'infrastructure',
  });
  entries.push({
    timeline: [
      {
        ringId: 'use',
        date: new Date('2022-10-22'),
        description: 'long description',
      },
    ],
    url: 'https://okteto.com',
    key: 'okteto',
    id: 'okteto',
    title: 'Okteto Cloud',
    description: 'Make Development Faster - Instantly spin up pre-configured environments in the cloud and start developing within seconds',
    quadrant: 'infrastructure',
  });
  
  export const mock: TechRadarLoaderResponse = {
    entries,
    quadrants,
    rings,
  };
  
  export class MyRadarApi implements TechRadarApi {
    async load() {
      return mock;
    }
  }