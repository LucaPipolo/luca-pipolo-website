# Luca Pipolo Website

This repository container the personal Website of Luca Pipolo, a Senior Frontend
UX Developer.

## 🛠️ Setup

Requirements:

- [Node](https://nodejs.org/en/) >= 18.x
- [pnpm](https://pnpm.io/) >= 7.x

Setup steps:

1. `git clone git@github.com:LucaPipolo/luca-pipolo-website.git && cd
   luca-pipolo-website`
1. Run `pnpm install`
1. Run `pnpm run setup`

Available scripts:

| Script                        | Description                                                |
| ----------------------------- | ---------------------------------------------------------- |
| `pnpm run setup`              | Install Node dependencies for Next.js and Sanity.io.       |
| `pnpm run dev`                | Runs `pnpm run dev:frontend` + `pnpm run dev:backend`.     |
| `pnpm run dev:frontend`       | Runs `next dev`.                                           |
| `pnpm run dev:backend`        | Runs `sanity dev`.                                         |
| `pnpm run build`              | Runs `pnpm run build:frontend` + `pnpm run build:backend`. |
| `pnpm run build:frontend`     | Runs `next build`.                                         |
| `pnpm run build:backend`      | Runs `sanity build`.                                       |
| `pnpm run start:frontend`     | Runs `next start`.                                         |
| `pnpm run start:backend`      | Runs `sanity start`.                                       |
| `pnpm deploy:backend`         | Runs `sanity deploy`.                                      |
| `pnpm deploy-graphql:backend` | Runs `sanity graphql deploy`.                              |
