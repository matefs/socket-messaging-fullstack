# Socket.IO Chat Message Project

![socket message broadcast](https://github.com/user-attachments/assets/09a6f889-df39-4b20-af1d-4afd0e73c5da)

## Acess it online:
- https://stackblitz.com/github/matefs/socket-messaging-fullstack

## Overview

This project is a simple chat application using Socket.IO with a vanilla JavaScript front-end. It allows users to connect to a server and send messages that are broadcasted to all connected clients in real time.

## Features

-   Real-time message broadcasting using Socket.IO.
-   Front-end interface built with vanilla JavaScript and CSS.
-   Basic styling for a clean and simple UI.

## Requirements

-   Node.js
-   npm (Node Package Manager)

## Installation

1.  **Clone the Repository**
     
    
   - `git clone <repository-url>`
   - `cd <repository-directory>` 
    
2.  **Install Dependencies**
    
    Navigate to your project directory and install the required npm packages:
    
    `npm install` 
    

## Usage

1.  **Start the Server**
    
    Run the server using Node.js:
    
    `node app.js` 
    
    The server will start and listen on port 3000 by default.
    
2.  **Open the Application**
    
    Open your web browser and go to `http://localhost:3000`. You should see the chat application interface.
    
3.  **Interact with the Application**
    
    -   Enter a message in the input field and click "Send Message" to broadcast the message.
    -   Messages will appear in the message list for all connected clients.

## Project Structure

-   `app.js`: The main server file that sets up the Express server and Socket.IO for handling real-time communication.
-   `index.html`: The front-end file with vanilla JavaScript and CSS for the chat interface.

### `index.html`

The HTML file sets up the chat interface with an input field for entering messages and a button to send them. Messages are displayed in a scrollable area.

### `app.js`

The server file handles:

-   Setting up the Express server.
-   Managing Socket.IO connections and message broadcasting.

## Example

When running the server, the application will display a UI with an input field and a button. Messages sent from one client will be broadcasted and displayed on all connected clients.

## Troubleshooting

-   Ensure that your server is running (`node app.js`) and that there are no errors in the terminal.
-   Check your browser's console for any JavaScript errors.
-   Verify that you have a stable internet connection and that the necessary scripts (Socket.IO) are being loaded correctly.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

----------

Feel free to adjust the content according to your project specifics and repository details.
