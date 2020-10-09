<?php


namespace Tests\Unit;

use App\User;
use Tests\TestCase;

class UserTest extends BaseTestCase
{
    /**
     * Test when adding a user
     *
     * @return void
     */
    public function testUserAddition()
    {
        // Given
        $userData = [
            'email' => 'testing@test.co',
            'username' => 'testing',
            'first_name' => 'test_first',
            'last_name' => 'test_last',
            'bio' => 'lorem ipsum',
            'password' => bcrypt('someRandomPassword'),
        ];
        // When
        User::create($userData);
        // Then
        $this->assertTrue(User::all()->count() == 3);
        $this->assertTrue(User::all()->last()->email == 'testing@test.co');
    }

    public function testUsersCount(){
        $usersCount = User::all()->count();
        $this->assertTrue($usersCount == 2);
    }


}
