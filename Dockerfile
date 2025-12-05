FROM node:22.12.0-alpine3.19

WORKDIR /src

ARG DATABASE_URL=""
ENV DATABASE_URL=${DATABASE_URL}

# Copy core project files
COPY package.json package-lock.json tsconfig.json ./

# Copy app code
COPY src ./src
COPY prisma ./prisma

# Install dependencies
RUN npm install

# Install TypeScript compiler (tsc)
RUN npm install -g typescript

# Generate Prisma client (optional)
RUN npm run db:generate || echo "Skipping prisma generate"

# Build app
RUN npm run build

# Create .env with DB URL
RUN echo "DATABASE_URL=${DATABASE_URL}" > .env

CMD ["npm","run","astrobackend"]
