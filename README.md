# 🌟 Personal Portfolio Website

A modern, responsive, and professional personal portfolio website built with pure HTML5, CSS3, and Vanilla JavaScript. Perfect for web developers, software engineers, and IT professionals.

## ✨ Features

- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, minimal, and professional interface
- **Smooth Animations** - CSS animations and transitions for enhanced user experience
- **Interactive Elements** - Dynamic typing effect, scroll animations, and hover effects
- **SEO Optimized** - Proper HTML structure with meta tags for better search engine visibility
- **Fast Loading** - No heavy frameworks, pure vanilla code
- **GitHub Pages Ready** - Deploy directly to GitHub Pages without any build process

## 📁 Project Structure

```
portfolio/
│
├── index.html          # Main HTML file
├── style.css           # CSS stylesheet
├── script.js           # JavaScript file
├── README.md           # Project documentation
│
└── assets/
    ├── images/         # Image assets
    │   ├── profile.jpg     # Your profile picture
    │   ├── about.jpg       # About section image
    │   ├── project1.jpg    # Project 1 screenshot
    │   ├── project2.jpg    # Project 2 screenshot
    │   ├── project3.jpg    # Project 3 screenshot
    │   └── project4.jpg    # Project 4 screenshot
    │
    └── resume.pdf      # Your resume (for download)
```

## 🎨 Sections Included

1. **Header/Navbar** - Sticky navigation with smooth scroll
2. **Hero Section** - Eye-catching introduction with animated typing effect
3. **About Me** - Personal introduction, education, and soft skills
4. **Skills** - Technical skills with progress bars (categorized)
5. **Projects** - Showcase of your best work with live links
6. **Experience** - Professional journey timeline
7. **Certifications** - Achievements and certifications
8. **Contact** - Contact form and social media links
9. **Footer** - Quick links and social media

## 🚀 Getting Started

### 1. Clone or Download

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2. Customize Content

Replace the placeholder content with your own information:

#### **Personal Information** (index.html)
- Update `[Your Name]` with your actual name
- Update `[Your Full Name]` in the hero section
- Change the role/title (e.g., "Web Developer")
- Update the tagline and description

#### **Images** (assets/images/)
- Add your profile picture as `profile.jpg`
- Add an about section image as `about.jpg`
- Add project screenshots as `project1.jpg`, `project2.jpg`, etc.

**Recommended Image Sizes:**
- Profile: 500x500px (square)
- About: 400x600px (portrait)
- Projects: 800x600px (landscape)

#### **Resume** (assets/)
- Add your resume PDF as `resume.pdf`

#### **Social Links** (index.html)
Replace all placeholder links:
- GitHub: `https://github.com/yourusername`
- LinkedIn: `https://linkedin.com/in/yourusername`
- Email: `your.email@example.com`
- Twitter: `https://twitter.com/yourusername`

#### **Skills** (index.html)
Update the skills section with your actual skills and proficiency levels:
- Modify the percentage values (e.g., `style="width: 90%"`)
- Add or remove skills as needed

#### **Projects** (index.html)
Update each project card with:
- Project title
- Description
- Technologies used
- GitHub repository link
- Live demo link (if available)

#### **Experience** (index.html)
Update with your actual work experience:
- Company names
- Job titles
- Dates
- Responsibilities

#### **Certifications** (index.html)
Add your certifications:
- Certificate name
- Issuing organization
- Year obtained

### 3. Customize Colors (Optional)

Edit the CSS variables in `style.css` to match your brand:

```css
:root {
    --primary-color: hsl(250, 69%, 61%);     /* Main color */
    --primary-alt: hsl(250, 57%, 53%);       /* Hover color */
    --title-color: hsl(250, 8%, 15%);        /* Headings */
    --text-color: hsl(250, 8%, 45%);         /* Body text */
}
```

### 4. Test Locally

Simply open `index.html` in your web browser:
- Double-click the file, or
- Right-click → Open with → Your browser

## 🌐 Deploy to GitHub Pages

### Method 1: GitHub Web Interface

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to **Settings** → **Pages**
4. Under **Source**, select **main** branch
5. Click **Save**
6. Your site will be live at `https://yourusername.github.io/repository-name`

### Method 2: Git Command Line

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio commit"

# Add remote repository
git remote add origin https://github.com/yourusername/portfolio.git

# Push to GitHub
git push -u origin main
```

Then enable GitHub Pages in repository settings.

## 📱 Responsive Breakpoints

The website is fully responsive with breakpoints at:
- **Desktop**: > 992px
- **Tablet**: 768px - 992px
- **Mobile**: < 768px
- **Small Mobile**: < 576px

## 🎯 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Opera (latest)

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **Vanilla JavaScript** - Interactive features
- **Google Fonts** - Poppins & Inter
- **Font Awesome** - Icons

## ✏️ Customization Tips

### Change Typing Animation Roles

Edit `script.js`:

```javascript
const roles = ['Web Developer', 'Software Engineer', 'Your Role', 'Another Role'];
```

### Modify Navigation Links

Add or remove sections in both `index.html` (navbar) and update corresponding sections.

### Adjust Animation Speed

Modify transition values in `style.css`:

```css
:root {
    --transition: all 0.3s ease;  /* Change 0.3s to your preference */
}
```

## 📧 Contact Form

The contact form is currently frontend-only. To make it functional:

1. **Use a form service** like:
   - [Formspree](https://formspree.io/)
   - [Netlify Forms](https://www.netlify.com/products/forms/)
   - [EmailJS](https://www.emailjs.com/)

2. **Or create a backend** with:
   - Node.js + Express
   - PHP
   - Python Flask/Django

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**[Your Name]**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [@yourusername](https://linkedin.com/in/yourusername)
- Email: your.email@example.com

## 🌟 Show Your Support

Give a ⭐️ if you like this project!

---

**Happy Coding! 🚀**
