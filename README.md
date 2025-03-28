# bibliomancy

## About
This code was generated by [CodeCraftAI](https://codecraft.name)

**User requests:**
create a web app that allows user to receive a random short passage from a sacred text . There will be a drop down menu to select text . Choices will include .. "The Bible" , "The Quran", "The Torah", "The Tao Te Ching", "The Book of The Dead", "The Iliad", "The Bhagavad Gita".  All texts will give english translation . Use only .html , .js , and .css .  Include a link at bottom of page to visit "Visit Pixel Oracle"  : https://pixel-oracle.com/  . Use pixel font for all font .

Check OUTPUT.md for the complete unaltered output.

## Project Plan
```
Here’s a simple and clear **project plan** for the web app based on the requirements and constraints:

---

### **Project Plan**

#### **1. Project Overview**
- **Objective**: Build a client-side web app that displays random passages from selected sacred texts.
- **Constraints**: Only HTML, JavaScript, and CSS allowed. No server-side code.
- **Deliverables**: HTML, JavaScript, and CSS files.

---

#### **2. Main Tasks**

##### **Task 1: HTML Structure**
- **Subtasks**:
  1. Create a basic HTML file.
  2. Add a dropdown menu with the sacred text options.
  3. Add a `<div>` to display the random passage.
  4. Add a footer with the link "Visit Pixel Oracle."
- **Deliverable**: `index.html`

##### **Task 2: JavaScript Logic**
- **Subtasks**:
  1. Preload all sacred text passages in JavaScript (store them in arrays or objects).
  2. Add an event listener to the dropdown menu to detect user selection.
  3. Write a function to randomly select and display a passage based on the user’s selection.
  4. Dynamically update the passage display area when the user changes the selection.
- **Deliverable**: `script.js`

##### **Task 3: CSS Styling**
- **Subtasks**:
  1. Use the "Pixel" font (embed via Google Fonts or a local file).
  2. Style the dropdown menu, passage display area, and footer.
  3. Ensure a clean, responsive layout.
- **Deliverable**: `styles.css`

---

#### **3. Technical Considerations**
- **Font**: Use the "Pixel" font via Google Fonts or a local `.ttf` file.
- **Text Management**: Store all sacred text passages in JavaScript arrays or objects (e.g., `{ "Bible": ["passage1", "passage2", ...], "Quran": [...], ... }`).
- **Random Selection**: Use `Math.random()` to select a random passage from the array.
- **Dynamic Updates**: Use `innerHTML` or `textContent` to update the displayed passage.
- **No Frameworks**: Stick to vanilla JavaScript, HTML, and CSS (no React, Vue, etc.).

---

#### **4. Example Workflow**
1. User opens the app (`index.html`).
2. User selects a text (e.g., "The Quran") from the dropdown menu.
3. JavaScript fetches a random passage from the preloaded "Quran" array.
4. The passage is displayed in the `<div>`.
5. User can change the dropdown to see passages from other texts.
6. Footer displays the link "Visit Pixel Oracle."

---

#### **5. Timeline**
| **Task**            | **Duration** |
|----------------------|--------------|
| HTML Structure       | 1 hour       |
| JavaScript Logic     | 3 hours      |
| CSS Styling          | 2 hours      |
| Testing & Debugging  | 1 hour       |
| **Total**            | **7 hours**  |

---

#### **6. Testing**
- Test the dropdown to ensure random passages are displayed correctly.
- Verify the "Pixel" font is applied consistently.
- Test the footer link to ensure it redirects to `https://pixel-oracle.com/`.
- Check responsiveness on different screen sizes.

---

#### **7. Additional Notes**
- Preload all sacred text passages to ensure quick access.
- Keep the JavaScript logic modular and reusable.
- Ensure the CSS is clean and avoids unnecessary complexity.

---

Let me know if you’d like further details or assistance in breaking down any of these tasks!
```
