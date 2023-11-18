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
                'name' => null,
                'path' => 'media/111083letter1.jpeg',
                'type' => 'letter',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => 2,
                'institution_id' => null,
                'path' => 'media/111083letter2.jpeg',
                'type' => 'letter',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => 2,
                'institution_id' => null,
                'path' => 'media/111083letter3.jpeg',
                'type' => 'letter',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => 2,
                'institution_id' => null,
                'path' => 'media/111083letter4.jpeg',
                'type' => 'letter',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => 1,
                'institution_id' => null,
                'path' => 'media/117032_profile_pic.jpeg',
                'type' => 'profile_pic',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => 1,
                'institution_id' => null,
                'path' => 'media/117032letter1.jpeg',
                'type' => 'letter',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => 1,
                'institution_id' => null,
                'path' => 'media/117032letter2.jpeg',
                'type' => 'letter',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => 3,
                'institution_id' => null,
                'path' => 'media/122058-Dorje-Nishar.jpeg',
                'type' => 'profile_pic',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 2,
                'path' => 'media/diskit_monks.jpeg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 2,
                'path' => 'media/diskit-300x225-2.jpg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 2,
                'path' => 'media/diskit-nubra.jpg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => 2,
                'institution_id' => 2,
                'path' => 'media/diskit.jpeg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 2,
                'path' => 'media/diskit.jpg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => 2,
                'institution_id' => 2,
                'path' => 'media/diskit.png',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => 2,
                'institution_id' => 2,
                'name' => 'Bylo to neuvěřitelné, byl to sen, bylo to krásné.Nepopsatelná prostornost a prolínání barev hor okolo ve mně vyvolávaly směsici slz i smíchu a v hlavě mi jelo jako kolovrátek, že tohle není možné… Ale bylo a bylo toho možného hodně.',
                'path' => 'media/india-0116.jpg',
                'type' => 'news',
                'headline' => 'Monks sending prayers on a special holidays',
                'description' => 'Kopce pokryté drobnými kvítky, které tvořily velké fialové koberce všude okolo, byly jako dokonalé kulisy nějaké kouzelné planety. Nomádský stan, v němž bublá na ohni mléčný čaj, se pro mě dodnes pojí s pocitem svobody a domova, kde by moje duše chtěla zůstat. Pokorní lidé z vesnice, kteří v těchto kopcích čekali shromážděni, aby nám vyjádřili svou vděčnost, i když nemluvili naším jazykem, ve mě zanechali tak hluboký záchvěv dojetí, který bohužel nedokážu předat slovy… Malé děti v nomádské škole, které navzájem spolupracují, pomáhají si, a když je máte možnost pozorovat z povzdáli, máte pocit, že je kolem nich jemná aura harmonie a radosti… Je to jiný svět.

                Noční nebe s miliony hvězd a mléčnou dráhou nad našimi hlavami, vrcholky Himálaje pokryté sněhem, ozářené ranním vycházejícím sluncem a potom Henle… Nomádská osada Henle, ještě loni nepřístupná turistům. Dodnes pořádně nevím proč, ale když nám cestou náš milý průvodce vysvětlil, že byla uzavřena z bezpečnostních důvodů, protože Tibet je odsud váženě jen kousek, tekly mi slzy…Tibet, kde se v tomhle životě nikdy nepodívám, byl za kopcem a moje srdce se podivně chvělo.'
            ],
            [
                'user_id' => null,
                'receiver_id' => 1,
                'institution_id' => 3,
                'path' => 'media/india-0190.jpg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 4,
                'name' => 'Velmi si vážíme osobních setkání, kde můžeme zprostředkovat příběhy o životě lidí z Himálaje, kterým se snažíme pomáhat. Naši zkušenost Vám rádi předáme při příležitosti setkání dárců a podporovatelů. Setkání je určeno i pro veřejnost.',
                'path' => 'media/india-0248.jpg',
                'type' => 'news',
                'headline' => 'Setkání dárců a podporovatelů Liberec a Brno
                ',
                'description' => 'Setkání dárců v Liberci
                dne 5.10.2023 - 17-19 hodin
                
                Cestovatelská přednáška o životě tibetských nomádů v exilu, exilových kempech v Lhadaku a exilových školách s Janou Neborákovou Ďáskovou Vás provede vysokohorskými oblastmi indického Himálaje.
                
                Začátek přednášky bude v 17h. Podpořit aktivity můžete také zakoupením drobností v benefičním obchůdku a dozvíte se také co je to tsampa a proč Tibeťanům tak chutná.
                
                Místo konání:
                
                https://maps.app.goo.gl/JGXSiqPnTgNqXV1x7
                Setkání dárců v Brně
dne 26.10.2023 - 17-19 hodin

Cestovatelská přednáška o životě tibetských nomádů v exilu, exilových kempech v Lhadaku a exilových školách s Janou Neborákovou Ďáskovou Vás provede vysokohorskými oblastmi indického Himálaje.

Začátek přednášky bude v 17h. Podpořit aktivity můžete také zakoupením drobností v benefičním obchůdku a dozvíte se také co je to tsampa a proč Tibeťanům tak chutná.

Místo konání:

https://maps.app.goo.gl/JGXSiqPnTgNqXV1x7

'
            ],
            [
                'user_id' => null,
                'receiver_id' => 2,
                'institution_id' => 2,
                'path' => 'media/india-1712.jpg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => 3,
                'institution_id' => 1,
                'path' => 'media/LEV.jpeg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 1,
                'path' => 'media/LEV1.jpeg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 1,
                'path' => 'media/LEV2.jpeg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => 1,
                'receiver_id' => 2,
                'institution_id' => null,
                'path' => 'media/sponsorship_contract_111083.pdf',
                'type' => 'document',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => 2,
                'receiver_id' => 1,
                'institution_id' => null,
                'path' => 'media/Sponsorship_contract_117032.pdf',
                'type' => 'document',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => 1,
                'receiver_id' => 3,
                'institution_id' => null,
                'path' => 'media/sponsorship_contract_122058.pdf',
                'type' => 'document',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => 2,
                'institution_id' => null,
                'path' => 'media/Stanzin-Wangchuk_111083_profile_pic.jpeg',
                'type' => 'profile_pic',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => 2,
                'institution_id' => 2,
                'path' => 'media/Stanzin-Wangchuk-2-class-111083.jpg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 3,
                'path' => 'media/TCV.jpeg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 3,
                'path' => 'media/TCV1.jpeg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 3,
                'path' => 'media/TCV2.jpeg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 3,
                'path' => 'media/TCV3.jpeg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 3,
                'path' => 'media/TCV5.jpeg',
                'type' => 'gallery',
                'headline' => null,
                'description' => null
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 3,
                'name' => "All children should have access to quality education. That's our password. But studying in winter is not possible for the small nomads from the Changtang region high in the Himalayas.",
                'path' => 'media/TCV6.jpeg',
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
                'institution_id' => 1,
                'name' => "Your generosity is one of the reasons why we are able to provide better living conditions and medical care to our elderly women in nursing homes and Tibetan settlements.",
                'path' => 'media/LEV_news1.jpeg',
                'type' => 'news',
                'headline' => 'A huge thank you from Ladakh',
                'description' => "We warmly greet MOST and all its supporters.

                On behalf of Chauntra Tibetan Settlement and Home for Tibetan Seniors, we would like to express our deepest gratitude and thanks to you and your organization for providing your kind support to the functioning of our Tibetan community. Your generosity is one of the reasons why we are able to provide better living conditions and medical care to our elderly women in nursing homes and Tibetan settlements. There are not enough words to express how our old people and we feel your undying support, you are the source of their joy and they are incredibly grateful that someone thinks of them, that someone cares about them. You are their hope and your presence, even from a distance, gives them energy. We want to thank you very much for all your help and annual care for our old ladies. I hope you receive this message in good health.
                
                This year we have a new case of an old woman who is currently facing financial difficulties. We have verified her case and vouch for its veracity. As a result, we again request your organization's kind assistance."
            ],
            [
                'user_id' => null,
                'receiver_id' => null,
                'institution_id' => 4,
                'name' => "Your generosity is one of the reasons why we are able to provide better living conditions and medical care to our elderly women in nursing homes and Tibetan settlements.",
                'path' => 'media/WhatsApp-Image-2023-05-16-at-16.18.05-2-940x510.jpeg',
                'type' => 'news',
                'headline' => 'Our day with Rinpoche',
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
