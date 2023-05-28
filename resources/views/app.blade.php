<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link
        rel="stylesheet"
        href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap"
    />
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />


    <!-- Scripts -->
    @viteReactRefresh
    @vite(['resources/js/app.tsx'])
</head>
<body class="font-sans antialiased">
<div id="root"></div>
</body>
</html>
