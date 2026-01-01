# 📝 React Tasks App

A modern, beautiful task management application built with React, Vite, Material-UI, and TailwindCSS. Create, view, and delete tasks with an elegant purple-themed interface.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?style=flat&logo=vite)
![Material-UI](https://img.shields.io/badge/MUI-7.3.6-007FFF?style=flat&logo=mui)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.18-38B2AC?style=flat&logo=tailwind-css)

## 🌐 Live Demo

Check out the live demo: [View Demo on GitHub Pages](https://cristiancortes1.github.io/react-tasks-app/)

## ✨ Features

- **Create Tasks**: Add new tasks with a title and description
- **View Tasks**: Display all tasks in a beautiful, responsive table
- **Delete Tasks**: Remove tasks with a single click
- **Elegant UI**: Custom purple theme with smooth hover effects
- **Material Design**: Built with Material-UI components
- **Responsive**: Styled with TailwindCSS for optimal viewing on all devices
- **Context API**: Global state management with React Context
- **Fast Refresh**: Lightning-fast HMR with Vite

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd react-tasks-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the app for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🛠️ Built With

### Core Technologies

- **[React 19](https://react.dev/)** - JavaScript library for building user interfaces
- **[Vite](https://vite.dev/)** - Next-generation frontend tooling

### UI Framework & Styling

- **[Material-UI](https://mui.com/)** - React component library
- **[Emotion](https://emotion.sh/)** - CSS-in-JS styling
- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework

### Development Tools

- **[ESLint](https://eslint.org/)** - Code linting and formatting
- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)** - Official React plugin for Vite

## 📁 Project Structure

```
react-tasks-app/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images and other assets
│   ├── components/      # React components
│   │   ├── ButtonDelete.jsx
│   │   ├── ButtonSubmit.jsx
│   │   ├── FormContainer.jsx
│   │   ├── InputText.jsx
│   │   ├── TableTask.jsx
│   │   ├── TaskCard.jsx
│   │   ├── TaskList.jsx
│   │   └── TasksForm.jsx
│   ├── context/         # React Context providers
│   │   └── TaskContext.jsx
│   ├── data/            # Initial data
│   │   └── tasks.js
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── eslint.config.js     # ESLint configuration
```

## 🎨 Color Scheme

The app features a beautiful purple gradient theme:

- Background: `#240046` (Dark Purple)
- Accent: `#C77DFF` (Light Purple)
- Primary: `#7B2CBF` (Medium Purple)
- Interactive: `#9D4EDD` (Purple)
- Hover: `#5A189A` (Deep Purple)

## 🔧 Configuration

### Vite Configuration

The project uses Vite's default React configuration with TailwindCSS integration. See [vite.config.js](vite.config.js) for details.

### ESLint Configuration

Code quality is maintained with ESLint rules for React. See [eslint.config.js](eslint.config.js) for the full configuration.

## 📝 Usage

### Creating a Task

1. Enter a task title in the "Task Title" field
2. Enter a description in the "Task Description" field
3. Click the "Create" button
4. Your task will appear in the table below

### Deleting a Task

1. Locate the task you want to delete in the table
2. Click the "Delete" button in the corresponding row
3. The task will be removed from the list

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Your Name**

- GitHub: [@CristianCortes1](https://github.com/CristianCortes1)
- LinkedIn: [Cristian Cortes Bejarano](www.linkedin.com/in/cristian-cortes-bejarano)

## 🙏 Acknowledgments

- Material-UI team for the amazing component library
- Vite team for the blazing-fast build tool
- React team for the powerful UI library
- TailwindCSS for the utility-first CSS framework

---

Made with ❤️ and React
