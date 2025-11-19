# Respire Asset Partners - Landing Page

A sophisticated, single-page landing website for Respire Asset Partners, a renewable energy asset brokerage operating across Europe.

## Overview

This landing page features a clean, modern design with muted earth tones that positions Respire Asset Partners as a trusted, intelligent choice for renewable energy asset transactions. The design emphasizes market intelligence, relationships, and exclusive access to off-market deals.

## Color Palette

- **Primary (Sage Green)**: #8B9D83
- **Secondary (Warm Gray)**: #6B6B6B
- **Accent (Terracotta)**: #A67C6D
- **Background (Cream)**: #FAF8F5
- **Text (Charcoal)**: #2C2C2C

## File Structure

```
respire-asset-partners/
├── index.html          # Main HTML structure
├── styles.css          # All styling with responsive design
├── script.js           # Interactive features and animations
└── README.md           # This file
```

## Features

### Design Elements
- Animated European network map in hero section
- Smooth scroll animations and fade-in effects
- Responsive design (mobile-first approach)
- Micro-interactions on hover
- Data visualization with animated charts
- Professional contact form

### Sections
1. **Hero Section** - Main headline with dual CTAs
2. **Value Proposition** - Three key differentiators
3. **Asset Types** - Overview with statistics
4. **How We Work** - 4-step process flow
5. **Trust Section** - Expertise and credibility indicators
6. **Contact Form** - Multi-field form with validation
7. **Footer** - Company info and links

## Customization Guide

All content that needs to be replaced is marked with HTML comments in the format:
```html
<!-- REPLACE: Description of what to replace -->
```

### Key Content to Replace

#### Hero Section
- Main headline
- Hero subheadline

#### Value Proposition
- Section intro text
- Value point 1: Title & description
- Value point 2: Title & description
- Value point 3: Title & description

#### Asset Types & Stats
- Section title and description
- Number of European markets
- Value of assets brokered (€)

#### How We Work
- Step titles and descriptions (4 steps)

#### Trust Section
- Trust statement headline and body
- Trust indicators

#### Contact Section
- Contact email address
- Office location
- Valuation offer text

#### Footer
- Company tagline
- Copyright text

## Form Integration

The contact form currently logs submissions to the console. To integrate with your backend:

1. Open `script.js`
2. Find the `contactForm.addEventListener('submit'` section
3. Replace the console.log with your API call:

```javascript
// Example with fetch API
fetch('YOUR_API_ENDPOINT', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
})
.then(response => response.json())
.then(data => {
    showFormFeedback('Thank you! We\'ll be in touch shortly.', 'success');
    contactForm.reset();
})
.catch(error => {
    showFormFeedback('Something went wrong. Please try again.', 'error');
});
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Debounced scroll events
- Intersection Observer for animations (better performance than scroll listeners)
- CSS animations with hardware acceleration
- Minimal JavaScript footprint
- No external dependencies or frameworks

## Accessibility

- Semantic HTML structure
- ARIA labels where appropriate
- Keyboard navigation support
- Focus indicators for all interactive elements
- Reduced motion support for users with vestibular disorders
- High contrast mode support

## Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## Launch Checklist

Before going live, make sure to:

- [ ] Replace all content marked with `<!-- REPLACE: -->` comments
- [ ] Update contact email address
- [ ] Add your actual office location
- [ ] Update statistics (markets, assets brokered)
- [ ] Integrate contact form with your backend
- [ ] Add Google Analytics or tracking code (if needed)
- [ ] Test form submissions
- [ ] Test on multiple devices and browsers
- [ ] Optimize images (if you add any)
- [ ] Add favicon
- [ ] Set up proper meta tags for SEO
- [ ] Configure SSL certificate
- [ ] Test page load speed

## Adding Images

If you want to add actual photos or graphics:

1. Create an `images/` folder
2. Add your images with descriptive names
3. Update references in HTML and CSS
4. Optimize images before uploading (use tools like TinyPNG)

Example:
```html
<img src="images/hero-background.jpg" alt="Renewable energy network across Europe">
```

## SEO Recommendations

Add these meta tags to the `<head>` section:

```html
<meta property="og:title" content="Respire Asset Partners | Renewable Energy Asset Brokerage">
<meta property="og:description" content="Access off-market renewable energy assets across Europe">
<meta property="og:image" content="YOUR_IMAGE_URL">
<meta property="og:url" content="YOUR_WEBSITE_URL">
<meta name="twitter:card" content="summary_large_image">

<link rel="canonical" href="YOUR_WEBSITE_URL">
```

## Future Enhancements

Consider adding:
- Case studies or portfolio section
- Team member profiles
- Blog or insights section
- Asset listings page (if you want to show some public deals)
- Newsletter signup
- Live chat integration
- Multi-language support for European markets

## Support

For questions about customization or technical implementation, refer to:
- HTML/CSS documentation: [MDN Web Docs](https://developer.mozilla.org)
- JavaScript: [JavaScript.info](https://javascript.info)

## License

This website template was created specifically for Respire Asset Partners.

---

**Built with**: Pure HTML, CSS, and JavaScript (no frameworks required)
**Design Philosophy**: Less is more. Clean, sophisticated, professional.
