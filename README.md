# Movie Explorer App

A modern web application for exploring popular movies, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Browse popular movies from TMDB
- Search movies by title
- View detailed movie information
- Favorite movies functionality
- Responsive design for all devices
- Server-side rendering for optimal performance

## Tech Stack

- **Frontend Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Hooks
- **Testing**: Jest & React Testing Library
- **API**: TMDB (The Movie Database)

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- TMDB API key

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/movie-explorer.git
cd movie-explorer
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root directory and add your TMDB API key:

```env
NEXT_PUBLIC_TMDB_API_KEY=your_api_key_here
```

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Running Tests

```bash
npm test
# or
yarn test
```

## Design Decisions & Trade-offs

### Architecture
- **App Router**: Chose Next.js 14's App Router for improved server-side rendering capabilities and better performance compared to the Pages Router.
- **TypeScript**: Implemented for type safety and better developer experience, despite the initial learning curve.
- **Tailwind CSS**: Selected for rapid development and consistent styling, though it requires learning utility classes.

### State Management
- Used React's built-in hooks for state management instead of external libraries like Redux, as the app's complexity didn't warrant additional dependencies.
- Implemented custom hooks for reusable logic and better code organization.

### Performance Considerations
- Implemented image optimization using Next.js Image component
- Server-side rendering for initial page load
- Client-side search for better user experience
- Lazy loading for improved initial load time

### Testing Strategy
- Unit tests for components and utilities
- Integration tests for key user flows
- Mock external dependencies for reliable testing

### Trade-offs
1. **Client-side Search**
   - Pro: Instant feedback for users
   - Con: Limited to loaded data, might not scale well with large datasets

2. **Image Optimization**
   - Pro: Better performance and user experience
   - Con: Increased complexity in development and deployment

3. **TypeScript**
   - Pro: Better code quality and developer experience
   - Con: Additional development time for type definitions

## Project Structure

```
├── app/                 # Next.js app router pages
├── components/         # Reusable React components
├── hooks/             # Custom React hooks
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
├── public/            # Static assets
└── __tests__/         # Test files
```

## Future Improvements

- Implement infinite scrolling for movie list
- Add user authentication
- Enhance movie details page
- Add movie recommendations
- Implement advanced search filters
- Add dark mode support

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.