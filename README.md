# Bollywood Cinema - Movie Booking Application

A comprehensive 4-page movie booking application built with React, Vite, and Bootstrap featuring popular Indian movies. This application provides a complete movie booking experience from browsing Bollywood, Tollywood, and regional Indian cinema to confirmation.

## 🎬 Application Flow

### Page 1: Movie List (20 Indian Movies in 4x4 Grid)
- **Display**: Grid layout showing 20 popular Indian movies with images
- **Layout**: Responsive 4x4 structure (4 columns on desktop, responsive on mobile)
- **Features**: Movie posters, titles, genres, ratings, duration, and prices
- **Collection**: Includes Bollywood hits like RRR, Baahubali 2, KGF Chapter 2, 3 Idiots, Dangal
- **Interaction**: Click on any movie to view details

### Page 2: Movie Details
- **Display**: Detailed movie information with large poster
- **Features**: Synopsis, ratings, showtimes, pricing
- **Interaction**: "Book Your Seat" button to proceed to booking

### Page 3: Booking Form
- **Form Fields**: Name, Email, Mobile Number (all required)
- **Features**: Movie summary, price breakdown, form validation
- **Interaction**: Submit button to complete booking

### Page 4: Booking Confirmation
- **Display**: Success message with random booking ID
- **Information**: Complete booking details, customer info, payment summary
- **Features**: Download ticket option, book another movie

## 🚀 Features

### Core Functionality
- ✅ **20 Indian Movies**: Complete catalog featuring Bollywood, Tollywood, and regional cinema
- ✅ **4x4 Grid Layout**: Responsive grid that adapts to screen sizes
- ✅ **Movie Details**: Comprehensive information for each Indian movie
- ✅ **Booking Form**: Complete customer information collection
- ✅ **Random Booking ID**: Unique booking identifier generation
- ✅ **Form Validation**: Required field validation with user feedback

### Visual Features
- 🎨 **Modern UI**: Beautiful gradient backgrounds and card designs
- 📱 **Fully Responsive**: Works perfectly on all device sizes
- 🎯 **Interactive Elements**: Hover effects, smooth transitions
- 🎪 **Professional Layout**: Clean, cinema-themed design
- 🔥 **Bootstrap Integration**: Consistent styling and components
- ⚡ **Smooth Navigation**: Seamless page transitions
- 🖼️ **Authentic Movie Posters**: Real movie poster images from IMDb

### User Experience
- 🎬 **Intuitive Flow**: Natural progression from browsing to booking
- 📋 **Clear Information**: Well-organized movie and booking details
- 🎫 **Booking Summary**: Complete transaction overview
- 🔄 **Easy Navigation**: Back buttons and clear call-to-actions
- 📱 **Mobile Optimized**: Touch-friendly interface for mobile users

## 🛠️ Technical Stack

- **React 19.2.0** - Modern UI library with hooks
- **Vite 7.2.4** - Fast build tool and development server
- **Bootstrap 5** - Responsive CSS framework
- **Bootstrap Icons** - Professional icon library
- **CSS3** - Custom animations and modern styling
- **JavaScript ES6+** - Modern JavaScript features

## 📊 Movie Data Structure

Each movie contains:
```javascript
{
  id: 1,
  title: "Movie Title",
  genre: "Action, Adventure",
  duration: "2h 30m",
  rating: "8.5/10",
  image: "movie-poster-url",
  description: "Movie synopsis...",
  price: "₹250"
}
```

## 🎯 Page Breakdown

### Page 1: Movie List
- **Grid System**: Bootstrap responsive grid (col-lg-3 col-md-4 col-sm-6)
- **Movie Cards**: Hover effects with image scaling
- **Information Display**: Title, genre, duration, rating, price
- **Navigation**: Click to view movie details

### Page 2: Movie Details
- **Layout**: Two-column layout (poster + details)
- **Information**: Complete movie information and synopsis
- **Showtimes**: Available time slots
- **Pricing**: Clear price display
- **Action**: Book seat button

### Page 3: Booking Form
- **Form Fields**:
  - Full Name (required, text input)
  - Email Address (required, email validation)
  - Mobile Number (required, 10-digit pattern)
- **Movie Summary**: Selected movie information
- **Price Breakdown**: Ticket price + convenience fee
- **Validation**: HTML5 form validation with custom styling

