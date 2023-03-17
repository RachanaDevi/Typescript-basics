### Install typescript
npm i -g typescript

### Check typescript version
tsc -v

### Execute a typescript file
tsc index.ts

### Typescript compiler configuring
tsc --init
Which creates tscfonig.json
important configurations:
target: ES2016 (the compiler of JS)
module: commonjs
rootDir: the path which contains your typescript files
outDir: the directory which will contain javascript files
removeComments: the typescript code will remove comments in the comiled js file
noEmitOnError: if there is any error on js file will be created

Then you can just run `tsc` and no need to mention `tsc index.ts`

### Debugging typescript applications
enable sourceMapUrl for debugging and then in VSCODE click on run and debug and it will create a launch.json file
You have to add a setting to use typescript compiler to build the configuration file
"preLaunchTask": "tsc: build - tsconfig.json"
"preLaunchTask": "tsc build - hello-world/tsconfig.json",
