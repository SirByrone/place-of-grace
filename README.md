# Place of Grace Children's Home Website

Official website for Place of Grace Children's Home - A safe haven for vulnerable children providing love, care, and hope for a brighter future.

## About Place of Grace Children's Home

Founded in 2009 by the late Peninah Maria Kioko, Place of Grace Children's Home is a non-profit institution caring for Orphaned and Vulnerable Children (OVC). We provide a safe haven for children who have been abandoned, neglected, or orphaned, offering comprehensive care including shelter, education, healthcare, and emotional support.

### Our Mission
To rescue, rehabilitate, and empower orphaned and vulnerable children, ensuring they grow up in a safe and nurturing environment.

### Our Vision
A world where every child thrives, free from abuse, neglect, and poverty.

## Website Features

### 🏠 **Home Page**
- Welcome message and mission statement
- Impact statistics and featured success stories
- Call-to-action for donations and volunteering

### 📖 **About Us**
- Complete history and founding story
- Mission, vision, and core values
- Team member profiles and partnerships

### 🎯 **Programs & Services**
- Child rescue, rehabilitation & reintegration
- Education support and school sponsorships
- Nutrition & healthcare programs
- Psychosocial support & counseling
- Skills development & vocational training

### 📊 **Impact & Success Stories**
- Transformation stories with before/after photos
- Testimonials from parents, teachers, and volunteers
- Downloadable impact reports
- Statistics and achievements

### 🤝 **How to Help**
- Multiple donation options (MPESA, PayPal, Bank)
- Volunteer opportunities and requirements
- Corporate partnership information
- In-kind donation guidelines

### 📰 **News & Events**
- Latest updates from the field
- Event recaps and announcements
- Blog posts and success stories
- Newsletter signup

### 📸 **Gallery**
- High-quality images and videos
- Daily life at the home
- Special events and celebrations
- Before-and-after transformations

### ❓ **FAQ**
- Comprehensive Q&A organized by categories
- Information about admissions, volunteering, donations
- Contact information for additional questions

### 🔍 **Transparency & Accountability**
- Annual financial reports
- Child protection and safeguarding policies
- Governance information
- Accountability measures

### 📞 **Contact Us**
- Contact form with multiple inquiry types
- Physical address and office hours
- Phone, email, and social media links
- Location map and directions

## Design System

### Colors
- **Primary Blue**: #1e3a8a (Navy Blue - trust and stability)
- **Secondary Blue**: #3b82f6 (Bright Blue - hope and growth)
- **Accent Gold**: #fbbf24 (Gold - warmth and care)
- **Neutral Gray**: #64748b (Professional gray for text)

### Typography
- **Primary Font**: Inter (Clean, modern, highly readable)
- **Font Weights**: 300, 400, 500, 600, 700
- **Accessible**: High contrast ratios and readable font sizes

### Responsive Design
- **Mobile-first approach** (most users access via mobile)
- **Breakpoints**: 480px, 768px, 1024px, 1200px
- **Flexible layouts** using CSS Grid and Flexbox

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd place-of-grace-childrens-home
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files ready for deployment.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js       # Navigation component
│   ├── Footer.js       # Footer component
│   ├── HeroBanner.js   # Hero section component
│   ├── CallToActionSection.js
│   └── ImpactSection.js
├── pages/              # Page components
│   ├── HomePage.js     # Home page
│   ├── AboutPage.js    # About us page
│   ├── ProgramsPage.js # Programs & services
│   ├── ImpactPage.js   # Impact & success stories
│   ├── GetInvolvedPage.js
│   ├── GalleryPage.js  # Photo & video gallery
│   ├── NewsPage.js     # News & events
│   ├── FAQPage.js      # Frequently asked questions
│   ├── TransparencyPage.js
│   └── ContactPage.js  # Contact form & info
├── assets/             # Images, icons, and other assets
├── App.jsx             # Main application component
├── index.js            # Application entry point
└── index.css           # Global styles
```

## Key Features Implemented

### ✅ **Complete Content Structure**
- All 10 required pages from the checklist
- Comprehensive information about programs and services
- Success stories and testimonials
- FAQ section with categorized questions

### ✅ **Modern Design**
- Clean, professional appearance
- Mobile-first responsive design
- Accessible color scheme and typography
- Smooth animations and transitions

### ✅ **User Experience**
- Intuitive navigation
- Clear call-to-action buttons
- Fast loading times
- SEO optimized

### ✅ **Technical Excellence**
- React.js with modern hooks
- CSS Grid and Flexbox layouts
- Responsive images and media
- Progressive Web App features

## Content Focus

The website emphasizes:
- **Child Protection**: Safety and well-being of all children
- **Education**: School sponsorships and learning support
- **Healthcare**: Medical care and nutrition programs
- **Family Reintegration**: Working to reunite children with families
- **Transparency**: Financial reports and accountability
- **Community Impact**: Stories of transformation and success

## Customization Guide

### Updating Content
1. **Text Content**: Edit the JSX files in the `src/pages/` directory
2. **Images**: Replace images in the `src/assets/` directory
3. **Colors**: Update CSS variables in `src/index.css`
4. **Contact Info**: Update contact details in Footer and Contact pages

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Update navigation in `src/components/Navbar.js`
4. Add link in `src/components/Footer.js`

## Deployment

### Static Hosting (Recommended)
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the `gh-pages` package

### Traditional Hosting
- Upload the contents of the `build` folder to your web server
- Ensure the server supports single-page applications (SPA)

## Support

For questions about the website or Place of Grace Children's Home:

- **Email**: info@placeofgrace.org
- **Phone**: +254 XXX XXX XXX
- **Address**: Donholm Phase 8, Nairobi, Kenya

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Place of Grace Children's Home** - Providing love, care, and hope for vulnerable children since 2009. 