<?php


namespace App\Providers;


use App\Services\SearchPinService;
use Illuminate\Support\ServiceProvider;

class SearchPinServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(SearchPinService::class, function ($app){
            return new SearchPinService();
        });

        //$this->app->singleton(SearchPinService::class, function ($app){
         //   return new SearchPinService();
        //});
    }
}
