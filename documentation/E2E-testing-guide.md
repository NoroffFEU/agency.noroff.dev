# Project E2E Testing Guide

## Setting Up User Flows for End-to-End Testing

This guide provides instructions for new developers on how to set up user flows for end-to-end (E2E) testing in our project. A user flow is a series of steps a user takes to accomplish a task on the website, like logging in or creating a profile. Understanding and setting up these flows is crucial for effective E2E testing.

### User-Centric Testing Approach

E2E testing should be user-centric, focusing on how a real user would see and interact with the page. Prefer using element and text selectors, such as cy.contains('Log in') or cy.get('button').contains('Login') if there are several elements on the page with the same text, as these more closely mimic a user's interaction with the page. Avoid relying on CSS classes or IDs for selectors, as this approach can lead to fragile tests that break with UI changes. In some cases where there are no other options, you can use data-testid selectors, but this should be a last resort.

### Example: Login Flow

Below is an example of a user flow for the login process. This example follows a sequence of actions and conditions that a user would experience during login.

#### Flow Chart for Login

1. **Start**: The user is on the **Home Page**.
2. **Action**: User clicks on the **Login** button.
3. **Page State**: User is redirected to the **Login Page**.
4. **Action**: User enters credentials (username and password).
5. **Condition**: Are the credentials correct?
   - **Yes**: Proceed to step 6.
   - **No**: Redirect back to step 3 and display an error message on the **Login Page**.
6. **Page State**: User is redirected to the **Profile Page**.
7. **End**: User successfully logs in.

Below is the flow diagram for the login process:

![Login example flow map](./documentation/resources/flow map/Flow_example.png)

### Creating a User Flow

To create a user flow for E2E testing, follow these steps:

1. **Identify the User Task**: Determine the task or feature you want to test (e.g., logging in, creating a profile).

2. **Map the Flow**: Break down the task into a series of steps, as shown in the login example above.

3. **Define Actions and Conditions**: Clearly define what actions the user takes and any conditions that alter the flow (e.g., incorrect password).

4. **Determine Page States**: Identify the different page states that occur as a result of user actions (e.g., redirection to a different page after login).

5. **Document the Flow**: Use a tool like Figma to create a visual representation of the flow. You can find an example of a user flow in our project [here](documentation\resources\flow map\Flow_example.png).

6. **Implement in Tests**: Translate the documented flow into Cypress E2E tests, ensuring that each step and condition is covered.

### Best Practices

- **Be Clear and Concise**: Each step should be clearly and simply described.
- **Cover All Scenarios**: Make sure to consider both successful and unsuccessful paths in your flow.
- **Keep Updated**: As the project evolves, update the user flows to reflect any changes.

### Integration of Cypress Testing Library

We've integrated the Cypress Testing Library to enhance our E2E testing capabilities. This addition allows us to write more maintainable tests by querying elements in a way that's more representative of how users interact with the application. For more details and best practices, visit the [Cypress Testing Library documentation](https://testing-library.com/docs/cypress-testing-library/intro/).

### Accessing and Opening the Figma File

Our user flow diagrams are designed in Figma, and the `.fig` file is included in the project repository for reference and editing. To open and view these files, follow these steps:

1. **Find the Figma File**: Navigate to the project folder and locate the `.fig` file. It's in the `resources` directory [here](./documentation/documentation/resources/flow map/Flow_map.fig).

2. **Open with Figma**:

- If you have Figma installed on your computer, you can double-click the file to open it.
- Alternatively, you can open Figma in your browser, go to the file browser, and use the 'Import File' option to upload and open the `.fig` file.

3. **Viewing and Editing**: Once the file is open in Figma, you can view and edit the user flow diagrams as needed.

For more detailed guidance on using Figma:

- For more information on how to use Figma for designing user flows, visit [Figma Resources](https://www.figma.com/resources/).
- If you do not have Figma installed, you can download it from [Figma Download](https://www.figma.com/downloads/).

### Learning More About Cypress

- To learn more about writing Cypress tests, check out the [Cypress Documentation](https://docs.cypress.io/).

---

We encourage all developers to familiarize themselves with these user flows and contribute to their continuous improvement. If you have any questions or suggestions, please reach out to the team.
