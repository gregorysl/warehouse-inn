Application to parse input data about item stock and warehouses they are contained in.

## Parsing rules

- lines starting with `#` should be ignored
- all lines except ignored are properly formatted
- good line format `FabricName;FabricID;WarehouseName,Count|WarehouseName,Count`
- all fabrics are available in at least one warehouse

## Example

### Input

```
# Material inventory initial state as of Jan 01 2018
# New materials
Cherry Hardwood Arched Door - PS;COM-100001;WH-A,5|WH-B,10
Maple Dovetail Drawerbox;COM-124047;WH-A,15
Generic Wire Pull;COM-123906c;WH-A,10|WH-B,6|WH-C,2
Yankee Hardware 110 Deg. Hinge;COM-123908;WH-A,10|WH-B,11
# Existing materials, restocked
Hdw Accuride CB0115-CASSRC - Locking Handle Kit - Black;CB0115-CASSRC;WH-C,13|WH-B,5
Veneer - Charter Industries - 3M Adhesive Backed - Cherry 10mm - Paper Back;3M Cherry-10mm;WH-A,10|WH-B,1
Veneer - Cherry Rotary 1 FSC;COM-123823;WH-C,10
MDF, CARB2, 1 1/8';COM-101734;WH-C,8
```

### Output

```
WH-A (total: 50)
3M Cherry-10mm: 10
COM-100001: 5
COM-123906c: 10
COM-123908: 10
COM-124047: 15

WH-C (total: 33)
CB0115-CASSRC: 13
COM-101734: 8
COM-123823: 10
COM-123906c: 2

WH-B (total: 33)
3M Cherry-10mm: 1
CB0115-CASSRC: 5
COM-100001: 10
COM-123906c: 6
COM-123908: 11
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
