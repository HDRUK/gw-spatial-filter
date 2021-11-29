## Microservice - Spatial Filter

### Environment

file: `env.template`

```
# environment file
PORT=3002
HOST=http://localhost:3002

# input
MIN_NUMBER_OF_CHARS=3

# BigQuery
BIG_QUERY_PROJECT_ID=<<BIG_QUERY_PROJECT_ID>>
BIG_QUERY_DATABASE=<<BIG_QUERY_DATABASE>>
BIG_QUERY_TABLE=<<BIG_QUERY_TABLE>>
BIG_QUERY_LIMIT_ROWS=10

# Logging
LOGGING_PROJECT_ID=<<LOGGING_PROJECT_ID>>
LOGGING_LOG_NAME=<<LOGGING_LOG_NAME>>
```

### Endpoint

#### Request
```
GET /api/v1/locations/[filter_value] HTTP/1.1
```
`filter_value`:
- minimum `MIN_NUMBER_OF_CHARS` chars;
- chars types: `[a-zA-Z]`;

#### Response - 200 - ok
```
for filter_value = london
```

```
{
    "success": true,
    "message": "List of Locations",
    "data": [
        {
            "location": "City of London",
            "hierarchy": "United Kingdom,England,London,City of London"
        },
        {
            "location": "London",
            "hierarchy": "United Kingdom,England,London"
        }
    ]
}
```

#### Response - 400 - nok
```
for filter_value = 1234
```

```
{
    "message": "You must provide a string filter"
}
```

#### Google Cloud permissions
check permissions in your project for `Google Logging` and `Google BigQuery`

#### Google Local - configuration

- Download `GCloud` SDK: `https://cloud.google.com/sdk/docs/install`;
- initialize Cloud SDK: `https://cloud.google.com/sdk/docs/initializing`;
- Authorizing Cloud SDK tools: `https://cloud.google.com/sdk/docs/authorizing`;
