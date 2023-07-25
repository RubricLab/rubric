# Rubric Labs ESLint Config

Custom ESLint config for the Rubric Labs monorepo.

This is [Rubric Labs](https://rubriclab.com)' first public package.

It serves as a template for publishing packages under a larger, private monorepo.

To update the package, make a change then run `yarn workspace @rubriclab/eslint-config publish`. This command will prompt you for a new version number.

To make a package public, make sure to update each dependent's **package.json**.

This flow could be streamlined a lot. Ie., updated public packages could be automatically version-bumped and published upon merge to main.

Til then, happy publishing.
