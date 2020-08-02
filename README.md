# Space Cabin

> Open source room reservation application.

## Related Projects

  - https://github.com/space-cabin/Evan-Service-Reservations
  - https://github.com/space-cabin/reviews
  - https://github.com/space-cabin/PhotoGallery

## Table of Contents
1. [Introduction](#introduction)
1. [Usage](#usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Introduction

A description module for a single product feature page built using React, Express, and MongoDB.
This module was designed for use with [Related Projects](#related_projects) in conjunction with a proxy server 

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

MongoDB is required to run this application, so make sure it has been installed:
https://docs.mongodb.com/manual/installation/

## Usage

To test or use application it will need to be seeded, to seed run:

```sh
npm run seed
```

To start application, from project root:

```sh
npm start
```

Navigate between 127.0.0.1:3001/0 or localhost:3001/0 and 127.0.0.1:3001/99 or localhost:3001/99 to view dynamically rendered poduct description pages


## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
