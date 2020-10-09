<?php


namespace App\Services;


use App\Pin;


class SearchPinService
{
    public function search($query)
    {
          return Pin::where('note', 'LIKE', '%' . $query . '%')
            ->orWhere('color', 'LIKE', '%' . $query . '%')->get();
    }
}
