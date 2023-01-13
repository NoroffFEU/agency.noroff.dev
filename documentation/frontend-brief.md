# Industry Knowledge CA - Frontend Brief

Noroff has requested a job agency web application to allow for students to interact with industry partners to find placements. As a member of the development team your role will involve the creation of a front end application to interact with the RESTful API.

This document outlines the front end requirements for this project. It is important to note that this document is not a design document and does not contain any information about the API.

As the only team with a `dependency` you will be starting your work later than the rest of the teams. This does not mean that you should be idle, as there is planning and research work to be done as well as communicating with other teams to ensure that they are providing everything you need.

## Libraries

As a team you have a breadth of experience with various frameworks and libraries from previous projects as well as your own research. This equips you to determine the tools and libraries that will be most suitable for this project. Generally speaking this project will require:

- A front end framework
- A UI framework
- A testing framework

Other libraries might include time formatting, routing, state management, animations, etc.

## Views

The exact brief for each view will be delivered by the Design team on Figma. You can join the Figma workspace here: 

[Team Invite](https://www.figma.com/team_invite/redeem/rUtvliWUCyEWu1aFubq3hX)
[Project Invite](https://www.figma.com/files/project/78324144/agency.noroff.dev?fuid=1194169844201401532)

The following views are recommended for this project:

1. Public - Home
2. Public - Listing
3. Public - Listings
4. Public - Authentication
5. Public - Profile
6. Admin - Listings
7. Admin - Offers
8. Admin - Applications
9. Admin - Users

Applications and Offers will both be exposed in the Listing and Profile views respectively. In the Profile View offers sent and received should be displayed in a mailbox. In the Listing View applications sent and received should be displayed depending on the user role context.

Admin users require a table view to manage all listings, offers and applications and users. As this is not public facing design fidelity is less important however it must be functional. (Examples, Figma Studio, Strapi, etc).

Note that each of these views has various states, for example, Authentication can be used to register, login and potentially reset password.

## Process

1. Discuss project-wide libraries and approaches with the Front End team
2. Discuss feature-wide libraries and approaches with your feature team
3. Work with your QA engineers to devise sensible tests for your feature
4. Request API changes from the Backend team if required
5. Discuss wireframes with designers to ensure feasibility
6. Once wireframes are approved, divide the work into tasks
7. Commit to at least one task, and begin functional development
8. When your work is ready for review, open a PR and alert your Scrum Master
9. When all of your tasks are completed, offer assistance to other teams - especially QA

Please document your code where appropriate and ensure that it is linted and formatted.

## Deliverables

- [ ] At least one work item branch merged into main per developer
- [ ] Record of team collaboration / communication in the GitHub channel
- [ ] Documentation for delivered features