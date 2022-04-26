## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## circleci
- ci npm run test
- cd deploy to heroku (https://circleci.com/blog/continuous-deployment-nestjs/)
- - add environment variable in project settings (heroku_api_key, heroku_app_name)

37531ec9-bc7b-4bf7-aeb6-aefd8194fc74