Notes App (React + Vite + Supabase)

A simple, full-stack notes application built with React and Vite on the frontend and Supabase as a hosted Postgres database.
​

Overview
This project is a lightweight note‑taking app where all notes are stored in a Supabase table and consumed directly from a React single‑page application.
​
It focuses on core CRUD operations for notes and a fast, minimal UI suitable for learning or extending into a larger productivity tool.
​

Features
Create and save new notes directly to a Supabase Postgres table.
​

Edit and delete existing notes with instant updates in the UI.
​

View all notes in a clean, responsive React interface powered by Vite’s dev tooling.
​

Tech Stack
Frontend: React + Vite for building a modern SPA with fast hot module replacement.
​

Database: Supabase Postgres used via its JavaScript client and auto‑generated APIs for CRUD operations.
​

Tooling: Node.js, npm scripts for development, build, and local preview.
​


## Supabase Setup

1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Create a `notes` table with columns:
   - `id` (UUID, Primary Key)
   - `title` (Text)
   - `content` (Text)
   - `created_at` (Timestamp)
   - `updated_at` (Timestamp)
4. Copy your API URL and Anon Key to `.env.local`

## Usage

1. **Create a Note** - Click "New Note" button and start typing
2. **Edit a Note** - Click on any note to open and edit
3. **Delete a Note** - Click delete button 


## Future Enhancements

- [ ] Add note categories/tags
- [ ] Implement note sharing feature
- [ ] Add dark mode toggle
- [ ] Export notes as PDF
- [ ] Implement user authentication
- [ ] Add rich text editor (markdown support)
- [ ] Note scheduling/reminders



## Contributing

Feel free to fork this project and submit pull requests for any improvements!

## License

This project is open source and available under the MIT License.

## Author

Built as a learning project for full-stack web development.

---

**Happy note-taking!** 📝✨
