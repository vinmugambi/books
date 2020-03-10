@extends('layouts.default')

@section('content')
<div class="container">
    {{-- <example-component/> --}}
    <router-link to="/book/1" class="block text-white">See book 1</router-link>
    <router-view></router-view>
</div>
@endsection