### Page 4: Confirmation
- **Booking ID**: Random generated ID (format: BK + 8 characters)
- **Movie Details**: Complete movie information
- **Customer Details**: All form data displayed
- **Payment Summary**: Total amount breakdown
- **Actions**: Book another movie, download ticket

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation & Setup

1. **Navigate to project directory**:
   ```bash
   cd Assignment8/movie-booking
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:5173/`

### Build Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📁 Project Structure

```
src/
├── App.jsx          # Main component with all 4 pages and navigation logic
├── App.css          # Comprehensive styles for all pages
├── main.jsx         # React entry point with Bootstrap integration
└── index.css        # Global styles and utilities
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Purple to blue gradient background
- **Cards**: Clean white backgrounds with shadows
- **Accents**: Bootstrap color palette (primary, success, danger, warning)
- **Text**: Professional typography hierarchy

### Layout
- **Responsive Grid**: 4 columns on desktop, 3 on tablet, 2 on mobile, 1 on small mobile
- **Card Design**: Modern cards with hover effects and shadows
- **Navigation**: Consistent navbar across all pages
- **Spacing**: Proper Bootstrap spacing utilities

### Animations
- **Hover Effects**: Card lift and image scaling
- **Transitions**: Smooth color and transform transitions
- **Loading States**: Professional loading indicators
- **Page Flow**: Seamless navigation between pages

## 📱 Responsive Breakpoints

- **Desktop (≥1200px)**: 4 movies per row, full feature set
- **Laptop (≥992px)**: 4 movies per row, optimized layout
- **Tablet (≥768px)**: 3 movies per row, adjusted spacing
- **Mobile (≥576px)**: 2 movies per row, compact design
- **Small Mobile (<576px)**: 1 movie per row, minimal layout

## 🔧 Customization Options

### Adding New Movies
Add movie objects to the `moviesData` array:
```javascript
{
  id: 17,
  title: "New Movie",
  genre: "Genre",
  duration: "Duration",
  rating: "Rating",
  image: "Image URL",
  description: "Description",
  price: "Price"
}
```

### Styling Modifications
- **Colors**: Update CSS custom properties
- **Layout**: Modify Bootstrap grid classes
- **Animations**: Adjust CSS transition durations
- **Typography**: Update font families and sizes

### Form Fields
Add new fields in the booking form by:
1. Adding to `bookingData` state
2. Creating form input elements
3. Updating validation logic
4. Displaying in confirmation page

## 🎫 Booking ID Generation

The booking ID is generated using:
```javascript
const randomId = 'BK' + Math.random().toString(36).substr(2, 8).toUpperCase()
```
Format: `BK` + 8 random alphanumeric characters (e.g., `BKAB12CD34`)

## 🌟 Browser Support

- **Chrome**: Full support with all animations
- **Firefox**: Full support
- **Safari**: Full support on iOS and macOS
- **Edge**: Full support on Windows

## 📄 License

This project is created for educational purposes as part of Assignment 8.

---

**Live Demo**: The application is running on `http://localhost:5173/` with hot module replacement enabled for development.
**Vercel Link**:https://hashbit-assignment-8-4cvzjh59q-sarveshs-projects-e4dd234d.vercel.app/

## 🎬 Indian Movie Collection

The application features 20 popular Indian movies including:

### Bollywood Blockbusters:
- **RRR** - Epic action drama by S.S. Rajamouli
- **Baahubali 2: The Conclusion** - Legendary Telugu epic
- **KGF Chapter 2** - Kannada action thriller
- **Dangal** - Biographical sports drama starring Aamir Khan
- **3 Idiots** - Comedy-drama about engineering students
- **Zindagi Na Milegi Dobara** - Adventure comedy-drama
- **Gully Boy** - Musical drama about street rap culture

### Critically Acclaimed Films:
- **Andhadhun** - Crime thriller with Ayushmann Khurrana
- **Article 15** - Social crime drama
- **Pink** - Legal drama addressing women's rights
- **Uri: The Surgical Strike** - Military action film
- **Queen** - Comedy-drama about women's empowerment

### Classic Indian Cinema:
- **Sholay** - Legendary action-adventure classic
- **Lagaan** - Oscar-nominated period sports film
- **Taare Zameen Par** - Heartwarming drama about dyslexia
- **Dil Chahta Hai** - Coming-of-age friendship drama
- **Mughal-E-Azam** - Epic historical romance

Each movie includes authentic details like genre, duration, ratings, and pricing for a realistic Indian cinema booking experience.
