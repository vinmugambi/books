@extends('layouts.default')

@section('content')
<div class="container">
    {{-- <example-component/> --}}
    <router-link to="/books/create" class="block text-white bg-blue-500">New book +</router-link>
    <router-view></router-view>
</div>
@endsection