# Modern Portfolio Website

A beautiful, responsive portfolio website built with React, Tailwind CSS, and Vite.

## Features

✨ **Modern Design** - Clean and professional UI with gradient accents
📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
⚡ **Fast Performance** - Built with Vite for optimal loading speeds
🎨 **Tailwind CSS** - Utility-first CSS for rapid UI development
🔗 **Smooth Navigation** - Smooth scrolling between sections

## Sections

1. **Navigation Bar** - Fixed navbar with smooth scroll navigation to all sections
2. **Hero Section** - Eye-catching welcome section with call-to-action buttons
3. **About Me** - Personal introduction and education details
4. **Experience** - Relevant courses and learning achievements
5. **Skills** - Technical skills with proficiency progress bars
6. **Projects** - Project showcase with expandable details including:
   - Project description
   - Key features
   - Technology stack
   - GitHub repository links
7. **Contact** - Message form and social media links (GitHub, Instagram, LeetCode)
8. **Footer** - Social media connections and credits

## Project Structure

```
my-app/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── public/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Technologies Used

- **React 18** - JavaScript library for building user interfaces
- **Vite** - Next generation frontend build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd my-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5174](http://localhost:5174) in your browser

## Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `dist/` directory.

## Customization

### Update Your Information

Edit the following files to customize the portfolio:

- **Navbar Links**: Modify `src/components/Navbar.jsx`
- **Personal Info**: Update `src/components/Hero.jsx` and `src/components/About.jsx`
- **Education**: Edit education array in `src/components/About.jsx`
- **Courses**: Update courses array in `src/components/Experience.jsx`
- **Skills**: Modify skill data in `src/components/Skills.jsx`
- **Projects**: Update projects array in `src/components/Projects.jsx`
- **Social Links**: Customize links in `src/components/Contact.jsx`

### Colors & Styling

Customize colors and theme in:
- `tailwind.config.js` - Tailwind configuration
- `src/index.css` - Global styles

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal use.

## Contact

For questions or suggestions, feel free to reach out through the contact form in the portfolio.

---

Built with ❤️ using React & Tailwind CSS

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
