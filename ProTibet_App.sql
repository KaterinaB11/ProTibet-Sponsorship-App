-- MariaDB dump 10.19  Distrib 10.4.28-MariaDB, for osx10.10 (x86_64)
--
-- Host: localhost    Database: ProTibet_App
-- ------------------------------------------------------
-- Server version	10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `institutions`
--

DROP TABLE IF EXISTS `institutions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `institutions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `receiver_id` bigint(20) unsigned DEFAULT NULL,
  `media_id` bigint(20) unsigned DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `VS_institution` int(11) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `about` text DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `institutions`
--

LOCK TABLES `institutions` WRITE;
/*!40000 ALTER TABLE `institutions` DISABLE KEYS */;
INSERT INTO `institutions` VALUES (1,NULL,NULL,'Ladakh exile villages',122,'Ladakh, India','Tibetan exile villages in Ladakh in the area called Tibetan Settlement Sonamling have been involved in the Adoption project since 2008. Thanks to donors, the poorest seniors and poor families deep in the mountains are supported.\n\n                A total of 25 Tibetan exile villages are scattered in the Indian Himalayas of Ladakh. Both Tibetans who fled Tibet after 1960 and those who were born in exile in India live here. Each of the Tibetan territorial areas in India is administered by its own administrative unit, the Central Representative Office - CRO, which falls under the Home Department within the Tibetan Government-in-Exile (Central Tibetan Administration).\n                \n                In cooperation with CRO and together with our long-time friends, we verify the situation of each supported elderly person or family. We want to be sure that we are really supporting those most in need.\n                \n                In cooperation with the Health Department, we also deal with the health needs of the elderly and residents of the area. Fifteen years ago, we financed the creation of several water pumps that distributed water to local campsites. In recent years, we have focused on the purchase of compensatory aids, wheelchairs, walking sticks and mattresses.','other','2023-11-18 17:27:11','2023-11-18 17:27:11'),(2,NULL,NULL,'Diskit Monastery',111,'Nubra Valley, Ladakh, India','Diskit Monastery forms a dominant feature of the northern vast Nubra Valley in Ladakh, India. The road to the monastery leads over the highest passable saddle in the world, Kardung la. The monastery is situated on a rock, below it is a 32 meter high statue of the future Maitreya Buddha. The convent school, classrooms and kitchen for young students are located under the statue. It is this school for children from 1st to 5th grade that is the subject of our support.\n\n                The monastery was founded in 1463 by a follower of the Gelugpa school, Šerab Zangpa, on the site of the former royal seat of the local ruler from the 12th century. Formally, the monastery is subordinate to the central Thikse monastery. Diskit is home to about a hundred monks.\n                \n                The main building of the monastery is situated on a rock, which is separated from the rest of the mountain massif by a steep ravine. The water source flowing from it was carried by monks up a steep wooden staircase to the monastery for centuries. Today, the monastery is supplied with water using pumps.\n                \n                It is the largest monastery in the Nubra Valley, which also offers traditional education for local children. In recent years, it has become more and more a destination for tourists. In 2016-2017, the monastery expanded its facilities with accommodation facilities, a restaurant and a small shop. In 2017, HH Dalai Lama\'s teachings were held here for 50 thousand people.\n                \n                Diskit Convent School\n                The monastery school and its classrooms are located in the same building as the accommodation for the junior monks. Both traditional (Buddhist philosophy, Tibetan language, prayers) and modern (Hindi, mathematics, English, to a limited extent IT) teaching takes place here.','other','2023-11-18 17:27:11','2023-11-18 17:27:11'),(3,NULL,NULL,'Tibetan Children Village',117,'Dharamshala region, Himachal Pradesh, India','The Tibetan Children Village Network (TCV) is a non-governmental charitable organization that provides a home and education in a network of SOS villages across India for more than 15,000 Tibetan children. From its humble beginnings 62 years ago, TCV has become a thriving educational community for Tibetan children in exile. In the 1960s, it established branches in India, stretching from Ladakh in the north of India to Bylakuppe in the south.\n\n                TCV\'s mission is to ensure that all Tibetan children in its care receive proper modern and traditional education in a family environment. It advocates very well for a strong cultural identity of children, leads them to independence and teaches them to benefit the wider community.\n                \n                TCV is among the best schools in the entire network of exile villages. They are located in remote border areas or also in the south of India. We focus on three branches. In recent years, it has been ranked among the best schools in Himachal Pradesh 3 times in a row. Thanks to the high-quality preparation, many students continue their studies at universities. The curriculum is the same in all TCV branches. They focus on 5 main subjects, the emphasis is on languages. Before classes start and in the afternoon from 5 p.m., there are prayers that were specially selected and composed by the Dalai Lama for TCV. The form of debate was included in the teaching and is incorporated into all subjects - it develops critical thinking and logic. 60% of TCV employees are former TCV students.','other','2023-11-18 17:27:11','2023-11-18 17:27:11'),(4,NULL,NULL,'MOST ProTibet',NULL,NULL,NULL,'most','2023-11-18 17:27:11','2023-11-18 17:27:11');
/*!40000 ALTER TABLE `institutions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `media`
--

DROP TABLE IF EXISTS `media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `media` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `receiver_id` bigint(20) unsigned DEFAULT NULL,
  `institution_id` bigint(20) unsigned DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `path` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `headline` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media`
--

LOCK TABLES `media` WRITE;
/*!40000 ALTER TABLE `media` DISABLE KEYS */;
INSERT INTO `media` VALUES (1,NULL,2,NULL,NULL,'media/111083letter1.jpeg','letter',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(2,NULL,2,NULL,NULL,'media/111083letter2.jpeg','letter',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(3,NULL,2,NULL,NULL,'media/111083letter3.jpeg','letter',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(4,NULL,2,NULL,NULL,'media/111083letter4.jpeg','letter',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(5,NULL,1,NULL,NULL,'media/117032_profile_pic.jpeg','profile_pic',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(6,NULL,1,NULL,NULL,'media/117032letter1.jpeg','letter',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(7,NULL,1,NULL,NULL,'media/117032letter2.jpeg','letter',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(8,NULL,3,NULL,NULL,'media/122058-Dorje-Nishar.jpeg','profile_pic',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(9,NULL,NULL,2,NULL,'media/diskit_monks.jpeg','gallery',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(10,NULL,NULL,2,NULL,'media/diskit-300x225-2.jpg','gallery',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(11,NULL,NULL,2,NULL,'media/diskit-nubra.jpg','gallery\r\n',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(12,NULL,2,2,NULL,'media/diskit.jpeg','gallery',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(13,NULL,NULL,2,NULL,'media/diskit.jpg','gallery',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(14,NULL,2,2,NULL,'media/diskit.png','gallery',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(15,NULL,2,2,'Bylo to neuvěřitelné, byl to sen, bylo to krásné.Nepopsatelná prostornost a prolínání barev hor okolo ve mně vyvolávaly směsici slz i smíchu a v hlavě mi jelo jako kolovrátek, že tohle není možné… Ale bylo a bylo toho možného hodně.','media/india-0116.jpg','news','Monks sending prayers on a special holidays','Kopce pokryté drobnými kvítky, které tvořily velké fialové koberce všude okolo, byly jako dokonalé kulisy nějaké kouzelné planety. Nomádský stan, v němž bublá na ohni mléčný čaj, se pro mě dodnes pojí s pocitem svobody a domova, kde by moje duše chtěla zůstat. Pokorní lidé z vesnice, kteří v těchto kopcích čekali shromážděni, aby nám vyjádřili svou vděčnost, i když nemluvili naším jazykem, ve mě zanechali tak hluboký záchvěv dojetí, který bohužel nedokážu předat slovy… Malé děti v nomádské škole, které navzájem spolupracují, pomáhají si, a když je máte možnost pozorovat z povzdáli, máte pocit, že je kolem nich jemná aura harmonie a radosti… Je to jiný svět.\n\n                Noční nebe s miliony hvězd a mléčnou dráhou nad našimi hlavami, vrcholky Himálaje pokryté sněhem, ozářené ranním vycházejícím sluncem a potom Henle… Nomádská osada Henle, ještě loni nepřístupná turistům. Dodnes pořádně nevím proč, ale když nám cestou náš milý průvodce vysvětlil, že byla uzavřena z bezpečnostních důvodů, protože Tibet je odsud váženě jen kousek, tekly mi slzy…Tibet, kde se v tomhle životě nikdy nepodívám, byl za kopcem a moje srdce se podivně chvělo.','2023-11-18 17:27:11','2023-11-18 17:27:11'),(16,NULL,1,3,NULL,'media/india-0190.jpg','gallery',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(17,NULL,NULL,4,'Velmi si vážíme osobních setkání, kde můžeme zprostředkovat příběhy o životě lidí z Himálaje, kterým se snažíme pomáhat. Naši zkušenost Vám rádi předáme při příležitosti setkání dárců a podporovatelů. Setkání je určeno i pro veřejnost.','media/india-0248.jpg','news','Setkání dárců a podporovatelů Liberec a Brno\n                ','Setkání dárců v Liberci\n                dne 5.10.2023 - 17-19 hodin\n                \n                Cestovatelská přednáška o životě tibetských nomádů v exilu, exilových kempech v Lhadaku a exilových školách s Janou Neborákovou Ďáskovou Vás provede vysokohorskými oblastmi indického Himálaje.\n                \n                Začátek přednášky bude v 17h. Podpořit aktivity můžete také zakoupením drobností v benefičním obchůdku a dozvíte se také co je to tsampa a proč Tibeťanům tak chutná.\n                \n                Místo konání:\n                \n                https://maps.app.goo.gl/JGXSiqPnTgNqXV1x7\n                Setkání dárců v Brně\ndne 26.10.2023 - 17-19 hodin\n\nCestovatelská přednáška o životě tibetských nomádů v exilu, exilových kempech v Lhadaku a exilových školách s Janou Neborákovou Ďáskovou Vás provede vysokohorskými oblastmi indického Himálaje.\n\nZačátek přednášky bude v 17h. Podpořit aktivity můžete také zakoupením drobností v benefičním obchůdku a dozvíte se také co je to tsampa a proč Tibeťanům tak chutná.\n\nMísto konání:\n\nhttps://maps.app.goo.gl/JGXSiqPnTgNqXV1x7\n\n','2023-11-18 17:27:11','2023-11-18 17:27:11'),(18,NULL,2,2,NULL,'media/india-1712.jpg','gallery',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(19,NULL,3,1,NULL,'media/LEV.jpeg','gallery',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(20,NULL,NULL,1,NULL,'media/LEV1.jpeg','gallery',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(21,NULL,NULL,1,NULL,'media/LEV2.jpeg','profile_pic',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(22,1,2,NULL,NULL,'media/sponsorship_contract_111083.pdf','document',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(23,2,1,NULL,NULL,'media/Sponsorship_contract_117032.pdf','document',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(24,1,3,NULL,NULL,'media/sponsorship_contract_122058.pdf','document',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(25,NULL,2,NULL,NULL,'media/Stanzin-Wangchuk_111083_profile_pic.jpeg','profile_pic',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(26,NULL,2,2,NULL,'media/Stanzin-Wangchuk-2-class-111083.jpg','gallery',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(27,NULL,NULL,3,NULL,'media/TCV.jpeg','gallery',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(28,NULL,NULL,3,NULL,'media/TCV1.jpeg','gallery',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(29,NULL,NULL,3,NULL,'media/TCV2.jpeg','gallery',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(30,NULL,NULL,3,NULL,'media/TCV3.jpeg','gallery',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(31,NULL,NULL,3,NULL,'media/TCV5.jpeg','profile_pic',NULL,NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(32,NULL,NULL,3,'All children should have access to quality education. That\'s our password. But studying in winter is not possible for the small nomads from the Changtang region high in the Himalayas.','media/TCV6.jpeg','news','Winter school for little nomads in 2022','All children should have access to quality education. That\'s our password. But studying in winter is not possible for the small nomads from the Changtang region high in the Himalayas. Moreover, the vast majority of their parents are illiterate, so practicing at home is out of the question.\n\n                That is why for many years, together with the Swiss foundation Amma-la, we have been supporting winter education for almost 160 children aged 6-16. The school is divided into several classes, according to age and level of education. They learn together in small, easy-to-assemble wooden houses with plastic roofs and small stoves inside. The children have stationery, textbooks and notebooks, food and hot tea available. Support also covers teachers\' salaries.\n                \n                During the summer visit, the director Karma Khetup also asked us for money for a new generator and projector, which will help to improve the quality of teaching. Together, we managed to buy both for CZK 22,915. Another CZK 45,879 covers school supplies, teachers\' salaries and food for children.\n                \n                Together, we contributed CZK 68,794 to the little nomads.\n                The winter school started on 18/12/2022 and will last until March. During this period, children improve in Tibetan, mathematics and other important subjects. But above all, and this is what Director Karma emphasizes every time we communicate: Education is a tool that breaks the vicious circle of poverty and ruin. He gives a chance. Thank you for that.','2023-11-18 17:27:11','2023-11-18 17:27:11'),(33,NULL,NULL,1,'Your generosity is one of the reasons why we are able to provide better living conditions and medical care to our elderly women in nursing homes and Tibetan settlements.','media/LEV_news1.jpeg','news','A huge thank you from Ladakh','We warmly greet MOST and all its supporters.\n\n                On behalf of Chauntra Tibetan Settlement and Home for Tibetan Seniors, we would like to express our deepest gratitude and thanks to you and your organization for providing your kind support to the functioning of our Tibetan community. Your generosity is one of the reasons why we are able to provide better living conditions and medical care to our elderly women in nursing homes and Tibetan settlements. There are not enough words to express how our old people and we feel your undying support, you are the source of their joy and they are incredibly grateful that someone thinks of them, that someone cares about them. You are their hope and your presence, even from a distance, gives them energy. We want to thank you very much for all your help and annual care for our old ladies. I hope you receive this message in good health.\n                \n                This year we have a new case of an old woman who is currently facing financial difficulties. We have verified her case and vouch for its veracity. As a result, we again request your organization\'s kind assistance.','2023-11-18 17:27:11','2023-11-18 17:27:11'),(34,NULL,NULL,4,'Your generosity is one of the reasons why we are able to provide better living conditions and medical care to our elderly women in nursing homes and Tibetan settlements.','media/WhatsApp-Image-2023-05-16-at-16.18.05-2-940x510.jpeg','news','Our day with Rinpoche','We warmly greet MOST and all its supporters.\n\n                On behalf of Chauntra Tibetan Settlement and Home for Tibetan Seniors, we would like to express our deepest gratitude and thanks to you and your organization for providing your kind support to the functioning of our Tibetan community. Your generosity is one of the reasons why we are able to provide better living conditions and medical care to our elderly women in nursing homes and Tibetan settlements. There are not enough words to express how our old people and we feel your undying support, you are the source of their joy and they are incredibly grateful that someone thinks of them, that someone cares about them. You are their hope and your presence, even from a distance, gives them energy. We want to thank you very much for all your help and annual care for our old ladies. I hope you receive this message in good health.\n                \n                This year we have a new case of an old woman who is currently facing financial difficulties. We have verified her case and vouch for its veracity. As a result, we again request your organization\'s kind assistance.','2023-11-18 17:27:11','2023-11-18 17:27:11'),(35,NULL,NULL,2,NULL,'media/india-1395.jpg','profile_pic',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `message` text NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `messages_user_id_foreign` (`user_id`),
  CONSTRAINT `messages_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,NULL,'fsgs','ewfklh@def.cz','sdfeg','2023-11-20 11:53:08','2023-11-20 11:53:08'),(2,NULL,'Kateřina','bouchalovakaterina1@gmail.com','You guys are the best!!','2023-11-20 13:18:08','2023-11-20 13:18:08'),(3,NULL,'Kateřina','bouchalovakaterina1@gmail.com','You guys are the best!!','2023-11-20 13:22:42','2023-11-20 13:22:42'),(4,NULL,'Jana','jana@seznam.cz','rgew srhwrth','2023-11-20 13:41:27','2023-11-20 13:41:27'),(5,NULL,'Barunka','bara@gmail.com','hello sunshine','2023-11-20 14:17:00','2023-11-20 14:17:00'),(6,NULL,'Monika','jana@protibet.cz','cndweifqoevg','2023-11-20 14:20:07','2023-11-20 14:20:07'),(7,NULL,'Bara','jana@protibet.cz','saefkhaewpigpeweqgrůkbq','2023-11-20 14:26:22','2023-11-20 14:26:22'),(8,NULL,'kaci','katerina@protibet.cz','fbharthrhwrth','2023-11-20 14:38:45','2023-11-20 14:38:45'),(9,NULL,'Kateřina','katerina@protibet.cz','ndhweif ewigheoqigf qqeghqrebgqre','2023-11-21 08:29:48','2023-11-21 08:29:48'),(10,NULL,'Monika','katerina@protibet.cz','j,vkjvlvlvů','2023-11-21 16:00:14','2023-11-21 16:00:14');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=77 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (68,'2014_10_12_000000_create_users_table',1),(69,'2014_10_12_100000_create_password_reset_tokens_table',1),(70,'2014_10_12_200000_add_two_factor_columns_to_users_table',1),(71,'2019_08_19_000000_create_failed_jobs_table',1),(72,'2019_12_14_000001_create_personal_access_tokens_table',1),(73,'2023_11_10_142716_create_receivers_table',1),(74,'2023_11_10_142730_create_institutions_table',1),(75,'2023_11_10_142853_create_media_table',1),(76,'2023_11_18_124603_create_messages_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_reset_tokens`
--

DROP TABLE IF EXISTS `password_reset_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_reset_tokens`
--

LOCK TABLES `password_reset_tokens` WRITE;
/*!40000 ALTER TABLE `password_reset_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_reset_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receivers`
--

DROP TABLE IF EXISTS `receivers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `receivers` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `institution_id` bigint(20) unsigned DEFAULT NULL,
  `media_id` bigint(20) unsigned DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `VS_receiver` int(11) DEFAULT NULL,
  `institution` varchar(255) DEFAULT NULL,
  `dob` datetime DEFAULT NULL,
  `about` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `receivers_vs_receiver_unique` (`VS_receiver`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receivers`
--

LOCK TABLES `receivers` WRITE;
/*!40000 ALTER TABLE `receivers` DISABLE KEYS */;
INSERT INTO `receivers` VALUES (1,2,3,NULL,'Tenzin Rangdol',117032,'Tibetan Children Village','2010-06-20 00:00:00','Tashi Delek,\n                my name is Tenzin Rangdol and I was born on July 20, 2010 in the town of Tuting in Arunachal Pradesh, North East India. My dad\'s name is Sangye Dhondup and he runs a small street tea stall outside the market in Tuting. Dechen Wangmo\'s mom is a housewife, she can\'t work because of her health.\n                We lived a simple country life, but it became increasingly difficult for my father to earn enough money selling tea to support us, let alone send me to school. That\'s why he asked for my admission to TCV, where they provide free education. \n                \n                At TCV, after a short interview, they told me that I was a smart and bright boy and they accepted me immediately. It was in March 2017, when I was less than 7 years old. Since I had not attended any school before, I initially entered kindergarten and then continued through the first years of a 12-year school.\n\n                I am very happy that I can study here. I found a lot of friends here, with whom I really like to spend my time. The teacher says that I am a very friendly and active boy. I enjoy social studies the most at school. My favorite color is light blue and I\'m happiest when I have lentils with rice for dinner.','2023-11-18 17:27:11','2023-11-18 17:27:11'),(2,1,2,NULL,'Stanzin Wangchuk',111083,'Diskit Monastery','2014-06-11 00:00:00','Tashi delek,\n\n                my name is Stanzin Wangchuk, I was born in the village of Julkam on June 11, 2014. My older brother lives here with his parents and goes to a regular school. The mother is a housewife and the father is a shepherd.\n                \n                I joined the school at the end of 2021. My favorite subject is math and in my free time I enjoy cricket the most. My favorite food is momo dumplings. When I grow up, I want to be a geshe.','2023-11-18 17:27:11','2023-11-18 17:27:11'),(3,1,1,NULL,'Dorjee Nisher',122058,'Ladakh exile villages','1946-06-11 00:00:00','Tashi Delek,\n\n                my name is Dorjee Nisher and I was born in 1946. I was brought up in a nomadic way of life, I keep goats and live off their milk and hair. Now my herd numbers 50 goats. My brother and I married one woman, it\'s our traditional way of life so that we don\'t divide the property and to be able to support the family. One of our sons works as a driver. I worked as a cook for the local TCV school in Sumdho. But now I\'m too old for this job. My brother and wife are already in poor health, so they can\'t do any demanding work either.','2023-11-18 17:27:11','2023-11-18 17:27:11');
/*!40000 ALTER TABLE `receivers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `receiver_id` bigint(20) unsigned DEFAULT NULL,
  `media_id` bigint(20) unsigned DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `two_factor_secret` text DEFAULT NULL,
  `two_factor_recovery_codes` text DEFAULT NULL,
  `two_factor_confirmed_at` timestamp NULL DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_username_unique` (`username`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,NULL,NULL,'kaciTest','$2y$12$pOOrqw/dofbpkwlRrCFAzOkrLyAUdhcLpR7.S9b8Xm9YIgyVXk5aq',NULL,NULL,NULL,'Katerina','Bouchalova','kaci@seznam.cz','sponsor',NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(2,NULL,NULL,'RomanTest','$2y$12$WS7ERtUX7ahVl5ONpY8HJerx2Irs5P8D3SBDqzekuQ0qPlF1fkYhe',NULL,NULL,NULL,'Roman','Novak','roman@seznam.cz','sponsor',NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11'),(3,NULL,NULL,'KaciAdminTest','$2y$12$LmDYZKZorFBsAGa0n/mnW.GpO0SDBdM.XSAJhWcTEeGJ0BMM4FLxq',NULL,NULL,NULL,'Admin','ProTibet','katerina@protibet.cz','admin',NULL,'2023-11-18 17:27:11','2023-11-18 17:27:11');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-22 11:05:55
