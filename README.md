# Personic Medical Website

A modern, responsive static website for Personic Medical built with HTML5, Tailwind CSS, and Alpine.js (when needed for interactivity).

## Project Structure

```
personic-medical/
├── README.md                     # Project documentation
├── PERSONIC_MEDICAL_DESIGN_GUIDE.md  # Design system and brand guide
├── package.json                  # Node.js dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
├── .gitignore                   # Git ignore file
├── index.html                   # Homepage - patient-focused landing page
├── services.html                # Services page - comprehensive service offerings
├── team.html                    # Team page - healthcare professionals and staff
├── contact.html                 # Contact page - appointment booking and info
├── src/                         # Source files
│   ├── styles/
│   │   ├── input.css           # Tailwind CSS input file
│   │   └── output.css          # Generated CSS (auto-generated)
│   ├── js/                     # JavaScript files (Alpine.js components)
│   └── images/                 # Source images
└── assets/                     # Static assets
    ├── images/                 # Optimized images
    └── icons/                  # Icon files
```

## Site Structure & Navigation

### Core Pages
1. **Homepage (`index.html`)** - Patient-centered landing page with hero section, service overview, and call-to-action
2. **Services (`services.html`)** - Comprehensive healthcare services including primary care, specialized care, and preventive medicine
3. **Team (`team.html`)** - Healthcare professionals with credentials, specializations, and support staff information
4. **Contact (`contact.html`)** - Contact information, office hours, appointment booking form, and location details

### Navigation Features
- **Responsive Design**: Desktop navigation bar with mobile hamburger menu
- **Consistent Header**: Logo, main navigation, and primary CTA button across all pages
- **Active States**: Current page highlighting in navigation
- **Mobile-First**: Fully responsive navigation that adapts to screen sizes
- **Cross-Page Links**: Seamless navigation between all site sections

## Development Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd personic-medical
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build CSS for the first time:
   ```bash
   npm run build
   ```

### Development Workflow

#### Start Development Server
```bash
# Watch for CSS changes and rebuild automatically
npm run dev
```

#### Serve the Site Locally
```bash
# Start a simple HTTP server on port 8000
npm run serve
```

#### Combined Development (Recommended)
```bash
# Start CSS watching and HTTP server together
npm run dev-serve
```

Then open http://localhost:8000 in your browser.

#### Build for Production
```bash
npm run build
```

## Available Scripts

- `npm run dev` - Watch CSS files and rebuild on changes
- `npm run build` - Build minified CSS for production
- `npm run serve` - Start local HTTP server
- `npm run dev-serve` - Start both CSS watching and HTTP server

## Design System

The project uses a custom Tailwind CSS configuration based on the Personic Medical brand guide. Key features include:

### Custom Colors
- **Primary**: Dark Green (#52683E)
- **Secondary**: Sky Blue (#589AA1)
- **Accent**: Mustard (#D3B01C) and Apricot (#E59D63)
- **Backgrounds**: Light Grey, Oat, and Apricot variants

### Typography
- **Headers**: Montserrat (600-700 weight)
- **Body**: Nunito Sans (400-600 weight)

### Custom Components
Pre-built component classes available:
- `.btn-primary` / `.btn-secondary` - Styled buttons
- `.card` / `.card-title` - Card components
- `.hero-section` / `.hero-stripes` - Hero layout
- `.service-icon` - Service highlight icons
- `.accent-section-*` - Background sections
- `.form-input` / `.form-label` - Form components
- `.container-custom` - Custom container width

### Responsive Design
- Mobile-first approach
- Breakpoints: 600px (tablet), 768px (desktop)
- Responsive navigation with mobile menu

## Content Strategy

### Homepage
- **Hero Section**: Primary value proposition and call-to-action
- **Service Preview**: Three key service pillars with links to detailed services page
- **Call-to-Action**: Multiple paths to appointment booking

### Services Page
- **Comprehensive Overview**: All service categories and detailed descriptions
- **Service Categories**: Primary care, specialized care, preventive care
- **Detailed Listings**: Specific services within each category

### Team Page
- **Medical Team**: Physicians with credentials and specializations
- **Clinical Team**: Nurses, physician assistants, and specialists
- **Support Team**: Administrative and patient care coordination staff

### Contact Page
- **Contact Methods**: Phone, email, and location information
- **Office Hours**: Detailed scheduling information
- **Appointment Form**: Comprehensive booking form with validation
- **Important Information**: Emergency protocols and new patient guidance

## Content Guidelines

Refer to `PERSONIC_MEDICAL_DESIGN_GUIDE.md` for detailed:
- Brand identity and color usage
- Typography specifications  
- Component patterns
- Content strategy and messaging tone
- Accessibility requirements

## File Organization

### Adding New Pages
1. Create HTML file in project root (e.g., `about.html`)
2. Use existing pages as templates
3. Include the generated CSS: `<link rel="stylesheet" href="./src/styles/output.css">`
4. Add navigation links to header in all pages
5. Include consistent footer

### Adding Images
1. Place source images in `src/images/`
2. Optimize and copy final images to `assets/images/`
3. Reference in HTML: `<img src="./assets/images/filename.jpg" alt="Description">`

### Adding Custom Styles
1. Edit `src/styles/input.css`
2. Use `@layer components` for reusable components
3. Use `@layer utilities` for utility classes
4. Run `npm run build` to regenerate CSS

### Adding Interactivity (Alpine.js)
When needed, uncomment the Alpine.js script tag in HTML files:
```html
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

## Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to "Deploy from a branch" → main branch
4. Site will be available at `https://username.github.io/repository-name`

### Manual Deployment
1. Run `npm run build` to generate production CSS
2. Upload all files except `node_modules/` and `src/styles/input.css`
3. Ensure `src/styles/output.css` is included

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari (latest)
- Android Chrome (latest)

## Performance

- Minimal dependencies (only Tailwind CSS)
- Purged CSS (unused styles removed in production)
- Optimized for fast loading
- Mobile-first responsive design

## Accessibility

- Semantic HTML structure
- WCAG 2.1 AA color contrast compliance
- Keyboard navigation support
- Screen reader compatibility
- Proper heading hierarchy
- Form labels and validation

## License

MIT License - see LICENSE file for details.

---

For detailed design specifications and brand guidelines, see `PERSONIC_MEDICAL_DESIGN_GUIDE.md`. 