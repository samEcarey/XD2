# Naming files

## React Smart/Data/Logic component

module.jsx

- lowercase files with dashes as separators, with .jsx extension
- Has state or context
- manipulate data,
- connect to Redux or Context
- deal with user interaction
- try to keep all JavaScript logic in its own file (Hooks or js file)
- components that have to manipulate data should hand that data off to some JavaScript that can manipulate it. By doing this, the manipulation code can be tested separately from React

## React Dumb Component

App.jsx, WorkHeader.jsx -

- Capitalized, Camal case/Pascal Case, with .jsx extension
- Stateless component
- Could be compound component <Container.Workspace><Grid.Workspace>
- Design/Layout component
- Component that is just passed props and displays data

## React Design Component

Style.js

- Capitalized, Camal case, with .js extension
- pure styled-component
- Could be one component with extended components in same or separate files
- Styled-Component that hold styles and logic

## Pure javascript component

javascript.js

- non-React components
- example: local-storage

# Folder Sturcture

## Principles

- Avoid default export

/config

- Routing
- Static Navigation (or temp)
  /core
- Highly reusable components
- generic and very reusable
