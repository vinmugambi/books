@extends('layouts.default')

@section('content')
<div class="container flex mx-auto justify-center">
    <div class="max-w-md">
        <router-link to="/books/add" class="block text-white bg-blue-500">New book +</router-link>
        <router-view></router-view>
    </div>
</div>
@endsection