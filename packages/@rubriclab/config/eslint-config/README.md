# Rubric Labs ESLint Config

Custom ESLint config for the Rubric Labs monorepo.

This is [Rubric Labs](https://rubriclab.com)' first public package.

It serves as a template for publishing packages under a larger, private monorepo.

To update the package, make a change then run `yarn workspace @rubriclab/eslint-config publish`. This command will prompt you for a new version number.

To make a package public, make sure to update each dependent's **package.json**.

To streamline the process, simply run `yarn publish-packages` at the root. Select the modified package, optionally skip the major and minor versions, then write a summary of changes.

More streamlining to come.

Til then, happy publishing.
