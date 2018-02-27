---
title: Using Parse in Nativescript-vue
authors: [damain]
toc: true
---

We are accustomed to using firebase as a backend in our native apps, and that requires using the native sdk because the Javascript SDK does not work on native. But if we are using one codebase to deploy an app to web and native, we don't want to write our backend functions twice. Which as of February 2018 is the case. 

This brings us to Parse. [Parse](http://parseplatform.org/) was handed over to the open-source community by Facebook in 2016 and has a comparable feature set to firebase. And we can use the Parse Javascript SDK on native and web! 

Lets see how we use parse in nativescript-vue (it should also work in nativescript). I am going to assume the following:
* We are starting a new nativescript-vue project called `myApp` from scratch. 
* You have already signed up for a parse account at a hosting provider or created your own parse server on Heroku. If you dont have an account I would suggest [back4app.com](https://www.back4app.com) they have a generous free tier.

Lets jump into it.
Open terminal and enter the following to create a new nativescript vue app
```sh
$ tns create myApp --template nativescript-vue-template
```
Go into the app folder and install a few packages
```sh
$ cd myApp
$ npm install parse
$ npm install events
$ npm install nativescript-localstorage
```

In the `app.js` file we add the following at the top  
```js
require("nativescript-localstorage")
const Parse = require('parse')
Parse.initialize("your api key", "your javascript key")
Parse.serverURL="https://parseapi.back4app.com/"
```
You will find the API key and Javascript key in the server settings of the parse dashboard.
Please note that **you must use the javascript key it is not optional**.
That's all it took to get Parse working! But lets test it out.

To test it out we will add a textfield and a button to the template and save the text to the parse server when the save button is clicked.
```html
<Page class="page">
  <ActionBar class="action-bar" title="NativeScript-Vue"></ActionBar>
  <StackLayout class="p-20">
    <text-field v-model="firstname"/>
    <button text="save" @tap="savePost"/>
  </StackLayout>
</Page>
```

Add the firstname property to data 
```js
data(){
  return  {
    firstname:""
  }
}
```

Now we write the `savePost` method that is executed when the button is clicked
```js
methods:{
  savePost(){
    var People = Parse.Object.extend("People")
    var person = new People();
    person.set("firstname", this.firstname)
    person.save(null, {
      success(){
        console.log("sucessfully posted")
      },
      error(err){
        console.log("error", err.code)
      }
    })
  }
}
```

Now run lets run it
```sh
$ tns run android
```

Enter a name and click save 

Then go to your Parse dashboard you will see the new record added
