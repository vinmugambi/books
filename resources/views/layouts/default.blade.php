<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Simple Blog') }}</title>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <!-- navbar -->
    <nav id="nav" class="bg-purple-700 text-white">
        <div class="container mx-auto flex items-center justify-between py-4">
            <div class="logo flex">
                <img src="/img/logo.svg" alt="logo">
            </div>
            <div class="nav-links">
                <a class="mr-2" href="/">Home</a> |
                <a class="ml-2" href="/about">About</a>
            </div>
        </div>
    </nav>
    <!-- content -->
    @yield('content')
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
</body>

</html>