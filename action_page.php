<!DOCTYPE html>
<html>
    <head>
        <link href="StyleSheet.css" rel="stylesheet" type="text/css">
    </head>

<body>

<div class="navbar">
    <a>brayCalc</a>
        <div class="links">
          <a href="index.html">Home</a>
          <a href="about.html">About Me</a>
          <a href="resume.html">Resume</a>
            <div class="dropdown">
            <div class="morelinks">Projects</div>
            <div class="dropdown-content">
                <a href="textadventure.html">Text Adventure</a>
                <a href="braycalc.html">brayCalc</a>
                <a href="#">Projects</a>
            </div>
        </div>
     </div>
 </div>

<form action="/action_page.php">
    Mass of Object 1 (M1)<br>
    <input type="text" name="m1" value="">
    <br>
    Velocity of Object 1 (V1)<br>
    <input type="text" name="v1" value="">
    <br>
    Mass of Object 2 (M2)
    <br>
    <input type="text" name="m2" value="">
    <br>
    Velocity of Object 2 (V2)<br>
    <input type="text" name="v2" value="">
    <br><br>
    <input type="submit" value="Submit">
    <input type="reset">
</form> 

<script>

var m1 = 2;
var v1 = 8;
var m2 = 4;
var v2 = -2;

var v1f = v1*((m1-m2)/(m1+m2))+v2*((2*m2)/(m1+m2));

var v2f = v2*((m2-m1)/(m1+m2))+v1*((2*m1)/(m1+m2));

alert("v1f = " + v1f + " v2f = " + v2f);

</script>

Testing <?php echo $_GET["m1"]; ?>

</body>
</html>