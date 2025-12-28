import { useState } from 'react'
import './App.css'

// Indian Movie data with actual movie poster images
const moviesData = [
  {
    id: 1,
    title: "RRR",
    genre: "Action, Drama",
    duration: "3h 7m",
    rating: "8.8/10",
    image: "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
    description: "A fictional story about two legendary revolutionaries and their journey away from home before they started fighting for their country in 1920s.",
    price: "₹250"
  },
  {
    id: 2,
    title: "Baahubali 2: The Conclusion",
    genre: "Action, Drama",
    duration: "2h 47m",
    rating: "8.7/10",
    image: "https://m.media-amazon.com/images/I/81T4v8GOhBL._AC_UF1000,1000_QL80_.jpg",
    description: "When Shiva, the son of Bahubali, learns about his heritage, he begins to look for answers. His story is juxtaposed with past events that unfolded in the Mahishmati Kingdom.",
    price: "₹300"
  },
  {
    id: 3,
    title: "KGF Chapter 2",
    genre: "Action, Crime",
    duration: "2h 48m",
    rating: "8.4/10",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ96IWbfVBlmRwKzC4o7_yjFgLozF2T1XT84w&s",
    description: "The blood-soaked land of Kolar Gold Fields (KGF) has a new overlord now - Rocky, whose name strikes fear in the heart of his foes.",
    price: "₹280"
  },
  {
    id: 4,
    title: "Dangal",
    genre: "Biography, Drama",
    duration: "2h 41m",
    rating: "8.4/10",
    image: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_FMjpg_UX1000_.jpg",
    description: "Former wrestler Mahavir Singh Phogat and his two wrestler daughters struggle towards glory at the Commonwealth Games in the face of societal oppression.",
    price: "₹270"
  },
  {
    id: 5,
    title: "3 Idiots",
    genre: "Comedy, Drama",
    duration: "2h 50m",
    rating: "8.4/10",
    image: "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    description: "Two friends are searching for their long lost companion. They revisit their college days and recall the memories of their friend who inspired them to think differently.",
    price: "₹220"
  },
  {
    id: 6,
    title: "Pushpa: The Rise",
    genre: "Action, Crime",
    duration: "2h 59m",
    rating: "7.6/10",
    image: "https://www.acmodasi.in/amdb/images/movie/y/r/pushpa-the-rise-2021-uc2mhC.jpg",
    description: "Violence erupts between red sandalwood smugglers and the police charged with bringing down their organization in the Seshachalam forests of South India.",
    price: "₹260"
  },
  {
    id: 7,
    title: "Zindagi Na Milegi Dobara",
    genre: "Adventure, Comedy",
    duration: "2h 35m",
    rating: "8.2/10",
    image: "https://m.media-amazon.com/images/M/MV5BOGIzYzg5NzItNDRkYS00NmIzLTk3NzQtZWYwY2VlZDhiYWQ4XkEyXkFqcGc@._V1_.jpg",
    description: "Three friends decide to turn their fantasy vacation into reality after one of their friends gets engaged.",
    price: "₹240"
  },
  {
    id: 8,
    title: "Gully Boy",
    genre: "Drama, Music",
    duration: "2h 33m",
    rating: "7.9/10",
    image: "https://m.media-amazon.com/images/M/MV5BOWFkY2M3NDctZGEzMS00M2VmLTgzMTAtZWFiNjVmZDc5NWFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    description: "A coming-of-age story based on the lives of street rappers in Mumbai.",
    price: "₹230"
  },
  {
    id: 9,
    title: "Tumhari Sulu",
    genre: "Comedy, Drama",
    duration: "2h 20m",
    rating: "7.1/10",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhtIgWqPsogVWfcSRimpZH_inf0qdQrSGiRQ&s",
    description: "Sulu is an ambitious housewife with a loving husband and a happy family. Things start changing for her when she accidentally lands a job as a radio jockey.",
    price: "₹200"
  },
  {
    id: 10,
    title: "Andhadhun",
    genre: "Crime, Thriller",
    duration: "2h 19m",
    rating: "8.2/10",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQndWv7OvvEBEFkPTtyKKFzcuX9YVUBnKHYGw&s",
    description: "A series of mysterious events change the life of a blind pianist who now must report a crime that was actually never witnessed by him.",
    price: "₹250"
  },
  {
    id: 11,
    title: "Article 15",
    genre: "Crime, Drama",
    duration: "2h 10m",
    rating: "8.1/10",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0dRjTGnhBIPUwpje1f_anShZyt3flWF1o9Q&s",
    description: "In the rural heartlands of India, an upright police officer sets out on a crusade against violent caste-based crimes and discrimination.",
    price: "₹240"
  },
  {
    id: 12,
    title: "Super 30",
    genre: "Biography, Drama",
    duration: "2h 34m",
    rating: "7.9/10",
    image: "https://m.media-amazon.com/images/M/MV5BNTM0N2I4OTQtYmJlOC00MTUzLTlhZWMtZGIxODkxZTZkMDIyXkEyXkFqcGc@._V1_.jpg",
    description: "Based on the life of Patna-based mathematician Anand Kumar who runs the famed Super 30 program for IIT aspirants in Patna.",
    price: "₹230"
  },
  {
    id: 13,
    title: "Pink",
    genre: "Crime, Drama",
    duration: "2h 16m",
    rating: "8.1/10",
    image: "https://m.media-amazon.com/images/M/MV5BZGY0NWI0NmQtMjhiYi00ZjM4LWJhNjMtOGRkOTc0ZjI5M2ZiXkEyXkFqcGc@._V1_.jpg",
    description: "When three young women are implicated in a crime, a retired lawyer steps forward to help them clear their names.",
    price: "₹220"
  },
  {
    id: 14,
    title: "Uri: The Surgical Strike",
    genre: "Action, Drama",
    duration: "2h 18m",
    rating: "8.2/10",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/URI_-_New_poster.jpg/250px-URI_-_New_poster.jpg",
    description: "Indian army special forces execute a covert operation, avenging the killing of fellow army men at their base by a terrorist group.",
    price: "₹260"
  },
  {
    id: 15,
    title: "Queen",
    genre: "Adventure, Comedy",
    duration: "2h 26m",
    rating: "8.2/10",
    image: "https://m.media-amazon.com/images/M/MV5BZWU0ZWFhODYtMWE5NC00YzNiLWJlZTctMjFhODhjNDdmZjFmXkEyXkFqcGc@._V1_.jpg",
    description: "A Delhi girl from a traditional family sets out on a solo honeymoon after her marriage gets cancelled.",
    price: "₹210"
  },
  {
    id: 16,
    title: "Sholay",
    genre: "Action, Adventure",
    duration: "3h 24m",
    rating: "8.1/10",
    image: "https://m.media-amazon.com/images/I/61NhAcNBC+L._AC_UF894,1000_QL80_.jpg",
    description: "After his family is murdered by a notorious and ruthless bandit, a former police officer enlists the services of two outlaws to capture the bandit.",
    price: "₹180"
  },
  {
    id: 17,
    title: "Lagaan",
    genre: "Adventure, Drama",
    duration: "3h 44m",
    rating: "8.1/10",
    image: "https://m.media-amazon.com/images/I/61U2mIts0pL._AC_UF894,1000_QL80_.jpg",
    description: "The people of a small village in Victorian India stake their future on a game of cricket against their ruthless British rulers.",
    price: "₹190"
  },
  {
    id: 18,
    title: "Taare Zameen Par",
    genre: "Drama, Family",
    duration: "2h 45m",
    rating: "8.4/10",
    image: "https://m.media-amazon.com/images/I/81miFpqCRXL.jpg",
    description: "An eight-year-old boy is thought to be a lazy trouble-maker, until the new art teacher has the patience and compassion to discover the real problem behind his struggles in school.",
    price: "₹200"
  },
  {
    id: 19,
    title: "Dil Chahta Hai",
    genre: "Comedy, Drama",
    duration: "3h 3m",
    rating: "8.1/10",
    image: "https://upload.wikimedia.org/wikipedia/en/d/db/Dil_Chahta_Hai.jpg",
    description: "Three inseparable childhood friends are just out of college. Nothing comes between them - until they each fall in love, and their wildly different approaches to relationships creates tension.",
    price: "₹210"
  },
  {
    id: 20,
    title: "Mughal-E-Azam",
    genre: "Drama, Romance",
    duration: "2h 57m",
    rating: "8.1/10",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe8BNuOVibJ-_Esbcj8sOYEngePfWFTnDpvQ&s",
    description: "A 16th century prince falls in love with a court dancer and battles with his emperor father.",
    price: "₹170"
  }
]

