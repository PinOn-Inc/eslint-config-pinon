# eslint-config-pinon

This package provides PinOn's .eslintrc for Javascript and Typescript as an extensible shared config.

Currently still work in progress.

## How to use
Install with npm
```
npm install --save-dev @pinon/eslint-config eslint-config-prettier eslint-plugin-prettier eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint prettier typescript
```

Create `.eslint.json` in your root project folder
```json
{
  "extends": "@pinon/eslint-config"
}
```

## Use with VSCode ESlint plugin
Add to your VSCode's `setting.json`

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.tslint": true
  },
  "eslint.autoFixOnSave": true,
  "eslint.provideLintTask": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ],
}
```

If you have already enabled the auto format on save function in VSCode, you need add the following setting to prevent auto format twice.

```json
{
  "editor.formatOnSave": true,
  "[javascript]": {
    "editor.formatOnSave": false,
  },
  "[javascriptreact]": {
    "editor.formatOnSave": false,
  },
  "[typescript]": {
    "editor.formatOnSave": false,
  },
  "[typescriptreact]": {
    "editor.formatOnSave": false,
  },
}
```