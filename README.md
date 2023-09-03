# 👋 Github Connect Commit

Frontend (React) + backend (NestJS) monorepo with Typescript and Turbopack. This app objective is to show this project's git commit history using Github's REST API.

## 🚀 Tech Stack

### Frontend

-   Vite 🚀
-   ESLint 🧹
-   React 18 ⚛️
-   Typescript 📜
-   TailwindCSS 🎨

### Backend

-   NestJS 🦅
-   Typescript 📜
-   ESLint 🧹

## 🎨 Code Formatting

Prettier was used for code formatting, making the codebase clean and readable.

## 🛠️ Dependencies

The chosen package manager is [pnpm](https://pnpm.io/). To install the dependencies, make sure you have pnpm and run this command on the project root.

`pnpm install`

## ⚙️ Commands

The following table displays the commands found in the package.json file. It's noteworthy that these commands are executed through Turborepo. To run each of these commands, use the syntax pnpm run [command name] on the root directory.

Example

`pnpm run dev`

| Command       | Description                                           |
| ------------- | ----------------------------------------------------- |
| dev           | Starts the project on development mode.               |
| build         | Bundles both the frontend and backend.                |

## Docker Setup 🐳

To containerize the project, you can follow these steps:

### Step 1: Build the Docker image 🛠️

Navigate to the root directory of the project and execute the following command to build the Docker image:

`docker build -t commit-connect .`

### Step 2: Run the Docker Container 🏃‍♂️

After successfully building the Docker image, you can run the container with the following command:

`docker run -it --rm -p 3000:3000 commit-connect`

Now you can access the project by opening your web browser and navigating to [http://localhost:3000](http://localhost:3000). 🌐

## Live Preview 🌐

You can access the project's live preview clicking [here](https://commit-connect-szwttxozqq-uc.a.run.app/).

---

Crafted with ❤️ by Dylan Gonzales
