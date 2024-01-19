# Industry Knowledge CA

[Loom Presentation](https://www.loom.com/share/000115dcb95e479f91b294db364d503f)

## Purpose of the CA

The purpose of this exercise is twofold:

1. Engage with the scrum environment through role play (RPW)
2. Originate a useful and web ready software product

What we are assessing is not your individual code contribution, but your ability to work in a team with a specific role to play. You are not expected to be an expert in your assigned role, the important thing is that you know your responsibilities and you can agree to a realistic amount of work to complete within the next two weeks. As a rough rule of thumb each developer should have around 3-4 days of development work to complete, however some may have more and others less.

When creating work items, they will not all be equal in terms of demand and complexity. Some tasks can be completed in less than an hour and some will take multiple developers multiple days to achieve. There is no expectation that work is going to be evenly distributed, which is why everyone should discuss and agree the amount of work they commit to for the sprint period. If there is too much work for the number of developers and the amount of time, it is the job of the Scrum Master to communicate this to us (the Product Owner) and we have various buttons we can press:

We can:
- Allocate more developers to a team
- Defer work items to the next class group
- Reduce the scope of a feature

## Extra Time

If you find yourself idle, and there are no remaining work items on your team board - you will become a floating resource to be assigned to another team if they require. If you are a scrum master with no remaining tasks on your board, you can assist other scrum masters in finalising their work.

This is an open source project, if you have ideas for features or improvements they will be added to the backlog for future classes to complete. Since this class is originating the project there will be features that are unattainable in the two week sprint period. If you have completed your work and have an idea for a feature, you are welcome to work on a `Feature Demo` to show off your concept. This is a fun way to spend some extra time and can be where some of the best ideas originate.

## Communication

The key thing in this assignment is communication. If you encounter a problem, it should be communicated to your Scrum Master. If they are not able to find resources or a solution from within the team, they can discuss with other teams or request consultation from a teacher.

If an issue is not communicated, no one can help. In a team environment this behaviour is selfish and can have negative consequences for the project. For example:

> A developer is given the task of validating the password field with Regex. The requirements are unclear and the developer is unsure of the correct Regex to use. At this point, things could go two ways:

> Either the developer suffers in silence, using guesswork and trial and error to get the correct pattern - potentially wasting a lot of time or creating an unreliable pattern in the process. This pattern might be late and not allow for proper QA before the deadline. At this point the Scrum Master cannot include this work in the next build and this work item will be pushed to the next sprint. This will impact the scrum master's delivery. It would also result in a failure for the developer.

> Alternatively, the developer could stop, communicate their situation to their Scrum Master and request a new task to work on while the information required is gathered. This way they have provided important information upwards, and they will not waste their own time working on something that is unclear. Even if this feature is not completed by the end of the sprint period, the developer will still pass since they followed the correct communication process.

TLDR: This assignment is not about completing all work perfectly. This assignment is about completing a realistic amount of work in a team environment. You are assessed on your ability to communicate rather than your individual competency.

## What are we building?

We are building an open source web application to manage job listings for Noroff students from industry. It will allow for clients to post job openings and for students to apply to these. Job applications are managed in a private admin zone, each application can be rejected or approved - sending the candidate an offer. The candidate can either accept or reject their offer.

## Why are we building this?

We could be building anything, but in the interest of keeping this experience close to the real world we have chosen to build a project that has been requested from the University. This application will be open to all students at Noroff and provided open source, free of charge. As this is originated by students, they will always have a strong involvement in how this project develops. We hope that it will be used to increase collaboration between courses too, for example, requesting a Back End Developer from another course to assist with an exam project.

## How are we building this?

We are building this using JavaScript, that is the only real limitation. I would prefer students to be making the major decisions as they will be the ones performing the work and the important thing to us as the Product Owners is that we have a good foundation to develop upon further. The following technologies are suggested for the backend:

- NodeJS (runtime environment)
- Express (web framework)
- Prisma (database connector)

While we could use a package like NextJS or Sveltekit to control both the frontend and the backend, the Product Owners have requested a separation between the API and the frontend. This is to allow for possibilities such as a native mobile app or for students to develop their own frontends as an exam exercise.

## How are we going to organise?

Example: https://github.com/orgs/NoroffFEU/teams/agency-design

The first step is for Scrum Masters to gather the GitHub usernames for their team members so that we can assign them to their correct team on GitHub. When you are assigned you will find a team discussion area, a project kanban board and a settings page. This area belongs to you and your team and you should make all of your key communication here so that it can be reviewed by the Product Owners. This is how you prove your involvement in the project, by asking questions, making requests, providing suggestions, solutions and feedback.

Scrum Masters are in charge of organising their teams, which includes:

- Assigning or reassigning work items to team members with their agreement
- Meeting with their team members either in a call or in person to discuss progress and issues
- Meeting with product owners to update them on progress and issues

There is no requirement for a scrum master to produce any code, however there is nothing stopping them either. The task of organising the team must come first, but if there is spare time contributions can be made.

After Monday the Product Owners will mostly be communicating with the Scrum Masters and we will not check the team discussion boards unless specifically asked to. This is to allow you some space to discuss amongst yourselves and to keep the flow of information clear and reliable.

## Things to remember

- This is a simulation of a real project but with lower stakes (no financial aspect)
- You are not expected to be an expert in your assigned role
- You are laying the foundations for a project not perfecting it
- This is meant to be fun and should be less demanding than previous CAs in terms of time