
# Vite + React + TypeScript Template

Quick starter Vite + React + TS template

## Initial Template Setup (This is already done)

To setup the same template you can follow this section, this is already done so you do not need to do this. To run the template go to the next section.
```
> npm create vite@latest // you will be prompted for project name & template
> cd YOURPROJECTNAME
> npm i
> npm i vite-tsconfig-paths //This will create the vite.config.ts file
```
Then open ```vite.config.ts``` file and import ```import tsconfigPaths from 'vite-tsconfig-paths'``` and add ```tsconfigPaths(),``` under ```plugins: [``` in the file.

Now you can add your paths to ```tsconfig.app.json``` like so:
```
"paths": {
      "@/*": [
        "./src/*"
      ],
      "components/*": ["./src/components/*"],
    },
```

This will allow you to use import paths such as ```import Navbar from '@/components/Navbar'```

## Running project
```
> npm i
> npm run dev
```
Then you can view the template on ```http://localhost:5174/```.
