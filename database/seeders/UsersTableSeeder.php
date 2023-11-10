<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $users = [
        [
            'username' => 'kaciTest',
            'password' => bcrypt('ahoj123'),
            'first_name' => 'Katerina',
            'last_name' => 'Bouchalova',
            'email' => 'kaci@seznam.cz',
            'type' => 'sponsor',
        ],
        [
            'username' => 'RomanTest',
            'password' => bcrypt('ahoj123'),
            'first_name' => 'Roman',
            'last_name' => 'Novak',
            'email' => 'roman@seznam.cz',
            'type' => 'sponsor',
        ],
        [
            'username' => 'ZuzkaTest',
            'password' => bcrypt('ahoj123'),
            'first_name' => 'Zuzana',
            'last_name' => 'Kikova',
            'email' => 'zuzka@seznam.cz',
            'type' => 'admin',
        ]
    ]; 

        foreach ($users as $user) {
            User::create($user);
        }
    }
}
