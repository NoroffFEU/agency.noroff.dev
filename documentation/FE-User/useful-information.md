## Useful information

I would like to provide you with some information and insight that I think might be helpful for your upcoming `sprint`, both in terms of resources, existing code and thoughts after experiencing our first `sprint`.

Coming out on the other end, one of the things that stood out to me, is the value of planning, identifying potential problems and communicating those problems to the right channels so it can be efficiently resolved.

With the lack of experienced overseeing on the project, it's likely a lot of potential issues might never be thought of, or if they are, never reach the people that can do something about it.

I would suggest having a defined structure on how to communicate issues, and use the `SM` as a mediator between teams to extract and forward the necessary information to the right channels.

Our instructor highlighted that we're being evaluated on `communication` and that's really what also stands out to me having completed to module. I wouldn't have expected just how secondary writing `code` for the project is to actually communicating about the project really is.

I hope you enjoy yourselves just as much as I did, if there's any questions, don't hesiate to ask and best of luck to you.

## Links

#### Docs

[User-endpoint documentation](https://github.com/NoroffFEU/agency-api.noroff.dev/blob/main/User-Endpoint-Documentation.md)

A lot of information is missing and is not updated with the current state of the backend code, so we'll also provide you with the current backend code for relevant endpoints for more detailed information about the response objeect, as well as giving you some ideas for error handling.

#### Backend

[Login-controller](https://github.com/NoroffFEU/agency-api.noroff.dev/blob/main/src/modules/user/controllers/controllerLogin.js)

[register-controller](https://github.com/NoroffFEU/agency-api.noroff.dev/blob/main/src/modules/user/controllers/controllerRegister.js)

[routes](https://github.com/NoroffFEU/agency-api.noroff.dev/blob/main/src/modules/user/routes.js)

[schema.prisma](https://www.figma.com/file/cNUVBifEDpYxAgAV57da3q/Experimentation?node-id=6%3A2&t=zhwHG24xwodydGdY-0)

Provides you with name of `keys` and `datatype` of `value`. Current code uses a lot of placeholder keys, so a good place would be to update those accordingly.

#### Design

[Figma hifi-wireframes](https://github.com/NoroffFEU/agency-api.noroff.dev/blob/main/prisma/schema.prisma)
You might need permission to view this.

## Code

#### Login

Probably the closest code to the finished `product`. There are however some issues that I think needs to be resolved:

- Error handling in `login()` does not match backend `controller`.
- Functionality for remembering `login` information is not in place, partly due to it being viewed as secondary to primary function, but also because I'm unsure about how to handle this data securely.
- The `remember` me checkmark is part of the `login form`, but is not omitted from the listener. This is probably something that needs to be handled.
- As of now the custom styling have been isolated to a local environment, and should probably instead be handled by agreed upon global custom class(es) instead.
- If there's only `login-form` there needs to be somethinkg part of the server response that indicates the status of `admin` to redirect to the admin section of the app.

#### Profile

Based on the `hi-fi` there is going to be 4 different views:

- Profile student (own)
- Profile student (other)
- Profile Company (own)
- Profile Company (other)

As of now the HTML is structured into 3 main containers: `#profileContainer` handled by `userDetailsTemplate()` in `/templates/`, `#companyView` and `#studentView`. Views are hidden by default with `Bootstrap` class `d-none`.

`#companyView` holds:

- #companyListings
- #companyApplications
- #companyOffers

Based on `hi-fi-mockup`, it would make sense to ommit `#companyListings` and put it into its own seperate container, as its also part of `Profile Company(other)` view.

`#studentView` holds:

- #studentListings
- #studentApplications
- #studentOffers

As for `userDetailsTemplate()` logic for viewing will require updating, as of now it only checks the role of the stored login response, which will not yield the required outcome. It would make more sense to check the profile response object for the type of profile being returned, and then use `key.values` from `profile` endpoint and stored login `profile` to check if

```js
if (profile.name === login.name) {
  // Do something
}
```

It was not part of our sprint, but I also expect creating the modals and its functionality to end up `User-module` responsibility, I've given them a potential home, but no `html` and `js` exists for their actual functionality.
