<?php

namespace Database\Seeders;

use App\Models\Receiver;
use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ReceiversTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $receivers = [
            [
                'user_id' => 2,
                'institution_id' => 3,
                'name' => 'Tenzin Rangdol',
                'VS_receiver' => 117032,
                'institution' => 'Tibetan Children Village',
                'dob' => Carbon::parse('2010-06-20'),
                'about' => "Tashi Delek,
                my name is Tenzin Rangdol and I was born on July 20, 2010 in the town of Tuting in Arunachal Pradesh, North East India. My dad's name is Sangye Dhondup and he runs a small street tea stall outside the market in Tuting. Dechen Wangmo's mom is a housewife, she can't work because of her health.
                We lived a simple country life, but it became increasingly difficult for my father to earn enough money selling tea to support us, let alone send me to school. That's why he asked for my admission to TCV, where they provide free education. 
                
                At TCV, after a short interview, they told me that I was a smart and bright boy and they accepted me immediately. It was in March 2017, when I was less than 7 years old. Since I had not attended any school before, I initially entered kindergarten and then continued through the first years of a 12-year school.

                I am very happy that I can study here. I found a lot of friends here, with whom I really like to spend my time. The teacher says that I am a very friendly and active boy. I enjoy social studies the most at school. My favorite color is light blue and I'm happiest when I have lentils with rice for dinner."
            ],
            [
                'user_id' => 1,
                'institution_id' => 2,
                'name' => 'Stanzin Wangchuk',
                'VS_receiver' => 111083,
                'institution' => 'Diskit Monastery',
                'dob' => Carbon::parse('2014-06-11'),
                'about' => "Tashi delek,

                my name is Stanzin Wangchuk, I was born in the village of Julkam on June 11, 2014. My older brother lives here with his parents and goes to a regular school. The mother is a housewife and the father is a shepherd.
                
                I joined the school at the end of 2021. My favorite subject is math and in my free time I enjoy cricket the most. My favorite food is momo dumplings. When I grow up, I want to be a geshe."
            ],
            [
                'user_id' => 1,
                'institution_id' => 1,
                'name' => 'Dorjee Nisher',
                'VS_receiver' => 122058,
                'institution' => 'Ladakh exile villages',
                'dob' => Carbon::parse('1946-06-11'),
                'about' => "Tashi Delek,

                my name is Dorjee Nisher and I was born in 1946. I was brought up in a nomadic way of life, I keep goats and live off their milk and hair. Now my herd numbers 50 goats. My brother and I married one woman, it's our traditional way of life so that we don't divide the property and to be able to support the family. One of our sons works as a driver. I worked as a cook for the local TCV school in Sumdho. But now I'm too old for this job. My brother and wife are already in poor health, so they can't do any demanding work either."
            ]
        ]; 
    
            foreach ($receivers as $receiver) {
                Receiver::create($receiver);
            }
    }
}
