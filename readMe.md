# Object Move Examples
---
A simple repo for trying out different techniques for moving opjects with the mouse.

## Test Bed Setup

[Manual Install Intructions at nextjs.org](https://nextjs.org/docs/getting-started/installation#manual-installation)

```bash
mkdir <projectName>
cd <projectName>
npm install next@latest
npm install react@latest
npm install react-dom@latest
```
Add the following to:

`package.json`

```json
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
```

```bash
mkdir <projectName>/app
cd /app
touch laout.js
touch page.js
```
Edit the files

`layout.js`
```js
export default function RootLayout({ children, }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

`page.tsx`
```js
export default function Page() {
  return <h1>Hello, Next.js!</h1>
}
```
Test it out on the terminal:
```bash
npm run dev
```
## Test Bed Rehydration from a git clone

## Branches 
/main
- A clean Hello World.

/roggcExample
- [Using React But not useEffect](https://dev.to/roggc/how-to-continuously-drag-an-element-in-react-with-javascript-4fon)

/tmarshallExample
- [Using React and creates his own hook with useEffect](https://javascript.plainenglish.io/how-to-make-a-simple-custom-usedrag-react-hook-6b606d45d353)