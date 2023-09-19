
# How to create Storybook App in MacOS

First install if yarn is not installed 
```
brew install yarn

```

Create a expo project by using yarn

```
yarn create expo-app -t expo-template-blank-typescript

```

Install storybook template

```
npx sb@latest init --type react_native 

```

To get last version of storybook , get metro.config.js with this command : 

```
npx expo customize metro.config.js

```

## To Run

```
yarn start 

```


## Add a component to story

To add a new component to story , Add the directory of new component  to **getStories** function inside **storybook.requires.js**





