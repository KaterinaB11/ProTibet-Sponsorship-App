<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ProTibet Sponsorship App</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,100;1,300;1,900&display=swap" rel="stylesheet">
    @vite(['resources/css/app.scss'])
        <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body>
    <div id="main-app"></div>
    @viteReactRefresh
    @vite('resources/js/main_app.jsx')
</body>
</html>