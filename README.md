# FutureFile
<b>FutureSight</b>, our sister application, is a mobile app designed for students to conveniently store all their school-related information in an intuitive manner.  

<b>FutureFile</b> is the accompanying website that facilitates seamless data sharing among users. Each FutureSight user is assigned a unique user id and you can use it to share your profile. 
The <b>FutureFile</b> website dynamically generates user profiles, complete with an auto-updating bio, as users fill out their information on the mobile app. It's important to note that while <b>FutureFile</b> serves as a platform to view user data, any edits or updates must be made within the <b>FutureSight</b> mobile app.

## Documentation
- [Routes](#routes)
- [Components](#components)
    - [DataSection](#datasection)
    - [DataDisplay](#datadisplay)
    - [IterableList](#iterablelist)
    - [LoadingSpinner](#loadingspinner)
- [Dependencies](#dependencies)
  - [firebase](https://www.npmjs.com/package/firebase) (Our database)
  - [react](https://reactjs.org/) (Framework)
  - [react-router-dom](https://reactrouter.com/web/guides/quick-start) (App router)
  - [TailwindCSS](https://tailwindcss.com) (CSS Library)
  - [DaisyUI](https://daisyui.com/) (Tailwind UI Plugin)

## Routes
- <code>/</code>: Displays an input box for a FutureSight id to search for a profile
- <code>/:id</code>: Displays the user profile associated with the id

## Components
<p>This is documentation of the components used on the app.</p>

<!-- * ---------------------------- DATA SECTION ----------------------------- * -->

## DataSection
<p>Renders a main section that calls the other components, <b>this is the only component you should have to call.</b></p>

`sectionParams` is an object that contains an id, dataHeader, and items.
- <b>id:</b> is a random, but unique, string of numbers.
- <b>dataHeader:</b> is a string that will be the header of the section.
- <b>items:</b> is an array that contains objects with one element, where the key is a string.

### Section params
```javascript
{
    id: random Number,
    dataHeader: "Section Title" String,
    items: [
        { "Elements name 1": String },
        { "Elements name 2": Array },
        { "Elements name 3": Object, (must contain "id" key) },
    ]
}
```

### Usage
```javascript 
import DataSection from "@/src/components/DataSection"

<DataSection params={sectionParams} key={sectionParams.id} />
```

<!-- * ---------------------------- DISPLAY DATA ----------------------------- * -->

## DataDisplay
<p>Renders a different component depending on the data.</p>
<p>It chooses what component to render based off if an object is iterable.</p>
<p>If the input is iterable it calls <code>IterableList</code> component with the input.</p>
<p>If the input does not contain any values it returns <code>Null</code>. (some of the <code>userData</code> elements may be undefined)</p>
<p>Otherwise if its a string, it renders the default state of just a <code>key: value</code> container. </p>

### Input params
`DisplayParams` is an object containing a key and either an <code>Array</code> OR <code>String</code> 

```javascript
{
    key: "Title for information",
    items: [
        { "Elements name 1": String },
        { "Elements name 2": Array },
        { "Elements name 3": Object (must contain "id" key) },
    ]
}
```

### Usage
```javascript 
import DataDisplay from "@/src/components/DataDisplay"

<DataDisplay params={DisplayParams} />
```
<!-- * ---------------------------- ITERABLE LIST ---------------------------- * -->

## IterableList
<p>Renders a collapse menu by iterating over the items array.</p>
<p>The array you pass in <b>MUST</b> contain only <b>1</b> key-value pair</p>

### Input params
`listParams` is an object containing key and items.
- <b>key:</b> The name of the list to be displayed.
- <b>items:</b> Array of all the items you want to display.

```javascript
{
    key: "Name of list",
    items: [
        { "Elements name 1": String },
        { "Elements name 2": String },
        { "Elements name 3": String },
    ]
}
```

### Usage
```javascript 
import IterableList from "@/src/components/IterableList"

<IterableList params={listParams} />
```

<!-- * --------------------------- LOADING SPINNER --------------------------- * -->

## LoadingSpinner
<p>The loading spinner is a component created by Daisy Ui, https://daisyui.com/components/loading/#loading-infinity</p>

### Usage
```javascript 
import LoadingSpinner from '@/src/components/LoadingSpinner'

<LoadingSpinner />
```



## Conclusion
FutureFile is a comprehensive web application for viewing profile information on a browser for the app FutureSight.

