<script>
const Vue = require("./nativescript-vue");

new Vue({
    template: `
        <AbsoluteLayout backgroundColor="#3c495e">
            <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#43b883"/>
            <Label text="120,10" left="120" top="10" width="100" height="100" backgroundColor="#43b883"/>
            <Label text="10,120" left="10" top="120" width="100" height="100" backgroundColor="#43b883"/>
            <Label text="120,120" left="120" top="120" width="100" height="100" backgroundColor="#43b883"/>
        </AbsoluteLayout>
    `,
}).$start();
</script>

<style>
/*
In NativeScript, the app.css file is where you place CSS rules that
you would like to apply to your entire application. Check out
http://docs.nativescript.org/ui/styling for a full list of the CSS
selectors and properties you can use to style UI components.

/*
In many cases you may want to use the NativeScript core theme instead
of writing your own CSS rules. For a full list of class names in the theme
refer to http://docs.nativescript.org/ui/theme.
The imported CSS rules must precede all other types of rules.
*/
@import 'nativescript-theme-core/css/core.light.css';

label {
    font-size: 15;
    padding: 10;
    color: white;
}
</style>