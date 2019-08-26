# بسم الله الرحمن الرحيم

## Lab-02

### Home Page with Simple Website Navigation

![](imgs/02.png)

- Data

```html
<header>
<h1>Microgrid Development in Lawrence KS</h1>
<nav>
<u1>
<li><a href="electricPowerHistory.html">Electric Power History</a>
</li>
<li><a href="lawrenceHydropower.html">Lawrence Hydropower</a></li>
<li><a href="index.html"><strong>Area Description</strong></a>
</li>
<li><a href="microgridPossibilities.html">Microgrid Possibilities
</a></li>
<li><a href="typicalProperty.html">Typical Property</a></li>
<li><a href="localEnergy.html">Local Energy</a></li>
<li><a href="#">Collector Performance</a></li>
<li><a href="#">Electric Power Services</a></li>
<li><a href="#">Downtown Properties</a></li>
<li><a href="#">Solar Shadowing</a></li>
</u1>
</nav>
</header>
```

- Solution

```css
/* Rules for interpage navigation */
nav u1 {
list-style-type: none;
text-align: center;
padding-left: 0px;
}
nav li {
display: inline-block;
padding: 0px 4px 2px 4px;
margin: 2px 4px 2px 4px;
background-color: lightgoldenrodyellow;
border: outset;
border-color: lightgreen;
}
nav a {text-decoration: none;}
```