# clock
clock - jQuery plugin

### html code:
```html
<div class="clock"></div>
```
### css code:
```css
.clock { position: relative;}
```
### js code:
```javascript
<script type="text/javascript" src="js/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="js/clock-1.1.0.js"></script>
<script>
    var clock = $(".clock").clock({
        width: 300,       // set width
        height: 450,      // set height
        theme: 't1',      // set theme  => 't1' 't2' 't3'
        date: new Date()  // set date => new Date()
    }),
    data = clock.data('clock');
    
    // data.pause();      
    
    // data.start();    
    
    // data.setTime(new Date());
    
</script>
```
