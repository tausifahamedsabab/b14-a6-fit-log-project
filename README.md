# FitLog

FitLog is a modern workout library web application that helps users explore exercises, view workout details, build a daily workout plan, and save workouts for later.

## Technologies Used

- Next.js
- React
- JavaScript
- Tailwind CSS
- JSON
- Local Storage

## Key Features

1. Browse a workout library with detailed exercise information.
2. Sort workouts by duration, calories, or rating.
3. Add workouts to today's plan with a maximum of five exercises.
4. Save workouts for later and manage saved exercises.
5. View workout details and track planned workouts from the My Plan page.
6. Mark planned workouts as completed.
7. Remove workouts from today's plan or saved workouts.
8. Responsive design for desktop, tablet, and mobile devices.
9. Custom 404 page for invalid routes.
10. Toast notifications for workout actions.

## Optional Features

- Persist the plan and saved workout data in `localStorage` so the data survives page reloads.
- Search workouts by workout name or muscle group/tag.
- Disable the "Add to today's plan" button when the plan reaches the five-workout limit.

## Project Structure

```text
src/
├── app/
│   ├── components/
│   │   ├── Banner.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── WorkoutActions.jsx
│   │   └── WorkoutCard.jsx
│   │
│   ├── context/
│   │   └── PlanContext.jsx
│   │
│   ├── data/
│   │   └── workouts.json
│   │
│   ├── my-plan/
│   │   └── page.jsx
│   │
│   ├── workout/
│   │   ├── [id]/
│   │   │   └── page.jsx
│   │   └── page.jsx
│   │
│   ├── not-found.jsx
│   ├── globals.css
│   └── layout.js
│
├── package.json
└── README.md
```
