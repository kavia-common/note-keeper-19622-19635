# NoteKeeper (Angular 19) - Ocean Professional

A minimalist, professional notes app UI to create, view, edit, and delete notes. Uses a top navigation bar, a main notes list panel, a side editor panel, and a slide-in details drawer.

## Quick start

Install dependencies and start dev server:

```bash
npm install
npm start
```

Dev server runs at http://localhost:3000/ (configured in angular.json).

## Backend REST API

Configure the backend base URL at runtime using `src/assets/env.js`. For example:

```html
<script>
  window.NG_APP_API_BASE_URL = 'https://localhost:4001/api';
</script>
```

By default, the app falls back to `/api`. Ensure your reverse proxy maps `/api` to the notes backend.

Endpoints expected:
- GET    {API}/notes
- GET    {API}/notes/:id
- POST   {API}/notes
- PUT    {API}/notes/:id
- DELETE {API}/notes/:id

Note JSON shape:
```json
{
  "id": "string",
  "title": "string",
  "content": "string",
  "createdAt": "2025-01-01T12:00:00.000Z",
  "updatedAt": "2025-01-02T12:00:00.000Z"
}
```

## Styling

Implements the "Ocean Professional" palette via CSS variables in `src/styles.css`:
- Primary: #1E3A8A
- Secondary: #F59E0B
- Success: #059669
- Error: #DC2626
- Background: #F3F4F6
- Surface: #FFFFFF
- Text: #111827

## Environment

See `.env.example` for guidance. Do not commit sensitive `.env` files.

## Scripts

- `npm start` - start dev server
- `npm run build` - production build
- `npm test` - run unit tests (if configured)

