# Toun III
A startpage for your homelab

## Features
- Easily customizable
- Theme support
- Multi-language support
- Versatile searchbar

## Searchbar
The searchbar in Toun III lets you bypass mouse interactoins and brings multiple apps and search engines straight to your homepage.

### Quick launch
Type `.` and the name of your listed app or bookmark to go to that bookmark

This is powered by a fuzzy search algorithm, so users don't need to type the entire name of the app or bookmark to access it

`.portainer`, `.port`, and even horrible mispellings like `.porinwendr` will take you to portainer

### Prefixes
Typing one of the following prefixes will launch a search for the rest of the string

| Prefix | Search engine |
| --- | --- |
| No prefix | Google |
| `.d` | DuckDuckGo |
| `.s` | Spotify |
| `.t` | Twitter |
| `.g` | Google |
| `.y` | YouTube |
| `.w` | Wikipedia |
| `.i` | Instagram |
| `.f` | Facebook |
| `.n` | Netflix |

## Docker Deployment

### Prerequisites
- Docker installed on your system
- Docker Compose (optional, but recommended)

### Building the Docker Image

```bash
# Build the Docker image
docker build -t toun-iii .

# Run the Docker container
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  toun-iii
```

### Docker Compose (Recommended)

Create a `docker-compose.yml` file in the project root:

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

Then run:

```bash
docker-compose up
```

### Environment Variables

You can pass environment variables to customize the deployment:

```bash
docker run -p 3000:3000 \
  -e NODE_ENV=production \
  -e NEXT_PUBLIC_SOME_VAR=value \
  toun-iii
```

### Accessing the Application

After starting the container, access the application at:
- http://localhost:3000

### Notes
- The Docker image is optimized for production deployment
- Runs as a non-root user for enhanced security
- Uses multi-stage build to minimize image size
