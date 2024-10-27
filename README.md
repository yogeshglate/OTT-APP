# OTT_APP 🎥

An OTT (Over-the-Top) movie application built with React Native, using [TMDB API](https://www.themoviedb.org/) to display popular movies. This app offers key features such as navigation, pagination, responsive design, dark/light theme toggle, i18n for multilingual support, and local storage for favorite movies. It's optimized for both Android and iOS platforms, with clean, readable code adhering to best practices.

## Key Features

- **Home Screen**: Displays a list of popular movies, each with:
  - Movie poster
  - Title
  - Release date
  - Rating
  - Genres (categories)
- **Detail Screen**: On movie selection, users can view:
  - Movie poster
  - Title
  - Overview
  - Release date
  - Rating
  - Categories (genres)
  - Navigation button to return to the Home Screen
- **Search**: Search functionality with pagination.
- **Favorites**: Save favorite movies locally to view in the Favorites screen (optional).
- **Settings**:
  - Toggle between Dark and Light themes
  - Access help
- **Account** (Optional): Authentication to save user preferences locally.

## Bonus Features

- **Pagination** for movie listings.
- **Dark/Light Theme Toggle**.
- **i18n**: Supports multiple languages.
- **Online/Offline Detection** using `@react-native-community/netinfo`.
- **Error Handling** for a seamless user experience.

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yogeshglate/OTT-APP.git
   cd OTT-APP
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up the TMDB API Key**: Create a `.env` file in the root directory and add your TMDB API variables:

   ```plaintext
   API_KEY=your_api_key_here
   API_BASE_URL=https://api.themoviedb.org/3/movie/
   ```

4. **Run the app**:

   ```bash
   npm run android  # For Android
   npm run ios      # For iOS
   ```

## Available Scripts

- **`npm run android`**: Runs the app on Android.
- **`npm run ios`**: Runs the app on iOS.
- **`npm run lint`**: Lints code using ESLint.
- **`npm start`**: Starts the React Native development server.
- **`npm test`**: Runs unit tests with Jest.

## Project Structure

```
OTT_APP/
├── assets/               # Images and other assets
├── components/           # Reusable UI components (e.g., MovieCard, InputField)
├── constants/            # Constant values used throughout the app
├── context/              # Context providers (e.g., Theme, Auth)
├── hooks/                # Custom hooks for state management
├── locales/              # Localization files for i18n
├── navigation/           # Navigation stack configuration
├── screens/              # App screens (HomeScreen, DetailScreen, SearchScreen, etc.)
├── services/             # API calls and helper functions
├── styles/               # Styling configurations (e.g., ThemeStyles, ButtonStyles)
├── types/                # Type definitions (if using TypeScript)
├── utils/                # Utility functions
├── .env                  # Environment variables
└── README.md             # Project documentation
```

## Dependencies

- **Core Libraries**:
  - `react-native`: Framework for building cross-platform mobile apps.
  - `react`: For building user interfaces.
- **State Management**:
  - **Context API**: Manages global state (no Redux).
  - `@react-native-async-storage/async-storage`: Local storage for saving favorites.
- **Navigation**:
  - `@react-navigation/native` and `@react-navigation/native-stack`: For managing navigation.
  - `@react-navigation/bottom-tabs`: For bottom tab navigation.
- **UI Components & Styling**:
  - `react-native-paper`: Provides Material Design components.
  - `react-native-vector-icons`: Custom icons throughout the app.
- **i18n & Localization**:
  - `i18next` and `react-i18next`: For internationalization.
  - `intl-pluralrules`: Ensures accurate pluralization in different languages.
- **Utility & Misc**:
  - `@react-native-community/netinfo`: For online/offline connectivity status.
  - `axios`: For making HTTP requests to the TMDB API.
  - `react-native-toast-message`: For displaying user notifications.
  - `react-native-config`: Manages environment variables.

## Development

### Linting & Formatting

- **ESLint**: Run `npm run lint` to identify and fix code quality issues.
- **Prettier**: For code formatting.

## Contributing

Contributions are welcome! Please open a pull request with your suggested changes.

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.
