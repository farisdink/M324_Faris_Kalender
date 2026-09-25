# ships with npm 10/11
FROM node:22-slim

WORKDIR /app

# TODO: Make sure the container is kept open (does not exit right away)
# We do this by running a command that runs forever in the background
CMD ["tail", "-f", "/dev/null"]
