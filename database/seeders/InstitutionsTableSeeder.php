<?php

namespace Database\Seeders;

use App\Models\Institution;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class InstitutionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $institutions = [
            [
                'name' => 'Ladakh exile villages',
                'VS_institution' => 122,
                'location' => 'Ladakh, India',
                'about' => "Tibetan exile villages in Ladakh in the area called Tibetan Settlement Sonamling have been involved in the Adoption project since 2008. Thanks to donors, the poorest seniors and poor families deep in the mountains are supported.

                A total of 25 Tibetan exile villages are scattered in the Indian Himalayas of Ladakh. Both Tibetans who fled Tibet after 1960 and those who were born in exile in India live here. Each of the Tibetan territorial areas in India is administered by its own administrative unit, the Central Representative Office - CRO, which falls under the Home Department within the Tibetan Government-in-Exile (Central Tibetan Administration).
                
                In cooperation with CRO and together with our long-time friends, we verify the situation of each supported elderly person or family. We want to be sure that we are really supporting those most in need.
                
                In cooperation with the Health Department, we also deal with the health needs of the elderly and residents of the area. Fifteen years ago, we financed the creation of several water pumps that distributed water to local campsites. In recent years, we have focused on the purchase of compensatory aids, wheelchairs, walking sticks and mattresses.",
                'type' => 'other'
            ],
            [
                'name' => 'Diskit Monastery',
                'VS_institution' => 111,
                'location' => 'Nubra Valley, Ladakh, India',
                'about' => "Diskit Monastery forms a dominant feature of the northern vast Nubra Valley in Ladakh, India. The road to the monastery leads over the highest passable saddle in the world, Kardung la. The monastery is situated on a rock, below it is a 32 meter high statue of the future Maitreya Buddha. The convent school, classrooms and kitchen for young students are located under the statue. It is this school for children from 1st to 5th grade that is the subject of our support.

                The monastery was founded in 1463 by a follower of the Gelugpa school, Šerab Zangpa, on the site of the former royal seat of the local ruler from the 12th century. Formally, the monastery is subordinate to the central Thikse monastery. Diskit is home to about a hundred monks.
                
                The main building of the monastery is situated on a rock, which is separated from the rest of the mountain massif by a steep ravine. The water source flowing from it was carried by monks up a steep wooden staircase to the monastery for centuries. Today, the monastery is supplied with water using pumps.
                
                It is the largest monastery in the Nubra Valley, which also offers traditional education for local children. In recent years, it has become more and more a destination for tourists. In 2016-2017, the monastery expanded its facilities with accommodation facilities, a restaurant and a small shop. In 2017, HH Dalai Lama's teachings were held here for 50 thousand people.
                
                Diskit Convent School
                The monastery school and its classrooms are located in the same building as the accommodation for the junior monks. Both traditional (Buddhist philosophy, Tibetan language, prayers) and modern (Hindi, mathematics, English, to a limited extent IT) teaching takes place here.",
                'type' => 'other'
            ],
            [
                'name' => 'Tibetan Children Village',
                'VS_institution' => 117,
                'location' => 'Dharamshala region, Himachal Pradesh, India',
                'about' => "The Tibetan Children Village Network (TCV) is a non-governmental charitable organization that provides a home and education in a network of SOS villages across India for more than 15,000 Tibetan children. From its humble beginnings 62 years ago, TCV has become a thriving educational community for Tibetan children in exile. In the 1960s, it established branches in India, stretching from Ladakh in the north of India to Bylakuppe in the south.

                TCV's mission is to ensure that all Tibetan children in its care receive proper modern and traditional education in a family environment. It advocates very well for a strong cultural identity of children, leads them to independence and teaches them to benefit the wider community.
                
                TCV is among the best schools in the entire network of exile villages. They are located in remote border areas or also in the south of India. We focus on three branches. In recent years, it has been ranked among the best schools in Himachal Pradesh 3 times in a row. Thanks to the high-quality preparation, many students continue their studies at universities. The curriculum is the same in all TCV branches. They focus on 5 main subjects, the emphasis is on languages. Before classes start and in the afternoon from 5 p.m., there are prayers that were specially selected and composed by the Dalai Lama for TCV. The form of debate was included in the teaching and is incorporated into all subjects - it develops critical thinking and logic. 60% of TCV employees are former TCV students.",
                'type' => 'other'
            ],
            [
                'name' => 'MOST ProTibet',
                'VS_institution' => null,
                'location' => null,
                'type' => 'most'
            ]
        ];

        foreach ($institutions as $institution) {
            Institution::create($institution);
        }
    }
}
