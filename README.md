# Anshul Chouhan - Neon Portfolio Website

A stunning, futuristic portfolio website featuring neon-themed design, smooth GSAP animations, and responsive layout. Built with HTML5, CSS3, Bootstrap 4.6, and GSAP.

## 🌟 Features

### Design
- **Neon Theme**: Dark background with cyan, magenta, lime, and amber accents
- **Futuristic Typography**: Orbitron and Rajdhani fonts
- **Glass Navigation**: Frosted glass effect with smooth scrolling
- **Responsive Design**: Mobile-first approach with touch-friendly interactions

### Animations
- **GSAP Powered**: Smooth 60fps animations throughout
- **Scroll Triggers**: Elements animate as they enter viewport
- **Typewriter Effects**: Dynamic text animations in hero section
- **Hover Effects**: Interactive elements with scale and glow effects
- **Loading Screen**: Professional loading animation with progress bar

### Sections
1. **Hero**: Animated introduction with floating shapes and parallax effects
2. **About**: Personal information with animated code snippet
3. **Skills**: Technical and soft skills with progress bars and icons
4. **Projects**: Featured projects with hover overlays and tech tags
5. **Experience**: Timeline design with animated dots and content
6. **Testimonials**: Professional recommendations with quote styling
7. **Contact**: Interactive form with neon styling and contact information
8. **Footer**: Social links and copyright information

## 🚀 Technologies Used

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with CSS variables and animations
- **Bootstrap 4.6**: Responsive grid system and components
- **GSAP 3.x**: Advanced animations and scroll triggers
- **Font Awesome**: Icons for UI elements
- **Google Fonts**: Orbitron and Rajdhani typography

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css       # Main stylesheet with neon theme
│   ├── js/
│   │   └── main.js         # JavaScript with GSAP animations
│   ├── icons/              # Technology and skill icons
│   │   ├── python.png
│   │   ├── html-css-js.jpg
│   │   ├── mysql.png
│   │   ├── google-cloud.png
│   │   ├── git.png
│   │   └── github.png
│   └── images/             # Additional images (if any)
├── docs/                   # Documentation files
├── README.md               # This file
└── test_results.md         # Testing documentation
```

## 🎨 Color Palette

```css
/* Neon Colors */
--neon-cyan: #00ffff
--neon-magenta: #ff00ff
--neon-lime: #00ff00
--neon-amber: #ffbf00

/* Background Colors */
--bg-primary: #0a0a0a
--bg-secondary: #111111
--bg-tertiary: #1a1a1a

/* Text Colors */
--text-primary: #ffffff
--text-secondary: #cccccc
--text-muted: #888888
```

## 🛠️ Setup and Installation

1. **Clone or Download** the project files
2. **Open** `index.html` in a modern web browser
3. **For Development**: Use a local server (e.g., Python's http.server)

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have live-server installed)
npx live-server

# Using PHP
php -S localhost:8000
```

## 📱 Browser Compatibility

- **Chrome**: 90+ ✅
- **Firefox**: 88+ ✅
- **Safari**: 14+ ✅
- **Edge**: 90+ ✅

## 🎯 Performance Features

- **Optimized Animations**: Hardware-accelerated transforms
- **Lazy Loading**: Images load as needed
- **Throttled Scroll**: Optimized scroll event handling
- **Reduced Motion**: Respects user accessibility preferences

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `assets/css/style.css`:

```css
:root {
    --neon-cyan: #your-color;
    --neon-magenta: #your-color;
    /* ... other variables */
}
```

### Adding Content
Update the content in `index.html` and corresponding data in the JavaScript file.

### Modifying Animations
Adjust GSAP animations in `assets/js/main.js`:

```javascript
gsap.from('.your-element', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power2.out"
});
```

## 📊 Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices)
- **Loading Time**: < 2 seconds on average connection
- **Animation Performance**: Consistent 60fps
- **Mobile Friendly**: 100% responsive design

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About the Developer

**Anshul Chouhan**
- Python Developer & Full-Stack Engineer
- Email: anshulchouhan0303@gmail.com
- GitHub: [AnshulChouhan1](https://github.com/AnshulChouhan1)
- LinkedIn: [Anshul Chouhan](https://www.linkedin.com/in/anshul-chouhan-606413264/)

## 🙏 Acknowledgments

- **GSAP**: For powerful animation capabilities
- **Bootstrap**: For responsive framework
- **Font Awesome**: For beautiful icons
- **Google Fonts**: For typography
- **Flaticon**: For additional icons

---

**Built with ❤️ and lots of code**
