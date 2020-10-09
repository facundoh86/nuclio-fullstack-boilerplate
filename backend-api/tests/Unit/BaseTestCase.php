<?php

namespace Tests\Unit;
namespace Tests\Unit;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\DB;
use Tests\CreatesApplication;
use Tests\TestCase;

abstract class BaseTestCase extends TestCase
{
    use CreatesApplication;
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();
        DB::unprepared(file_get_contents(database_path('/scripts/001_create_users.sql')));
        DB::unprepared(file_get_contents(database_path('/scripts/002_create_boards.sql')));
        DB::unprepared(file_get_contents(database_path('/scripts/003_create_pins.sql')));
        DB::unprepared(file_get_contents(database_path('/scripts/004_seed_data.sql')));
    }
}
