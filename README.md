# eslint-config-pinon

This package provides PinOn's .eslintrc for Javascript and Typescript as an extensible shared config.

Currently still work in progress.

## How to use
```
npm install --save-dev @pinon/tslint-config eslint-config-prettier eslint-plugin-prettier eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint prettier typescript
```

## Use with vscode eslint plugin
Add to your vscode's `setting.json`

```
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