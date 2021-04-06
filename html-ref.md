<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
        .circle {
            background-color: red;
            position: absolute;
            border-radius: 50px;
            width: 100px;
            height : 100px;
        }

        .circle-left {
            top: 100px;
            left: 90px;
        }

        .circle-right {
            top: 100px;
            left: 160px;
        }

        .square {
            background-color: red;
            width: 100px;
            height: 100px;
            position: absolute;
            top: 135px;
            left: 125px;
            transform: rotate(-45deg);
        }
    </style>

    <title>hearts</title>

</head>
<body>
    <div id="root">
        <div class="circle circle-left"></div>
        <div class="circle circle-right"></div>
        <div class="square"></div>
    </div>
</body>
</html>
