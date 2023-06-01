## Contributing

:+1::tada: Hi there! We're thrilled that you'd like to contribute to this project. Your help is essential for keeping it great. :tada::+1:

The following is a set of guidelines for contributing to **Parallel** and its packages, which are hosted in the [eviden-parallel organization](https://github.com/eviden-parallel) on GitHub.
These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.

## Code of Conduct

This project and everyone participating in it is governed by the [Atom Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## I don't want to read this whole thing I just have a question!!!

> **Note:** Please don't file an issue to ask a question. You'll get faster results by using the resources below.

We have an official message board where the community chimes in with helpful advice if you have questions.

- [Github Discussions, the official **Parallel** message board](https://github.com/orgs/eviden-parallel/discussions)

## What should I know before I get started?

### Parallel and Packages

**Parallel** is project made up of [multiple repositories](https://github.com/eviden-parallel). When you initially consider contributing to **Parallel**, you might be unsure about which of those repositories implements the functionality you want to change or report a bug for. This section should help you with that.

- [@eviden-parallel/web](https://github.com/eviden-parallel/web) - monorepo for **Parallel** web components. It is the source for both the `@eviden-parallel/core` and `@eviden-parallel/components` packages.
- [@eviden-parallel/icons](https://github.com/eviden-parallel/icons) - the icons that can be used with **Parallel** through the `@eviden-parallel/icons` package.
- [@eviden-parallel/bootstrap](https://github.com/eviden-parallel/bootstrap) - a custom style to make Bootstrap look like **Parallel** through the `@eviden-parallel/bootsrap` package.
- [@eviden-parallel/playground](https://github.com/eviden-parallel/playground) - For any kind of research and experimentation
- [@eviden-parallel/welcome](https://github.com/eviden-parallel/welcome) - tne welcome page for **Parallel**

There are more, but this list should be a good starting point.

### Design 🎨

Every part of **Parallel** is carefully crafted and reviewed by our design team before being implemented.
It will be documented in our [Design Documentation](<https://www.figma.com/file/HCQhkrZ5uM4nI8CvAnR98b/Parallel-Design-Kit-(Public)>)
If you have a question around how we design things, check to see if it is documented there. If it is _not_ documented there, please open a new topic on [Github Discussions, the official **Parallel** message board](https://github.com/orgs/eviden-parallel/discussions) and ask your question.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for **Parallel**. Following these guidelines helps maintainers and the community understand your report :pencil:, reproduce the behavior :computer: :computer:, and find related reports :mag_right:.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one. When you are creating a bug report, please [include as many details as possible](#how-do-i-submit-a-good-bug-report). Fill out [the required template](https://github.com/eviden-parallel/.github/blob/master/.github/ISSUE_TEMPLATE/bug-report.yml), the information it asks for helps us resolve issues faster.

> **Note:** If you find a **Closed** issue that seems like it is the same thing that you're experiencing, open a new issue and include a link to the original issue in the body of your new one.

#### Before Submitting A Bug Report

- **Check the [discussions](https://github.com/orgs/eviden-parallel/discussions)** for a list of common questions and problems.
- **Determine [which repository the problem should be reported in](#parallel-and-packages)**.
- **Perform a [cursory search](https://github.com/search?q=+is%3Aissue+org%3Aeviden-parallel** to see if the problem has already been reported. If it has **and the issue is still open**, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](#parallel-and-packages) your bug is related to, create an issue on that repository and provide the following information by filling in [the template](https://github.com/eviden-parallel/.github/blob/master/.github/ISSUE_TEMPLATE/bug-report.yml).

Explain the problem and include additional details to help maintainers reproduce the problem:

- **Use a clear and descriptive title** for the issue to identify the problem.
- **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by explaining how you use **Parallel**, e.g. which command exactly you used in the terminal, or how you included **Parallel** otherwise. When listing steps, **don't just say what you did, but explain how you did it**. For example, if you moved the cursor to the end of a line, explain if you used the mouse, or a keyboard shortcut, and if so which one?
- **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
- **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
- **Explain which behavior you expected to see instead and why.**
- **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
- **If the problem is related to performance or memory**, include a [performance profile](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/evaluate-performance/) or a [heap snapshots](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/memory-problems/heap-snapshots with your report.
- **If the problem wasn't triggered by a specific action**, describe what you were doing before the problem happened and share more information using the guidelines below.

Provide more context by answering these questions:

- **Can you reproduce the problem?**
- **Did the problem start happening recently** (e.g. after updating to a new version of **Parallel**) or was this always a problem?
- If the problem started happening recently, **can you reproduce the problem in an older version of **Parallel**?** What's the most recent version in which the problem doesn't happen? You can download older versions of **Parallel** from [the releases page](https://github.com/eviden-parallel/web/releases).
- **Can you reliably reproduce the issue?** If not, provide details about how often the problem happens and under which conditions it normally happens.

Include details about your configuration and environment:

- **Which version of **Parallel** are you using?** You can get the exact version from the package-lock.json file in your project.
- **What's the name and version of the OS you're using**?
- **Which [packages](#parallel-and-packages) do you have installed?**.
- **Are you using **Parallel** with multiple monitors?** If so, can you reproduce the problem when you use a single monitor?
- **Which keyboard layout are you using?** Are you using a US layout or some other layout?

### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for **Parallel**, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion :pencil: and find related suggestions :mag_right:.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in the correct template for [feature request](https://github.com/eviden-parallel/.github/blob/master/.github/ISSUE_TEMPLATE/feature-request.yml) and [enhancement](https://github.com/eviden-parallel/.github/blob/master/.github/ISSUE_TEMPLATE/enhancement.yml), including the steps that you imagine you would take if the feature you're requesting existed.

#### Before Submitting An Enhancement Suggestion

- **Determine [which repository the enhancement should be suggested in](#parallel-and-packages)**.
- **Perform a [cursory search](https://github.com/search?q=+is%3Aissue+org%3Aeviden-parallel** to see if the enhancement has already been suggested. If it has, add a comment to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined [which repository](#parallel-and-packages) your enhancement suggestion is related to, create an issue on that repository and provide the following information:

- **Use a clear and descriptive title** for the issue to identify the suggestion.
- **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
- **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
- **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
- **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of **Parallel** which the suggestion is related to. You can use [this tool](https://www.cockos.com/licecap/) to record GIFs on macOS and Windows, and [this tool](https://github.com/colinkeenan/silentcast) or [this tool](https://github.com/GNOME/byzanz) on Linux.
- **Explain why this enhancement would be useful** to most **Parallel** users and isn't something that can or should be implemented as a [community package](#parallel-and-packages).
- **List some other design systems or applications where this enhancement exists.**
- **Specify which version of **Parallel** are you using?** You can get the exact version from the package-lock.json file in your project.
- **Specify the name and version of the OS you're using.**

### Your First Code Contribution

Unsure where to begin contributing to **Parallel**? You can start by looking through these [🆘 help wanted](https://github.com/eviden-parallel/web/search?q=org%3Aeviden-parallel+type%3Aissues+label%3A%F0%9F%86%98+help+wanted) issues:

### Pull Requests

The process described here has several goals:

- Maintain **Parallel**'s quality
- Fix problems that are important to users
- Engage the community in working toward the best possible **Parallel**
- Enable a sustainable system for **Parallel**'s maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the template](PULL_REQUEST_TEMPLATE.md)
2. Follow the [styleguides](#styleguides)
3. Assign the issue(s) to yourself to avoid concurent work on the same task.
4. Open the PR as soon as possible in status `Draft` until it is ready for review.
5. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing <details><summary>What if the status checks are failing?</summary>If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

Here are a addit few things you can do that will increase the likelihood of your pull request being accepted:

- Read the [contributing guidelines](CONTRIBUTING.md).
- Branch name follows [Branching guidelines](#branching-guidelines).
- Commits follows [Commit guidelines](#commit-guidelines).
- Write a [good commit message](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html).
- Design matches [Styleguide](https://parallel.eviden.com/design)
- Write tests whenever applicable.
- Keep your change as focused as possible. If there are multiple changes you would like to make that are not dependent upon each other, consider submitting them as separate pull requests.

## Styleguides

### Branche name

Develoment branches should follow the following format: `<type>/<name>`
To make it easier, type uses the same values as the type in commit messages and must be one of the following:

| Type        | Description                                                                                                 |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| `build`     | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| `ci`        | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| `docs`      | Documentation only changes                                                                                  |
| `feat`      | A new feature                                                                                               |
| `fix`       | A bug fix                                                                                                   |
| `perf`      | A code change that improves performance                                                                     |
| `refactor`  | A code change that neither fixes a bug nor adds a feature                                                   |
| `style`     | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| `test`      | Adding missing tests or correcting existing tests                                                           |
| `chore`     | Changes to the build process or auxiliary tools (example scopes: gulp, broccoli, npm)                       |
| `reasearch` | Researching and learning new technologies                                                                   |

#### Release branches

The following branches are used for releases.
Changes should be made to development branches and merge into release branches through pull requests.

| Branch              | Tag         | Description                                    |
| ------------------- | ----------- | ---------------------------------------------- |
| `main`              | latest      | Currentey released version                     |
| `next`              | next        | Released version, not yet ready for prime time |
| `beta`              | beta        | Beta version                                   |
| `alpha`             | alpha       | Alpha version                                  |
| `release-<version>` | `<version>` | LTS version                                    |

### Commit message

Commit messages are used for automatic versioning.
It is therefor following the [conventional commits](https://www.conventionalcommits.org/) guidelines.

_The commit message format will be checked in the project using pre-commit hooks._

The format is defined as follows:

```
<type>([optional scope]): <description>

[optional body]

[optional footer(s)]
```

#### Type

Type must be one of the following:
To make it easier, type uses the same values as the type in commit messages and must be one of the following:

| Type       | Description                                                                                                 |
| ---------- | ----------------------------------------------------------------------------------------------------------- |
| `build`    | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| `ci`       | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| `docs`     | Documentation only changes                                                                                  |
| `feat`     | A new feature                                                                                               |
| `fix`      | A bug fix                                                                                                   |
| `perf`     | A code change that improves performance                                                                     |
| `refactor` | A code change that neither fixes a bug nor adds a feature                                                   |
| `style`    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| `test`     | Adding missing tests or correcting existing tests                                                           |
| `chore`    | Changes to the build process or auxiliary tools (example scopes: gulp, broccoli, npm)                       |

#### Breaking change

Breaking changes should be marked with `BREAKING CHANGE` in the commit message body or with a `!` after the commit type/scope.

e.g.:

```
chore(deps)!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```

## Resources

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Using Pull Requests](https://help.github.com/articles/about-pull-requests/)
- [GitHub Help](https://help.github.com)
