# Experiment

## Qucik start

1. Install nvm / node (ver. 18)
2. (If you use nvm) Switch nvm to correct version of node (specified in `.nvrmc`)
3. Run `yarn` or `npm` to install deps
4. Start developing
   `npx parcel src/YOUR_EXPERIMENT_MODULE/index.js`  - to start dev server for experiment

## Create new experiment

1. Create new folder in `src` dir with name of your module. You can copy `src/_Template` as starting point for your experiment. Experiment module require only `index.js|ts|tsx` file
2. Run  dev server to compile code:

```bash
npx parcel src/YOUR_EXPERIMENT_MODULE/index.js
```

3. Open `http://localhost:1234/index.js`, you will see compiled code of your experiment

## Preview experiment in fandom websites

1. Install  [Requestly plugin](https://requestly.io/)  to your browser
2. Replace `pathfinder.js` with `http://localhost:1234/index.js`, configuration steps:
    1. Create new **Redirect request**
    2. **If request**: *URL > Contains >* `pathfinder.js`
    3. **Redirect to**: URL `http://localhost:1234/index.js`
3. Open any fandom website to verify changes
4. After make changes in your code, you need to reload page
