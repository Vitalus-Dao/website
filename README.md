# Vitalus DAO

Vitalus is a neighborhood of Metavillage. The social building blocks for a metaverse worth living in.

This repository uses [Next.js](https://nextjs.org/) & [tailwindcss](https://tailwindcss.com/).

## Setup

1) Run `npm install`
2) Start development with `npm run dev`

## Scaffolding

- `components` (_Import_: `from "@components/*";`)\
Directory for all shared components
- `helpers` (_Import_: `from "@helpers/*";`)\
Different helper functions and constants
- `types` (_Import_: `from "@types";`)\
Type definitions and models used as component properties or for api

## Contribution Guid

### Code Style
We use style guidelines from airbnb.

[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

[Airbnb React/JSX Style Guide](https://github.com/airbnb/javascript/tree/master/react)

Both style guides are furthermore expanded with rules for typescript.

### Commit Message Style
Rules for commit message format (see [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary))

Pattern: `<type>([optional scope]): <description>`\
The description shall contain the ticket number if possible and needs to be in sentence case.

Example message: `feat(product): My message with info about the commit (#0)`

**List of types**

| Commit Type | Title                    | Description                                                                                                 |
| ----------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| `feat`      | Features                 | A new feature                                                                                               |
| `fix`       | Bug Fixes                | A bug Fix                                                                                                   |
| `docs`      | Documentation            | Documentation only changes                                                                                  |
| `style`     | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| `refactor`  | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |
| `perf`      | Performance Improvements | A code change that improves performance                                                                     |
| `test`      | Tests                    | Adding missing tests or correcting existing tests                                                           |
| `build`     | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| `ci`        | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| `chore`     | Chores                   | Other changes that don't modify src or test files                                                           |
| `revert`    | Reverts                  | Reverts a previous commit                                                                                   |
