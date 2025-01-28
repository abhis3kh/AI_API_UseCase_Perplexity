# Perplexity AI Chat Interface

This React application provides a simple interface to interact with the Perplexity AI API. Users can input queries and receive AI-generated responses.

## Features

- Real-time interaction with Perplexity AI
- Responsive textarea for query input
- Submit queries using Enter key or submit button
- Loading state indication during API calls
- Error handling for API requests

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (version 12.0 or higher)
- npm (Node Package Manager) installed
- A Perplexity AI API key

## Installation

1. Clone the repository:
   git clone https://github.com/your-username/perplexity-ai-chat.git
   text

2. Navigate to the project directory:
   cd perplexity-ai-chat
   text

3. Install the dependencies:
   npm install
   text

4. Create a `.env` file in the root directory and add your Perplexity AI API key:
   VITE_PERPLEXITY_API_KEY=your_api_key_here
   text

## Usage

To run the application locally:

1. Start the development server:
   `npm run dev`
   text

2. Open your browser and navigate to `http://localhost:5173` (or the port specified by Vite).

3. Enter your query in the textarea and press Enter or click the Submit button to send it to the Perplexity AI API.

## Configuration

You can adjust the API parameters in the `handleSubmit` function:

- `model`: The AI model to use (default: 'sonar')
- `temperature`: Controls randomness (default: 0.2)
- `top_p`: Controls diversity (default: 0.9)
- `max_tokens`: Maximum length of the generated response (default: 1024)

## Contributing

Contributions to this project are welcome. Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Perplexity AI](https://www.perplexity.ai/) for providing the API
- [React](https://reactjs.org/) for the frontend framework
- [Vite](https://vitejs.dev/) for the build tool and development server
