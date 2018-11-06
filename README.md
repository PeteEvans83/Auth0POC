## Auth0 Technical Exercise

Auth0 Technical Exercise by Peter Evans

### Overview

---

This project contains two main components:

/Application

A simple React SPA with the following behaviour:

- Detects whether the user is logged in.
- If the user is not logged in, a Login button will be presented.
- If the user is logged in, three buttons will be displayed.
- Refreshes the users session with the OP Periodically

This SPA extends the Auth0 React examples located [here](https://github.com/auth0-samples/auth0-react-samples/tree/master/01-Login).

/Resource_Server

An ASPNET Core WebAPI that provides access to a single resource, 9000 hours of premium content, and can interacted with

- HTTP Get - Requires the role "Incubator"
- HTTP Put - Requires the role "CEO"
- HTTP Delete - Requires the role "Investor"

### Getting started

---

1. Launch Resource Server
2. Launch SPA Application
3. Login using one of the credentials below

#### Launch Resource Server

---

Run as Docker container

```
cd .\Resource_Server\
docker build -t resource_server .
docker run -d -p 5000:80 --name rs resource_server
```

Build & Run from source (Requires netcore >=2.1 SDK https://www.microsoft.com/net/download/dotnet-core/2.1)

```
cd .\Resource_Server\
dotnet build
dotnet run
```

#### Launch React SPA

---

Run as Docker container

```
cd .\application\
docker build -t notpiedpiper .
docker run -d -p 3000:3000 --name npp notpiedpiper
```

Build & Run from source (Requires Node.js >=10.0 and npm >=6.4)

```
cd .\application\
npm install
npm start
```

---

#### Pre-defined Credentials

---

The following credentials have been set up at petereevansauth0.au.auth0.com

| Username                        | Account Password | Role      |
| :------------------------------ | :--------------- | :-------- |
| Erlich@not-piedpiper.com.au     | Aviato420        | Incubator |
| Richard@not-piedpiper.com.au    | N3wInternet      | CEO       |
| Russ@not-radioOnInternet.com.au | 3CommaClub       | Investor  |

#### Notes of Interest

CORS and Redirects

While for the purpose of a POC/Demo, having two seperate runtimes (Node and netcore) serving http requests introduces CORS related complexity, it was more interesting that localhost addresses were forbidden from being used for post-logout redirect URIs in configuring the OP.

Including a specific Audience for scope=token requests

In order to have a JWT-formatted access token returned as part of an Implicit flow request, the audience MUST be specified, otherwise a non-JWT access token will be returned.

Custom Claims

Two Collision Resistant Namespaced (CRN) Claims were introduced in this POC.

http://not-piedpiper.com.au/logoutredirect is included as part of the id_token claim set and includes a preferred URL to be redirected to after logging out at both the RP and OP.

http://not-piedpiper.com.au/role is included as part of the access token when the custom scope api:access is requested and is used by the resource_server to perform RBAC operations based on the bearer JWT access token.

Audience for API Tokens - Access Tokens wouldnt come back as JWTs without it

[CheckSession](https://auth0.github.io/auth0.js/global.html#checkSession) was used to provide rolling sessions in the SPA.

Previously, I'd designed using Refresh Tokens (Native Apps) or /Authorize?id_token_hint={id_token}&promt=none with a session store backing to implement rolling sessions. Didnt have enough time to drill into the CheckSession implementation and pros/cons.
