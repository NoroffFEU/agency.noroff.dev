# Noroff Agency Web Application

## Deployment
The project is deployed and accessible here:
[Live Site - Noroff Agency](https://agency.noroff.dev/)

This is a frontend web application for interacting with the Noroff Agency API. It includes a robust structure built with modern web technologies, focusing on modularity, user-friendly navigation, and quality assurance practices. 

## Table of Contents
- [Deployment](#deployment)
- [Goal](#goal)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Development Workflow](#development-workflow)
- [Author & Roles](#author--roles)

## Goal
To create a fully functional and scalable frontend application that meets Noroff's requirements, supports detailed quality assurance, and uses CI/CD integration with GitHub Actions.

## Features
- User-friendly homepage with content retrieved from Noroff Agency API.
- Detailed product and service pages with responsive design.
- Integration with an API to support dynamic data fetching.
- Quality Assurance (QA) practices embedded within the CI/CD pipeline.
- Automated tests (unit and E2E) to ensure code quality and prevent regressions.
- Code linting and formatting standards.

## Technologies Used
- **Vite**: For a fast, optimized development environment.
- **Bootstrap**: For responsive and consistent UI design.
- **Jest & Cypress**: Used for unit and end-to-end testing.
- **ESLint, Prettier**: For consistent code style and formatting.
- **Dotenv**: For environment variable management.
- **GitHub Actions**: Continuous Integration pipeline for linting, testing, and deployment.

## Installation
To set up the project locally, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/NoroffFEU/agency.noroff.dev.git
   ```
2. Switch to the ``phoenix`` branch:
   ```
   cd agency.noroff.dev
   git checkout phoenix
   ```
4. Install dependencies:
   ```
   npm install
   ```
6. Start the development server (uses Vite):
   ```
   npm run dev
   ```
8. Visit the application at http://127.0.0.1:5173.

## Development Workflow
1. Creating a Feature Branch
   Follow branching conventions as detailed in How to Branch.

2. Running Tests
  - Run unit tests with:
  ```
  npm run test-unit
  ```

  - Run E2E tests with:
  ```
  npm run test-e2e
  ```

3. Pre-Commit Quality Check
Each commit runs lint and format checks as per configurations.

4. GitHub Actions
Each pull request triggers:

- Linting
- Unit testing
- Deployment verification

## Author & Roles
Mariusz Rozycki - Quality Assurance & Vice Scrum Master <br>
Email: mariusz.frontdev@gmail.com
