# GitHub Actions, Configurations and Workflows

## [Smarter Bullets Pipeline ](./smarter-bullets.yml)

Lints, tests, builds, and deploys the Smarter Bullets full-stack application.

## [Snyk Security](./snyk-security.yml)

Scans the repository application code and dependencies for potential vulnerabilities. Also does something similar to dependabot, and suggests version bumps to dependencies.

## [Artifact Cache Cleanup](./artifact-cache-cleanup.yml)

Cleans out all of the cached artifacts the pipelines use once a pull request has closed on a branch.

## [Dependabot](../dependabot.yml)

This workflow sets up the automatic pull request generation for dependency bumps, running checks to ensure the dependency doesn't break the application build.

## [Sweep AI Bot](../sweep.yaml)

This workflow provides configuration for Sweep AI bot's issue handling.

# Available Issues Templates

## [Bug Template](../ISSUE_TEMPLATE/bug_report.md)

For reporting application or developer environment defects.

## [Feature Request](../ISSUE_TEMPLATE/feature_request.md)

For requesting new capabilities in any part of Smarter Bullets.
