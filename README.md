# Data Analyst Portfolio Website

A modern, responsive portfolio website designed specifically for data analysts to showcase their skills, projects, and experience.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: Animated skill bars, hover effects, and smooth scrolling
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Optimized for performance with minimal dependencies

## Sections

1. **Hero Section**: Eye-catching introduction with animated data visualization
2. **About Section**: Personal information and key statistics
3. **Skills Section**: Technical skills with animated progress bars
4. **Projects Section**: Showcase of data analysis projects
5. **Contact Section**: Contact information and contact form

## Getting Started

### Prerequisites

- A modern web browser
- Basic knowledge of HTML, CSS, and JavaScript (for customization)

### Installation

1. Download or clone the project files
2. Open `index.html` in your web browser
3. The website should load immediately with all functionality

### Customization Guide

#### Personal Information

1. **Name and Title**: Update the following in `index.html`:
   ```html
   <!-- In the navigation -->
   <div class="nav-logo">
       <h2>Your Name</h2>
   </div>
   
   <!-- In the hero section -->
   <h1 class="hero-title">Data Analyst</h1>
   ```

2. **About Section**: Modify the content in the about section:
   ```html
   <div class="about-text">
       <p>Your personal description here...</p>
       <ul class="about-list">
           <li>Your specialization 1</li>
           <li>Your specialization 2</li>
           <!-- Add more items -->
       </ul>
   </div>
   ```

3. **Statistics**: Update the stats in the about section:
   ```html
   <div class="about-stats">
       <div class="stat">
           <h3>5+</h3>
           <p>Years Experience</p>
       </div>
       <!-- Update numbers and descriptions -->
   </div>
   ```

#### Skills Section

Update your technical skills by modifying the skill categories and progress percentages:

```html
<div class="skill-item">
    <span class="skill-name">Python</span>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 90%"></div>
    </div>
</div>
```

**Skill Categories Included:**
- Programming Languages (Python, R, SQL)
- Data Visualization (Tableau, Power BI, Matplotlib/Seaborn)
- Statistical Analysis (Hypothesis Testing, Regression Analysis, A/B Testing)
- Tools & Platforms (Excel, Jupyter Notebooks, Git/GitHub)

#### Projects Section

Replace the sample projects with your actual data analysis projects:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-chart-line"></i>
    </div>
    <div class="project-content">
        <h3>Your Project Title</h3>
        <p>Your project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">Tableau</span>
        </div>
        <div class="project-links">
            <a href="your-project-url" class="project-link">View Project</a>
            <a href="your-github-url" class="project-link">GitHub</a>
        </div>
    </div>
</div>
```

#### Contact Information

Update your contact details:

```html
<div class="contact-details">
    <div class="contact-item">
        <i class="fas fa-envelope"></i>
        <span>your.email@example.com</span>
    </div>
    <div class="contact-item">
        <i class="fas fa-phone"></i>
        <span>+1 (555) 123-4567</span>
    </div>
    <div class="contact-item">
        <i class="fas fa-map-marker-alt"></i>
        <span>Your City, State</span>
    </div>
</div>
```

#### Social Media Links

Update your social media profiles:

```html
<div class="social-links">
    <a href="your-linkedin-url" class="social-link"><i class="fab fa-linkedin"></i></a>
    <a href="your-github-url" class="social-link"><i class="fab fa-github"></i></a>
    <a href="your-twitter-url" class="social-link"><i class="fab fa-twitter"></i></a>
</div>
```

### Styling Customization

#### Colors

The website uses a blue color scheme. To change colors, update the CSS variables in `styles.css`:

```css
/* Primary colors */
--primary-color: #2563eb;
--primary-dark: #1d4ed8;
--primary-light: #3b82f6;

/* Background colors */
--bg-light: #f8fafc;
--bg-white: #ffffff;
```

#### Fonts

The website uses Inter font from Google Fonts. To change fonts:

1. Update the Google Fonts link in `index.html`
2. Modify the font-family in `styles.css`:
   ```css
   body {
       font-family: 'Your Font', sans-serif;
   }
   ```

### Adding Your Projects

1. **Create Project Screenshots**: Take screenshots of your data visualizations or dashboards
2. **Write Project Descriptions**: Explain the problem, your approach, and results
3. **Include Technologies Used**: List all tools and technologies used
4. **Add Links**: Include links to live demos, GitHub repositories, or detailed reports

### Recommended Project Types for Data Analysts

- **Sales Performance Analysis**: Regional sales trends and insights
- **Customer Segmentation**: Clustering analysis for customer groups
- **A/B Testing Results**: Statistical analysis of marketing campaigns
- **Predictive Analytics**: Forecasting models and their accuracy
- **Dashboard Projects**: Interactive BI dashboards
- **Data Cleaning Projects**: ETL processes and data quality improvements

### Deployment Options

#### GitHub Pages (Free)
1. Create a GitHub repository
2. Upload your portfolio files
3. Go to Settings > Pages
4. Select source branch (usually main)
5. Your site will be available at `https://yourusername.github.io/repository-name`

#### Netlify (Free)
1. Sign up for Netlify
2. Drag and drop your portfolio folder
3. Your site will be deployed instantly
4. Get a custom domain option

#### Vercel (Free)
1. Sign up for Vercel
2. Connect your GitHub repository
3. Deploy automatically on every push

### SEO Optimization

The website includes basic SEO elements. To improve further:

1. **Add Meta Tags**: Update meta descriptions and keywords
2. **Optimize Images**: Compress images and add alt text
3. **Add Schema Markup**: Include structured data for better search results
4. **Create a Sitemap**: Generate an XML sitemap
5. **Submit to Search Engines**: Submit your site to Google Search Console

### Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Minimize CSS/JS**: Minify your files for production
3. **Use CDN**: Host external libraries on CDN
4. **Enable Caching**: Set up browser caching
5. **Compress Files**: Enable GZIP compression on your server

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Troubleshooting

#### Common Issues

1. **Fonts Not Loading**: Check your internet connection for Google Fonts
2. **Animations Not Working**: Ensure JavaScript is enabled
3. **Mobile Menu Not Working**: Check if JavaScript is loaded properly
4. **Contact Form Not Sending**: The form is currently set up for demonstration. You'll need to add backend functionality.

#### Adding Backend Functionality

To make the contact form functional, you can:

1. **Use Formspree**: Add Formspree endpoint to the form action
2. **Use Netlify Forms**: Add `netlify` attribute to the form
3. **Create Custom Backend**: Build a server to handle form submissions

### Contributing

Feel free to fork this project and customize it for your needs. If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

### License

This project is open source and available under the [MIT License](LICENSE).

### Support

If you need help customizing your portfolio or have questions, feel free to reach out!

---

**Good luck with your data analyst job search!** 🚀
