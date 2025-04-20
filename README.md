# Mintlify Documentation

This repository contains the documentation for our project using Mintlify.

## Development

### Local Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mintlify) to preview the documentation changes locally. To install, use the following command:

```bash
npm i -g mintlify
```

Run the following command at the root of your documentation (where docs.json is):

```bash
mintlify dev
```

### Using the Frontend Editor

The Mintlify Web Editor is the preferred way to edit docs directly without having to open your IDE or run `mintlify dev`. To set this up:

1. Create a GitHub repository for your documentation (or use an existing one)
2. Install the Mintlify GitHub app to your GitHub account at <https://dashboard.mintlify.com/settings/organization/github-app>
3. Connect your repository to Mintlify
4. Access the Web Editor from your Mintlify dashboard

The editor includes key features like:

* Creating branches
* Making pull requests
* Committing changes
* Viewing diffs
* Editing content directly with a visual editor

For more information about the Web Editor, visit <https://mintlify.com/docs/development/web-editor>

### Publishing Changes

Install the Mintlify Github App to auto propagate changes from your repo to your deployment. Changes will be deployed to production automatically after pushing to the default branch.

#### Troubleshooting

* Mintlify dev isn't running - Run `mintlify install` to re-install dependencies.
* Page loads as a 404 - Make sure you are running in a folder with `docs.json`
