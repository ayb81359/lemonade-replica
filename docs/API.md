# Lemonade.gg Replica - API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
All requests (except `/auth/register` and `/auth/login`) require:
```
Headers:
  user-id: <user_id_from_token>
```

## Endpoints

### Authentication

#### POST /auth/register
Register a new user
```json
{
  "username": "player123",
  "email": "player@example.com",
  "password": "secure_password"
}
```

Response:
```json
{
  "token": "jwt_token",
  "userId": "user_id",
  "message": "User registered successfully"
}
```

#### POST /auth/login
Login user
```json
{
  "email": "player@example.com",
  "password": "secure_password"
}
```

Response:
```json
{
  "token": "jwt_token",
  "userId": "user_id",
  "message": "Login successful"
}
```

### Projects

#### GET /projects
Get all user projects

#### POST /projects
Create new project
```json
{
  "name": "My Game",
  "description": "My awesome game",
  "gameType": "simulator"
}
```

#### GET /projects/:id
Get specific project with generations

#### PUT /projects/:id
Update project

#### DELETE /projects/:id
Delete project

### Code Generation

#### POST /generate
Generate code from prompt
```json
{
  "projectId": "project_id",
  "prompt": "Create a coin shop system"
}
```

Response:
```json
{
  "_id": "generation_id",
  "generatedCode": "local code = ...",
  "status": "completed",
  "executionTime": 1200,
  "creditsCost": 10,
  "creditsRemaining": 90
}
```

#### GET /generate/project/:projectId
Get generation history for project

### Prompts

#### GET /prompts/suggestions
Get AI-suggested prompts for inspiration

#### GET /prompts/templates
Get game type templates

## Error Responses

```json
{
  "error": "Error message here"
}
```

### Status Codes
- `200` - Success
- `400` - Bad request
- `401` - Unauthorized
- `404` - Not found
- `500` - Server error
