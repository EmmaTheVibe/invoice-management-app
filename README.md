# Invoice Management App

A frontend invoice management app built with React, TypeScript, and Tailwind CSS.

## Features

- Create, edit, and delete invoices
- Save invoices as drafts or send them as pending
- Mark pending invoices as paid
- Filter invoices by status (all, draft, pending, paid)
- Form validation — required fields, email format, at least one item
- Light and dark mode toggle (persists on refresh)
- Data persists in localStorage so nothing is lost on reload
- Responsive — works on mobile, tablet and desktop

## Tech Stack

- React 18 + TypeScript
- Tailwind CSS
- React Hook Form
- React Router v6
- Context API + useReducer for state management

## Notes

The app uses localStorage for persistence so no backend is needed. Seed data is loaded on first visit so there's something to look at straight away.
