import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add these fonts from Google Fonts
const link = document.createElement("link");
link.rel = "preconnect";
link.href = "https://fonts.googleapis.com";
document.head.appendChild(link);

const link2 = document.createElement("link");
link2.rel = "preconnect";
link2.href = "https://fonts.gstatic.com";
link2.crossOrigin = "";
document.head.appendChild(link2);

const link3 = document.createElement("link");
link3.rel = "stylesheet";
link3.href = "https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@300;400;500;600&family=Playfair+Display:wght@400;500;600;700&display=swap";
document.head.appendChild(link3);

// Set the document title
document.title = "Eternal Unions | Wedding Planning Services";

createRoot(document.getElementById("root")!).render(<App />);
