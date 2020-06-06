---
title: Using Parse in NativeScript-Vue
authors: [damain]
toc: true
intro: We are accustomed to using firebase as a backend in our native apps, and that requires using the native SDK because the JavaScript SDK does not work on native. But if we are using one codebase to deploy an app to web and native, we don't want to write our backend functions twice.
---

We are accustomed to using firebase as a backend in our native apps, and that requires using the native SDK because the JavaScript SDK does not work on native. But if we are using one codebase to deploy an app to web and native, we don't want to write our backend functions twice. Which as of February 2018 is the case. 

This brings us to Parse. [Parse](http://parseplatform.org/) was handed over to the open-source community by Facebook in 2016 and has a comparable feature set to Firebase. And we can use the Parse JavaScript SDK on native and web! 

Lets see how we use Parse in NativeScript-Vue (it should also work in NativeScript). I am going to assume the following:
* We are starting a new NativeScript-Vue project called `myApp` from scratch. 
* You have already signed up for a Parse account at a hosting provider or created your own parse server on Heroku. If you don't have an account I would suggest [back4app.com](https://www.back4app.com) they have a generous free tier.

Lets jump into it.
Open terminal and enter the following to create a new NativeScript-Vue app
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
You will find the API key and JavaScript key in the server settings of the Parse dashboard.
Please note that **you must use the JavaScript key it is not optional**.
That's all it took to get Parse working! But lets test it out.

To test it out we will add a textfield and a button to the template and save the text to the Parse server when the save button is clicked.
```html
<Page class="page">
  <ActionBar class="action-bar" title="NativeScript-Vue" />
  <StackLayout class="p-20">
    <TextField v-model="firstname" />
    <Button text="Save" @tap="savePost" />
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
    const People = Parse.Object.extend("People")
    const person = new People();
    
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
# or 
$ tns run ios
```

Enter a name and click save, then go to your Parse dashboard you will see the new record added.

It's that easy!

