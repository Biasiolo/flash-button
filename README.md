# Screenshot Button

https://flash-button.vercel.app/

## Features:

This project introduces an interactive button that allows users to take screenshots of the visible area in their browser. Some notable features include:

- **Flash Effect Button:** The button has an attractive flash effect when the user hovers over it, providing a pleasant visual experience.

- **Screenshot Capture:** Clicking the button captures the visible content of the browser in PNG format.

- **Fast Download:** The captured image is made available for immediate download, making sharing and storage hassle-free.

- **Success Message:** A success message briefly appears to inform the user that the screenshot has been saved successfully.

## Button Design:

The button boasts a clean and modern design with an animated outline that adds a touch of dynamism. Hovering over the button triggers a smooth transition to an appealing blue hue.

## Utility of Content Area Capture:

Capturing the content area of the browser focuses on providing users with the ability to capture only the relevant part of the page, streamlining the cropping process and highlighting essential information.

## How to Install on Your Site:

1. **Include Necessary Files:**
   Ensure that you include the following files in your project:
   - jQuery: `https://code.jquery.com/jquery-3.6.4.min.js`
   - html2canvas: `https://html2canvas.hertzen.com/dist/html2canvas.min.js`
   - `screenshot.js`: Contains the logic for capturing and saving screenshots.
   - `styles.css`: Styles for the button and success message.

2. **Reference Files in HTML:**
   Add references to the files in the header of your HTML document:
   ```html
   <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
   <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
   <script src="screenshot.js"></script>
   <link rel="stylesheet" href="styles.css">
   ```

3. **Add the Button to Your HTML:**
   Insert the button anywhere in your HTML, for example:
   ```html
   <button class="btn">
      <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
         <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
         <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
      </svg>
      <span>flash-button</span>
   </button>
   ```

4. **Customize as Needed:**
   Feel free to customize the styles and position of the button to suit your site's design.

5. **Ready for Use:**
   Your screenshot button is now ready to be used on your site, providing users with an easy and effective way to capture and share relevant content.

Enjoy the implementation and enhance the user experience on your site! 😊