function App() {
  const [currentPage, setCurrentPage] = useState('movieList')
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    mobile: ''
  })
  const [bookingId, setBookingId] = useState('')

  // Handle image loading errors
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x400/667eea/ffffff?text=Movie+Poster'
  }

  // Page 1: Movie List
  const MovieListPage = () => (
    <div className="movie-list-page">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
          <span className="navbar-brand">
            <i className="bi bi-film me-2"></i>
            Bollywood Cinema
          </span>
        </div>
      </nav>

      <div className="container">
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary mb-3">Now Showing</h1>
          <p className="lead text-muted">Choose from our latest collection of Indian blockbuster movies</p>
        </div>

        <div className="row g-4">
          {moviesData.map((movie) => (
            <div key={movie.id} className="col-lg-3 col-md-4 col-sm-6">
              <div className="movie-card h-100" onClick={() => {
                setSelectedMovie(movie)
                setCurrentPage('movieDetails')
              }}>
                <div className="movie-image-container">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="movie-image"
                    onError={handleImageError}
                  />
                  <div className="movie-overlay">
                    <div className="movie-rating">
                      <i className="bi bi-star-fill text-warning me-1"></i>
                      {movie.rating}
                    </div>
                  </div>
                </div>
                <div className="movie-info">
                  <h5 className="movie-title">{movie.title}</h5>
                  <p className="movie-genre">{movie.genre}</p>
                  <div className="movie-details-row">
                    <span className="movie-duration">
                      <i className="bi bi-clock me-1"></i>
                      {movie.duration}
                    </span>
                    <span className="movie-price">{movie.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  // Page 2: Movie Details
  const MovieDetailsPage = () => (
    <div className="movie-details-page">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
          <span className="navbar-brand">
            <i className="bi bi-film me-2"></i>
            CineMax Booking
          </span>
          <button
            className="btn btn-outline-light btn-sm"
            onClick={() => setCurrentPage('movieList')}
          >
            <i className="bi bi-arrow-left me-1"></i>
            Back to Movies
          </button>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="movie-poster-container">
              <img
                src={selectedMovie.image}
                alt={selectedMovie.title}
                className="movie-poster"
                onError={handleImageError}
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="movie-details-content">
              <h1 className="movie-title-large">{selectedMovie.title}</h1>
              <div className="movie-meta mb-4">
                <span className="badge bg-primary me-2">{selectedMovie.genre}</span>
                <span className="badge bg-success me-2">
                  <i className="bi bi-clock me-1"></i>
                  {selectedMovie.duration}
                </span>
                <span className="badge bg-warning text-dark">
                  <i className="bi bi-star-fill me-1"></i>
                  {selectedMovie.rating}
                </span>
              </div>

              <div className="movie-description mb-4">
                <h4>Synopsis</h4>
                <p className="lead">{selectedMovie.description}</p>
              </div>

              <div className="pricing-section mb-4">
                <h4>Ticket Price</h4>
                <div className="price-display">
                  <span className="price-amount">{selectedMovie.price}</span>
                  <span className="price-label">per ticket</span>
                </div>
              </div>

              <div className="showtimes-section mb-4">
                <h4>Available Showtimes</h4>
                <div className="showtime-buttons">
                  <button className="btn btn-outline-primary me-2 mb-2">10:00 AM</button>
                  <button className="btn btn-outline-primary me-2 mb-2">1:30 PM</button>
                  <button className="btn btn-outline-primary me-2 mb-2">4:45 PM</button>
                  <button className="btn btn-outline-primary me-2 mb-2">8:00 PM</button>
                  <button className="btn btn-outline-primary me-2 mb-2">10:30 PM</button>
                </div>
              </div>

              <button
                className="btn btn-danger btn-lg book-seat-btn"
                onClick={() => setCurrentPage('bookingForm')}
              >
                <i className="bi bi-ticket-perforated me-2"></i>
                Book Your Seat
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Page 3: Booking Form
  const BookingFormPage = () => {
    const handleSubmit = (e) => {
      e.preventDefault()
      const randomId = 'BK' + Math.random().toString(36).substr(2, 8).toUpperCase()
      setBookingId(randomId)
      setCurrentPage('confirmation')
    }

    const handleInputChange = (e) => {
      setBookingData({
        ...bookingData,
        [e.target.name]: e.target.value
      })
    }

    return (
      <div className="booking-form-page">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
          <div className="container">
            <span className="navbar-brand">
              <i className="bi bi-film me-2"></i>
              CineMax Booking
            </span>
            <button
              className="btn btn-outline-light btn-sm"
              onClick={() => setCurrentPage('movieDetails')}
            >
              <i className="bi bi-arrow-left me-1"></i>
              Back to Details
            </button>
          </div>
        </nav>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="booking-form-card">
                <div className="form-header text-center mb-4">
                  <h2 className="form-title">Complete Your Booking</h2>
                  <p className="form-subtitle">Just a few details to secure your seat</p>
                </div>

                <div className="selected-movie-summary mb-4">
                  <div className="row align-items-center">
                    <div className="col-3">
                      <img
                        src={selectedMovie.image}
                        alt={selectedMovie.title}
                        className="summary-image"
                        onError={handleImageError}
                      />
                    </div>
                    <div className="col-9">
                      <h5 className="mb-1">{selectedMovie.title}</h5>
                      <p className="mb-1 text-muted">{selectedMovie.genre}</p>
                      <p className="mb-0 fw-bold text-primary">{selectedMovie.price}</p>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      <i className="bi bi-person me-2"></i>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="name"
                      name="name"
                      value={bookingData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      <i className="bi bi-envelope me-2"></i>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      name="email"
                      value={bookingData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="mobile" className="form-label">
                      <i className="bi bi-phone me-2"></i>
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      className="form-control form-control-lg"
                      id="mobile"
                      name="mobile"
                      value={bookingData.mobile}
                      onChange={handleInputChange}
                      placeholder="Enter your mobile number"
                      pattern="[0-9]{10}"
                      required
                    />
                  </div>

                  <div className="booking-summary mb-4">
                    <div className="summary-row">
                      <span>Movie Ticket</span>
                      <span>{selectedMovie.price}</span>
                    </div>
                    <div className="summary-row">
                      <span>Convenience Fee</span>
                      <span>₹25</span>
                    </div>
                    <div className="summary-row total-row">
                      <span>Total Amount</span>
                      <span>₹{parseInt(selectedMovie.price.replace('₹', '')) + 25}</span>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-success btn-lg w-100 submit-btn">
                    <i className="bi bi-credit-card me-2"></i>
                    Confirm Booking & Pay
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Page 4: Booking Confirmation
  const ConfirmationPage = () => (
    <div className="confirmation-page">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container">
          <span className="navbar-brand">
            <i className="bi bi-film me-2"></i>
            CineMax Booking
          </span>
        </div>
      </nav>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="confirmation-card">
              <div className="success-header text-center mb-4">
                <div className="success-icon mb-3">
                  <i className="bi bi-check-circle-fill text-success"></i>
                </div>
                <h2 className="success-title">Booking Confirmed!</h2>
                <p className="success-subtitle">Your seat has been successfully booked</p>
              </div>

              <div className="booking-details">
                <div className="booking-id-section text-center mb-4">
                  <h4 className="booking-id-label">Booking ID</h4>
                  <div className="booking-id-display">{bookingId}</div>
                </div>

                <div className="details-section">
                  <h5 className="section-title">Movie Details</h5>
                  <div className="detail-row">
                    <span className="detail-label">Movie:</span>
                    <span className="detail-value">{selectedMovie.title}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Genre:</span>
                    <span className="detail-value">{selectedMovie.genre}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">{selectedMovie.duration}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Price:</span>
                    <span className="detail-value">{selectedMovie.price}</span>
                  </div>
                </div>

                <div className="details-section">
                  <h5 className="section-title">Customer Details</h5>
                  <div className="detail-row">
                    <span className="detail-label">Name:</span>
                    <span className="detail-value">{bookingData.name}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Email:</span>
                    <span className="detail-value">{bookingData.email}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Mobile:</span>
                    <span className="detail-value">{bookingData.mobile}</span>
                  </div>
                </div>

                <div className="details-section">
                  <h5 className="section-title">Payment Summary</h5>
                  <div className="detail-row">
                    <span className="detail-label">Ticket Price:</span>
                    <span className="detail-value">{selectedMovie.price}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">Convenience Fee:</span>
                    <span className="detail-value">₹25</span>
                  </div>
                  <div className="detail-row total-amount">
                    <span className="detail-label">Total Paid:</span>
                    <span className="detail-value">₹{parseInt(selectedMovie.price.replace('₹', '')) + 25}</span>
                  </div>
                </div>
              </div>

              <div className="action-buttons text-center mt-4">
                <button
                  className="btn btn-primary me-3"
                  onClick={() => {
                    setCurrentPage('movieList')
                    setSelectedMovie(null)
                    setBookingData({ name: '', email: '', mobile: '' })
                    setBookingId('')
                  }}
                >
                  <i className="bi bi-house me-2"></i>
                  Book Another Movie
                </button>
                <button className="btn btn-outline-secondary">
                  <i className="bi bi-download me-2"></i>
                  Download Ticket
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Render current page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'movieList':
        return <MovieListPage />
      case 'movieDetails':
        return <MovieDetailsPage />
      case 'bookingForm':
        return <BookingFormPage />
      case 'confirmation':
        return <ConfirmationPage />
      default:
        return <MovieListPage />
    }
  }

  return (
    <div className="app">
      {renderCurrentPage()}
    </div>
  )
}

export default App