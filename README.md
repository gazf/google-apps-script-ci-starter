# google-apps-script-ci-starter
Deploy the Google Apps Script by CI (wercker)

## How to use?
### local: Create `.clasprc.json`
```
npm install -g @google/clasp
clasp login
cat ~/.clasprc.json
```

### wercker: Add Environment
|key|value|
|---|---|
|`CLASPRC_JSON`|Inside of .clasprc.json|
|`CLASP_JSON`|`{"scriptId": "<your script id>","rootDir":"gas"}`|

## Edit /gas/source/index.js
Add your code here.

## CAUTION!
All existing scripts are deleted or overwritten.
