# QR-CODE-GENERATOR
![weather page](./images/wea2.png)


# JavaScript QR Code Generator Examples

This repository contains two JavaScript code examples for generating QR codes. One example is designed to work in a web browser environment, while the other is intended to run in a Node.js environment.
# Link To The Webpage
![click on the link](https://avyaanverma.github.io/qr-code-generator/)

## Browser QR Code Generator (`browser.js`)

The `browser.js` file demonstrates how to create a simple QR code generator that runs in a web browser. When a user enters text into an input box and presses the "Enter" key, a QR code image is dynamically generated and displayed on the page. The QR code image is generated using the [qr-server API](https://api.qrserver.com/v1/create-qr-code/) and is displayed using an <img> element.

Usage:
1. Open the `index.html` file in a web browser.
2. Enter text into the input box and press "Enter" to generate a QR code.

## Node.js QR Code Generator (`node_script.js`)

The `node_script.js` file demonstrates how to create a QR code generator using Node.js. The script uses the `inquirer` library to prompt the user for a URL. After receiving the URL input, the script generates a QR code image using the `qr-image` library and saves it to the file system. Additionally, the URL is saved to a `URL.txt` file.

Usage:
1. Install Node.js if not already installed.
2. Run the script using the command: `node node_script.js`.
3. Follow the prompts to enter a URL and generate a QR code image.

## Requirements

- For the browser example, you need a modern web browser that supports JavaScript.
- For the Node.js example, you need Node.js installed on your system.

## License

This code is provided under the [MIT License](LICENSE).
