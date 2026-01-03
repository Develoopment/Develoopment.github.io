# Personal Portfolio Website

A minimalistic, responsive, and modern portfolio website for showcasing your projects and skills as an ECE student and developer.

## Features

- **One-page layout** with smooth scrolling navigation
- **Project showcase** with filtering by category (Software/Hardware)
- **Responsive design** that works on all devices
- **Modern UI** with subtle animations and transitions
- **Easy to customize** and update content
- **Contact form** (frontend only - requires backend integration for full functionality)

## Technologies Used

- HTML5
- CSS3 (with Tailwind CSS)
- Vanilla JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts (via Tailwind)

## Getting Started

1. Clone this repository or download the files
2. Open `index.html` in your web browser
3. Start customizing the content to make it your own!

## Customization Guide

### 1. Update Your Information

1. Open `index.html` in a text editor
2. Update the following sections:
   - Your name in the navigation and hero section
   - About section with your personal information
   - Contact information and social media links
   - Footer information

### 2. Add/Modify Projects

1. Open `projects.js`
2. You'll find a `projects` array with sample projects
3. To add a new project, add an object to the array with this structure:

```javascript
{
    id: 7, // Unique ID (auto-increment from the last project)
    title: "Project Title",
    description: "Brief description of your project",
    image: "URL to project image or placeholder",
    tags: ["tag1", "tag2", "tag3"], // Add relevant tags
    github: "#", // Link to GitHub repository (or "#" if not applicable)
    demo: "#", // Link to live demo (or "#" if not applicable)
    type: "software" // "software" or "hardware"
}
```

### 3. Styling

- The website uses Tailwind CSS for styling
- Custom styles can be added to `styles.css`
- Color scheme can be easily modified by changing the indigo color values in the HTML and CSS files

### 4. Contact Form (Optional)

To make the contact form functional, you'll need to:
1. Set up a backend service (like Formspree, Netlify Forms, or a custom backend)
2. Update the form's `action` attribute in `index.html`
3. Update the form submission handler in `main.js`

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # Custom CSS styles
├── main.js             # Main JavaScript file
├── projects.js         # Project data and management
└── README.md           # This file
```

## Browser Support

The website is compatible with all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Credits

- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

## License

This project is open source and available under the [MIT License](LICENSE).

---

Feel free to customize this portfolio to match your personal style and needs. Happy coding! 🚀
