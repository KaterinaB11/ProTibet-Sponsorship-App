<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ProTibet Sponsorship App</title>
    @vite(['resources/css/app.scss'])
        <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body>
    <div id="main-app"></div>
    @viteReactRefresh
    @vite('resources/js/main_app.jsx')
</body>
</html>