# Chill Gamer: A Game Review Application  

Welcome to **Chill Gamer**, a user-friendly platform for exploring and sharing game reviews. Designed to offer a seamless and chill experience, the application focuses on intuitive navigation and engaging interactions.  

## 🌐 [Live Site URL](#)  

firebase : https://game-review-ad6c5.web.app/
vercel : https://game-review-server-side.vercel.app/

---

## 🚀 Features  

1. **Dynamic Home Page**:  
   - Includes a slider/banner with game highlights.  
   - Displays the *Highest Rated Games* section with six games fetched from the database, each having an "Explore Details" button that redirects to the respective details page.  
   - Two additional sections with relevant content.  

2. **User Authentication**:  
   - Email/Password-based login and registration.  
   - Social login integration (Google).  
   - Conditional rendering for logged-in/out states in the navbar.  

3. **Game Reviews**:  
   - Users can add, view, update, and delete reviews.  
   - Reviews include details like game title, description, genres, and ratings.  

4. **Watchlist Feature**:  
   - Logged-in users can add games to their watchlist from the review details page.  
   - Watchlist management is available on a dedicated page.  

5. **Extra Functionalities**:  
   - Sorting and filtering of reviews by genres, ratings, or publishing year.  
   - Dark/light theme toggle for user convenience.  
   - 404 error page and a global loading spinner.  

---

## 🛠️ Technology Stack  

- **Frontend**: React, Tailwind CSS, DaisyUI  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  
- **Authentication**: Firebase  
- **Hosting**:  
  - Client-side: Netlify  
  - Server-side: Vercel  

---

## 📖 Pages  

### 1. **Home Page**  
- Navbar and footer persist on all pages except the 404 page.  
- Contains a slider, a Highest Rated Game Section, and two extra sections.  
- The "Explore Details" button on the cards redirects to the review details page.  

### 2. **Authentication Pages**  
- **Login**: Supports email/password and Google login.  
- **Register**: Validates password strength and requires photoURL input.  
- Displays toast or SweetAlert for errors and success messages.  

### 3. **Add Review Page**  
- Allows logged-in users to submit game reviews with comprehensive details.  
- Protected route.  

### 4. **Review Details Page**  
- Displays all details of a selected review, including an "Add to Watchlist" feature.  

### 5. **My Reviews Page**  
- Users can view, update, or delete their reviews.  

### 6. **Watchlist Page**  
- Displays the user's watchlisted games in a table format.  

---

## ⚙️ Challenges & Advanced Features  

1. Dark/light theme toggle for a personalized experience.  
2. Animation integrations using **Lottie React** and **React Awesome Reveal**.  
3. Sorting and filtering reviews for better user interaction.  

---

## 📝 Environment Variables  

- Firebase configuration keys and MongoDB credentials are securely hidden using `.env`.  

---

## 📂 Deployment  

- Client-side deployed on **Firebase**.  
- Server-side deployed on **Vercel**.  
- Firebase authentication includes authorized domains.  

---  

Thank you for exploring Chill Gamer! 🚀 Enjoy a smooth gaming review experience.  
* 