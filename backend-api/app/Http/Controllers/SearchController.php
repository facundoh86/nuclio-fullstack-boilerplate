<?php


namespace App\Http\Controllers;
use App\Services\SearchPinService;
use Illuminate\Support\Facades\Log;


class SearchController extends Controller
{
   protected $searchService;

   public function __construct(SearchPinService $searchPinService)
   {
       $this->searchService = $searchPinService;
   }

   public function search($query)
   {
       Log::info('Retriving all pins related to -> '.$query);
       $pins = $this->searchService->search($query);

       Log::info('Retriving query -> '. $pins);
       return response ()->json($pins);
   }
}
