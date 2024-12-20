# Mini-Stock

A hobby project to explore and test the latest technologies. This project
features:

- **Hono** as the backend framework.
- **Vite** + **Vue** for the frontend (SPA mode).
- Shared backend and frontend powered by Hono.
- **Pico CSS** for lightweight styling.
- **Playwright** + **Cucumber** for E2E testing.

## Table of Contents

1. [About](#about)
2. [Features](#features)
3. [Getting Started](#getting-started)
4. [Usage](#usage)

## About

The **Mini-Stock App** is designed as a Single Page Application (SPA) to
demonstrate a modern tech stack. It uses Hono for the backend, Vite + Vue for
the frontend, and Playwright + Cucumber for E2E testing. Styling is handled
with Pico CSS for simplicity. The project is deployed using Cloudflare Workers.

## Features

- **Hono Framework**: Lightweight backend for routing and API handling.
- **Vite + Vue**: Modern frontend tooling with SPA mode for better user
  experience.
- **Pico CSS**: Minimal CSS framework for beautiful and consistent styling.
- **E2E Testing**: Automated testing using Playwright + Cucumber.
- **Cloudflare Workers**: Deployment-ready for scalable, edge-based hosting.
- **Detailed Reporting**: Generate and view E2E test reports online.

## Getting Started

Follow these steps to set up the project for local development:

1. Clone the repository:

   ```bash
   git clone https://github.com/binhtran432k/mini-stock.git
   cd mini-stock
   ```

1. Install dependencies:

   ```bash
   bun install
   ```

1. Start the development server:

   ```bash
   bun dev
   ```

1. To build the server (Cloudflare Workers compatible):

   ```bash
   bun run build
   ```

## Usage

After setting up, you can access the app locally in your browser. The build process creates a server compatible with **Cloudflare Workers** for deployment. The app is accessible at:

- App: [https://mini-stock.binhtran432k.workers.dev/](https://mini-stock.binhtran432k.workers.dev/)
- E2E Test Report: [https://mini-stock.binhtran432k.workers.dev/report](https://mini-stock.binhtran432k.workers.dev/report)
