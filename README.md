# vue-directive-ellipsis
a ellipsis tooltip show with popper.js ,is a vue directive plugin,
It can appear ellipsis according to the content width, and tooltip can appear when ellipsis appears, 
prompt for complete information

# How to Use
## example
you can open index.html with browser, then change the browser viewport width, then you can see the change.
Move the mouse into the text, you can see the tooltip

## installation
```
    npm install vue-directive-ellipsis -D
```

## registered
```javascript
    import Vue from 'vue';
    import Ellipsis from 'vue-directive-ellipsis';
    import 'vue-directive-ellipsis/dist/ellipsis.umd.css';

    Vue.directive('ellipsis', Ellipsis);
```
## use
```html
    <div id="app" v-ellipsis:bottom="message">
        {{ message }}
    </div>
```
```javascript
    // this is (demo code)
    export default {
        data(){
            return {
                message: 'Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!Hello Vue!'
            }
        }
    }
```

## explanation
There are the following values with directive arg:
    'top','topstart','topend','left','leftstart','leftend',
    'bottom','bottomstart','bottomend','right','rightstart','rightend'

directive value can bind your variable, and can change as your variable value changes

