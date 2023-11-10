<?php

namespace Database\Seeders;

use App\Models\Media;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MediaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $mediaFiles = [
            [
                'user_id' => null,
                'receiver_id' => 2,
                'institution_id' => null,
                'path' => 'public/media/111083letter1.jpeg',
                'type' => 'letter',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => 2,
                'institution_id' => null,
                'path' => 'public/media/111083letter2.jpeg',
                'type' => 'letter',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => 2,
                'institution_id' => null,
                'path' => 'public/media/111083letter3.jpeg',
                'type' => 'letter',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => 2,
                'institution_id' => null,
                'path' => 'public/media/111083letter4.jpeg',
                'type' => 'letter',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => 3,
                'institution_id' => null,
                'path' => 'public/media/117032_profile_pic.jpeg',
                'type' => 'profile_pic',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => 3,
                'institution_id' => null,
                'path' => 'public/media/117032letter1.jpeg',
                'type' => 'letter',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => 3,
                'institution_id' => null,
                'path' => 'public/media/117032letter2.jpeg',
                'type' => 'letter',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 2,
                'path' => 'public/media/diskit_monks.jpeg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 2,
                'path' => 'public/media/diskit-300x225-2.jpg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 2,
                'path' => 'public/media/diskit-nubra.jpg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 2,
                'path' => 'public/media/diskit.jpeg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 2,
                'path' => 'public/media/diskit.jpg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 2,
                'path' => 'public/media/diskit.png',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => 1,
                'institution_id' => 1,
                'path' => 'public/media/LEV.jpeg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 1,
                'path' => 'public/media/LEV1.jpeg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 1,
                'path' => 'public/media/LEV2.jpeg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => 1,
                'receiver_id' => 2,
                'institution_id' => null,
                'path' => 'public/media/sponsorship_contract_111083.pdf',
                'type' => 'document',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => 2,
                'receiver_id' => 1,
                'institution_id' => null,
                'path' => 'public/media/Sponsorship_contract_117032.pdf',
                'type' => 'document',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => 1,
                'receiver_id' => 3,
                'institution_id' => null,
                'path' => 'public/media/sponsorship_contract_122058.pdf',
                'type' => 'document',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => 2,
                'institution_id' => null,
                'path' => 'public/media/Stanzin-Wangchuk_111083_profile_pic.jpeg',
                'type' => 'profile_pic',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => 2,
                'institution_id' => 2,
                'path' => 'public/media/Stanzin-Wangchuk-2-class-111083.jpg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 3,
                'path' => 'public/media/TCV.jpeg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 3,
                'path' => 'public/media/TCV1.jpeg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 3,
                'path' => 'public/media/TCV2.jpeg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 3,
                'path' => 'public/media/TCV3.jpeg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 3,
                'path' => 'public/media/TCV5.jpeg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 3,
                'path' => 'public/media/TCV6.jpeg',
                'type' => 'news',
                'headline' => "Winter school for little nomads in 2022",
                'description' => "All children should have access to quality education. That's our password. But studying in winter is not possible for the small nomads from the Changtang region high in the Himalayas. Moreover, the vast majority of their parents are illiterate, so practicing at home is out of the question.

                That is why for many years, together with the Swiss foundation Amma-la, we have been supporting winter education for almost 160 children aged 6-16. The school is divided into several classes, according to age and level of education. They learn together in small, easy-to-assemble wooden houses with plastic roofs and small stoves inside. The children have stationery, textbooks and notebooks, food and hot tea available. Support also covers teachers' salaries.
                
                During the summer visit, the director Karma Khetup also asked us for money for a new generator and projector, which will help to improve the quality of teaching. Together, we managed to buy both for CZK 22,915. Another CZK 45,879 covers school supplies, teachers' salaries and food for children.
                
                Together, we contributed CZK 68,794 to the little nomads.
                The winter school started on 18/12/2022 and will last until March. During this period, children improve in Tibetan, mathematics and other important subjects. But above all, and this is what Director Karma emphasizes every time we communicate: Education is a tool that breaks the vicious circle of poverty and ruin. He gives a chance. Thank you for that."
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 3,
                'path' => 'public/media/LEV_news1.jpeg',
                'type' => 'news',
                'headline' => 'A huge thank you from Ladakh',
                'description' => "We warmly greet MOST and all its supporters.

                On behalf of Chauntra Tibetan Settlement and Home for Tibetan Seniors, we would like to express our deepest gratitude and thanks to you and your organization for providing your kind support to the functioning of our Tibetan community. Your generosity is one of the reasons why we are able to provide better living conditions and medical care to our elderly women in nursing homes and Tibetan settlements. There are not enough words to express how our old people and we feel your undying support, you are the source of their joy and they are incredibly grateful that someone thinks of them, that someone cares about them. You are their hope and your presence, even from a distance, gives them energy. We want to thank you very much for all your help and annual care for our old ladies. I hope you receive this message in good health.
                
                This year we have a new case of an old woman who is currently facing financial difficulties. We have verified her case and vouch for its veracity. As a result, we again request your organization's kind assistance."
            ],
        ];

        foreach ($mediaFiles as $media) {
            Media::create($media);
        }
    }
}
