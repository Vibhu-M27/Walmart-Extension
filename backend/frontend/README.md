# Walmart Scraper Frontend

This is the frontend application for the Walmart Product Scraper, built with vanilla JavaScript, HTML, and CSS. It provides a modern, responsive interface for managing products, finding alternatives, and calculating sustainability scores.

## Features

- **Product Management**: View, search, and manage scraped products
- **Alternative Products**: Find sustainable alternatives to existing products
- **Sustainability Scoring**: Calculate environmental impact scores for products
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes
- **Real-time Search**: Instant search functionality
- **Statistics Dashboard**: View your sustainability metrics

## File Structure

```
frontend/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/
│   │   └── navigation.js   # Navigation component
│   ├── pages/
│   │   ├── home.js         # Home page functionality
│   │   ├── products.js     # Products page functionality
│   │   ├── alternatives.js # Alternatives page functionality
│   │   └── scoring.js      # Scoring page functionality
│   ├── styles/
│   │   └── main.css        # Main stylesheet
│   ├── utils/
│   │   └── api.js          # API utility functions
│   └── main.js             # Main application entry point
└── README.md               # This file
```

## Pages

### Home Page (`/`)
- Welcome section with feature overview
- Statistics dashboard showing your sustainability metrics
- Quick access buttons to other features
- Recent activity feed

### Products Page (`/#products`)
- Display all scraped products in a grid layout
- Search functionality to filter products
- Product cards with images, prices, and sustainability scores
- Modal view for detailed product information
- Direct links to find alternatives

### Alternatives Page (`/#alternatives`)
- Search for sustainable alternatives to products
- Display alternative products with reasons for sustainability
- Category suggestions for better alternatives
- Comparison charts showing sustainability improvements

### Scoring Page (`/#scoring`)
- Form to calculate sustainability scores for products
- Real-time score calculation with breakdown
- Visual score display with color coding
- Recommendations for improvement
- Save and manage calculated scores

## API Integration

The frontend communicates with the backend through the following endpoints:

- `GET /api/products` - Get all products
- `GET /api/products?search=query` - Search products
- `GET /api/products/:id` - Get specific product
- `POST /alternatives` - Find alternatives for a product
- `POST /score` - Calculate sustainability score

## Styling

The application uses a modern CSS design with:

- **Color Scheme**: Purple gradient theme (#667eea to #764ba2)
- **Typography**: Inter font family for clean readability
- **Responsive Grid**: CSS Grid and Flexbox for layouts
- **Animations**: Smooth transitions and hover effects
- **Dark Mode**: Toggle between light and dark themes

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Development

### Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm install
   npm start
   ```

2. Open your browser and navigate to `http://localhost:5000`

### Development Features

- **Hot Reload**: Changes to frontend files will be reflected immediately
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Loading States**: Visual feedback during API calls
- **Keyboard Shortcuts**: 
  - `Ctrl/Cmd + 1-4`: Navigate to pages
  - `Ctrl/Cmd + K`: Focus search input

### Customization

#### Adding New Pages

1. Create a new JavaScript file in `src/pages/`
2. Add the page section to `index.html`
3. Update the navigation in `src/components/navigation.js`
4. Add the script reference to `index.html`

#### Styling

- Main styles are in `src/styles/main.css`
- Component-specific styles can be added inline or in separate CSS files
- Theme variables are defined in the CSS for easy customization

#### API Integration

- API calls are centralized in `src/utils/api.js`
- Add new endpoints by extending the API class
- Error handling and response formatting are handled automatically

## Performance

- **Lazy Loading**: Pages are loaded only when accessed
- **Caching**: API responses and user data are cached locally
- **Optimized Images**: Product images are optimized for web display
- **Minimal Dependencies**: No heavy frameworks, fast loading times

## Security

- **Input Validation**: All user inputs are validated
- **XSS Prevention**: Content is properly escaped
- **CORS**: Configured for secure cross-origin requests
- **HTTPS Ready**: Application works with HTTPS

## Future Enhancements

- **PWA Support**: Progressive Web App capabilities
- **Offline Mode**: Work without internet connection
- **Advanced Analytics**: Detailed usage statistics
- **Export Features**: Export data to CSV/PDF
- **User Accounts**: Multi-user support with authentication
- **Advanced Filtering**: More sophisticated product filtering
- **Charts and Graphs**: Visual data representation
- **Mobile App**: Native mobile application

## Troubleshooting

### Common Issues

1. **API Connection Errors**: Check if the backend server is running
2. **Styling Issues**: Clear browser cache and reload
3. **Navigation Problems**: Check browser console for JavaScript errors
4. **Search Not Working**: Verify API endpoints are accessible

### Debug Mode

Enable debug mode by opening browser console and running:
```javascript
localStorage.setItem('debug', 'true');
```

This will show additional logging information for troubleshooting.

## Contributing

1. Follow the existing code structure
2. Add comments for complex logic
3. Test on multiple browsers
4. Ensure responsive design works
5. Update documentation for new features

## License

This project is part of the Walmart Scraper Extension and follows the same license terms. 