# Get Start React App with tailwindcss
Visit the [official Tailwind CSS documentation](https://tailwindcss.com/docs/guides/create-react-app) for step-by-step instructions on integrating Tailwind CSS with Create React App.

To test if Tailwind CSS classes are working, add
```typescript
<div className="bg-blue-500">This is a blue box</div>
```
in `src/App.tsx`, **do not forget to add `./src/App.tsx` in the file `tailwind.config.js`**.

```javascript
module.exports = {
    content: [
        './src/App.tsx',
        // ...
    ],
    // ...
};
```
