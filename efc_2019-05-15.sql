# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 45.118.132.77 (MySQL 5.7.25-0ubuntu0.18.10.2)
# Database: efc
# Generation Time: 2019-05-15 10:06:11 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table areas
# ------------------------------------------------------------

DROP TABLE IF EXISTS `areas`;

CREATE TABLE `areas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `area_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `code` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `areas` WRITE;
/*!40000 ALTER TABLE `areas` DISABLE KEYS */;

INSERT INTO `areas` (`id`, `area_name`, `code`, `created_at`, `updated_at`)
VALUES
	(1,'Kab. Simeulue','1101',NULL,NULL),
	(2,'Kab. Aceh Singkil','1102',NULL,NULL),
	(3,'Kab. Aceh Selatan','1103',NULL,NULL),
	(4,'Kab. Aceh Tenggara','1104',NULL,NULL),
	(5,'Kab. Aceh Timur','1105',NULL,NULL),
	(6,'Kab. Aceh Tengah','1106',NULL,NULL),
	(7,'Kab. Aceh Barat','1107',NULL,NULL),
	(8,'Kab. Aceh Besar','1108',NULL,NULL),
	(9,'Kab. Pidie','1109',NULL,NULL),
	(10,'Kab. Bireuen','1110',NULL,NULL),
	(11,'Kab. Aceh Utara','1111',NULL,NULL),
	(12,'Kab. Aceh Barat Daya','1112',NULL,NULL),
	(13,'Kab. Gayo Lues','1113',NULL,NULL),
	(14,'Kab. Aceh Tamiang','1114',NULL,NULL),
	(15,'Kab. Nagan Raya','1115',NULL,NULL),
	(16,'Kab. Aceh Jaya','1116',NULL,NULL),
	(17,'Kab. Bener Meriah','1117',NULL,NULL),
	(18,'Kab. Pidie Jaya','1118',NULL,NULL),
	(19,'Kota Banda Aceh','1171',NULL,NULL),
	(20,'Kota Sabang','1172',NULL,NULL),
	(21,'Kota Langsa','1173',NULL,NULL),
	(22,'Kota Lhokseumawe','1174',NULL,NULL),
	(23,'Kota Subulussalam','1175',NULL,NULL),
	(24,'Kab. Nias','1201',NULL,NULL),
	(25,'Kab. Mandailing Natal','1202',NULL,NULL),
	(26,'Kab. Tapanuli Selatan','1203',NULL,NULL),
	(27,'Kab. Tapanuli Tengah','1204',NULL,NULL),
	(28,'Kab. Tapanuli Utara','1205',NULL,NULL),
	(29,'Kab. Toba Samosir','1206',NULL,NULL),
	(30,'Kab. Labuhan Batu','1207',NULL,NULL),
	(31,'Kab. Asahan','1208',NULL,NULL),
	(32,'Kab. Simalungun','1209',NULL,NULL),
	(33,'Kab. Dairi','1210',NULL,NULL),
	(34,'Kab. Karo','1211',NULL,NULL),
	(35,'Kab. Deli Serdang','1212',NULL,NULL),
	(36,'Kab. Langkat','1213',NULL,NULL),
	(37,'Kab. Nias Selatan','1214',NULL,NULL),
	(38,'Kab. Humbang Hasundutan','1215',NULL,NULL),
	(39,'Kab. Pakpak Bharat','1216',NULL,NULL),
	(40,'Kab. Samosir','1217',NULL,NULL),
	(41,'Kab. Serdang Bedagai','1218',NULL,NULL),
	(42,'Kab. Batu Bara','1219',NULL,NULL),
	(43,'Kab. Padang Lawas Utara','1220',NULL,NULL),
	(44,'Kab. Padang Lawas','1221',NULL,NULL),
	(45,'Kab. Labuhan Batu Selatan','1222',NULL,NULL),
	(46,'Kab. Labuhan Batu Utara','1223',NULL,NULL),
	(47,'Kab. Nias Utara','1224',NULL,NULL),
	(48,'Kab. Nias Barat','1225',NULL,NULL),
	(49,'Kota Sibolga','1271',NULL,NULL),
	(50,'Kota Tanjung Balai','1272',NULL,NULL),
	(51,'Kota Pematang Siantar','1273',NULL,NULL),
	(52,'Kota Tebing Tinggi','1274',NULL,NULL),
	(53,'Kota Medan','1275',NULL,NULL),
	(54,'Kota Binjai','1276',NULL,NULL),
	(55,'Kota Padangsidimpuan','1277',NULL,NULL),
	(56,'Kota Gunungsitoli','1278',NULL,NULL),
	(57,'Kab. Kepulauan Mentawai','1301',NULL,NULL),
	(58,'Kab. Pesisir Selatan','1302',NULL,NULL),
	(59,'Kab. Solok','1303',NULL,NULL),
	(60,'Kab. Sijunjung','1304',NULL,NULL),
	(61,'Kab. Tanah Datar','1305',NULL,NULL),
	(62,'Kab. Padang Pariaman','1306',NULL,NULL),
	(63,'Kab. Agam','1307',NULL,NULL),
	(64,'Kab. Lima Puluh Kota','1308',NULL,NULL),
	(65,'Kab. Pasaman','1309',NULL,NULL),
	(66,'Kab. Solok Selatan','1310',NULL,NULL),
	(67,'Kab. Dharmasraya','1311',NULL,NULL),
	(68,'Kab. Pasaman Barat','1312',NULL,NULL),
	(69,'Kota Padang','1371',NULL,NULL),
	(70,'Kota Solok','1372',NULL,NULL),
	(71,'Kota Sawah Lunto','1373',NULL,NULL),
	(72,'Kota Padang Panjang','1374',NULL,NULL),
	(73,'Kota Bukittinggi','1375',NULL,NULL),
	(74,'Kota Payakumbuh','1376',NULL,NULL),
	(75,'Kota Pariaman','1377',NULL,NULL),
	(76,'Kab. Kuantan Singingi','1401',NULL,NULL),
	(77,'Kab. Indragiri Hulu','1402',NULL,NULL),
	(78,'Kab. Indragiri Hilir','1403',NULL,NULL),
	(79,'Kab. Pelalawan','1404',NULL,NULL),
	(80,'Kab. S I A K','1405',NULL,NULL),
	(81,'Kab. Kampar','1406',NULL,NULL),
	(82,'Kab. Rokan Hulu','1407',NULL,NULL),
	(83,'Kab. Bengkalis','1408',NULL,NULL),
	(84,'Kab. Rokan Hilir','1409',NULL,NULL),
	(85,'Kab. Kepulauan Meranti','1410',NULL,NULL),
	(86,'Kota Pekanbaru','1471',NULL,NULL),
	(87,'Kota D U M A I','1473',NULL,NULL),
	(88,'Kab. Kerinci','1501',NULL,NULL),
	(89,'Kab. Merangin','1502',NULL,NULL),
	(90,'Kab. Sarolangun','1503',NULL,NULL),
	(91,'Kab. Batang Hari','1504',NULL,NULL),
	(92,'Kab. Muaro Jambi','1505',NULL,NULL),
	(93,'Kab. Tanjung Jabung Timur','1506',NULL,NULL),
	(94,'Kab. Tanjung Jabung Barat','1507',NULL,NULL),
	(95,'Kab. Tebo','1508',NULL,NULL),
	(96,'Kab. Bungo','1509',NULL,NULL),
	(97,'Kota Jambi','1571',NULL,NULL),
	(98,'Kota Sungai Penuh','1572',NULL,NULL),
	(99,'Kab. Ogan Komering Ulu','1601',NULL,NULL),
	(100,'Kab. Ogan Komering Ilir','1602',NULL,NULL),
	(101,'Kab. Muara Enim','1603',NULL,NULL),
	(102,'Kab. Lahat','1604',NULL,NULL),
	(103,'Kab. Musi Rawas','1605',NULL,NULL),
	(104,'Kab. Musi Banyuasin','1606',NULL,NULL),
	(105,'Kab. Banyu Asin','1607',NULL,NULL),
	(106,'Kab. Ogan Komering Ulu Selatan','1608',NULL,NULL),
	(107,'Kab. Ogan Komering Ulu Timur','1609',NULL,NULL),
	(108,'Kab. Ogan Ilir','1610',NULL,NULL),
	(109,'Kab. Empat Lawang','1611',NULL,NULL),
	(110,'Kota Palembang','1671',NULL,NULL),
	(111,'Kota Prabumulih','1672',NULL,NULL),
	(112,'Kota Pagar Alam','1673',NULL,NULL),
	(113,'Kota Lubuklinggau','1674',NULL,NULL),
	(114,'Kab. Bengkulu Selatan','1701',NULL,NULL),
	(115,'Kab. Rejang Lebong','1702',NULL,NULL),
	(116,'Kab. Bengkulu Utara','1703',NULL,NULL),
	(117,'Kab. Kaur','1704',NULL,NULL),
	(118,'Kab. Seluma','1705',NULL,NULL),
	(119,'Kab. Mukomuko','1706',NULL,NULL),
	(120,'Kab. Lebong','1707',NULL,NULL),
	(121,'Kab. Kepahiang','1708',NULL,NULL),
	(122,'Kab. Bengkulu Tengah','1709',NULL,NULL),
	(123,'Kota Bengkulu','1771',NULL,NULL),
	(124,'Kab. Lampung Barat','1801',NULL,NULL),
	(125,'Kab. Tanggamus','1802',NULL,NULL),
	(126,'Kab. Lampung Selatan','1803',NULL,NULL),
	(127,'Kab. Lampung Timur','1804',NULL,NULL),
	(128,'Kab. Lampung Tengah','1805',NULL,NULL),
	(129,'Kab. Lampung Utara','1806',NULL,NULL),
	(130,'Kab. Way Kanan','1807',NULL,NULL),
	(131,'Kab. Tulangbawang','1808',NULL,NULL),
	(132,'Kab. Pesawaran','1809',NULL,NULL),
	(133,'Kab. Pringsewu','1810',NULL,NULL),
	(134,'Kab. Mesuji','1811',NULL,NULL),
	(135,'Kab. Tulang Bawang Barat','1812',NULL,NULL),
	(136,'Kab. Pesisir Barat','1813',NULL,NULL),
	(137,'Kota Bandar Lampung','1871',NULL,NULL),
	(138,'Kota Metro','1872',NULL,NULL),
	(139,'Kab. Bangka','1901',NULL,NULL),
	(140,'Kab. Belitung','1902',NULL,NULL),
	(141,'Kab. Bangka Barat','1903',NULL,NULL),
	(142,'Kab. Bangka Tengah','1904',NULL,NULL),
	(143,'Kab. Bangka Selatan','1905',NULL,NULL),
	(144,'Kab. Belitung Timur','1906',NULL,NULL),
	(145,'Kota Pangkal Pinang','1971',NULL,NULL),
	(146,'Kab. Karimun','2101',NULL,NULL),
	(147,'Kab. Bintan','2102',NULL,NULL),
	(148,'Kab. Natuna','2103',NULL,NULL),
	(149,'Kab. Lingga','2104',NULL,NULL),
	(150,'Kab. Kepulauan Anambas','2105',NULL,NULL),
	(151,'Kota B A T A M','2171',NULL,NULL),
	(152,'Kota Tanjung Pinang','2172',NULL,NULL),
	(153,'Kab. Kepulauan Seribu','3101',NULL,NULL),
	(154,'Kota Jakarta Selatan','3171',NULL,NULL),
	(155,'Kota Jakarta Timur','3172',NULL,NULL),
	(156,'Kota Jakarta Pusat','3173',NULL,NULL),
	(157,'Kota Jakarta Barat','3174',NULL,NULL),
	(158,'Kota Jakarta Utara','3175',NULL,NULL),
	(159,'Kab. Bogor','3201',NULL,NULL),
	(160,'Kab. Sukabumi','3202',NULL,NULL),
	(161,'Kab. Cianjur','3203',NULL,NULL),
	(162,'Kab. Bandung','3204',NULL,NULL),
	(163,'Kab. Garut','3205',NULL,NULL),
	(164,'Kab. Tasikmalaya','3206',NULL,NULL),
	(165,'Kab. Ciamis','3207',NULL,NULL),
	(166,'Kab. Kuningan','3208',NULL,NULL),
	(167,'Kab. Cirebon','3209',NULL,NULL),
	(168,'Kab. Majalengka','3210',NULL,NULL),
	(169,'Kab. Sumedang','3211',NULL,NULL),
	(170,'Kab. Indramayu','3212',NULL,NULL),
	(171,'Kab. Subang','3213',NULL,NULL),
	(172,'Kab. Purwakarta','3214',NULL,NULL),
	(173,'Kab. Karawang','3215',NULL,NULL),
	(174,'Kab. Bekasi','3216',NULL,NULL),
	(175,'Kab. Bandung Barat','3217',NULL,NULL),
	(176,'Kab. Pangandaran','3218',NULL,NULL),
	(177,'Kota Bogor','3271',NULL,NULL),
	(178,'Kota Sukabumi','3272',NULL,NULL),
	(179,'Kota Bandung','3273',NULL,NULL),
	(180,'Kota Cirebon','3274',NULL,NULL),
	(181,'Kota Bekasi','3275',NULL,NULL),
	(182,'Kota Depok','3276',NULL,NULL),
	(183,'Kota Cimahi','3277',NULL,NULL),
	(184,'Kota Tasikmalaya','3278',NULL,NULL),
	(185,'Kota Banjar','3279',NULL,NULL),
	(186,'Kab. Cilacap','3301',NULL,NULL),
	(187,'Kab. Banyumas','3302',NULL,NULL),
	(188,'Kab. Purbalingga','3303',NULL,NULL),
	(189,'Kab. Banjarnegara','3304',NULL,NULL),
	(190,'Kab. Kebumen','3305',NULL,NULL),
	(191,'Kab. Purworejo','3306',NULL,NULL),
	(192,'Kab. Wonosobo','3307',NULL,NULL),
	(193,'Kab. Magelang','3308',NULL,NULL),
	(194,'Kab. Boyolali','3309',NULL,NULL),
	(195,'Kab. Klaten','3310',NULL,NULL),
	(196,'Kab. Sukoharjo','3311',NULL,NULL),
	(197,'Kab. Wonogiri','3312',NULL,NULL),
	(198,'Kab. Karanganyar','3313',NULL,NULL),
	(199,'Kab. Sragen','3314',NULL,NULL),
	(200,'Kab. Grobogan','3315',NULL,NULL),
	(201,'Kab. Blora','3316',NULL,NULL),
	(202,'Kab. Rembang','3317',NULL,NULL),
	(203,'Kab. Pati','3318',NULL,NULL),
	(204,'Kab. Kudus','3319',NULL,NULL),
	(205,'Kab. Jepara','3320',NULL,NULL),
	(206,'Kab. Demak','3321',NULL,NULL),
	(207,'Kab. Semarang','3322',NULL,NULL),
	(208,'Kab. Temanggung','3323',NULL,NULL),
	(209,'Kab. Kendal','3324',NULL,NULL),
	(210,'Kab. Batang','3325',NULL,NULL),
	(211,'Kab. Pekalongan','3326',NULL,NULL),
	(212,'Kab. Pemalang','3327',NULL,NULL),
	(213,'Kab. Tegal','3328',NULL,NULL),
	(214,'Kab. Brebes','3329',NULL,NULL),
	(215,'Kota Magelang','3371',NULL,NULL),
	(216,'Kota Surakarta','3372',NULL,NULL),
	(217,'Kota Salatiga','3373',NULL,NULL),
	(218,'Kota Semarang','3374',NULL,NULL),
	(219,'Kota Pekalongan','3375',NULL,NULL),
	(220,'Kota Tegal','3376',NULL,NULL),
	(221,'Kab. Kulon Progo','3401',NULL,NULL),
	(222,'Kab. Bantul','3402',NULL,NULL),
	(223,'Kab. Gunung Kidul','3403',NULL,NULL),
	(224,'Kab. Sleman','3404',NULL,NULL),
	(225,'Kota Yogyakarta','3471',NULL,NULL),
	(226,'Kab. Pacitan','3501',NULL,NULL),
	(227,'Kab. Ponorogo','3502',NULL,NULL),
	(228,'Kab. Trenggalek','3503',NULL,NULL),
	(229,'Kab. Tulungagung','3504',NULL,NULL),
	(230,'Kab. Blitar','3505',NULL,NULL),
	(231,'Kab. Kediri','3506',NULL,NULL),
	(232,'Kab. Malang','3507',NULL,NULL),
	(233,'Kab. Lumajang','3508',NULL,NULL),
	(234,'Kab. Jember','3509',NULL,NULL),
	(235,'Kab. Banyuwangi','3510',NULL,NULL),
	(236,'Kab. Bondowoso','3511',NULL,NULL),
	(237,'Kab. Situbondo','3512',NULL,NULL),
	(238,'Kab. Probolinggo','3513',NULL,NULL),
	(239,'Kab. Pasuruan','3514',NULL,NULL),
	(240,'Kab. Sidoarjo','3515',NULL,NULL),
	(241,'Kab. Mojokerto','3516',NULL,NULL),
	(242,'Kab. Jombang','3517',NULL,NULL),
	(243,'Kab. Nganjuk','3518',NULL,NULL),
	(244,'Kab. Madiun','3519',NULL,NULL),
	(245,'Kab. Magetan','3520',NULL,NULL),
	(246,'Kab. Ngawi','3521',NULL,NULL),
	(247,'Kab. Bojonegoro','3522',NULL,NULL),
	(248,'Kab. Tuban','3523',NULL,NULL),
	(249,'Kab. Lamongan','3524',NULL,NULL),
	(250,'Kab. Gresik','3525',NULL,NULL),
	(251,'Kab. Bangkalan','3526',NULL,NULL),
	(252,'Kab. Sampang','3527',NULL,NULL),
	(253,'Kab. Pamekasan','3528',NULL,NULL),
	(254,'Kab. Sumenep','3529',NULL,NULL),
	(255,'Kota Kediri','3571',NULL,NULL),
	(256,'Kota Blitar','3572',NULL,NULL),
	(257,'Kota Malang','3573',NULL,NULL),
	(258,'Kota Probolinggo','3574',NULL,NULL),
	(259,'Kota Pasuruan','3575',NULL,NULL),
	(260,'Kota Mojokerto','3576',NULL,NULL),
	(261,'Kota Madiun','3577',NULL,NULL),
	(262,'Kota Surabaya','3578',NULL,NULL),
	(263,'Kota Batu','3579',NULL,NULL),
	(264,'Kab. Pandeglang','3601',NULL,NULL),
	(265,'Kab. Lebak','3602',NULL,NULL),
	(266,'Kab. Tangerang','3603',NULL,NULL),
	(267,'Kab. Serang','3604',NULL,NULL),
	(268,'Kota Tangerang','3671',NULL,NULL),
	(269,'Kota Cilegon','3672',NULL,NULL),
	(270,'Kota Serang','3673',NULL,NULL),
	(271,'Kota Tangerang Selatan','3674',NULL,NULL),
	(272,'Kab. Jembrana','5101',NULL,NULL),
	(273,'Kab. Tabanan','5102',NULL,NULL),
	(274,'Kab. Badung','5103',NULL,NULL),
	(275,'Kab. Gianyar','5104',NULL,NULL),
	(276,'Kab. Klungkung','5105',NULL,NULL),
	(277,'Kab. Bangli','5106',NULL,NULL),
	(278,'Kab. Karang Asem','5107',NULL,NULL),
	(279,'Kab. Buleleng','5108',NULL,NULL),
	(280,'Kota Denpasar','5171',NULL,NULL),
	(281,'Kab. Lombok Barat','5201',NULL,NULL),
	(282,'Kab. Lombok Tengah','5202',NULL,NULL),
	(283,'Kab. Lombok Timur','5203',NULL,NULL),
	(284,'Kab. Sumbawa','5204',NULL,NULL),
	(285,'Kab. Dompu','5205',NULL,NULL),
	(286,'Kab. Bima','5206',NULL,NULL),
	(287,'Kab. Sumbawa Barat','5207',NULL,NULL),
	(288,'Kab. Lombok Utara','5208',NULL,NULL),
	(289,'Kota Mataram','5271',NULL,NULL),
	(290,'Kota Bima','5272',NULL,NULL),
	(291,'Kab. Sumba Barat','5301',NULL,NULL),
	(292,'Kab. Sumba Timur','5302',NULL,NULL),
	(293,'Kab. Kupang','5303',NULL,NULL),
	(294,'Kab. Timor Tengah Selatan','5304',NULL,NULL),
	(295,'Kab. Timor Tengah Utara','5305',NULL,NULL),
	(296,'Kab. Belu','5306',NULL,NULL),
	(297,'Kab. Alor','5307',NULL,NULL),
	(298,'Kab. Lembata','5308',NULL,NULL),
	(299,'Kab. Flores Timur','5309',NULL,NULL),
	(300,'Kab. Sikka','5310',NULL,NULL),
	(301,'Kab. Ende','5311',NULL,NULL),
	(302,'Kab. Ngada','5312',NULL,NULL),
	(303,'Kab. Manggarai','5313',NULL,NULL),
	(304,'Kab. Rote Ndao','5314',NULL,NULL),
	(305,'Kab. Manggarai Barat','5315',NULL,NULL),
	(306,'Kab. Sumba Tengah','5316',NULL,NULL),
	(307,'Kab. Sumba Barat Daya','5317',NULL,NULL),
	(308,'Kab. Nagekeo','5318',NULL,NULL),
	(309,'Kab. Manggarai Timur','5319',NULL,NULL),
	(310,'Kab. Sabu Raijua','5320',NULL,NULL),
	(311,'Kota Kupang','5371',NULL,NULL),
	(312,'Kab. Sambas','6101',NULL,NULL),
	(313,'Kab. Bengkayang','6102',NULL,NULL),
	(314,'Kab. Landak','6103',NULL,NULL),
	(315,'Kab. Pontianak','6104',NULL,NULL),
	(316,'Kab. Sanggau','6105',NULL,NULL),
	(317,'Kab. Ketapang','6106',NULL,NULL),
	(318,'Kab. Sintang','6107',NULL,NULL),
	(319,'Kab. Kapuas Hulu','6108',NULL,NULL),
	(320,'Kab. Sekadau','6109',NULL,NULL),
	(321,'Kab. Melawi','6110',NULL,NULL),
	(322,'Kab. Kayong Utara','6111',NULL,NULL),
	(323,'Kab. Kubu Raya','6112',NULL,NULL),
	(324,'Kota Pontianak','6171',NULL,NULL),
	(325,'Kota Singkawang','6172',NULL,NULL),
	(326,'Kab. Kotawaringin Barat','6201',NULL,NULL),
	(327,'Kab. Kotawaringin Timur','6202',NULL,NULL),
	(328,'Kab. Kapuas','6203',NULL,NULL),
	(329,'Kab. Barito Selatan','6204',NULL,NULL),
	(330,'Kab. Barito Utara','6205',NULL,NULL),
	(331,'Kab. Sukamara','6206',NULL,NULL),
	(332,'Kab. Lamandau','6207',NULL,NULL),
	(333,'Kab. Seruyan','6208',NULL,NULL),
	(334,'Kab. Katingan','6209',NULL,NULL),
	(335,'Kab. Pulang Pisau','6210',NULL,NULL),
	(336,'Kab. Gunung Mas','6211',NULL,NULL),
	(337,'Kab. Barito Timur','6212',NULL,NULL),
	(338,'Kab. Murung Raya','6213',NULL,NULL),
	(339,'Kota Palangka Raya','6271',NULL,NULL),
	(340,'Kab. Tanah Laut','6301',NULL,NULL),
	(341,'Kab. Kota Baru','6302',NULL,NULL),
	(342,'Kab. Banjar','6303',NULL,NULL),
	(343,'Kab. Barito Kuala','6304',NULL,NULL),
	(344,'Kab. Tapin','6305',NULL,NULL),
	(345,'Kab. Hulu Sungai Selatan','6306',NULL,NULL),
	(346,'Kab. Hulu Sungai Tengah','6307',NULL,NULL),
	(347,'Kab. Hulu Sungai Utara','6308',NULL,NULL),
	(348,'Kab. Tabalong','6309',NULL,NULL),
	(349,'Kab. Tanah Bumbu','6310',NULL,NULL),
	(350,'Kab. Balangan','6311',NULL,NULL),
	(351,'Kota Banjarmasin','6371',NULL,NULL),
	(352,'Kota Banjar Baru','6372',NULL,NULL),
	(353,'Kab. Paser','6401',NULL,NULL),
	(354,'Kab. Kutai Barat','6402',NULL,NULL),
	(355,'Kab. Kutai Kartanegara','6403',NULL,NULL),
	(356,'Kab. Kutai Timur','6404',NULL,NULL),
	(357,'Kab. Berau','6405',NULL,NULL),
	(358,'Kab. Penajam Paser Utara','6409',NULL,NULL),
	(359,'Kota Balikpapan','6471',NULL,NULL),
	(360,'Kota Samarinda','6472',NULL,NULL),
	(361,'Kota Bontang','6474',NULL,NULL),
	(362,'Kab. Malinau','6501',NULL,NULL),
	(363,'Kab. Bulungan','6502',NULL,NULL),
	(364,'Kab. Tana Tidung','6503',NULL,NULL),
	(365,'Kab. Nunukan','6504',NULL,NULL),
	(366,'Kota Tarakan','6571',NULL,NULL),
	(367,'Kab. Bolaang Mongondow','7101',NULL,NULL),
	(368,'Kab. Minahasa','7102',NULL,NULL),
	(369,'Kab. Kepulauan Sangihe','7103',NULL,NULL),
	(370,'Kab. Kepulauan Talaud','7104',NULL,NULL),
	(371,'Kab. Minahasa Selatan','7105',NULL,NULL),
	(372,'Kab. Minahasa Utara','7106',NULL,NULL),
	(373,'Kab. Bolaang Mongondow Utara','7107',NULL,NULL),
	(374,'Kab. Siau Tagulandang Biaro','7108',NULL,NULL),
	(375,'Kab. Minahasa Tenggara','7109',NULL,NULL),
	(376,'Kab. Bolaang Mongondow Selatan','7110',NULL,NULL),
	(377,'Kab. Bolaang Mongondow Timur','7111',NULL,NULL),
	(378,'Kota Manado','7171',NULL,NULL),
	(379,'Kota Bitung','7172',NULL,NULL),
	(380,'Kota Tomohon','7173',NULL,NULL),
	(381,'Kota Kotamobagu','7174',NULL,NULL),
	(382,'Kab. Banggai Kepulauan','7201',NULL,NULL),
	(383,'Kab. Banggai','7202',NULL,NULL),
	(384,'Kab. Morowali','7203',NULL,NULL),
	(385,'Kab. Poso','7204',NULL,NULL),
	(386,'Kab. Donggala','7205',NULL,NULL),
	(387,'Kab. Toli-toli','7206',NULL,NULL),
	(388,'Kab. Buol','7207',NULL,NULL),
	(389,'Kab. Parigi Moutong','7208',NULL,NULL),
	(390,'Kab. Tojo Una-una','7209',NULL,NULL),
	(391,'Kab. Sigi','7210',NULL,NULL),
	(392,'Kota Palu','7271',NULL,NULL),
	(393,'Kab. Kepulauan Selayar','7301',NULL,NULL),
	(394,'Kab. Bulukumba','7302',NULL,NULL),
	(395,'Kab. Bantaeng','7303',NULL,NULL),
	(396,'Kab. Jeneponto','7304',NULL,NULL),
	(397,'Kab. Takalar','7305',NULL,NULL),
	(398,'Kab. Gowa','7306',NULL,NULL),
	(399,'Kab. Sinjai','7307',NULL,NULL),
	(400,'Kab. Maros','7308',NULL,NULL),
	(401,'Kab. Pangkajene Dan Kepulauan','7309',NULL,NULL),
	(402,'Kab. Barru','7310',NULL,NULL),
	(403,'Kab. Bone','7311',NULL,NULL),
	(404,'Kab. Soppeng','7312',NULL,NULL),
	(405,'Kab. Wajo','7313',NULL,NULL),
	(406,'Kab. Sidenreng Rappang','7314',NULL,NULL),
	(407,'Kab. Pinrang','7315',NULL,NULL),
	(408,'Kab. Enrekang','7316',NULL,NULL),
	(409,'Kab. Luwu','7317',NULL,NULL),
	(410,'Kab. Tana Toraja','7318',NULL,NULL),
	(411,'Kab. Luwu Utara','7322',NULL,NULL),
	(412,'Kab. Luwu Timur','7325',NULL,NULL),
	(413,'Kab. Toraja Utara','7326',NULL,NULL),
	(414,'Kota Makassar','7371',NULL,NULL),
	(415,'Kota Parepare','7372',NULL,NULL),
	(416,'Kota Palopo','7373',NULL,NULL),
	(417,'Kab. Buton','7401',NULL,NULL),
	(418,'Kab. Muna','7402',NULL,NULL),
	(419,'Kab. Konawe','7403',NULL,NULL),
	(420,'Kab. Kolaka','7404',NULL,NULL),
	(421,'Kab. Konawe Selatan','7405',NULL,NULL),
	(422,'Kab. Bombana','7406',NULL,NULL),
	(423,'Kab. Wakatobi','7407',NULL,NULL),
	(424,'Kab. Kolaka Utara','7408',NULL,NULL),
	(425,'Kab. Buton Utara','7409',NULL,NULL),
	(426,'Kab. Konawe Utara','7410',NULL,NULL),
	(427,'Kota Kendari','7471',NULL,NULL),
	(428,'Kota Baubau','7472',NULL,NULL),
	(429,'Kab. Boalemo','7501',NULL,NULL),
	(430,'Kab. Gorontalo','7502',NULL,NULL),
	(431,'Kab. Pohuwato','7503',NULL,NULL),
	(432,'Kab. Bone Bolango','7504',NULL,NULL),
	(433,'Kab. Gorontalo Utara','7505',NULL,NULL),
	(434,'Kota Gorontalo','7571',NULL,NULL),
	(435,'Kab. Majene','7601',NULL,NULL),
	(436,'Kab. Polewali Mandar','7602',NULL,NULL),
	(437,'Kab. Mamasa','7603',NULL,NULL),
	(438,'Kab. Mamuju','7604',NULL,NULL),
	(439,'Kab. Mamuju Utara','7605',NULL,NULL),
	(440,'Kab. Maluku Tenggara Barat','8101',NULL,NULL),
	(441,'Kab. Maluku Tenggara','8102',NULL,NULL),
	(442,'Kab. Maluku Tengah','8103',NULL,NULL),
	(443,'Kab. Buru','8104',NULL,NULL),
	(444,'Kab. Kepulauan Aru','8105',NULL,NULL),
	(445,'Kab. Seram Bagian Barat','8106',NULL,NULL),
	(446,'Kab. Seram Bagian Timur','8107',NULL,NULL),
	(447,'Kab. Maluku Barat Daya','8108',NULL,NULL),
	(448,'Kab. Buru Selatan','8109',NULL,NULL),
	(449,'Kota Ambon','8171',NULL,NULL),
	(450,'Kota Tual','8172',NULL,NULL),
	(451,'Kab. Halmahera Barat','8201',NULL,NULL),
	(452,'Kab. Halmahera Tengah','8202',NULL,NULL),
	(453,'Kab. Kepulauan Sula','8203',NULL,NULL),
	(454,'Kab. Halmahera Selatan','8204',NULL,NULL),
	(455,'Kab. Halmahera Utara','8205',NULL,NULL),
	(456,'Kab. Halmahera Timur','8206',NULL,NULL),
	(457,'Kab. Pulau Morotai','8207',NULL,NULL),
	(458,'Kota Ternate','8271',NULL,NULL),
	(459,'Kota Tidore Kepulauan','8272',NULL,NULL),
	(460,'Kab. Fakfak','9101',NULL,NULL),
	(461,'Kab. Kaimana','9102',NULL,NULL),
	(462,'Kab. Teluk Wondama','9103',NULL,NULL),
	(463,'Kab. Teluk Bintuni','9104',NULL,NULL),
	(464,'Kab. Manokwari','9105',NULL,NULL),
	(465,'Kab. Sorong Selatan','9106',NULL,NULL),
	(466,'Kab. Sorong','9107',NULL,NULL),
	(467,'Kab. Raja Ampat','9108',NULL,NULL),
	(468,'Kab. Tambrauw','9109',NULL,NULL),
	(469,'Kab. Maybrat','9110',NULL,NULL),
	(470,'Kota Sorong','9171',NULL,NULL),
	(471,'Kab. Merauke','9401',NULL,NULL),
	(472,'Kab. Jayawijaya','9402',NULL,NULL),
	(473,'Kab. Jayapura','9403',NULL,NULL),
	(474,'Kab. Nabire','9404',NULL,NULL),
	(475,'Kab. Kepulauan Yapen','9408',NULL,NULL),
	(476,'Kab. Biak Numfor','9409',NULL,NULL),
	(477,'Kab. Paniai','9410',NULL,NULL),
	(478,'Kab. Puncak Jaya','9411',NULL,NULL),
	(479,'Kab. Mimika','9412',NULL,NULL),
	(480,'Kab. Boven Digoel','9413',NULL,NULL),
	(481,'Kab. Mappi','9414',NULL,NULL),
	(482,'Kab. Asmat','9415',NULL,NULL),
	(483,'Kab. Yahukimo','9416',NULL,NULL),
	(484,'Kab. Pegunungan Bintang','9417',NULL,NULL),
	(485,'Kab. Tolikara','9418',NULL,NULL),
	(486,'Kab. Sarmi','9419',NULL,NULL),
	(487,'Kab. Keerom','9420',NULL,NULL),
	(488,'Kab. Waropen','9426',NULL,NULL),
	(489,'Kab. Supiori','9427',NULL,NULL),
	(490,'Kab. Mamberamo Raya','9428',NULL,NULL),
	(491,'Kab. Nduga','9429',NULL,NULL),
	(492,'Kab. Lanny Jaya','9430',NULL,NULL),
	(493,'Kab. Mamberamo Tengah','9431',NULL,NULL),
	(494,'Kab. Yalimo','9432',NULL,NULL),
	(495,'Kab. Puncak','9433',NULL,NULL),
	(496,'Kab. Dogiyai','9434',NULL,NULL),
	(497,'Kab. Intan Jaya','9435',NULL,NULL),
	(498,'Kab. Deiyai','9436',NULL,NULL),
	(499,'Kota Jayapura','9471',NULL,NULL);

/*!40000 ALTER TABLE `areas` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table autodebits
# ------------------------------------------------------------

DROP TABLE IF EXISTS `autodebits`;

CREATE TABLE `autodebits` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `member_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `credit_card_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date DEFAULT NULL,
  `signature` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) DEFAULT '0',
  `member_status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notes` text COLLATE utf8mb4_unicode_ci,
  `recuring_date` int(11) DEFAULT NULL,
  `recuring_payment` double DEFAULT NULL,
  `unpaid` double DEFAULT '0',
  `finance_status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `finance_notes` text COLLATE utf8mb4_unicode_ci,
  `bank_approval_code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank_notes` text COLLATE utf8mb4_unicode_ci,
  `bank_withdrawal` double DEFAULT NULL,
  `fo_status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fo_payment` double DEFAULT NULL,
  `branch_id` int(11) DEFAULT NULL,
  `edc_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `autodebits` WRITE;
/*!40000 ALTER TABLE `autodebits` DISABLE KEYS */;

INSERT INTO `autodebits` (`id`, `member_id`, `credit_card_id`, `date`, `signature`, `status`, `member_status`, `notes`, `recuring_date`, `recuring_payment`, `unpaid`, `finance_status`, `finance_notes`, `bank_approval_code`, `bank_notes`, `bank_withdrawal`, `fo_status`, `fo_payment`, `branch_id`, `edc_id`, `created_at`, `updated_at`)
VALUES
	('42a9bfe3-5071-4a4a-9559-e3eff8ff7b64','287f7992-7999-450e-945c-de6cec9f8a01','49fbbc0a-c20c-4956-88e1-b1dc75bca8e7','2019-06-15','https://api.empirefit.club/storage/signatures/cc/20190514_1557801731cc_sign_3525054702900002.png',1,'Unpaid',NULL,15,1400000,1400000,'UNDONE','Tagih bos',NULL,NULL,NULL,NULL,NULL,1,1,'2019-05-14 09:42:11','2019-05-15 15:20:37'),
	('c2d13a7e-8138-4057-b50d-93fbcc602859','2451f353-4551-4a93-a584-710f0cc12434','109d6d54-c40d-4e76-bb98-77616827ad60','2019-05-01','https://api.empirefit.club/storage/signatures/cc/20190513_1557744021cc_sign_3524040204850002.png',1,'Unpaid',NULL,1,1400000,1400000,'UNDONE','Tolong tagih ya',NULL,NULL,NULL,NULL,NULL,1,1,'2019-05-13 17:40:21','2019-05-14 17:29:47'),
	('d0bca643-dcdf-409d-843e-5e9d030536e5','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','3098b2c1-1c4b-4f8c-951b-5f1dfbf3490c','2019-05-01','https://api.empirefit.club/storage/signatures/cc/20190423_1555995597cc_sign_4568900511843001.png',1,'Active',NULL,1,1400000,1400000,'UNDONE',NULL,NULL,NULL,NULL,NULL,NULL,1,1,'2019-04-23 11:59:57','2019-05-14 17:23:14'),
	('d30c7cf5-3570-4036-baf4-3653d1d5abd2','f2a4a9d5-b81b-43a3-8a1e-2e0b4e20836e','6be94cc1-211d-4bb5-aec0-a87d68cc70d6','2019-06-15','https://api.empirefit.club/storage/signatures/cc/20190514_1557822891cc_sign_3308180802840002.png',1,'Unpaid',NULL,15,1400000,1400000,'UNDONE','Tagih bos, awas ae lu kalo kaga tagih',NULL,NULL,NULL,NULL,NULL,1,1,'2019-05-14 15:34:51','2019-05-15 15:29:31');

/*!40000 ALTER TABLE `autodebits` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table banks
# ------------------------------------------------------------

DROP TABLE IF EXISTS `banks`;

CREATE TABLE `banks` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `bank_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `banks` WRITE;
/*!40000 ALTER TABLE `banks` DISABLE KEYS */;

INSERT INTO `banks` (`id`, `bank_name`, `code`, `created_at`, `updated_at`)
VALUES
	(1,'BCA','014','2019-03-22 02:57:43','2019-03-22 14:17:55'),
	(2,'CIMB','022','2019-03-22 02:57:43','2019-03-22 14:19:37'),
	(3,'BNI','009','2019-03-22 02:57:43','2019-03-22 14:18:48'),
	(4,'MANDIRI','008','2019-03-22 14:18:21','2019-03-22 14:19:19'),
	(5,'BRI','002','2019-03-22 14:19:00','2019-03-22 14:19:00'),
	(6,'MEGA','426','2019-03-22 14:20:04','2019-03-22 14:20:04');

/*!40000 ALTER TABLE `banks` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table benefits
# ------------------------------------------------------------

DROP TABLE IF EXISTS `benefits`;

CREATE TABLE `benefits` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `benefit_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `benefits` WRITE;
/*!40000 ALTER TABLE `benefits` DISABLE KEYS */;

INSERT INTO `benefits` (`id`, `benefit_name`, `created_at`, `updated_at`)
VALUES
	(1,'03-Gym Equipment','2019-03-22 02:57:43','2019-03-25 11:38:58'),
	(2,'01-Regular Class','2019-03-22 02:57:43','2019-03-25 11:38:30'),
	(3,'02-Special Class','2019-03-22 02:57:43','2019-03-25 11:38:38'),
	(4,'04-Personal Trainer','2019-03-22 02:57:43','2019-03-25 11:39:07'),
	(6,'05-Physiotherapy','2019-04-26 15:08:02','2019-05-06 19:41:04');

/*!40000 ALTER TABLE `benefits` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table branches
# ------------------------------------------------------------

DROP TABLE IF EXISTS `branches`;

CREATE TABLE `branches` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `branch_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `branch_code` varchar(22) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` text COLLATE utf8mb4_unicode_ci,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `branches` WRITE;
/*!40000 ALTER TABLE `branches` DISABLE KEYS */;

INSERT INTO `branches` (`id`, `branch_name`, `branch_code`, `address`, `email`, `phone`, `created_at`, `updated_at`)
VALUES
	(1,'Jakarta - WTC','0101','World Trade Center Jakarta | Rooftop\nJl. Sudirman 29-31, Kuningan, Jakarta Selatan 12920','info@empirefitclub.com','087875568795','2019-03-22 02:57:42','2019-05-08 16:06:33'),
	(2,'Bali','0201','Jl. Raya Kedampang No.88A\nKerobokan, Kuta Utara, Kabupaten Badung\nBali 80361','bali@empirefitclub.com','081239998122','2019-03-22 02:57:42','2019-05-08 16:06:11');

/*!40000 ALTER TABLE `branches` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table class_attendances
# ------------------------------------------------------------

DROP TABLE IF EXISTS `class_attendances`;

CREATE TABLE `class_attendances` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `member_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `automatic` tinyint(1) DEFAULT '0',
  `user_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `class_attendances` WRITE;
/*!40000 ALTER TABLE `class_attendances` DISABLE KEYS */;

INSERT INTO `class_attendances` (`id`, `member_id`, `created_at`, `updated_at`, `date`, `time`, `automatic`, `user_id`)
VALUES
	('109357ff-4f63-425b-a568-e6d8653451ed','2451f353-4551-4a93-a584-710f0cc12434','2019-05-13 18:18:56','2019-05-13 18:18:56','2019-05-13','18:18:56',1,NULL),
	('117cf874-f1af-4c5a-b467-babf032cea01','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-05-06 21:01:09','2019-05-06 21:01:09','2019-05-06','21:01:09',1,NULL),
	('1f7bcbbe-d264-4c4b-8a01-ade676e45d12','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-05-06 20:53:40','2019-05-06 20:53:40','2019-05-06','20:53:40',1,NULL),
	('2b1d4dd0-45f0-40b2-9282-a12284852431','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-05-07 00:49:13','2019-05-07 00:49:13','2019-05-07','00:49:13',1,NULL),
	('302b7fb4-d03b-4dc7-8688-ec64eaa98d07','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-05-07 01:08:41','2019-05-07 01:08:41','2019-05-07','01:08:41',1,NULL),
	('3397dfd4-8ba3-41f1-8663-fa2bde9d15ca','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-05-07 01:08:18','2019-05-07 01:08:18','2019-05-07','01:08:18',1,NULL),
	('372a9130-ac52-406a-863c-84a1d9191a5c','d8e67434-c455-4232-8171-0e955f6279fb','2019-04-23 14:52:16','2019-04-23 14:52:16','2019-04-23','14:52:16',1,NULL),
	('3ec6a02a-2ab2-4479-9533-592777379941','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-05-07 01:00:10','2019-05-07 01:00:10','2019-05-07','01:00:10',1,NULL),
	('48212b67-faeb-4ac8-9dea-6a4e4be71888','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-04-23 12:05:23','2019-04-23 12:05:23','2019-04-23','12:05:23',0,'fee203c4-017c-4482-aa6e-dbf671a91885'),
	('55cb6808-df71-47d4-a395-ef6cc88701ea','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-05-07 01:09:07','2019-05-07 01:09:07','2019-05-07','01:09:07',1,NULL),
	('5696f1f7-7033-477b-ba38-14fe9849a6f0','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-05-07 00:46:09','2019-05-07 00:46:09','2019-05-07','00:46:09',1,NULL),
	('5d38cbb1-a8a8-42a8-b581-bb675765c651','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-05-07 01:24:22','2019-05-07 01:24:22','2019-05-07','01:24:22',1,NULL),
	('7724d841-d6a6-43d7-a781-d4be51ff9d92','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-05-07 01:39:25','2019-05-07 01:39:25','2019-05-07','01:39:25',1,NULL),
	('7dd02293-cfcd-4645-8ebe-a07d4a6648ab','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-04-23 12:06:46','2019-04-23 12:06:46','2019-04-23','12:06:46',1,NULL),
	('85131385-4c48-44c9-bad4-4f55fdc15f56','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-04-23 12:07:01','2019-04-23 12:07:01','2019-04-23','12:07:01',1,NULL),
	('8695e54f-4428-43a8-8ca2-53879503c66f','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-04-23 12:06:24','2019-04-23 12:06:24','2019-04-23','12:06:24',1,NULL),
	('874e4a16-7914-4aec-847c-43c4b0a606cf','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-05-07 00:59:28','2019-05-07 00:59:28','2019-05-07','00:59:28',1,NULL),
	('8818b535-c319-4b05-ba13-39170b9545f3','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-05-07 01:02:34','2019-05-07 01:02:34','2019-05-07','01:02:34',1,NULL),
	('93a7447d-a7b9-44f3-a8dc-c13650ef0088','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-05-07 00:54:01','2019-05-07 00:54:01','2019-05-07','00:54:01',1,NULL),
	('9f7fd223-cdbb-406c-be7f-d7df17c68b7a','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-05-07 01:39:56','2019-05-07 01:39:56','2019-05-07','01:39:56',1,NULL),
	('aac2c825-52f5-4dd2-b891-d54552db2e6a','2451f353-4551-4a93-a584-710f0cc12434','2019-05-13 18:18:27','2019-05-13 18:18:27','2019-05-13','18:18:27',1,NULL),
	('ab1e687f-df61-4b3e-ab6c-64c1fa5ee56e','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-05-07 01:36:45','2019-05-07 01:36:45','2019-05-07','01:36:45',1,NULL),
	('b0c6610d-aa43-448c-a38c-5cc83d603157','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-05-07 01:07:10','2019-05-07 01:07:10','2019-05-07','01:07:10',1,NULL),
	('b3b07d93-19de-442d-ba60-90a5805fb79d','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-05-07 01:09:49','2019-05-07 01:09:49','2019-05-07','01:09:49',1,NULL),
	('bd5cc93f-b0b0-4af0-93c2-34d141556dfa','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-05-07 01:13:31','2019-05-07 01:13:31','2019-05-07','01:13:31',1,NULL),
	('c30ece74-f358-4c15-9ee0-4a0b92bf5117','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-04-23 12:03:56','2019-04-23 12:03:56','2019-04-23','12:03:56',1,NULL),
	('c3c3493a-71f8-4337-bb6c-938ac907e5e1','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-05-07 00:52:14','2019-05-07 00:52:14','2019-05-07','00:52:14',1,NULL),
	('ca89a07a-54fb-4f7e-89cd-73fe56824896','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-05-07 01:03:11','2019-05-07 01:03:11','2019-05-07','01:03:11',1,NULL),
	('cc9ca375-218c-40e6-b348-d0b91849c9d8','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-05-06 21:00:49','2019-05-06 21:00:49','2019-05-06','21:00:49',1,NULL),
	('cd8f70a2-71d1-42ed-a0d3-e070bc35bf35','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-04-23 12:04:35','2019-04-23 12:04:35','2019-04-23','12:04:35',0,'fee203c4-017c-4482-aa6e-dbf671a91885'),
	('d220f42a-79d0-441b-b22a-f415e7b0e51b','d8e67434-c455-4232-8171-0e955f6279fb','2019-04-23 14:53:10','2019-04-23 14:53:10','2019-04-23','14:53:10',0,'fee203c4-017c-4482-aa6e-dbf671a91885'),
	('e33f3728-de4e-4b8a-8c77-51bdd25291dd','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-05-09 10:39:54','2019-05-09 10:39:54','2019-05-09','10:39:54',1,NULL),
	('e5d7fdaa-375d-446f-aa60-0397d2f00f97','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-05-07 01:23:38','2019-05-07 01:23:38','2019-05-07','01:23:38',1,NULL),
	('e650fefa-6622-4737-99f7-68731f709e24','2451f353-4551-4a93-a584-710f0cc12434','2019-05-13 18:18:56','2019-05-13 18:18:56','2019-05-13','18:18:56',1,NULL),
	('f30ef257-6204-485e-92e7-441a05de5378','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-05-07 00:56:58','2019-05-07 00:56:58','2019-05-07','00:56:58',1,NULL),
	('fd3e7bd2-cb5d-4ac9-90b3-9726739fe04e','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','2019-05-06 21:00:58','2019-05-06 21:00:58','2019-05-06','21:00:58',1,NULL);

/*!40000 ALTER TABLE `class_attendances` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table class_registrations
# ------------------------------------------------------------

DROP TABLE IF EXISTS `class_registrations`;

CREATE TABLE `class_registrations` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `schedule_id` int(11) unsigned DEFAULT NULL,
  `member_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `automatic` tinyint(1) DEFAULT '0',
  `canceled` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `canceled_by` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `member_partner_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `branch_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `class_registrations` WRITE;
/*!40000 ALTER TABLE `class_registrations` DISABLE KEYS */;

INSERT INTO `class_registrations` (`id`, `schedule_id`, `member_id`, `user_id`, `date`, `time`, `automatic`, `canceled`, `created_at`, `updated_at`, `canceled_by`, `member_partner_id`, `branch_id`)
VALUES
	('049c4806-b149-4def-b0f4-a3802293256f',3,NULL,'fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-06','13:32:52',0,0,'2019-05-06 13:32:52','2019-05-06 13:32:52',NULL,'0a0ffcdc-26cc-4eae-b6fa-02081e3bd16e',1),
	('0a54bc76-5a8e-4997-ab7c-12a63323be06',26,NULL,'eba4046d-4f51-4476-8ba2-8071cb125382','2019-05-08','12:39:49',0,0,'2019-05-08 12:39:49','2019-05-08 12:39:49',NULL,'2f7a8280-1ea2-49e3-9c75-47992bb9fc40',1),
	('142fcc6c-dedb-4ce0-af74-626bb3bc9411',48,'ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-09','10:39:54',0,1,'2019-05-09 10:39:54','2019-05-09 10:40:49','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,1),
	('14e4f3ff-d201-448e-8cb7-6e05fc54a461',21,'ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','fee203c4-017c-4482-aa6e-dbf671a91885','2019-04-23','12:07:28',1,1,'2019-04-23 12:07:28','2019-04-23 12:08:51','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,1),
	('189397b5-e32a-49ee-ada1-b169e1dbac62',11,'2451f353-4551-4a93-a584-710f0cc12434','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-13','18:18:27',1,0,'2019-05-13 18:18:27','2019-05-13 18:18:56',NULL,NULL,1),
	('1ead6902-6135-4040-8bcf-95d6cfd23237',21,'d8e67434-c455-4232-8171-0e955f6279fb','fee203c4-017c-4482-aa6e-dbf671a91885','2019-04-23','14:57:25',1,1,'2019-04-23 14:57:25','2019-04-23 14:58:07','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,1),
	('1ebd8789-72b5-4067-b35b-7a577137a87d',19,NULL,'fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-14','12:06:05',0,0,'2019-05-14 12:06:05','2019-05-14 12:06:05',NULL,'b324a02a-c463-4432-bf95-bd28f7c48262',1),
	('2b903474-aebc-48a7-a18f-7fd8c2570a14',32,NULL,'eba4046d-4f51-4476-8ba2-8071cb125382','2019-05-02','10:51:15',0,0,'2019-05-02 10:51:15','2019-05-02 10:51:15',NULL,'fa89391d-b0ce-41f1-b87e-3f86b816e73f',1),
	('3b2314a9-5082-48bc-b976-2567eacb5e18',18,NULL,'fee203c4-017c-4482-aa6e-dbf671a91885','2019-04-23','12:37:49',0,0,'2019-04-23 12:37:49','2019-04-23 12:37:49',NULL,'8a996418-55e2-4a14-bdb6-4fbdc2003d71',1),
	('57ea40d7-bdbf-4c84-bf1d-643011d02280',28,NULL,'eba4046d-4f51-4476-8ba2-8071cb125382','2019-05-08','12:40:43',0,0,'2019-05-08 12:40:43','2019-05-08 12:40:43',NULL,'ec50d397-f05f-4f0d-a040-f41ffff4b31a',1),
	('5aae6d94-cd1f-4e11-bc28-548974d7839a',11,NULL,'fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-13','18:22:50',0,0,'2019-05-13 18:22:50','2019-05-13 18:22:50',NULL,'96d5fe74-c841-4e16-91c3-6d8b4e46c15c',1),
	('5d9760b5-08bd-4319-bdcb-92e3889f3d32',29,NULL,'fee203c4-017c-4482-aa6e-dbf671a91885','2019-04-23','16:15:29',0,0,'2019-04-23 16:15:29','2019-04-23 16:15:29',NULL,'549d92c8-040c-4225-bfdf-7d0b713d5e8c',1),
	('60b9405e-0d0f-492a-b884-72fe247416c1',12,NULL,'fee203c4-017c-4482-aa6e-dbf671a91885','2019-04-29','14:22:15',0,0,'2019-04-29 14:22:15','2019-04-29 14:22:15',NULL,'75bc4d36-cacf-4ee7-9a6b-c3036ae718f0',1),
	('629fc439-ada7-4111-bae1-04cd9007885a',32,NULL,'eba4046d-4f51-4476-8ba2-8071cb125382','2019-05-02','18:20:06',0,0,'2019-05-02 18:20:06','2019-05-02 18:20:06',NULL,'83a92b9e-fb07-478c-a190-e650f28fc733',1),
	('81e67439-8b9f-4e7e-a2ef-b7d1fde8d359',32,NULL,'eba4046d-4f51-4476-8ba2-8071cb125382','2019-05-02','15:14:53',0,0,'2019-05-02 15:14:53','2019-05-02 15:14:53',NULL,'c361b143-2d1d-4f40-b588-e15445358490',1),
	('862529ba-36cb-4b40-ae71-2515889fad15',22,'ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','fee203c4-017c-4482-aa6e-dbf671a91885','2019-04-23','12:09:11',0,1,'2019-04-23 12:09:11','2019-04-23 12:09:58','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,2),
	('896b6049-6e4c-417a-9ae2-7a6ca3bdde59',18,NULL,'eba4046d-4f51-4476-8ba2-8071cb125382','2019-04-30','11:13:36',0,0,'2019-04-30 11:13:36','2019-04-30 11:13:36',NULL,'e992dd46-d4d5-47a7-ada2-a711b100fe7d',1),
	('8a093b96-4e2b-4af0-af65-fb4f8808868f',33,NULL,'fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-08','15:01:19',0,0,'2019-05-08 15:01:19','2019-05-08 15:01:19',NULL,'b0ff03fc-73b3-4df8-99b2-b754056b5c8d',1),
	('8aea9ae1-a04c-48b9-bb8f-74b601acb409',18,NULL,'fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-07','10:35:14',0,0,'2019-05-07 10:35:14','2019-05-07 10:35:14',NULL,'4d9a826d-d912-48e9-a7aa-811028ebf0c6',1),
	('9c4220b8-ab7f-4363-8f0b-61edf1513ce3',44,'ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-06','21:01:09',1,1,'2019-05-06 21:01:09','2019-05-06 21:01:28','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,1),
	('9fdd32b6-cdc9-45af-a087-aa2451b65c9b',44,NULL,'fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-06','19:16:27',0,0,'2019-05-06 19:16:27','2019-05-06 19:16:27',NULL,'5eeb361f-a981-44cd-a8d5-3943a9487ccd',1),
	('ae9f32e6-4026-4975-a69e-47b887e72a0b',44,NULL,'fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-06','20:39:22',0,0,'2019-05-06 20:39:22','2019-05-06 20:39:22',NULL,'4102c557-496c-4a75-8534-9c41fadaff61',1),
	('afa3fa21-d122-4d5f-91d4-6b7e65dcf64b',33,NULL,'eba4046d-4f51-4476-8ba2-8071cb125382','2019-05-06','10:54:08',0,0,'2019-05-02 10:54:08','2019-05-02 10:54:08',NULL,'39566b65-d8b7-4dc6-808f-7a8c96d21308',1),
	('b2f85653-3a95-4b1b-a016-6a790c6701b8',44,NULL,'fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-06','19:18:11',0,0,'2019-05-06 19:18:11','2019-05-06 19:18:11',NULL,'bc2ab9c6-573d-497b-9d85-ef2287fbe195',1),
	('b789ab6e-fc1b-4445-bab5-b13eda053408',19,NULL,'fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-07','12:31:08',0,0,'2019-05-07 12:31:08','2019-05-07 12:31:08',NULL,'e20dccfb-159b-497c-87e2-22aa329d2400',1),
	('bf3210ad-129d-41ca-933d-a287e47a63ad',16,'ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-07','01:39:25',0,1,'2019-05-07 01:39:25','2019-05-07 01:40:20','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,1),
	('c47059f3-277f-4e87-b993-59b1c026ee03',20,'d8e67434-c455-4232-8171-0e955f6279fb','fee203c4-017c-4482-aa6e-dbf671a91885','2019-04-23','15:07:43',0,0,'2019-04-23 15:07:43','2019-04-23 15:07:43',NULL,NULL,2),
	('c9ac9e86-98c8-4158-8664-48e6d40dbe2a',12,'2451f353-4551-4a93-a584-710f0cc12434','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-13','18:18:56',0,0,'2019-05-13 18:18:56','2019-05-13 18:18:56',NULL,NULL,1),
	('cb5ece91-ba6d-4955-9569-4b04abd6cc1e',16,NULL,'fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-13','18:26:03',0,0,'2019-05-13 18:26:03','2019-05-13 18:26:03',NULL,'d04e555f-fc8c-404c-bb46-f7d175872113',1),
	('cd223a97-fd3c-4764-a488-51fd2883afd0',32,NULL,'eba4046d-4f51-4476-8ba2-8071cb125382','2019-05-02','16:29:19',0,0,'2019-05-02 16:29:19','2019-05-02 16:29:19',NULL,'3fd20a40-ff09-426b-964b-c6800fb4ca47',1),
	('d21296c5-8299-4c44-adca-5eb66712e272',3,NULL,'fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-06','13:35:16',0,0,'2019-05-06 13:35:16','2019-05-06 13:35:16',NULL,'8e522808-fd7c-4ee0-85d4-10f5df2df481',1),
	('e4468bdb-ae33-4647-917e-f4bd84d1909b',32,NULL,'eba4046d-4f51-4476-8ba2-8071cb125382','2019-05-02','16:30:37',0,0,'2019-05-02 16:30:37','2019-05-02 16:30:37',NULL,'c34e57e6-b0da-4afd-b574-fa8749490f5d',1);

/*!40000 ALTER TABLE `class_registrations` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table club_benefits
# ------------------------------------------------------------

DROP TABLE IF EXISTS `club_benefits`;

CREATE TABLE `club_benefits` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `member_type_id` int(10) unsigned NOT NULL,
  `benefit_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `club_benefits` WRITE;
/*!40000 ALTER TABLE `club_benefits` DISABLE KEYS */;

INSERT INTO `club_benefits` (`id`, `member_type_id`, `benefit_id`, `created_at`, `updated_at`)
VALUES
	(1,6,1,'2019-03-22 15:53:14','2019-03-22 15:53:14'),
	(2,6,4,'2019-03-22 15:53:14','2019-03-22 15:53:14'),
	(3,6,5,'2019-03-22 15:53:14','2019-03-22 15:53:14'),
	(8,7,1,'2019-03-22 16:05:31','2019-03-22 16:05:31'),
	(9,7,3,'2019-03-22 16:05:31','2019-03-22 16:05:31'),
	(10,7,4,'2019-03-22 16:05:31','2019-03-22 16:05:31'),
	(18,6,1,'2019-03-23 18:31:56','2019-03-23 18:31:56'),
	(19,6,2,'2019-03-23 18:31:56','2019-03-23 18:31:56'),
	(20,6,3,'2019-03-23 18:31:56','2019-03-23 18:31:56'),
	(21,6,4,'2019-03-23 18:31:56','2019-03-23 18:31:56'),
	(22,6,1,'2019-03-23 18:32:41','2019-03-23 18:32:41'),
	(23,6,2,'2019-03-23 18:32:41','2019-03-23 18:32:41'),
	(24,6,3,'2019-03-23 18:32:41','2019-03-23 18:32:41'),
	(25,6,4,'2019-03-23 18:32:41','2019-03-23 18:32:41'),
	(26,6,1,'2019-03-23 18:38:15','2019-03-23 18:38:15'),
	(27,6,2,'2019-03-23 18:38:15','2019-03-23 18:38:15'),
	(28,6,3,'2019-03-23 18:38:15','2019-03-23 18:38:15'),
	(29,6,4,'2019-03-23 18:38:15','2019-03-23 18:38:15'),
	(77,2,2,'2019-03-27 14:30:40','2019-03-27 14:30:40'),
	(78,4,2,'2019-03-27 14:30:52','2019-03-27 14:30:52'),
	(79,4,3,'2019-03-27 14:30:52','2019-03-27 14:30:52'),
	(86,1,1,'2019-04-15 18:47:10','2019-04-15 18:47:10'),
	(87,1,2,'2019-04-15 18:47:10','2019-04-15 18:47:10'),
	(88,1,3,'2019-04-15 18:47:10','2019-04-15 18:47:10'),
	(97,5,1,'2019-04-22 20:10:34','2019-04-22 20:10:34'),
	(98,5,2,'2019-04-22 20:10:34','2019-04-22 20:10:34'),
	(99,5,3,'2019-04-22 20:10:34','2019-04-22 20:10:34'),
	(104,3,1,'2019-04-23 01:33:21','2019-04-23 01:33:21'),
	(105,3,2,'2019-04-23 01:33:21','2019-04-23 01:33:21'),
	(106,3,3,'2019-04-23 01:33:21','2019-04-23 01:33:21'),
	(107,3,4,'2019-04-23 01:33:21','2019-04-23 01:33:21');

/*!40000 ALTER TABLE `club_benefits` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table credit_cards
# ------------------------------------------------------------

DROP TABLE IF EXISTS `credit_cards`;

CREATE TABLE `credit_cards` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `member_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `card_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `card_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `exp_month` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `bank_id` int(10) unsigned DEFAULT NULL,
  `exp_year` int(11) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `credit_cards` WRITE;
/*!40000 ALTER TABLE `credit_cards` DISABLE KEYS */;

INSERT INTO `credit_cards` (`id`, `member_id`, `card_name`, `card_number`, `exp_month`, `created_at`, `updated_at`, `bank_id`, `exp_year`, `status`)
VALUES
	('005a0eb2-0833-4e95-8edf-792fd6009fd8','d8e67434-c455-4232-8171-0e955f6279fb','Indra Alfonso','9865789000564',2,'2019-04-23 14:36:35','2019-04-23 15:50:00',1,2020,0),
	('0c743ae7-5461-4bfb-92a1-8e2ce8dfcc96','d8e67434-c455-4232-8171-0e955f6279fb','Indra Alfonso','76589045634',9,'2019-04-23 15:50:00','2019-04-23 15:50:00',1,2022,1),
	('109d6d54-c40d-4e76-bb98-77616827ad60','2451f353-4551-4a93-a584-710f0cc12434','Chistoper','3422457354497549',20,'2019-05-13 17:21:49','2019-05-13 18:13:31',1,2020,0),
	('178acdf6-860a-43ab-83b7-47ed21ab0d8e','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','FAISAL MURKADI','09876542123455',NULL,'2019-04-23 12:21:44','2019-04-23 12:21:44',1,NULL,1),
	('2bfd55bb-642b-4079-97aa-24f31897136f','287f7992-7999-450e-945c-de6cec9f8a01','Richard','4000001234567899',20,'2019-05-13 16:47:38','2019-05-13 17:24:38',3,2020,0),
	('3098b2c1-1c4b-4f8c-951b-5f1dfbf3490c','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','FAISAL MURKADI','0987654321',9,'2019-04-23 11:59:24','2019-04-23 12:12:08',1,2022,0),
	('30b7e907-bf2c-4eaf-aab6-687441177586','2451f353-4551-4a93-a584-710f0cc12434','Charles','5588320123456789',20,'2019-05-13 16:58:17','2019-05-13 17:21:49',4,2020,0),
	('37f70b6a-d0fb-49f3-9a19-73d02e8c385e','f2a4a9d5-b81b-43a3-8a1e-2e0b4e20836e','Robert','489712380002160',20,'2019-05-13 16:37:43','2019-05-13 17:26:34',1,2020,0),
	('49a4c153-5d4f-4979-826f-9f0292ea31d6','2451f353-4551-4a93-a584-710f0cc12434','Charlesih','5588320123456790',20,'2019-05-13 18:13:31','2019-05-13 18:13:31',1,2020,1),
	('49fbbc0a-c20c-4956-88e1-b1dc75bca8e7','287f7992-7999-450e-945c-de6cec9f8a01','Riza Alif','2322123456',12,'2019-05-14 09:41:37','2019-05-14 09:41:37',1,2020,1),
	('6be94cc1-211d-4bb5-aec0-a87d68cc70d6','287f7992-7999-450e-945c-de6cec9f8a01','Raymond','5432481234567890',20,'2019-05-13 17:24:38','2019-05-14 15:34:32',1,2020,0),
	('74be58fa-64d0-497c-86c8-ea152836bc44','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','FAISAL MURKADI','0987654322',9,'2019-04-23 12:12:08','2019-04-23 12:21:44',1,2022,0),
	('916f8eed-b93f-43d8-8839-2b4d735b41ab','f2a4a9d5-b81b-43a3-8a1e-2e0b4e20836e','Lawrence','4167005103323842',20,'2019-05-13 17:26:34','2019-05-13 17:26:34',2,2020,1),
	('ad4c6bab-3bf3-4da2-a4cd-544ae80b6ffb','287f7992-7999-450e-945c-de6cec9f8a01','Fahli','890735467597888',20,'2019-05-14 09:25:56','2019-05-14 09:41:37',1,2020,0);

/*!40000 ALTER TABLE `credit_cards` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table devices
# ------------------------------------------------------------

DROP TABLE IF EXISTS `devices`;

CREATE TABLE `devices` (
  `sn` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `device_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vc` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ac` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `vkey` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `branch_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`sn`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `devices` WRITE;
/*!40000 ALTER TABLE `devices` DISABLE KEYS */;

INSERT INTO `devices` (`sn`, `device_name`, `vc`, `ac`, `vkey`, `created_at`, `updated_at`, `branch_id`)
VALUES
	('J720J00885','JKT-WTC-FP02','4055692E38226F6','0FD189A99B2B89D084F88JBT','DDA2F36AC747D8AAB8B303B9FEBF734A','2019-05-09 16:22:24','2019-05-10 13:00:51',1),
	('J720J01145','JKT-WTC-FP01','86015B213B08EE7','7SC08477E1D97F79F90E4LHN','2EF42B341BD579168FDC63CA6791F04A','2019-03-19 23:49:35','2019-05-10 13:00:39',1);

/*!40000 ALTER TABLE `devices` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table dropin_companies
# ------------------------------------------------------------

DROP TABLE IF EXISTS `dropin_companies`;

CREATE TABLE `dropin_companies` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `partner_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `dropin_companies` WRITE;
/*!40000 ALTER TABLE `dropin_companies` DISABLE KEYS */;

INSERT INTO `dropin_companies` (`id`, `partner_name`, `created_at`, `updated_at`)
VALUES
	(1,'DOOGETHER','2019-03-22 02:57:43','2019-04-01 17:29:46'),
	(2,'GUAVA','2019-03-22 02:57:43','2019-03-22 15:01:32'),
	(3,'CLASSPASS','2019-04-08 17:03:34','2019-04-08 17:03:34');

/*!40000 ALTER TABLE `dropin_companies` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table edcs
# ------------------------------------------------------------

DROP TABLE IF EXISTS `edcs`;

CREATE TABLE `edcs` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `branch_id` int(10) unsigned NOT NULL,
  `bank_id` int(10) unsigned NOT NULL,
  `mid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `edcs` WRITE;
/*!40000 ALTER TABLE `edcs` DISABLE KEYS */;

INSERT INTO `edcs` (`id`, `branch_id`, `bank_id`, `mid`, `tid`, `created_at`, `updated_at`)
VALUES
	(1,1,3,'000100710000092','70009201','2019-04-08 21:29:56','2019-04-09 20:06:58');

/*!40000 ALTER TABLE `edcs` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table foods
# ------------------------------------------------------------

DROP TABLE IF EXISTS `foods`;

CREATE TABLE `foods` (
  `id` char(36) NOT NULL DEFAULT '',
  `idtrx` varchar(255) NOT NULL DEFAULT '',
  `member_id` char(36) NOT NULL DEFAULT '',
  `trx_date` datetime DEFAULT NULL,
  `paid_date` datetime DEFAULT NULL,
  `item` varchar(255) DEFAULT NULL,
  `idr` double DEFAULT '0',
  `trx_verification` varchar(255) DEFAULT NULL,
  `paid` tinyint(1) DEFAULT '0',
  `type` varchar(50) DEFAULT NULL,
  `trace_number` varchar(255) DEFAULT NULL,
  `paid_verification` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `foods` WRITE;
/*!40000 ALTER TABLE `foods` DISABLE KEYS */;

INSERT INTO `foods` (`id`, `idtrx`, `member_id`, `trx_date`, `paid_date`, `item`, `idr`, `trx_verification`, `paid`, `type`, `trace_number`, `paid_verification`, `created_at`, `updated_at`)
VALUES
	('1ac21f96-a062-4018-8ee9-1fbad35dec0d','F&B/EFC/20190506/0002','84552c66-f062-4d78-8b7f-43c2cf2bc287','2019-05-06 19:42:29','2019-05-06 19:42:50','fit n bar',8000,'JDI-03-Riza',1,'Cash',NULL,'JDI-03-Riza','2019-05-06 19:42:29','2019-05-06 19:42:50'),
	('1e8481e6-51f9-4c07-a931-1e62a980bba7','F&B/EFC/20190513/0002','2451f353-4551-4a93-a584-710f0cc12434','2019-05-13 18:19:37','2019-05-13 18:20:19','Aqua 5 Botol',7500,'JDI-03-Riza',1,'Cash',NULL,'JDI-03-Riza','2019-05-13 18:19:37','2019-05-13 18:20:19'),
	('1efe75ae-fc84-48c4-8973-95cf628f6705','F&B/EFC/20190514/0002','d8e67434-c455-4232-8171-0e955f6279fb','2019-05-14 12:03:42','2019-05-14 12:04:14','Aqua 5',10000,'JDI-03-Riza',1,'Cash',NULL,'JDI-03-Riza','2019-05-14 12:03:42','2019-05-14 12:04:14'),
	('253510cc-4dde-4c8b-89e8-5b33e9170b7f','F&B/EFC/20190513/0002','2451f353-4551-4a93-a584-710f0cc12434','2019-05-13 18:20:02','2019-05-13 18:20:19','Milo 5',10000,'JDI-03-Riza',1,'Cash',NULL,'JDI-03-Riza','2019-05-13 18:20:02','2019-05-13 18:20:19'),
	('319cb3b7-08d8-43fd-8ded-93b33e5707ff','F&B/EFC/20190506/0002','84552c66-f062-4d78-8b7f-43c2cf2bc287','2019-05-06 19:41:47','2019-05-06 19:42:50','aqua 5 buah',20000,'JDI-03-Riza',1,'Cash',NULL,'JDI-03-Riza','2019-05-06 19:41:47','2019-05-06 19:42:50'),
	('832bb0ad-3d4e-4321-a41b-d4ee81b0819e','F&B/EFC/20190507/0002','84552c66-f062-4d78-8b7f-43c2cf2bc287','2019-05-07 10:26:06','2019-05-07 10:26:25','2 Air Mineral',10000,'JDI-03-Riza',1,'Cash',NULL,'JDI-03-Riza','2019-05-07 10:26:06','2019-05-07 10:26:25'),
	('a50f64ba-a717-48e1-9d88-b80a182e8a2a','FNB/EFC/2019050300001','d8e67434-c455-4232-8171-0e955f6279fb','2019-05-03 00:00:00','2019-05-03 16:33:55','Aqua 500 ml',150000,'JDI-03-Riza',1,'Cash',NULL,'JDI-03-Riza','2019-05-03 15:08:01','2019-05-03 16:33:55'),
	('b7c0a619-6feb-46b5-9b38-37a36415662c','F&B/EFC/20190503/0002','d8e67434-c455-4232-8171-0e955f6279fb','2019-05-03 00:00:00','2019-05-03 16:33:55','Aqua 500 ml',150000,'JDI-03-Riza',1,'Cash',NULL,'JDI-03-Riza','2019-05-03 15:46:44','2019-05-03 16:33:55');

/*!40000 ALTER TABLE `foods` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table group_positions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `group_positions`;

CREATE TABLE `group_positions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `position_id` int(10) unsigned NOT NULL,
  `staff_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `group_positions` WRITE;
/*!40000 ALTER TABLE `group_positions` DISABLE KEYS */;

INSERT INTO `group_positions` (`id`, `position_id`, `staff_id`, `created_at`, `updated_at`)
VALUES
	(155,6,'b28343b7-ff92-4b45-91d9-1030a5557652','2019-03-26 09:19:44','2019-03-26 09:19:44'),
	(157,6,'97cd18c6-f48e-4aba-8fde-360a3b67ba73','2019-03-26 09:20:16','2019-03-26 09:20:16'),
	(233,7,'6426d4a9-74f1-487d-83ac-c3f64a12489c','2019-03-28 00:41:18','2019-03-28 00:41:18'),
	(352,7,'79848382-aa05-4042-a965-6d9e3c73b064','2019-04-01 11:55:26','2019-04-01 11:55:26'),
	(356,6,'64dae435-d31f-42af-95f6-ffb4714c92b2','2019-04-01 12:15:46','2019-04-01 12:15:46'),
	(357,6,'766c4dfc-b8c3-4590-9e28-2073221736d9','2019-04-01 12:32:59','2019-04-01 12:32:59'),
	(394,7,'cc3b0881-303f-4af9-bc5e-fbf914a0d6e0','2019-04-04 15:51:17','2019-04-04 15:51:17'),
	(397,7,'b332d484-c00c-4dab-8c88-6ebe70906c37','2019-04-04 16:14:31','2019-04-04 16:14:31'),
	(398,7,'175698ed-c11a-42f0-ae35-95d1c74e87ba','2019-04-04 16:15:31','2019-04-04 16:15:31'),
	(399,7,'56872221-3df7-48ca-badc-a349cbc76332','2019-04-04 16:18:26','2019-04-04 16:18:26'),
	(400,7,'681939d0-b9b6-42d5-b2ac-39eb253b227a','2019-04-04 16:18:51','2019-04-04 16:18:51'),
	(401,7,'5827e08f-a995-4cfe-9d2f-1b6857ddbcb1','2019-04-04 16:23:17','2019-04-04 16:23:17'),
	(402,7,'2b271f7f-057a-4baa-96e4-252eaa635313','2019-04-04 16:28:30','2019-04-04 16:28:30'),
	(403,7,'9690d4c2-458d-4381-91d8-3ee423fed687','2019-04-04 16:34:03','2019-04-04 16:34:03'),
	(404,7,'aa4944ae-2e6f-4882-9fb5-919e933ea0e3','2019-04-04 16:46:17','2019-04-04 16:46:17'),
	(405,7,'aa7430f6-db1e-44e9-af8b-8c4f64be9d94','2019-04-04 16:49:04','2019-04-04 16:49:04'),
	(406,7,'4f2912bf-2f60-4547-a5e7-664472d78395','2019-04-04 16:49:43','2019-04-04 16:49:43'),
	(407,7,'342da70d-0c33-4a90-a18b-dabecec530ea','2019-04-04 17:12:05','2019-04-04 17:12:05'),
	(429,6,'eb622652-922f-4cad-b93d-9e2bdf1aefd4','2019-04-13 18:49:14','2019-04-13 18:49:14'),
	(434,7,'ae48457a-0633-4d5d-9298-8ab37a6f1692','2019-04-22 17:26:46','2019-04-22 17:26:46'),
	(442,2,'a47ebb5e-e80b-4e16-8644-90e4536fa265','2019-04-22 21:23:03','2019-04-22 21:23:03'),
	(443,6,'a47ebb5e-e80b-4e16-8644-90e4536fa265','2019-04-22 21:23:03','2019-04-22 21:23:03'),
	(446,3,'9cc32926-a913-4b0b-80c0-55b0e06c0215','2019-04-23 09:58:37','2019-04-23 09:58:37'),
	(447,5,'9cc32926-a913-4b0b-80c0-55b0e06c0215','2019-04-23 09:58:37','2019-04-23 09:58:37'),
	(448,6,'9cc32926-a913-4b0b-80c0-55b0e06c0215','2019-04-23 09:58:37','2019-04-23 09:58:37'),
	(449,7,'9cc32926-a913-4b0b-80c0-55b0e06c0215','2019-04-23 09:58:37','2019-04-23 09:58:37'),
	(450,3,'9afa7000-970b-4680-8d00-968b43075454','2019-04-23 11:40:29','2019-04-23 11:40:29'),
	(451,6,'9afa7000-970b-4680-8d00-968b43075454','2019-04-23 11:40:29','2019-04-23 11:40:29'),
	(452,7,'9afa7000-970b-4680-8d00-968b43075454','2019-04-23 11:40:29','2019-04-23 11:40:29'),
	(453,5,'c3a3a1e1-2adf-41ff-ace6-c65aa24e8074','2019-04-23 12:34:54','2019-04-23 12:34:54'),
	(454,7,'b77e709b-97b6-41bb-bb94-9f0d02030309','2019-04-23 12:42:59','2019-04-23 12:42:59'),
	(456,2,'2bc97f6f-0eb8-4f53-a60d-763ac8471f91','2019-04-23 16:54:37','2019-04-23 16:54:37'),
	(463,6,'1f13cbbd-37ef-4f02-9a43-4c32718572fb','2019-05-07 01:48:25','2019-05-07 01:48:25'),
	(464,6,'ba42aed8-d90e-4361-bb78-5b62a7d92fc1','2019-05-07 10:26:56','2019-05-07 10:26:56'),
	(465,7,'ba42aed8-d90e-4361-bb78-5b62a7d92fc1','2019-05-07 10:26:56','2019-05-07 10:26:56'),
	(472,5,'71e69cf5-2e3f-48f9-b8a9-b24a23fca14f','2019-05-13 18:08:08','2019-05-13 18:08:08'),
	(476,6,'f6ca4577-2f4c-4956-909e-d3b3848a6bda','2019-05-14 01:22:06','2019-05-14 01:22:06'),
	(477,6,'869ce701-01c4-4e89-b49e-26c679a821d3','2019-05-14 15:36:48','2019-05-14 15:36:48');

/*!40000 ALTER TABLE `group_positions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table group_schedules
# ------------------------------------------------------------

DROP TABLE IF EXISTS `group_schedules`;

CREATE TABLE `group_schedules` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `schedule_id` int(10) unsigned NOT NULL,
  `staff_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `group_schedules` WRITE;
/*!40000 ALTER TABLE `group_schedules` DISABLE KEYS */;

INSERT INTO `group_schedules` (`id`, `schedule_id`, `staff_id`, `created_at`, `updated_at`)
VALUES
	(13,6,'1f13cbbd-37ef-4f02-9a43-4c32718572fb','2019-03-25 23:25:29','2019-03-25 23:25:29'),
	(16,8,'1f13cbbd-37ef-4f02-9a43-4c32718572fb','2019-03-25 23:27:48','2019-03-25 23:27:48'),
	(17,9,'1f13cbbd-37ef-4f02-9a43-4c32718572fb','2019-03-25 23:28:19','2019-03-25 23:28:19'),
	(18,10,'1f13cbbd-37ef-4f02-9a43-4c32718572fb','2019-03-25 23:29:30','2019-03-25 23:29:30'),
	(32,13,'1f13cbbd-37ef-4f02-9a43-4c32718572fb','2019-03-26 11:08:03','2019-03-26 11:08:03'),
	(33,13,'eb622652-922f-4cad-b93d-9e2bdf1aefd4','2019-03-26 11:08:03','2019-03-26 11:08:03'),
	(34,13,'f6ca4577-2f4c-4956-909e-d3b3848a6bda','2019-03-26 11:08:03','2019-03-26 11:08:03'),
	(37,14,'1f13cbbd-37ef-4f02-9a43-4c32718572fb','2019-03-26 15:32:20','2019-03-26 15:32:20'),
	(38,15,'1f13cbbd-37ef-4f02-9a43-4c32718572fb','2019-03-26 15:38:28','2019-03-26 15:38:28'),
	(51,16,'b28343b7-ff92-4b45-91d9-1030a5557652','2019-03-26 18:17:14','2019-03-26 18:17:14'),
	(53,18,'b28343b7-ff92-4b45-91d9-1030a5557652','2019-03-26 18:19:08','2019-03-26 18:19:08'),
	(55,19,'97cd18c6-f48e-4aba-8fde-360a3b67ba73','2019-03-26 19:03:52','2019-03-26 19:03:52'),
	(58,21,'f6ca4577-2f4c-4956-909e-d3b3848a6bda','2019-03-26 19:06:21','2019-03-26 19:06:21'),
	(61,22,'766c4dfc-b8c3-4590-9e28-2073221736d9','2019-03-26 19:07:21','2019-03-26 19:07:21'),
	(62,22,'869ce701-01c4-4e89-b49e-26c679a821d3','2019-03-26 19:07:21','2019-03-26 19:07:21'),
	(64,23,'b28343b7-ff92-4b45-91d9-1030a5557652','2019-03-26 19:31:25','2019-03-26 19:31:25'),
	(71,25,'b28343b7-ff92-4b45-91d9-1030a5557652','2019-03-26 19:44:41','2019-03-26 19:44:41'),
	(72,26,'b28343b7-ff92-4b45-91d9-1030a5557652','2019-03-26 19:45:03','2019-03-26 19:45:03'),
	(73,28,'f6ca4577-2f4c-4956-909e-d3b3848a6bda','2019-03-26 19:45:32','2019-03-26 19:45:32'),
	(74,27,'b28343b7-ff92-4b45-91d9-1030a5557652','2019-03-26 19:47:00','2019-03-26 19:47:00'),
	(75,29,'97cd18c6-f48e-4aba-8fde-360a3b67ba73','2019-03-26 19:47:18','2019-03-26 19:47:18'),
	(83,31,'b28343b7-ff92-4b45-91d9-1030a5557652','2019-03-26 19:53:01','2019-03-26 19:53:01'),
	(84,32,'b28343b7-ff92-4b45-91d9-1030a5557652','2019-03-26 19:53:21','2019-03-26 19:53:21'),
	(86,35,'f6ca4577-2f4c-4956-909e-d3b3848a6bda','2019-03-26 19:54:03','2019-03-26 19:54:03'),
	(87,33,'b28343b7-ff92-4b45-91d9-1030a5557652','2019-03-26 19:54:17','2019-03-26 19:54:17'),
	(88,34,'b28343b7-ff92-4b45-91d9-1030a5557652','2019-03-26 19:54:58','2019-03-26 19:54:58'),
	(89,36,'766c4dfc-b8c3-4590-9e28-2073221736d9','2019-03-26 19:55:16','2019-03-26 19:55:16'),
	(96,37,'b28343b7-ff92-4b45-91d9-1030a5557652','2019-03-26 20:01:15','2019-03-26 20:01:15'),
	(97,38,'b28343b7-ff92-4b45-91d9-1030a5557652','2019-03-26 20:01:35','2019-03-26 20:01:35'),
	(98,39,'869ce701-01c4-4e89-b49e-26c679a821d3','2019-03-26 20:01:59','2019-03-26 20:01:59'),
	(106,41,'1f13cbbd-37ef-4f02-9a43-4c32718572fb','2019-03-26 20:15:50','2019-03-26 20:15:50'),
	(107,42,'1f13cbbd-37ef-4f02-9a43-4c32718572fb','2019-03-26 20:16:06','2019-03-26 20:16:06'),
	(108,43,'f6ca4577-2f4c-4956-909e-d3b3848a6bda','2019-03-26 20:16:29','2019-03-26 20:16:29'),
	(121,40,'869ce701-01c4-4e89-b49e-26c679a821d3','2019-04-15 19:55:44','2019-04-15 19:55:44'),
	(122,7,'64dae435-d31f-42af-95f6-ffb4714c92b2','2019-04-15 19:59:17','2019-04-15 19:59:17'),
	(123,7,'869ce701-01c4-4e89-b49e-26c679a821d3','2019-04-15 19:59:17','2019-04-15 19:59:17'),
	(124,2,'b28343b7-ff92-4b45-91d9-1030a5557652','2019-04-15 20:00:04','2019-04-15 20:00:04'),
	(125,3,'b28343b7-ff92-4b45-91d9-1030a5557652','2019-04-15 20:00:26','2019-04-15 20:00:26'),
	(126,4,'b28343b7-ff92-4b45-91d9-1030a5557652','2019-04-15 20:00:54','2019-04-15 20:00:54'),
	(128,11,'b28343b7-ff92-4b45-91d9-1030a5557652','2019-04-15 20:02:23','2019-04-15 20:02:23'),
	(129,24,'b28343b7-ff92-4b45-91d9-1030a5557652','2019-04-16 14:37:31','2019-04-16 14:37:31'),
	(130,20,'97cd18c6-f48e-4aba-8fde-360a3b67ba73','2019-04-16 14:38:15','2019-04-16 14:38:15'),
	(131,17,'b28343b7-ff92-4b45-91d9-1030a5557652','2019-04-16 14:38:59','2019-04-16 14:38:59'),
	(132,30,'1f13cbbd-37ef-4f02-9a43-4c32718572fb','2019-04-16 14:40:41','2019-04-16 14:40:41'),
	(133,12,'f6ca4577-2f4c-4956-909e-d3b3848a6bda','2019-04-16 14:43:27','2019-04-16 14:43:27'),
	(134,44,'97cd18c6-f48e-4aba-8fde-360a3b67ba73','2019-04-22 19:45:53','2019-04-22 19:45:53'),
	(135,52,'f6ca4577-2f4c-4956-909e-d3b3848a6bda','2019-05-09 10:10:48','2019-05-09 10:10:48');

/*!40000 ALTER TABLE `group_schedules` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table health_questions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `health_questions`;

CREATE TABLE `health_questions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `question` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `published` tinyint(1) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `health_questions` WRITE;
/*!40000 ALTER TABLE `health_questions` DISABLE KEYS */;

INSERT INTO `health_questions` (`id`, `question`, `published`, `created_at`, `updated_at`)
VALUES
	(1,'Do you have : Back pain, Knee pain or Shoulder Pain?',0,'2019-03-22 02:57:43','2019-03-22 14:58:40'),
	(2,'Do you : Smoke?',1,'2019-03-22 02:57:43','2019-03-22 14:55:26'),
	(3,'Drink Alcohol?',0,'2019-03-22 02:57:43','2019-03-22 14:44:11'),
	(4,'Take prescription meds?',1,'2019-03-22 02:57:43','2019-03-22 14:54:14'),
	(5,'Are you exercising now?',1,'2019-03-22 02:57:43','2019-03-22 14:54:50'),
	(6,'Previous Injuries or Surgeries?',1,'2019-03-22 14:59:39','2019-03-22 14:59:39'),
	(7,'High blood pressure, Asthma, Diabetes, or a Hard condition?',1,'2019-03-22 15:00:17','2019-05-14 14:23:03'),
	(8,'Any other health conditions or pre-existing conditions not listed?',1,'2019-03-22 15:00:52','2019-03-22 15:00:52');

/*!40000 ALTER TABLE `health_questions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table identification_staffs
# ------------------------------------------------------------

DROP TABLE IF EXISTS `identification_staffs`;

CREATE TABLE `identification_staffs` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `digital_sign` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finger_print` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table identifications
# ------------------------------------------------------------

DROP TABLE IF EXISTS `identifications`;

CREATE TABLE `identifications` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `member_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `digital_sign` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finger_print` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table instructures
# ------------------------------------------------------------

DROP TABLE IF EXISTS `instructures`;

CREATE TABLE `instructures` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `instructures` WRITE;
/*!40000 ALTER TABLE `instructures` DISABLE KEYS */;

INSERT INTO `instructures` (`id`, `staff_id`, `created_at`, `updated_at`)
VALUES
	('c5f02d85-203a-4791-90d5-7618067c4c93','ae48457a-0633-4d5d-9298-8ab37a6f1692','2019-03-23 21:28:18','2019-03-23 21:28:18');

/*!40000 ALTER TABLE `instructures` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table liabilities
# ------------------------------------------------------------

DROP TABLE IF EXISTS `liabilities`;

CREATE TABLE `liabilities` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `member_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notes` text COLLATE utf8mb4_unicode_ci,
  `signature` text COLLATE utf8mb4_unicode_ci,
  `sign_date` date DEFAULT NULL,
  `user_sign_date` date DEFAULT NULL,
  `user_signature` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `liabilities` WRITE;
/*!40000 ALTER TABLE `liabilities` DISABLE KEYS */;

INSERT INTO `liabilities` (`id`, `member_id`, `user_id`, `notes`, `signature`, `sign_date`, `user_sign_date`, `user_signature`, `created_at`, `updated_at`)
VALUES
	('1762be9b-8e94-4705-b72d-1384028ee106','1e1bc0b1-dd28-418c-9a32-ccd6c8300f98','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,'https://api.empirefit.club/storage/signatures/liability/20190513_1557747397liability_3505173112830001.png','2019-05-13','2019-05-13','https://api.empirefit.club/storage/signatures/liability/20190513_1557747397liability_user_1234567890.png','2019-05-13 18:34:44','2019-05-13 18:36:37'),
	('2eb83078-9246-4bab-b0fe-9de53e711b36','1fc558a8-05a9-48b9-a2e1-8413beb1a1de','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,'https://api.empirefit.club/storage/signatures/liability/20190514_1557810633liability_8976655888999.png','2019-05-14','2019-05-14','https://api.empirefit.club/storage/signatures/liability/20190514_1557810633liability_user_1234567890.png','2019-05-14 12:09:43','2019-05-14 12:10:33'),
	('5e57f08e-f6ae-4739-baba-50b33ad863d6','d8e67434-c455-4232-8171-0e955f6279fb','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,'https://api.empirefit.club/storage/signatures/liability/20190423_1556004079liability_09876543546.png','2019-04-23','2019-04-23','https://api.empirefit.club/storage/signatures/liability/20190423_1556004079liability_user_1234567890.png','2019-04-23 14:14:11','2019-04-23 14:21:19'),
	('5e9ff4ba-3747-494a-80d1-a97b01603111','f2a4a9d5-b81b-43a3-8a1e-2e0b4e20836e','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,'https://api.empirefit.club/storage/signatures/liability/20190513_1557739965liability_3308180802840002.png','2019-05-13','2019-05-13','https://api.empirefit.club/storage/signatures/liability/20190513_1557739965liability_user_1234567890.png','2019-05-13 16:25:49','2019-05-13 16:32:45'),
	('7240e003-52bd-43a2-86da-1a361c35e2c6','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,'https://api.empirefit.club/storage/signatures/liability/20190423_1555995324liability_4568900511843001.png','2019-04-23','2019-04-23','https://api.empirefit.club/storage/signatures/liability/20190423_1555995324liability_user_1234567890.png','2019-04-23 11:49:47','2019-04-23 11:55:24'),
	('7b960db3-28ed-4ab7-ac56-6e776e557ff6','287f7992-7999-450e-945c-de6cec9f8a01','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,'https://api.empirefit.club/storage/signatures/liability/20190513_1557740804liability_3525054702900002.png','2019-05-13','2019-05-13','https://api.empirefit.club/storage/signatures/liability/20190513_1557740804liability_user_1234567890.png','2019-05-13 16:17:10','2019-05-13 16:46:44'),
	('a2f08610-8688-42fe-9e8c-5e46dbe4fa69','a3390f34-3bd9-4689-864c-0330f93811c4',NULL,NULL,NULL,NULL,NULL,NULL,'2019-05-14 11:35:29','2019-05-14 11:35:29'),
	('b2284952-73d3-4490-929c-ef357406865b','2451f353-4551-4a93-a584-710f0cc12434','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,'https://api.empirefit.club/storage/signatures/liability/20190513_1557741450liability_3524040204850002.png','2019-05-13','2019-05-13','https://api.empirefit.club/storage/signatures/liability/20190513_1557741450liability_user_1234567890.png','2019-05-13 15:46:14','2019-05-13 16:57:30');

/*!40000 ALTER TABLE `liabilities` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table member_attendances
# ------------------------------------------------------------

DROP TABLE IF EXISTS `member_attendances`;

CREATE TABLE `member_attendances` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `member_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_trainer_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `automatic` tinyint(1) DEFAULT NULL,
  `user_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `member_attendances` WRITE;
/*!40000 ALTER TABLE `member_attendances` DISABLE KEYS */;

INSERT INTO `member_attendances` (`id`, `member_id`, `personal_trainer_id`, `start_date`, `end_date`, `state`, `automatic`, `user_id`, `created_at`, `updated_at`)
VALUES
	(31,'ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','65ad5b89-552f-4926-b8ab-06564933fc07',NULL,'2019-04-23 12:35:32','1',1,'fee203c4-017c-4482-aa6e-dbf671a91885','2019-04-23 12:35:32','2019-04-23 12:35:32'),
	(32,'ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','6d8272df-c93d-41d6-a94c-68ec4e817752',NULL,'2019-04-23 12:36:13','1',0,'fee203c4-017c-4482-aa6e-dbf671a91885','2019-04-23 12:36:13','2019-04-23 12:36:13'),
	(33,'d8e67434-c455-4232-8171-0e955f6279fb','65ad5b89-552f-4926-b8ab-06564933fc07',NULL,'2019-04-23 15:54:18','1',0,'fee203c4-017c-4482-aa6e-dbf671a91885','2019-04-23 15:54:18','2019-04-23 15:54:18'),
	(35,'f2a4a9d5-b81b-43a3-8a1e-2e0b4e20836e','6d8272df-c93d-41d6-a94c-68ec4e817752',NULL,'2019-05-13 18:09:27','1',1,'fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-13 18:09:27','2019-05-13 18:09:27'),
	(36,'f2a4a9d5-b81b-43a3-8a1e-2e0b4e20836e','6d8272df-c93d-41d6-a94c-68ec4e817752',NULL,'2019-05-13 18:10:04','1',1,'fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-13 18:10:04','2019-05-13 18:10:04'),
	(37,'f2a4a9d5-b81b-43a3-8a1e-2e0b4e20836e','65ad5b89-552f-4926-b8ab-06564933fc07',NULL,'2019-05-13 18:11:30','1',0,'fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-13 18:11:30','2019-05-13 18:11:30');

/*!40000 ALTER TABLE `member_attendances` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table member_fingers
# ------------------------------------------------------------

DROP TABLE IF EXISTS `member_fingers`;

CREATE TABLE `member_fingers` (
  `member_id` int(11) unsigned NOT NULL,
  `finger_id` int(10) unsigned NOT NULL,
  `finger_data` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `device_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vc` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `member_fingers` WRITE;
/*!40000 ALTER TABLE `member_fingers` DISABLE KEYS */;

INSERT INTO `member_fingers` (`member_id`, `finger_id`, `finger_data`, `created_at`, `updated_at`, `device_name`, `vc`)
VALUES
	(100001,1,'562645D1A5C9510AFB1CA2CCB5012800F87F01C82AE3735CC0413709AB717092145592D40D75CF6B82E57F2C6A6CBFD805A1089ADA20C3AC33A1E1EF213326DDF7DCA33B4907AE01AB43397E8B6645CF543365F69A81145971E396142D88BA4AA805E4A14251C1252795C1D5048D830C328369FF160A44582273CF217D5A9AC1BCC9976482F47AA7BF76E48D4442E9DBFA2BAE67BE000916E900664BB133FCD03C4CBAA9F895FA219780B84E8A8C142C8725B6123F1B348F119F3EDC0D2CEABC67BBE6781A563786CC2EC56B6A94C9BE24A7A145F5DBE554D8C2E9254BC17798AD5A07DF2B7BAB3D3EFC868BAEB4B31855B3C3501D3908DA6E09B8F9039CF41F75482B788978D5E100A4CC8598F1D991401752DB888CE5C8A47E7FC725A2867B6582861DBB5DDAAAA2033908DEB11BB7BB1ED7A25CCDF68095862E7B96C3F447AA6BAA574151006952B6D531C17BE3EA50DA72563571058EDDC326C1054BC73E2C9C263164DE42E8432BD7B28E436F7DAAAB8C8E6768673FD953FCD2B4C23B4EBD3EB3F0F355E23ED68ACBD087E3E482729F6CF339BEB090F98E6B726F00F88001C82AE3735CC0413709AB71B090145592E30A3B01DD2F30B2E0043E7579AA8D35498175894CCAFE3C4F3824CDA23487A6FD2A0EAF699ED0179A3F1357FE8AA6C590FBC7E09C7AD6F073AE1265B377B7CE910F4DF0B9B7636F206422564E1D4EBC3AE786D42AFD71387B7E4EB77E05701FE6D99A6153A864DC17C11A3D287BECEBD6B4348ED9D59146E0E14E3009ED93266AC44C2655E76CF220043D1A98342AA9C7BB30F16DDB84A3E94965E12D664ECFF76784CC8AFB21E808060AA53ED3EC71D39A901191888B062344C108988DB2253FB12E71886ED81EC5CCC35E7720C7D0C9B214CB0042C2B22E09D0ED14AE4D10327B4680E9E719DA8E52D5B2FECBF02437F9F5208E4F97F8B90AEC9DFD468F4E98B870095784E901FF70303F9E35CD3310D85D4DB5E5FCB4EC904580D32523C0729190257A2B1AAC5E61C48D018FBEE9F7370D9CBE0CEAA0BD173E072E80154F3918DE6578753F6A3F47BA0106CD15E26C152E5A8AB9B8FF81E23FDC2795055485A3B64A9711F6ECEE0886F9616C42736F00F87E01C82AE3735CC0413709AB71F097145592BCF967569F5688E66439B9B50CDBE64AAEAFDFCAE9DAAEE7D457A45CACF8EC08A48B14744AB23023805548C2D03EAF7635527CF0FBD352D09F83FF3A06EC6440556CBE7C379B72629CE671A86EAA9A15BF6A53CC344593CD25F1604C53A45F7C771292933590127029DFDED7017DC38F5FE8A1D99A84A088015E96EBCB1F3FDA38FCE5FB78BDFDF311C8D2EC3E7C422FDDDE21CC46EA9E9D05219B6716543F8AF141AEA0AEFABA079A0565389E3618825D9847E74B6796B17A5CAC8D72C3206A2DF7E74EAD5158582BAB2EB03B8A27139A6CA5E6C8B14CDA56D168631D6A2A7403542D46778EBF55E3A65C9A259E9FE1C293500BC68B0A724DF0983C029AA5D4A0FB20EFCF3F5B47A58F35B5E93E424DDA508C94453A12B411C5B1379B923DC8C21415787364F198C43AD3B165463F1B122A793B2C9A5FCA77430CA57D42A737401B88C8A159EFED4A29F4D414BFC66D4D6CA33C7A1132EE803CE31FFCB8351F2A3680A8D60320F8AFE5BEC26CC16F00E88001C82AE3735CC0413709AB71F08A14559250F232C2DA327CAAC6C692CF48C7445E27038D6609549395297B293B5D4668F6E53880B29A28444788CF888949D44AC0676802D45E3749A9007584121659B3511DF695F7CE545A443864414A812264D84671AE615131033187BC98ECA07D8BC779AB65B126A7B3259E7536F9172A2A4CAAAE776E0E8EA50655B7AA413BA806E6AB96A374EEA59640F7451B716961F273103A31C63645E2D710E4C89ED9F6263DF265C4962C3736292D9776B63A7CF0B17E863D7BD9EA471ABC50FDB53BB05060652096EA71ED4EA733231479EF8CBA9BE320E82B65A35219E26ACB9534350C40EEE353ED1939505E57B6FAE96A967CEFE3F32900C4DD6C8AEB1056C50451B0D23F5787F1DA3A501ECD9C836FDAAC74728B3C6C7D4A67405FA0C0DED3C329D069BD6A00FC6BE7F74A872C8181F7E0C47B0508868B864AB2D7AF7348C8389B96DC568EEA97B3DE78CF10421D1AFE648653D90F50EE1F5DFD363221F17EDD2207E66808018EE3951B8260018810470A59CA6F00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000','2019-05-09 16:59:26','2019-05-09 16:59:26','JKT-WTC-FP02','4055692E38226F6'),
	(100005,1,'555030D3A4CE2A09821BD6BEB1755E00F88101C82AE3735CC0413709AB71B0B7145592463E252F50CEDAE77EF937D1B22FF9F73D7047542B50541500B23F7163261ACF3910B76585B5F6CE6EAE3B32E09BCA8B7985998E4712F660ABBA488B553546696675A212E2236A3D484972790BFE08B051F8F4A3ECC2354003196A32E8187F9D7EED6AC9D33C979FE72B4370E37ABED7A6E72634AB772CF05B2AB99CEC5F03F51393EC28B383559B5685BECFD94630BB71AE10A62B5CEDCDB021AC05CA4802EEFF87F478B9BDBA3E68211AD5FBFDBAFB840B597262581DF7AD53B0EF317B7D591CD32A342C59D4A3EF30E53568272204EED4E8D5BFD7476D80576F82F3F45F910BE496DBBB4F157A1C608CA35B40FC9D4190A875AB3A81E278BFF17D9B39271CCBE170FFAD0BDB79E949A9190F4B20E95668785287694C08732EA2405A65E297CE5789E4EC2C8274D45574FA69CEBC96E27E26D32D2F89917458DC336BD8984EA8996076831320F68E8A7D54C715E3BCE05709C2C8D32B78FB1F0A1EC1FFE5C60A3C7BA3DDFDA05A18BA96DBB739F6E2DFFCDF270D7E6620F523176F00F86A01C82AE3735CC0413709AB7130A31455926B2C2CF84F2F197F87A6CECCAB2A2C9AEF8966D9004A732AD8C36500DB2024152BD91A3AFCDD2D7E998F3C5F63F9801147CE7D6AAF35AAA7A9D538606AAF2C4BB7EC4A51EAE0DBB9506E4B0705FEA73301EEF2586FEC4175290D2102618552C277D72B992082C6F493AE575D487A7A6A977C2265BCD45DDA5634B951B08749AC7A0438081E1AE155E16840CBB3A0770CCC2B4217C661AA76FE60C1DFA6C7593F3331CBAE25257AC51DC5F12DB53EABD3A338B512B181A0768155BEF5491A160CD042EE8B4482235F92EC34BEE9338BB6C6A8CA4560ABC6B12C2CB32DE721BE54831CEF2FA137BA09EC66F522F7FD0ED901F759CDDCC55B8696DD477D113942940E84F483F96E5ADD635026BDCE5B16F87579D6EBE98C12C1B474E5D38231C8D524ED8B13FA3FA2D6668936EF7FC35D04B6CB222E288541EF85D77F7489CA94639A0A56DE9ABD3E11C7AB3582C8674EC6C6EBEF556371F88DDADC6F00F86D01C82AE3735CC0413709AB7170BE145592A2AD4344F10C617B9BBF2345A7F84008AA385C03E3D9717C510E0ADD3DDE95CD405C90B4DCE2FDF233D3D513BF9EB8E4116FD87F2423481ED92895B7128A4C10EE8515A172EA959A12654BE56FA8DCCE3607DF3389A3695B20B245C15E8F2D465404C79C74D3866108BE792371D38EC488DEF19003BA3FB61D9B609E24733153B106F133EE732442EA211061C53958437D47D4A9E2B905F60BC2C1F74D14B595D1B4DF42E2E1C1FFC693723D5CEEE81B09A75CD8785E9E24631B3C6A2B0161DCC62448CE37227EBAC17099D9AB931EC9D0E338941F1F183F84D1434B58F87E448B829B9F51E2FC22A10563FF9B402BB28B4A0522E53A099557E16DDC4F87198788731212226D8CF3819A0F1B70E3B1708055563CBED81D14BED23A21828D074069E1B36810B5B107829CD1ED47074CADA2090005B2010F91BADE37F71C6B43FCFA2B046CCFC3A32CEEED7A3E73EF408072E71EBD6D6C961D44254157316F00E87E01C82AE3735CC0413709AB7170F6145592ED23271E0A9576E379DEC4BFF90B42B671CAE64BC94F7701BFF79AA6D7CB69EEFD823D4AA080812FAB71F639235ADEBC034EE061BB358C11456E65BC0A6C25742B62E90A4814E2873B9F93CAD6B7C4A5AD2D2AF2B69541FF24300E854A49FC902E45CE6F0931278C75576DC3109081765B1D097DE12136418424E2063301B914D09083D64D61A016DECC54D043019EEF88CA3F9F4DF2A3D17575F3ADFDCBDAAC9843E4A664B8162FBC4C7B0A60B118AB6215CBE3D12B539A0EA1AA8CAE7750A970685AF36F839E7A0414356A43DE91857FECBDD45C8BF3C8DE56F421FB0F5DD7912B022EDA743FCBA25C7A525ED9B274ECC6CCD320C76E7A666E2ED5E6F6067DF3D75BAB6789AE71084DC821A4FF65A4603C8E47D5D7BD7E7BEB806C22FB8F010CBE54CC15B6E317BEB9CFA31EFCACB0E0097A19CB2F06B724CD40B7A95B022AB8B39570D03D523E0944F0105868149B5F629646D21019470F0E0B3952BB2D7ED65BD6A9C730809228D8A37AD9406F00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000','2019-05-13 17:42:43','2019-05-13 17:42:43','JKT-WTC-FP02','4055692E38226F6'),
	(100006,1,'202633A1A3BA5975F618A5CAB7732F00F88001C82AE3735CC0413709AB71F0B0145592AB7F6F7F46D66315A9C6A3CE8648D47DB92EC8F1C6B822446D5B4195D42B07B8C20B9BAD363B89501A50C1CE92E95B5A06AEE023AEF5249C538845CF69BDC080E188483DE69FE77D314440E1777D4EAA795DAAEB537F80E65A67FAA40CA2F7E663186BA3ECE9215F1EACE6DAE663273FAE4F8248C351BDD7032BA0005DFAF6C41C1BB7EE88C42C02BB9A230257F42CC213CE6D08613183F7C9B5510E4C845AD450A3C18B65C402828C0E997D1A8DA5510D2085E4AB8B012B10C4E47C5CBB3AE76AD9B49FA19D21C0DA5FD8101FBF8EFABCF87ED48095B9DA59FAA3D6AC8E7EE49C0CB28FD6819BED62AE1ACFB83CB2EC1C0279E453E743888CCF33AB3507BD0485F60C4AD924E2BA050DB6C50D714BBC60126251C487C25288300B99FCFCC014A7756C4DEEED87290E38438414438F10C0D7E2603CE3264D2ADE7AF5003B7EA8BEF6355B37306B7F74FD678271EC57B12B53B84724C3BFDEEFFDDB6970EF3E7213E5CCC492F6A371BD31B278B640F738B9E5AC120522D4AE41A96F00F87F01C82AE3735CC0413709AB7130B1145592B082979DA9E835A114CBB9BDE283213873601114977E8270AABD9B1D954379B42A51FC95FEE01B3D78F9E4D9738822EB9F925B0F79110B291974FB856A18783C7B87D6BB4B0347032628BD723A9901F6CB961816C1512117CE2A6FEACDE31901DEF39CECECC2E012920A3DCF7D1C480D06580F0F72E5C0551275E56C2FC71DE6E2E84BA3E5891C7D520F919F6352B267FA0BF1080F471EEB57EA8260C4E657F8FD12E3FE63D5061BD50774EEF9556B64ABD6FC98D6B0B410E3DF9CC9DB13BC8E123599233A690561D5AFE7F5656CC6BD82FCC9ECEC0DD4500B6E1D67B24C43EFFF9601A3F5DC9C5832DA1BEB9F2952A6F50BA8ADC730F55CAC1D42C9EC286A26327284E1FDF8CE18DD0E1F295B837E3B282CB352A27BBFFA8B0088D2AE2F763992934AC98A010D6664E6F48821C3632C74B002D02958F6F8CFF4C0884B6DF5AD13CAB865C828BF7E8C8D86A69D8A4E3A4F0A932AE9FF03CB29C59A0BA97407B2B3E590EDBC4B5011EC6FBAC083AA5D6F00F87F01C82AE3735CC0413709AB71B04D15559279C6D4164C0D7FB500212DBC77FEB98188E11B1D07EEF94F28AA6B29467A1BC197E84B694B4A0C7A07F36F479FC8BF9BBA4D91C995B6F584CABEB2FEDF7A8C5C910C1B7149B36F9ED72E4613ECC4A549225954E3D991CC7635442578C02B0ACB79D832C786B420FAA2FFAA0206FA5554543ABDB05AF5FCC5A586DB363E8E8D372DF322FACBF9F7C3586C64FA155C9049E48B818E352C3294935875F8A164AB7A021D86853F1D53D49B40039C6CC9885874A6A84ACD42FAA97A887F28D8D8EA2FD5D05F3F3FABC8FE5923AC737B9550536B7280B6D9FA580E33D76616B3E84FE217827EF07F66371F7FBDACF2DD8FB87FA26CE78428759002AAADD03CEAB0F2167007018E843B501B546B81EC2E8B4305BFB4C70425FAA4519E6AE80AF6D685BBED07D3E337062F13A8A01335BC8D663312CC153D5E9EE7C00E880682279CC873F7826D2F49B18DE6419A39830893E734311BBCC734F200E75D3E6945368E32D32801912AE6F4E65D41FD080C3E2F926F00E88001C82AE3735CC0413709AB71708B145592031C6886BD35E843065776E2E1AC4A7C1A2843041DF739712F4D7EEC65E1D217F98D40A2CF24B2616A4EB30AA6E09E09BBE5077F8F8C42BD56439E6C9AC6BDF269B3DF7E510583CEBE900650818CC3FD75ADA6B292E7A1BDF5075C8A157E5B1D10D260C8397F087073CF15419259AE7CD75B2767B75C5DD881D78E50D4E9ADF02BE36AAB2121D81AFFDFB67268BE165D7199EBCC26A71ED85502809E0BA6C2E20EA31CA44F3FD58C96724FA09E6748DFDE28B2E8B6DF09081B5EFBFF91AD963E7964A3D77C2B74C6425E812BEEB9CDB718ED1E22062098978B96EDD7A1F03875090455A823CFE985B66D21EB8FE17CC7B5220DBEBEBCD61B6CCDA49DDC793FF16A4FC8F3CB9E51E6D9F8299865251C6716781809CEA5D267B978EF589FB28795E7AB5CD1D57DB748410201A3B9B1459E8F6787921CF8FD7238E36CC0D8F35BE37D467E5DCB9E3882169D1AB400A9AE809C3D66060BBB4095A775B1BCB777DA4E0FC73254F2D60543E24B69C51B0C535A6F000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000','2019-05-13 18:06:10','2019-05-13 18:06:10','JKT-WTC-FP02','4055692E38226F6'),
	(100004,1,'512542A7D8BF5C0E8712D4B8B7712D00F87F01C82AE3735CC0413709AB7170F31455921F7659F599721788F5709465B2FAE0031FD0D78456648BE746E475770511A49E61C77845F05529D80E23FBC6CD35ADCA7E338DF7D78D755016E5239B611AD5E1A37F1F2E929CAEEDCB62AF58B9604ECF8D445B773079521642F95C143253B9675D2975AFD64F3A69B29160EF769B00833E41FF08D15CCC84CDA18DB5A9F19F5A605AD4CACF6945CB93BD55F24D41CD8DDACF1E9C44A7521B2949E180D10F516498C227194468C3192AAB2DD868BE4C97314D6421EE09997CF0B25C75946400C0C324AC00C396079FF88497A9277DF7A2C85E04851D18A76C47185370DDE8CCAA9E0D213F028AA208F7E01689F8281792EB1F7B1E5D129F3E256D39487B2C2D27F678977556FC727C12B584F4D3E7DD926541782BACD7330957E8FFC928025CC6EC0EC22C3FC49C907AB4627DC287CAD66E4D807907B9CBEC840781188CAAF0B6C877B80141F20300E54AAC533E8CBE087FECEF9FC7256D43B9E06F9E64B0879B4EB42A53B5A8E69F65CADC9CF2EEF4CAD35E3C02F3B51F83656F00F88101C82AE3735CC0413709AB71F0FA1455928DF6AE4F1F5E5B9337EC93C8FABF9960B7AA94C4362188FA7F8CAB973E484CF36E95273F5EB8D55C438A81EE59C4C6AD25AE78E6E1DAB43165E3315986C9210D0EE61E1C8D49EB22C48A729A11CC29EB97B584AD3927581BEB38AFA46351135D8DE86F2FDA5916D4047854EA5F5E14ECCE76DC43D037EB62F76972D5460C4D6585DA273C6F7A0691B86C63F20BFBD82BAD33E9A9516C77739D2B0D98AD1D1E04D451E700FD617D3D3589DCF1CA5386E65B7DB4FD047F8F2C42E14761CE6E77EB9ABF5CD5190CDD8BE051A69DAC1D9C2301F33A33505A18E54E716B7E6684CC1E986AD30F8D7ECD6D2E9B753701620DD90F73B29AF6E4E4CFB403C1E0BA057256A2E4BC0CE54DB94AA2D93BCBF934C172D83BB09B4A363A2B2B64D42C601AE1E266DF899B1D67285537975A0DD414F567BF956B2EFAE8F69143405EC1A913C060D28CFA4AAE9B5B2AAEBBBCAE0276C704C61958F44567768E0043855E4ED1D4B14F1EEC82743AD215ACBDE2E70AC6E107896F00F87F01C82AE3735CC0413709AB7170F51455927EA83156E614E10360B871934F613322CFBA92EEF1246B2320E1690DCCE358EF0AC6145B38E13A38A2CC997276108BA35103B33EB8F62F766002DD3E893F61B260BF5FDA1A08385B3372AA234172A618D15DB83FC21CF8548AF47846010E3FC564A428DCB0296FD586E8DFA3645C7C6C3D4105477F01E087CD57676C0C3DE5E9CB49E3AE6099E12CFB854739B4F2BAD6C05D56223F15CB88BD0FE3DEEB7FDD6251AA25F278667D6F26CA451C5C88957EE01482BB1EC28FB97E6CBAB1D28E18A9EE1FC703759B282D9349382E30C60AC3981D0EFDD791B863E4598BA98F229FE390ABE8F96C3B51C1A652A56A0A6563C63C9EBAE3C3EED7725539849B917DE382714BDFE72195A12F798CEAA329E911FD00FBB957E0638ECEFD9CFBCF58C969F6D87736CEE10820236DD4081AFD3825399D28CA2F7FA13C068704682E42093F02992914BB36051747F86D109D41C0887DBD34E4607B7AE44324FB611D595760F8B66F7AFEED944E46A8816E5D5A138E6F00E88101C82AE3735CC0413709AB71B088145592A572902836A38225CC6309CA877B08B6F85F7DD402B29A17A2A703C4ECB71BBEAAB8DAC5BC405C50723C94CC6622575C42B9D5C44CA4D96612AAF48B3C86851DA6CF360B5AD9AA49C2804E271338F7DB649BD58988BFD95DC605F1186E203302B11AF063BD68870207021FB4D580ED61C7DD306861456CCAC1B10BF92FFA4E36F478E2CE3251EA1FFEAB3F8096655EB552074CBD1A0062673684BFC926E04FB158C0B50432AD8FFC83F96E997BFA59C19AA4061BA5380A9A22568CD9321D8216C26CF49FFE675B3A3EEE33887C046F3435DBEE834DBC6050B582B794A67C6CB7EBAB671D9D757D2EAFC8068B35E580858795D410762ADF461EEF5AD9636E4CF39E4DBDC91F40D566D63624D3DB8DD9885B3D7CB632713DAC83CBB50C0B610EAF0649C4AB0CFA3D15D378A4702A20F04804A715B2BB4AF2D6C7E0D3DB728A91B76426F08CE60B7F2E8BDC4F03B2CCCAD4217426BD964492B534D4FC8B4E75375E0C3CD3ADB88E31E6CA1B7B0CCCFA5959746F00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000','2019-05-13 18:18:05','2019-05-13 18:18:05','JKT-WTC-FP02','4055692E38226F6');

/*!40000 ALTER TABLE `member_fingers` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table member_leaves
# ------------------------------------------------------------

DROP TABLE IF EXISTS `member_leaves`;

CREATE TABLE `member_leaves` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `member_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_date` date DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'Leave',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `recuring_date_first` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `recuring_date_second` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` date DEFAULT NULL,
  `reactive_by` char(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `member_leaves` WRITE;
/*!40000 ALTER TABLE `member_leaves` DISABLE KEYS */;

INSERT INTO `member_leaves` (`id`, `member_id`, `start_date`, `end_date`, `status`, `created_at`, `updated_at`, `user_id`, `recuring_date_first`, `recuring_date_second`, `date`, `reactive_by`)
VALUES
	(24,'d8e67434-c455-4232-8171-0e955f6279fb','2019-04-23','2019-05-23','Leave','2019-04-23 15:29:34','2019-04-23 15:29:34','fee203c4-017c-4482-aa6e-dbf671a91885','1','15','2019-05-15',NULL),
	(25,'d8e67434-c455-4232-8171-0e955f6279fb','2019-04-23',NULL,'Reactive','2019-04-23 15:44:16','2019-04-23 15:44:16',NULL,'1','1','2019-05-01','fee203c4-017c-4482-aa6e-dbf671a91885'),
	(28,'2451f353-4551-4a93-a584-710f0cc12434','2019-05-13','2019-06-13','Leave','2019-05-13 17:40:58','2019-05-13 17:40:58','fee203c4-017c-4482-aa6e-dbf671a91885','15','1','2019-06-01',NULL),
	(29,'2451f353-4551-4a93-a584-710f0cc12434','2019-05-13',NULL,'Reactive','2019-05-13 18:12:41','2019-05-13 18:12:41',NULL,'15','15','2019-06-15','fee203c4-017c-4482-aa6e-dbf671a91885');

/*!40000 ALTER TABLE `member_leaves` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table member_partners
# ------------------------------------------------------------

DROP TABLE IF EXISTS `member_partners`;

CREATE TABLE `member_partners` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dropin_company_id` int(10) unsigned NOT NULL,
  `booking_date` datetime DEFAULT NULL,
  `booking_reference` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `schedule_date` date DEFAULT NULL,
  `schedule_id` int(11) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `branch_id` int(10) unsigned DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `signed` tinyint(1) DEFAULT '0',
  `created_by` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `member_partners` WRITE;
/*!40000 ALTER TABLE `member_partners` DISABLE KEYS */;

INSERT INTO `member_partners` (`id`, `dropin_company_id`, `booking_date`, `booking_reference`, `schedule_date`, `schedule_id`, `name`, `email`, `phone`, `branch_id`, `status`, `signed`, `created_by`, `updated_by`, `created_at`, `updated_at`)
VALUES
	('0a0ffcdc-26cc-4eae-b6fa-02081e3bd16e',2,'2019-05-06 00:00:00','3nd4n9','2019-05-06',3,'Quartararo','quartararo@gmail.com','081214350810',1,'0',1,'fee203c4-017c-4482-aa6e-dbf671a91885','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-06 13:32:52','2019-05-14 12:10:35'),
	('33659366-5dd9-4e7d-bcd6-a60ac578e7b9',1,'2019-05-22 00:00:00','b4j1n94n','2019-04-22',4,'Mba Mijan','west@jayadata.co.id','081296843433',1,'1',0,'fee203c4-017c-4482-aa6e-dbf671a91885','fee203c4-017c-4482-aa6e-dbf671a91885','2019-04-22 17:11:01','2019-04-22 17:11:22'),
	('39566b65-d8b7-4dc6-808f-7a8c96d21308',3,'2019-05-02 00:00:00','JH0nW1ck','2019-05-02',33,'Jhon Wick','jhonwick@gmail.com','08567103825',1,'1',1,'eba4046d-4f51-4476-8ba2-8071cb125382','c3e10d9b-6b7d-430d-84ee-db365b69409f','2019-05-02 10:54:08','2019-05-02 17:09:17'),
	('3ea7598e-ede7-4c44-bdbc-a04499996825',1,'2019-04-23 00:00:00','00778899','2019-04-23',18,'Joko Susilo','joko.susilo@gmail.com','081717173029',1,'1',0,'fee203c4-017c-4482-aa6e-dbf671a91885','fee203c4-017c-4482-aa6e-dbf671a91885','2019-04-23 09:55:44','2019-04-23 10:15:14'),
	('3fd20a40-ff09-426b-964b-c6800fb4ca47',2,'2019-05-02 00:00:00','4h4yFit','2019-05-02',32,'Alonso','alonso@gmail.com','085640811322',1,'1',0,'eba4046d-4f51-4476-8ba2-8071cb125382','eba4046d-4f51-4476-8ba2-8071cb125382','2019-05-02 16:29:19','2019-05-02 16:29:29'),
	('4102c557-496c-4a75-8534-9c41fadaff61',3,'2019-05-06 00:00:00','3nd4n9','2019-05-06',44,'Sherly','sherly@gmail.com','081283599836',1,'0',1,'fee203c4-017c-4482-aa6e-dbf671a91885',NULL,'2019-05-06 20:39:22','2019-05-06 20:39:22'),
	('4d9a826d-d912-48e9-a7aa-811028ebf0c6',2,'2019-05-07 00:00:00','84Y4M','2019-05-07',18,'Zarco','zarco@gmail.com','087885802433',1,'0',1,'fee203c4-017c-4482-aa6e-dbf671a91885',NULL,'2019-05-07 10:35:14','2019-05-07 10:35:14'),
	('549d92c8-040c-4225-bfdf-7d0b713d5e8c',1,'2019-04-24 00:00:00','6767790','2019-04-24',29,'Armando','armando@gmail.com','081214350810',1,'1',0,'fee203c4-017c-4482-aa6e-dbf671a91885','fee203c4-017c-4482-aa6e-dbf671a91885','2019-04-23 16:15:29','2019-04-29 13:31:41'),
	('5eeb361f-a981-44cd-a8d5-3943a9487ccd',1,'2019-05-06 00:00:00','3nd4n9','2019-05-06',44,'Fahli','fahliriza182@gmail.com','081296843433',1,'1',1,'fee203c4-017c-4482-aa6e-dbf671a91885','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-06 19:16:27','2019-05-06 19:16:57'),
	('75bc4d36-cacf-4ee7-9a6b-c3036ae718f0',3,'2019-04-29 00:00:00','uHuyLala','2019-04-29',12,'Pruistine','pruistine@gmail.com','08179681717',1,'0',0,'fee203c4-017c-4482-aa6e-dbf671a91885',NULL,'2019-04-29 14:22:15','2019-04-29 14:22:15'),
	('75f10132-1619-49de-84a6-01f4a4eff8b3',2,'2019-04-22 00:00:00','788i909','2019-04-23',16,'Bambang','west@jayadata.co.id','081214350810',1,'0',0,'fee203c4-017c-4482-aa6e-dbf671a91885',NULL,'2019-04-22 20:53:45','2019-04-22 20:53:45'),
	('83a92b9e-fb07-478c-a190-e650f28fc733',2,'2019-05-02 00:00:00','J4y4dTa','2019-05-02',32,'Hamilton','hamilton@gmail.com','081311688732',1,'1',1,'eba4046d-4f51-4476-8ba2-8071cb125382','c3e10d9b-6b7d-430d-84ee-db365b69409f','2019-05-02 18:20:06','2019-05-03 14:08:11'),
	('8a996418-55e2-4a14-bdb6-4fbdc2003d71',1,'2019-04-23 00:00:00','6767788','2019-04-23',19,'Alexa','west@jayadata.co.id','081214350810',1,'1',0,'fee203c4-017c-4482-aa6e-dbf671a91885','fee203c4-017c-4482-aa6e-dbf671a91885','2019-04-23 12:37:49','2019-04-23 12:41:00'),
	('8e522808-fd7c-4ee0-85d4-10f5df2df481',3,'2019-05-06 00:00:00','3td4h','2019-05-06',3,'Morbidelli','morbidelli@gmail.com','0817731158',1,'0',1,'fee203c4-017c-4482-aa6e-dbf671a91885','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-06 13:35:16','2019-05-06 13:35:33'),
	('96d5fe74-c841-4e16-91c3-6d8b4e46c15c',2,'2019-05-13 00:00:00','3nd4n9','2019-05-13',11,'Russell','russell@gmail.com','085645456559418',1,'1',1,'fee203c4-017c-4482-aa6e-dbf671a91885','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-13 18:22:50','2019-05-13 18:37:45'),
	('9ec2c55e-8d28-4e37-8f07-dfbac3ba48d4',3,'2019-04-26 00:00:00','u7y8i9o','2019-04-23',16,'Bambang','west@jayadata.co.id','081214350810',1,'1',0,'fee203c4-017c-4482-aa6e-dbf671a91885','fee203c4-017c-4482-aa6e-dbf671a91885','2019-04-22 20:52:18','2019-04-23 00:20:37'),
	('b0ff03fc-73b3-4df8-99b2-b754056b5c8d',2,'2019-05-08 00:00:00','u7y8i9o','2019-05-09',33,'Jhon Doe','faisal.murkadi@gmail.com','085920734623',1,'0',1,'fee203c4-017c-4482-aa6e-dbf671a91885',NULL,'2019-05-08 15:01:19','2019-05-08 15:01:19'),
	('b324a02a-c463-4432-bf95-bd28f7c48262',1,'2019-05-14 00:00:00','6767788','2019-05-14',19,'Quartararo','quartararo@gmail.com','0856550307054',1,'1',1,'fee203c4-017c-4482-aa6e-dbf671a91885','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-14 12:06:05','2019-05-14 12:10:52'),
	('bc2ab9c6-573d-497b-9d85-ef2287fbe195',2,'2019-05-06 00:00:00','3nd4n9','2019-05-06',44,'Miller','miller@gmail.com','0817731159',1,'0',1,'fee203c4-017c-4482-aa6e-dbf671a91885',NULL,'2019-05-06 19:18:11','2019-05-06 19:18:11'),
	('bf6d86a0-8f0a-463e-a00f-0c15ae226d35',2,'2019-05-26 00:00:00','4b4b1l','2019-04-22',11,'Bernardo','fahliriza182@gmail.com','081717173029',1,'1',0,'fee203c4-017c-4482-aa6e-dbf671a91885','fee203c4-017c-4482-aa6e-dbf671a91885','2019-04-22 17:09:06','2019-04-22 17:09:21'),
	('c34e57e6-b0da-4afd-b574-fa8749490f5d',2,'2019-05-02 00:00:00','3mp1re','2019-05-02',32,'Tom Morelo','tommorelo@gmail.com','081519060929',1,'1',0,'eba4046d-4f51-4476-8ba2-8071cb125382','eba4046d-4f51-4476-8ba2-8071cb125382','2019-05-02 16:30:37','2019-05-02 18:17:39'),
	('c361b143-2d1d-4f40-b588-e15445358490',3,'2019-05-02 00:00:00','3mp112e','2019-05-02',32,'Ricardo','ricardo@gmail.com','081282848663',1,'1',0,'eba4046d-4f51-4476-8ba2-8071cb125382','c3e10d9b-6b7d-430d-84ee-db365b69409f','2019-05-02 15:14:53','2019-05-02 15:30:47'),
	('c70f2aee-3897-4a19-8979-592ad88c17f3',2,'2019-04-26 00:00:00','u7y8i9o','2019-04-26',24,'Jhon Doe','test@example.com','085920616342',1,'0',0,'fee203c4-017c-4482-aa6e-dbf671a91885',NULL,'2019-04-23 00:30:47','2019-04-23 00:30:47'),
	('d04e555f-fc8c-404c-bb46-f7d175872113',1,'2019-05-14 00:00:00','3nd4n9an','2019-05-14',16,'Ben','ben@gmail.com','08193932281115',1,'1',1,'fee203c4-017c-4482-aa6e-dbf671a91885','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-13 18:26:03','2019-05-14 01:41:43'),
	('da9b30c3-4ea8-481a-9743-4aca95fc9b60',1,'2019-04-26 00:00:00','UB3K3N','2019-04-26',18,'Joker','west@jayadata.co.id','081214350810',1,'1',0,'fee203c4-017c-4482-aa6e-dbf671a91885','fee203c4-017c-4482-aa6e-dbf671a91885','2019-04-23 11:13:47','2019-04-29 13:31:59'),
	('e20dccfb-159b-497c-87e2-22aa329d2400',1,'2019-05-07 00:00:00','84YAM','2019-05-07',19,'Marcow','marcow@gmail.com','08978899665432',1,'1',1,'fee203c4-017c-4482-aa6e-dbf671a91885','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-07 12:31:08','2019-05-07 12:39:39'),
	('e992dd46-d4d5-47a7-ada2-a711b100fe7d',1,'2019-04-30 00:00:00','Uy3y0hy','2019-04-30',18,'Rudolfo','rudolfo@gmail.com','08567103825',1,'1',0,'eba4046d-4f51-4476-8ba2-8071cb125382','eba4046d-4f51-4476-8ba2-8071cb125382','2019-04-30 11:13:36','2019-05-02 17:09:17'),
	('ec50d397-f05f-4f0d-a040-f41ffff4b31a',2,'2019-05-08 00:00:00','B4Y4M','2019-05-08',28,'RICHARD','richard@gmail.com','082833904103',1,'0',0,'eba4046d-4f51-4476-8ba2-8071cb125382',NULL,'2019-05-08 12:40:43','2019-05-08 12:40:43'),
	('fa89391d-b0ce-41f1-b87e-3f86b816e73f',2,'2019-05-02 00:00:00','G00dn35','2019-05-02',32,'Abrizam','abrizam@gmail.com','085893923365',1,'1',0,'eba4046d-4f51-4476-8ba2-8071cb125382','eba4046d-4f51-4476-8ba2-8071cb125382','2019-05-02 10:51:15','2019-05-02 12:44:41');

/*!40000 ALTER TABLE `member_partners` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table member_type_schedules
# ------------------------------------------------------------

DROP TABLE IF EXISTS `member_type_schedules`;

CREATE TABLE `member_type_schedules` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `schedule_id` int(10) unsigned NOT NULL,
  `member_type_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `member_type_schedules` WRITE;
/*!40000 ALTER TABLE `member_type_schedules` DISABLE KEYS */;

INSERT INTO `member_type_schedules` (`id`, `schedule_id`, `member_type_id`, `created_at`, `updated_at`)
VALUES
	(1,15,1,'2019-03-26 15:21:01','2019-03-26 15:21:01'),
	(2,15,3,'2019-03-26 15:21:01','2019-03-26 15:21:01'),
	(3,16,1,'2019-03-26 18:16:57','2019-03-26 18:16:57'),
	(4,16,2,'2019-03-26 18:16:57','2019-03-26 18:16:57'),
	(5,16,3,'2019-03-26 18:16:57','2019-03-26 18:16:57'),
	(6,16,4,'2019-03-26 18:16:57','2019-03-26 18:16:57'),
	(7,16,5,'2019-03-26 18:16:57','2019-03-26 18:16:57'),
	(13,18,1,'2019-03-26 18:19:08','2019-03-26 18:19:08'),
	(14,18,2,'2019-03-26 18:19:08','2019-03-26 18:19:08'),
	(15,18,3,'2019-03-26 18:19:08','2019-03-26 18:19:08'),
	(16,18,4,'2019-03-26 18:19:08','2019-03-26 18:19:08'),
	(17,18,5,'2019-03-26 18:19:08','2019-03-26 18:19:08'),
	(18,19,1,'2019-03-26 19:03:38','2019-03-26 19:03:38'),
	(19,19,2,'2019-03-26 19:03:38','2019-03-26 19:03:38'),
	(20,19,3,'2019-03-26 19:03:38','2019-03-26 19:03:38'),
	(21,19,4,'2019-03-26 19:03:38','2019-03-26 19:03:38'),
	(22,19,5,'2019-03-26 19:03:38','2019-03-26 19:03:38'),
	(28,21,1,'2019-03-26 19:06:07','2019-03-26 19:06:07'),
	(29,21,2,'2019-03-26 19:06:07','2019-03-26 19:06:07'),
	(30,21,3,'2019-03-26 19:06:07','2019-03-26 19:06:07'),
	(31,21,4,'2019-03-26 19:06:07','2019-03-26 19:06:07'),
	(32,21,5,'2019-03-26 19:06:07','2019-03-26 19:06:07'),
	(33,22,1,'2019-03-26 19:07:01','2019-03-26 19:07:01'),
	(34,22,2,'2019-03-26 19:07:01','2019-03-26 19:07:01'),
	(35,22,3,'2019-03-26 19:07:01','2019-03-26 19:07:01'),
	(36,22,4,'2019-03-26 19:07:01','2019-03-26 19:07:01'),
	(37,22,5,'2019-03-26 19:07:01','2019-03-26 19:07:01'),
	(38,23,1,'2019-03-26 19:31:11','2019-03-26 19:31:11'),
	(39,23,2,'2019-03-26 19:31:11','2019-03-26 19:31:11'),
	(40,23,3,'2019-03-26 19:31:11','2019-03-26 19:31:11'),
	(41,23,4,'2019-03-26 19:31:11','2019-03-26 19:31:11'),
	(42,23,5,'2019-03-26 19:31:11','2019-03-26 19:31:11'),
	(48,25,1,'2019-03-26 19:41:31','2019-03-26 19:41:31'),
	(49,25,2,'2019-03-26 19:41:31','2019-03-26 19:41:31'),
	(50,25,3,'2019-03-26 19:41:31','2019-03-26 19:41:31'),
	(51,25,4,'2019-03-26 19:41:31','2019-03-26 19:41:31'),
	(52,25,5,'2019-03-26 19:41:31','2019-03-26 19:41:31'),
	(53,26,1,'2019-03-26 19:42:05','2019-03-26 19:42:05'),
	(54,26,2,'2019-03-26 19:42:05','2019-03-26 19:42:05'),
	(55,26,3,'2019-03-26 19:42:05','2019-03-26 19:42:05'),
	(56,26,4,'2019-03-26 19:42:05','2019-03-26 19:42:05'),
	(57,26,5,'2019-03-26 19:42:05','2019-03-26 19:42:05'),
	(58,27,1,'2019-03-26 19:42:31','2019-03-26 19:42:31'),
	(59,27,2,'2019-03-26 19:42:31','2019-03-26 19:42:31'),
	(60,27,3,'2019-03-26 19:42:31','2019-03-26 19:42:31'),
	(61,27,4,'2019-03-26 19:42:31','2019-03-26 19:42:31'),
	(62,27,5,'2019-03-26 19:42:31','2019-03-26 19:42:31'),
	(63,28,1,'2019-03-26 19:43:06','2019-03-26 19:43:06'),
	(64,28,3,'2019-03-26 19:43:06','2019-03-26 19:43:06'),
	(65,28,4,'2019-03-26 19:43:06','2019-03-26 19:43:06'),
	(66,28,5,'2019-03-26 19:43:06','2019-03-26 19:43:06'),
	(67,29,1,'2019-03-26 19:43:39','2019-03-26 19:43:39'),
	(68,29,2,'2019-03-26 19:43:39','2019-03-26 19:43:39'),
	(69,29,3,'2019-03-26 19:43:39','2019-03-26 19:43:39'),
	(70,29,4,'2019-03-26 19:43:39','2019-03-26 19:43:39'),
	(71,29,5,'2019-03-26 19:43:39','2019-03-26 19:43:39'),
	(77,31,1,'2019-03-26 19:48:48','2019-03-26 19:48:48'),
	(78,31,2,'2019-03-26 19:48:48','2019-03-26 19:48:48'),
	(79,31,3,'2019-03-26 19:48:48','2019-03-26 19:48:48'),
	(80,31,4,'2019-03-26 19:48:48','2019-03-26 19:48:48'),
	(81,31,5,'2019-03-26 19:48:48','2019-03-26 19:48:48'),
	(82,32,1,'2019-03-26 19:49:13','2019-03-26 19:49:13'),
	(83,32,2,'2019-03-26 19:49:13','2019-03-26 19:49:13'),
	(84,32,3,'2019-03-26 19:49:13','2019-03-26 19:49:13'),
	(85,32,4,'2019-03-26 19:49:13','2019-03-26 19:49:13'),
	(86,32,5,'2019-03-26 19:49:13','2019-03-26 19:49:13'),
	(87,33,1,'2019-03-26 19:49:35','2019-03-26 19:49:35'),
	(88,33,2,'2019-03-26 19:49:35','2019-03-26 19:49:35'),
	(89,33,3,'2019-03-26 19:49:35','2019-03-26 19:49:35'),
	(90,33,4,'2019-03-26 19:49:35','2019-03-26 19:49:35'),
	(91,33,5,'2019-03-26 19:49:35','2019-03-26 19:49:35'),
	(92,34,1,'2019-03-26 19:49:56','2019-03-26 19:49:56'),
	(93,34,2,'2019-03-26 19:49:56','2019-03-26 19:49:56'),
	(94,34,3,'2019-03-26 19:49:56','2019-03-26 19:49:56'),
	(95,34,4,'2019-03-26 19:49:56','2019-03-26 19:49:56'),
	(96,34,5,'2019-03-26 19:49:56','2019-03-26 19:49:56'),
	(97,35,1,'2019-03-26 19:50:55','2019-03-26 19:50:55'),
	(98,35,3,'2019-03-26 19:50:55','2019-03-26 19:50:55'),
	(99,35,4,'2019-03-26 19:50:55','2019-03-26 19:50:55'),
	(100,35,5,'2019-03-26 19:50:55','2019-03-26 19:50:55'),
	(101,36,1,'2019-03-26 19:51:34','2019-03-26 19:51:34'),
	(102,36,2,'2019-03-26 19:51:34','2019-03-26 19:51:34'),
	(103,36,3,'2019-03-26 19:51:34','2019-03-26 19:51:34'),
	(104,36,4,'2019-03-26 19:51:34','2019-03-26 19:51:34'),
	(105,36,5,'2019-03-26 19:51:34','2019-03-26 19:51:34'),
	(106,37,1,'2019-03-26 19:58:16','2019-03-26 19:58:16'),
	(107,37,2,'2019-03-26 19:58:16','2019-03-26 19:58:16'),
	(108,37,3,'2019-03-26 19:58:16','2019-03-26 19:58:16'),
	(109,37,4,'2019-03-26 19:58:16','2019-03-26 19:58:16'),
	(110,37,5,'2019-03-26 19:58:16','2019-03-26 19:58:16'),
	(111,38,1,'2019-03-26 19:58:44','2019-03-26 19:58:44'),
	(112,38,2,'2019-03-26 19:58:44','2019-03-26 19:58:44'),
	(113,38,3,'2019-03-26 19:58:44','2019-03-26 19:58:44'),
	(114,38,4,'2019-03-26 19:58:44','2019-03-26 19:58:44'),
	(115,38,5,'2019-03-26 19:58:44','2019-03-26 19:58:44'),
	(116,39,1,'2019-03-26 19:59:10','2019-03-26 19:59:10'),
	(117,39,2,'2019-03-26 19:59:10','2019-03-26 19:59:10'),
	(118,39,3,'2019-03-26 19:59:10','2019-03-26 19:59:10'),
	(119,39,4,'2019-03-26 19:59:10','2019-03-26 19:59:10'),
	(120,39,5,'2019-03-26 19:59:10','2019-03-26 19:59:10'),
	(126,41,1,'2019-03-26 20:13:56','2019-03-26 20:13:56'),
	(127,41,2,'2019-03-26 20:13:56','2019-03-26 20:13:56'),
	(128,41,3,'2019-03-26 20:13:56','2019-03-26 20:13:56'),
	(129,41,4,'2019-03-26 20:13:56','2019-03-26 20:13:56'),
	(130,41,5,'2019-03-26 20:13:56','2019-03-26 20:13:56'),
	(131,42,1,'2019-03-26 20:14:24','2019-03-26 20:14:24'),
	(132,42,2,'2019-03-26 20:14:24','2019-03-26 20:14:24'),
	(133,42,3,'2019-03-26 20:14:24','2019-03-26 20:14:24'),
	(134,42,4,'2019-03-26 20:14:24','2019-03-26 20:14:24'),
	(135,42,5,'2019-03-26 20:14:24','2019-03-26 20:14:24'),
	(136,43,1,'2019-03-26 20:15:05','2019-03-26 20:15:05'),
	(137,43,2,'2019-03-26 20:15:05','2019-03-26 20:15:05'),
	(138,43,3,'2019-03-26 20:15:05','2019-03-26 20:15:05'),
	(139,43,4,'2019-03-26 20:15:05','2019-03-26 20:15:05'),
	(140,43,5,'2019-03-26 20:15:05','2019-03-26 20:15:05'),
	(145,40,1,'2019-04-15 19:55:44','2019-04-15 19:55:44'),
	(146,40,2,'2019-04-15 19:55:44','2019-04-15 19:55:44'),
	(147,40,3,'2019-04-15 19:55:44','2019-04-15 19:55:44'),
	(148,40,4,'2019-04-15 19:55:44','2019-04-15 19:55:44'),
	(149,40,5,'2019-04-15 19:55:44','2019-04-15 19:55:44'),
	(150,7,1,'2019-04-15 19:59:17','2019-04-15 19:59:17'),
	(151,7,2,'2019-04-15 19:59:17','2019-04-15 19:59:17'),
	(152,7,3,'2019-04-15 19:59:17','2019-04-15 19:59:17'),
	(153,7,4,'2019-04-15 19:59:17','2019-04-15 19:59:17'),
	(154,7,5,'2019-04-15 19:59:17','2019-04-15 19:59:17'),
	(155,2,1,'2019-04-15 20:00:04','2019-04-15 20:00:04'),
	(156,2,2,'2019-04-15 20:00:04','2019-04-15 20:00:04'),
	(157,2,3,'2019-04-15 20:00:04','2019-04-15 20:00:04'),
	(158,2,4,'2019-04-15 20:00:04','2019-04-15 20:00:04'),
	(159,2,5,'2019-04-15 20:00:04','2019-04-15 20:00:04'),
	(160,3,1,'2019-04-15 20:00:26','2019-04-15 20:00:26'),
	(161,3,2,'2019-04-15 20:00:26','2019-04-15 20:00:26'),
	(162,3,3,'2019-04-15 20:00:26','2019-04-15 20:00:26'),
	(163,3,4,'2019-04-15 20:00:26','2019-04-15 20:00:26'),
	(164,3,5,'2019-04-15 20:00:26','2019-04-15 20:00:26'),
	(165,4,1,'2019-04-15 20:00:54','2019-04-15 20:00:54'),
	(166,4,2,'2019-04-15 20:00:54','2019-04-15 20:00:54'),
	(167,4,3,'2019-04-15 20:00:54','2019-04-15 20:00:54'),
	(168,4,4,'2019-04-15 20:00:54','2019-04-15 20:00:54'),
	(169,4,5,'2019-04-15 20:00:54','2019-04-15 20:00:54'),
	(171,11,1,'2019-04-15 20:02:23','2019-04-15 20:02:23'),
	(172,11,2,'2019-04-15 20:02:23','2019-04-15 20:02:23'),
	(173,11,3,'2019-04-15 20:02:23','2019-04-15 20:02:23'),
	(174,11,4,'2019-04-15 20:02:23','2019-04-15 20:02:23'),
	(175,11,5,'2019-04-15 20:02:23','2019-04-15 20:02:23'),
	(176,24,1,'2019-04-16 14:37:31','2019-04-16 14:37:31'),
	(177,24,2,'2019-04-16 14:37:31','2019-04-16 14:37:31'),
	(178,24,3,'2019-04-16 14:37:31','2019-04-16 14:37:31'),
	(179,24,4,'2019-04-16 14:37:31','2019-04-16 14:37:31'),
	(180,24,5,'2019-04-16 14:37:31','2019-04-16 14:37:31'),
	(181,20,1,'2019-04-16 14:38:15','2019-04-16 14:38:15'),
	(182,20,2,'2019-04-16 14:38:15','2019-04-16 14:38:15'),
	(183,20,3,'2019-04-16 14:38:15','2019-04-16 14:38:15'),
	(184,20,4,'2019-04-16 14:38:15','2019-04-16 14:38:15'),
	(185,20,5,'2019-04-16 14:38:15','2019-04-16 14:38:15'),
	(186,17,1,'2019-04-16 14:38:59','2019-04-16 14:38:59'),
	(187,17,2,'2019-04-16 14:38:59','2019-04-16 14:38:59'),
	(188,17,3,'2019-04-16 14:38:59','2019-04-16 14:38:59'),
	(189,17,4,'2019-04-16 14:38:59','2019-04-16 14:38:59'),
	(190,17,5,'2019-04-16 14:38:59','2019-04-16 14:38:59'),
	(191,30,1,'2019-04-16 14:40:41','2019-04-16 14:40:41'),
	(192,30,2,'2019-04-16 14:40:41','2019-04-16 14:40:41'),
	(193,30,3,'2019-04-16 14:40:41','2019-04-16 14:40:41'),
	(194,30,4,'2019-04-16 14:40:41','2019-04-16 14:40:41'),
	(195,30,5,'2019-04-16 14:40:41','2019-04-16 14:40:41'),
	(196,12,1,'2019-04-16 14:43:27','2019-04-16 14:43:27'),
	(197,12,3,'2019-04-16 14:43:27','2019-04-16 14:43:27'),
	(198,12,4,'2019-04-16 14:43:27','2019-04-16 14:43:27'),
	(199,12,5,'2019-04-16 14:43:27','2019-04-16 14:43:27'),
	(200,44,3,'2019-04-22 19:45:53','2019-04-22 19:45:53'),
	(201,44,5,'2019-04-22 19:45:53','2019-04-22 19:45:53'),
	(202,45,5,'2019-05-06 20:06:09','2019-05-06 20:06:09'),
	(203,45,1,'2019-05-06 20:06:09','2019-05-06 20:06:09'),
	(204,45,3,'2019-05-06 20:06:09','2019-05-06 20:06:09'),
	(205,46,5,'2019-05-06 20:08:03','2019-05-06 20:08:03'),
	(206,46,1,'2019-05-06 20:08:03','2019-05-06 20:08:03'),
	(207,46,3,'2019-05-06 20:08:03','2019-05-06 20:08:03'),
	(211,48,5,'2019-05-06 20:09:39','2019-05-06 20:09:39'),
	(212,48,1,'2019-05-06 20:09:39','2019-05-06 20:09:39'),
	(213,48,3,'2019-05-06 20:09:39','2019-05-06 20:09:39'),
	(214,49,5,'2019-05-06 20:10:24','2019-05-06 20:10:24'),
	(215,49,1,'2019-05-06 20:10:24','2019-05-06 20:10:24'),
	(216,49,3,'2019-05-06 20:10:24','2019-05-06 20:10:24'),
	(217,50,5,'2019-05-06 20:11:01','2019-05-06 20:11:01'),
	(218,50,1,'2019-05-06 20:11:01','2019-05-06 20:11:01'),
	(219,50,3,'2019-05-06 20:11:01','2019-05-06 20:11:01'),
	(220,51,5,'2019-05-06 20:11:40','2019-05-06 20:11:40'),
	(221,51,1,'2019-05-06 20:11:40','2019-05-06 20:11:40'),
	(222,51,3,'2019-05-06 20:11:40','2019-05-06 20:11:40'),
	(223,52,4,'2019-05-09 10:10:48','2019-05-09 10:10:48'),
	(224,47,5,'2019-05-09 10:11:38','2019-05-09 10:11:38'),
	(225,47,1,'2019-05-09 10:11:38','2019-05-09 10:11:38'),
	(226,47,3,'2019-05-09 10:11:38','2019-05-09 10:11:38');

/*!40000 ALTER TABLE `member_type_schedules` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table member_types
# ------------------------------------------------------------

DROP TABLE IF EXISTS `member_types`;

CREATE TABLE `member_types` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `member_type_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `duration` int(11) NOT NULL DEFAULT '0',
  `period` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `session` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `member_types` WRITE;
/*!40000 ALTER TABLE `member_types` DISABLE KEYS */;

INSERT INTO `member_types` (`id`, `member_type_name`, `duration`, `period`, `session`, `created_at`, `updated_at`)
VALUES
	(1,'(02) UNLIMITED - 3 MONTH',3,'Month',NULL,'2019-03-22 02:57:43','2019-03-27 14:29:38'),
	(2,'(05) DROP IN (NON PARTNER)',1,'Day',1,'2019-03-22 02:57:43','2019-03-27 14:30:31'),
	(3,'(03) PERSONAL TRAINER',2,'Month',NULL,'2019-03-22 02:57:43','2019-04-23 01:33:21'),
	(4,'(04) 10 PASS',2,'Month',10,'2019-03-22 02:57:43','2019-03-27 14:30:19'),
	(5,'(01) UNLIMITED',1,'Month',NULL,'2019-03-22 15:36:44','2019-04-22 20:10:35');

/*!40000 ALTER TABLE `member_types` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table members
# ------------------------------------------------------------

DROP TABLE IF EXISTS `members`;

CREATE TABLE `members` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `id_card_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date_of_birth` date NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `recuring_date` int(11) DEFAULT NULL,
  `join_date` date DEFAULT NULL,
  `auto_debet` tinyint(1) NOT NULL DEFAULT '0',
  `session_remains` int(11) DEFAULT NULL,
  `expairy_date` date DEFAULT NULL,
  `payment_unpaid` double NOT NULL DEFAULT '0',
  `state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `photo` text COLLATE utf8mb4_unicode_ci,
  `notes` text COLLATE utf8mb4_unicode_ci,
  `payment_id` int(10) unsigned DEFAULT NULL,
  `member_type_id` int(10) unsigned DEFAULT NULL,
  `branch_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `finger_code` varchar(11) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `active_date` date DEFAULT NULL,
  `home_address_area` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `work_address` text COLLATE utf8mb4_unicode_ci,
  `work_address_area` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `emergency` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `emergency_contact_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `member_code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '',
  `occupation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;

INSERT INTO `members` (`id`, `id_card_number`, `name`, `email`, `phone`, `date_of_birth`, `address`, `recuring_date`, `join_date`, `auto_debet`, `session_remains`, `expairy_date`, `payment_unpaid`, `state`, `photo`, `notes`, `payment_id`, `member_type_id`, `branch_id`, `created_at`, `updated_at`, `finger_code`, `active_date`, `home_address_area`, `work_address`, `work_address_area`, `emergency`, `emergency_contact_name`, `member_code`, `occupation`)
VALUES
	('1e1bc0b1-dd28-418c-9a32-ccd6c8300f98','3505173112830001','Russell','russell@yahoo.com','085645456559418','1980-10-10','Bulak Kapal',NULL,NULL,0,NULL,NULL,0,'Unverified',NULL,NULL,NULL,NULL,1,'2019-05-13 18:34:44','2019-05-13 18:34:44','100007',NULL,'181','Tanjung Priok','158','085645456559419','Milen Cyrus','010100008','Pengusaha'),
	('1fc558a8-05a9-48b9-a2e1-8413beb1a1de','8976655888999','Quartararo','quartararo@gmail.com','0856550307054','1988-02-02','Depok',NULL,NULL,0,NULL,NULL,0,'Unverified',NULL,NULL,NULL,NULL,1,'2019-05-14 12:09:43','2019-05-14 12:09:43','100009',NULL,'182','Purwakarta','172','081717173029','Rossi','010100010','PNS'),
	('2451f353-4551-4a93-a584-710f0cc12434','3524040204850002','Nicholas','faisal.murkadi@jayadata.co.id','08573348850014','1990-10-10','Kelapa Gading',1,'2019-05-13',1,NULL,'2019-06-13',0,'Unpaid',NULL,NULL,1,5,1,'2019-05-13 15:46:14','2019-05-14 17:29:47','100004',NULL,'158','Kelapa Gading','158','08573348850014','08573348850014','010100005','PNS'),
	('287f7992-7999-450e-945c-de6cec9f8a01','3525054702900002','BENJAMIN','fahliriza182@gmail.com','08193932281115','1988-10-10','Tambun Selatan',15,'2019-05-13',1,NULL,'2019-06-14',0,'Unpaid',NULL,NULL,1,5,1,'2019-05-13 16:17:10','2019-05-15 15:20:37','100005',NULL,'174','Desa Kadumangu','267','0856345582616','Musdalifah','010100006','Pengusaha'),
	('a3390f34-3bd9-4689-864c-0330f93811c4','3505173112830000','Sasha','sasha@empirefitclub.com','087851423695','1980-10-10','Bekasi',NULL,NULL,0,NULL,NULL,0,'Unverified',NULL,NULL,NULL,NULL,1,'2019-05-14 11:35:29','2019-05-14 11:35:29','100008',NULL,'181','Kantorku','156','081296843433','Milen','010100009','Owner'),
	('d8e67434-c455-4232-8171-0e955f6279fb','09876543546','Indra Alfonso','aikira7@yahoo.com','081717171717','1988-10-12','Citywalk',0,'2019-05-14',0,1,'2019-05-15',0,'Active','https://api.empirefit.club/storage/photo/20190423_1556004146photo_member_09876543546.jpg',NULL,3,2,1,'2019-04-23 14:14:11','2019-05-14 11:45:51','100003',NULL,NULL,NULL,NULL,NULL,NULL,'010100004',NULL),
	('ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','4568900511843001','Faisal Murkadi','faisal.murkadi@gmail.com','081282848663','1984-11-05','APT. GRAND EMERALD',1,'2019-04-23',1,NULL,'2019-06-23',0,'Unpaid','https://api.empirefit.club/storage/photo/20190423_1555995436photo_member_4568900511843001.jpg',NULL,1,5,1,'2019-04-23 11:49:47','2019-05-14 17:23:14','100001',NULL,'174','Desa Kadumangu','267','0856345582616','MusLIH','010100002','Pengusaha'),
	('f2a4a9d5-b81b-43a3-8a1e-2e0b4e20836e','3308180802840002','Howard','riza@jayadata.co.id','08564545659418','1988-01-11','Sunter',15,'2019-05-13',1,NULL,'2019-06-14',0,'Unpaid',NULL,NULL,1,5,1,'2019-05-13 16:25:49','2019-05-15 15:29:31','100006',NULL,'156','Jl. H. Yeti','172','08193464212119','Clearence','010100007','BOS');

/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table migrations
# ------------------------------------------------------------

DROP TABLE IF EXISTS `migrations`;

CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;

INSERT INTO `migrations` (`id`, `migration`, `batch`)
VALUES
	(1,'2014_10_12_000000_create_users_table',1),
	(2,'2014_10_12_100000_create_password_resets_table',1),
	(3,'2016_06_01_000001_create_oauth_auth_codes_table',1),
	(4,'2016_06_01_000002_create_oauth_access_tokens_table',1),
	(5,'2016_06_01_000003_create_oauth_refresh_tokens_table',1),
	(6,'2016_06_01_000004_create_oauth_clients_table',1),
	(7,'2016_06_01_000005_create_oauth_personal_access_clients_table',1),
	(8,'2019_02_28_105440_create_branches_table',1),
	(9,'2019_02_28_153044_laratrust_setup_tables',1),
	(10,'2019_03_01_032248_create_members_table',1),
	(11,'2019_03_01_042001_create_personal_trainers_table',1),
	(12,'2019_03_01_140829_create_instructures_table',1),
	(13,'2019_03_01_144018_create_schedules_table',1),
	(14,'2019_03_01_165237_create_payment_types_table',1),
	(15,'2019_03_01_171336_create_member_types_table',1),
	(16,'2019_03_01_174335_create_dropin_companies_table',1),
	(17,'2019_03_01_175828_create_benefits_table',1),
	(18,'2019_03_01_192652_create_member_partners_table',1),
	(19,'2019_03_02_001102_create_club_benefits_table',1),
	(20,'2019_03_02_014747_create_staff_attendances_table',1),
	(21,'2019_03_02_021336_create_member_attendances_table',1),
	(22,'2019_03_03_044054_create_liabilities_table',1),
	(23,'2019_03_03_222419_create_identifications_table',1),
	(24,'2019_03_03_232553_create_member_leaves_table',1),
	(25,'2019_03_04_000721_create_prices_table',1),
	(26,'2019_03_04_094501_create_transactions_table',1),
	(27,'2019_03_04_135739_create_class_attendances_table',1),
	(28,'2019_03_04_142628_create_personal_trainer_members_table',1),
	(29,'2019_03_18_141328_create_health_questions_table',1),
	(30,'2019_03_18_185336_create_banks_table',1),
	(31,'2019_03_19_090302_create_credit_cards_table',1),
	(32,'2019_03_19_100004_create_question_liabilities_table',1),
	(33,'2019_03_21_122836_create_staff_table',1),
	(34,'2019_03_22_171333_create_positions_table',1),
	(35,'2019_03_22_172133_create_group_positions_table',1),
	(36,'2019_03_23_001842_create_identification_staffs_table',1),
	(37,'2014_10_12_000000_create_users_table',1),
	(38,'2014_10_12_100000_create_password_resets_table',1),
	(39,'2016_06_01_000001_create_oauth_auth_codes_table',1),
	(40,'2016_06_01_000002_create_oauth_access_tokens_table',1),
	(41,'2016_06_01_000003_create_oauth_refresh_tokens_table',1),
	(42,'2016_06_01_000004_create_oauth_clients_table',1),
	(43,'2016_06_01_000005_create_oauth_personal_access_clients_table',1),
	(44,'2019_02_28_105440_create_branches_table',1),
	(45,'2019_02_28_153044_laratrust_setup_tables',1),
	(46,'2019_03_01_032248_create_members_table',1),
	(47,'2019_03_01_042001_create_personal_trainers_table',1),
	(48,'2019_03_01_140829_create_instructures_table',1),
	(49,'2019_03_01_144018_create_schedules_table',1),
	(50,'2019_03_01_165237_create_payment_types_table',1),
	(51,'2019_03_01_171336_create_member_types_table',1),
	(52,'2019_03_01_174335_create_dropin_companies_table',1),
	(53,'2019_03_01_175828_create_benefits_table',1),
	(54,'2019_03_01_192652_create_member_partners_table',1),
	(55,'2019_03_02_001102_create_club_benefits_table',1),
	(56,'2019_03_02_014747_create_staff_attendances_table',1),
	(57,'2019_03_02_021336_create_member_attendances_table',1),
	(58,'2019_03_03_044054_create_liabilities_table',1),
	(59,'2019_03_03_222419_create_identifications_table',1),
	(60,'2019_03_03_232553_create_member_leaves_table',1),
	(61,'2019_03_04_000721_create_prices_table',1),
	(62,'2019_03_04_094501_create_transactions_table',1),
	(63,'2019_03_04_135739_create_class_attendances_table',1),
	(64,'2019_03_04_142628_create_personal_trainer_members_table',1),
	(65,'2019_03_18_141328_create_health_questions_table',1),
	(66,'2019_03_18_185336_create_banks_table',1),
	(67,'2019_03_19_090302_create_credit_cards_table',1),
	(68,'2019_03_19_100004_create_question_liabilities_table',1),
	(69,'2019_03_21_122836_create_staff_table',1),
	(70,'2019_03_22_171333_create_positions_table',1),
	(71,'2019_03_22_172133_create_group_positions_table',1),
	(72,'2019_03_23_001842_create_identification_staffs_table',1),
	(73,'2019_03_25_132034_create_group_schedules_table',2),
	(74,'2019_03_26_140450_create_member_type_schedules_table',3),
	(75,'2019_03_27_021958_create_class_registrations_table',4),
	(76,'2019_03_27_143537_create_devices_table',5),
	(77,'2019_03_27_150724_create_member_fingers_table',5),
	(78,'2019_03_27_151957_create_staff_fingers_table',5),
	(79,'2019_04_06_164940_create_autodebits_table',6),
	(80,'2019_04_08_194937_create_edcs_table',7);

/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table oauth_access_tokens
# ------------------------------------------------------------

DROP TABLE IF EXISTS `oauth_access_tokens`;

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `client_id` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `oauth_access_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_access_tokens` DISABLE KEYS */;

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`)
VALUES
	('011ad8b2d87dcb669aa96fd6c36b86ecc5f7784b9ea9927fc9e24701fe83e0863ba967cbab9471f7','a8533b20-bdcc-4325-8486-359cc549ae96',1,'Personal Access Token','[]',0,'2019-04-10 10:49:59','2019-04-10 10:49:59','2019-04-17 10:49:59'),
	('03150a98cb61b4bd68559b451902cbcf840f905f6f1ffad3246a4fb5bfdd388122206d7484525b0b','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-03-25 13:04:58','2019-03-25 13:04:58','2019-03-25 16:04:58'),
	('031eea3d48b6d643478e5bde6be3b4764c97e36555b58cedd3af28c19095208c34593f8f50b8cfc0','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-09 16:41:13','2019-04-09 16:41:13','2019-04-09 19:41:13'),
	('04c2f149d68708f18fa8863e5d520f18c5e9dd56621a3d5455172351d6004186b427eb60547fb61d','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-05-10 15:02:44','2019-05-10 15:02:44','2019-05-10 18:02:44'),
	('06446b8ef77210aa110e4edbea7dac099f5fdf753806cbee3650675f27486636408a3f0248aba766','a8533b20-bdcc-4325-8486-359cc549ae96',1,'Personal Access Token','[]',0,'2019-03-27 19:23:24','2019-03-27 19:23:24','2019-04-03 19:23:24'),
	('09689b312983875989f3ec597e156eb3c95fb73f1d6e3559774ed86aec4ec1d4d7399b189d344d54','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-03-25 23:19:02','2019-03-25 23:19:02','2019-03-26 02:19:02'),
	('0bc114a9538de2845b54386457cab67606669310faf2e04d536ddcf9d1e9ac5d35a499f8e1546dd0','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-11 13:35:58','2019-04-11 13:35:58','2019-04-11 16:35:58'),
	('0c569bca53daf0f5bc81a3c2d8c3c48e5a44ab57aec51a8437732c24c8827e1b80afc1c38516c6e0','eba4046d-4f51-4476-8ba2-8071cb125382',1,'Personal Access Token','[]',0,'2019-03-25 11:32:25','2019-03-25 11:32:25','2019-03-25 14:32:25'),
	('0d9e3bad23c42e7c0d263e110dceaeb415eef671fbc402e063a6b5d6f44dcb4f6a3cf321e8a13b64','c3e10d9b-6b7d-430d-84ee-db365b69409f',1,'Personal Access Token','[]',0,'2019-03-28 15:39:15','2019-03-28 15:39:15','2019-03-28 18:39:15'),
	('0dbf1115e7c1c925c1a9e5f55d111d84be00a82622d5282c2a79036c65224715188e14c627df163c','eba4046d-4f51-4476-8ba2-8071cb125382',1,'Personal Access Token','[]',0,'2019-03-27 13:17:46','2019-03-27 13:17:46','2019-03-27 16:17:46'),
	('0f551d8613a5b42543bafe78f071a4d602ddc6b5d120b0fd143917157044d783a16a36aa4a65e2a0','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-03-25 11:44:14','2019-03-25 11:44:14','2019-03-25 14:44:14'),
	('0ffa8f450570e850b0754d1c994ed297ca7416a43dcddbf251a4496e31f0d99ff0e1edc47ca9e7f7','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-03-25 23:02:50','2019-03-25 23:02:50','2019-03-26 02:02:50'),
	('108671acc055c9fc3133c07779b59676adab0fb9e4b11c65a9852bbc942aca511d72e5cbb3c4ac95','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-03-25 23:15:46','2019-03-25 23:15:46','2019-03-26 02:15:46'),
	('119c8f8691cca77d443699f2b267b9943a11701072fcdf1ddddf3986d9d55ca9d52eb0cc0e891b4d','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-05-09 14:53:07','2019-05-09 14:53:07','2019-05-09 17:53:07'),
	('190b9e984b044cea99be5580cd597ff7c303113f375d6c8ac870ce33aab44ce656502874213c55cc','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-03-25 11:17:29','2019-03-25 11:17:29','2019-03-25 14:17:29'),
	('1abd515206380438581c39da51727ba76f272b377d3440a39509b9b70be3c16122b4033b0690c730','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-29 13:28:56','2019-04-29 13:28:56','2019-04-29 16:28:56'),
	('1ad465d7c1c0b08fdc713b43057c87de396506609fdd4c349d48c20d889ef94b3de9fdcdd661d141','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-01 14:17:34','2019-04-01 14:17:34','2019-04-01 17:17:34'),
	('1b9ff2008c6ed057b7c467b09aa7574cdd080f7f3da042ea82238206168b4568414fcf8f3f723f4e','a8533b20-bdcc-4325-8486-359cc549ae96',1,'Personal Access Token','[]',0,'2019-03-28 13:52:01','2019-03-28 13:52:01','2019-03-28 16:52:01'),
	('1d5e1b9f7db731f4edaec01fd4d439874e9c294644db09defca396eecd6e1e779bfbfbdfe06547d2','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-13 18:27:41','2019-04-13 18:27:41','2019-04-20 18:27:41'),
	('1d7878320703fcc365597b6117060b7e162dea967c4a971c81a93f9ec0927106392e939e19ff721c','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-05-06 15:30:15','2019-05-06 15:30:15','2019-05-06 18:30:15'),
	('1dfcc5334ba87281594d6f39d958c669b70ecdb531737c8dfcf0efc4506436b9a2f3eb77a0b852f0','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-03-25 15:53:47','2019-03-25 15:53:47','2019-03-25 18:53:47'),
	('1e59bc93ac670ac5a05cce7d3fd17173042fc0d99fe8040828f1e0aa0fa54ed8a7c810e32632fafd','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-22 09:39:44','2019-04-22 09:39:44','2019-04-22 12:39:44'),
	('200381dbf4fff7e2430d3522690f3d4e7200c1af5353d10b7f95eb13846594b7dce11d9c219ea38b','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-03-28 16:34:32','2019-03-28 16:34:32','2019-03-28 19:34:32'),
	('226b4f693ed3d06cfcadec0fe30b6c5fcd42fa0bd37b9b512d90ee340389c018b602d484e4c07e45','eba4046d-4f51-4476-8ba2-8071cb125382',1,'Personal Access Token','[]',0,'2019-03-29 15:47:50','2019-03-29 15:47:50','2019-03-29 18:47:50'),
	('22f4900fa3437821935587e077f5cda0977723bf888f58717d33bc27c61680035bcc2f1b566ee244','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-03-26 19:13:02','2019-03-26 19:13:02','2019-03-26 22:13:02'),
	('231826a80886c48d05019ad95fcb1e3154ab83e0eed3540ffe0a07a7ef6e8ac44b8ec30ad7f7f178','eba4046d-4f51-4476-8ba2-8071cb125382',1,'Personal Access Token','[]',0,'2019-03-28 11:12:37','2019-03-28 11:12:37','2019-03-28 14:12:37'),
	('272e7a56dd6c7a0c112e02785212a5c29bdaa3a379ef848968fe20c5d581769df8418c3b9e2563aa','a8533b20-bdcc-4325-8486-359cc549ae96',1,'Personal Access Token','[]',0,'2019-03-25 18:01:39','2019-03-25 18:01:39','2019-03-25 21:01:39'),
	('279241c1f81a9bfcc7a126370dba66dc3457e071afe84102daccf90e166c29d9ae5a2d0ca3b39dd4','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-03-27 17:52:41','2019-03-27 17:52:41','2019-03-27 20:52:41'),
	('27ce955e95ed8c91be2b2b14b97380c270d743eb4775c5229b1315ad718001f97e740b6ab1520d34','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-05-09 18:25:51','2019-05-09 18:25:51','2019-05-09 21:25:51'),
	('2976693a9415bd3b5d43ef34529b074a44e27556bd89d7e8ee3a202277b419674904f09188dd4989','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-05-14 11:41:32','2019-05-14 11:41:32','2019-05-14 14:41:32'),
	('2a0873685546ba1195c56aff284911b281c32a81ceee3d52516e2336219cfaaa9f2ff5eb714de398','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-11 17:42:33','2019-04-11 17:42:33','2019-04-11 20:42:33'),
	('2e9e4f139251f13bf92ca8033b12aef0ee4445337d767ec160a013a1b6c602bfc6dc91a4e4a93ce7','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-05-14 01:21:16','2019-05-14 01:21:16','2019-05-14 04:21:16'),
	('2eb5602ab84cec0e823c38df058dd3d0d464d0e97905a690f10aa4f2110b8961f6498b577d4d855f','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-05-07 12:29:05','2019-05-07 12:29:05','2019-05-07 15:29:05'),
	('2ec8d86f69c6129b24661b578af723b56240c8c7369123fa1ccbe93d3f95d7a6192857eebd69ec90','eba4046d-4f51-4476-8ba2-8071cb125382',1,'Personal Access Token','[]',0,'2019-03-27 14:58:19','2019-03-27 14:58:19','2019-03-27 17:58:19'),
	('2fcd3d2579f629ce8114c5fc5ece49aa9fd16903156a2d2e4574e20a38686aaa70dcaf6e509e4b72','a8533b20-bdcc-4325-8486-359cc549ae96',1,'Personal Access Token','[]',0,'2019-03-27 21:09:38','2019-03-27 21:09:38','2019-03-28 00:09:38'),
	('300b27a15c27ca4c66d54d6bc3b6c2d6f3df18e64cdb4a1869907d3a78b8c2c9aaeddf61635edeac','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-11 17:08:27','2019-04-11 17:08:27','2019-04-11 20:08:27'),
	('33a3669c4bdb209d60ac75a5a3dc1f29111c2377feb38db689cd572e875baf069dc4a64280b9f3a9','c3e10d9b-6b7d-430d-84ee-db365b69409f',1,'Personal Access Token','[]',0,'2019-03-25 12:55:59','2019-03-25 12:55:59','2019-03-25 15:55:59'),
	('398fb858c52941f9d4baad6a506324c58329d34f315f37771cd60f5e819ecb729ca8364a63582fe3','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-05-14 01:20:31','2019-05-14 01:20:31','2019-05-14 04:20:31'),
	('3cc3d2d6b5450237fae287302f96db8297efd9f451017556be4cfaa18cdf54d4aa824760c22f5b7e','a8533b20-bdcc-4325-8486-359cc549ae96',1,'Personal Access Token','[]',0,'2019-03-28 17:44:46','2019-03-28 17:44:46','2019-03-28 20:44:46'),
	('4098310e20f09829e2582fe323e520f81a78d9087ad5c7cd480ffcde6af146ea53791e301f4c3ef5','eba4046d-4f51-4476-8ba2-8071cb125382',1,'Personal Access Token','[]',0,'2019-04-11 17:45:04','2019-04-11 17:45:04','2019-04-11 20:45:04'),
	('42b106519e57bf59c1508bf9d996a6210785eaabc08a03d3396e9e8d1691bdda7d6e5531bc8e5282','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-11 13:03:55','2019-04-11 13:03:55','2019-04-11 16:03:55'),
	('44d5304016bb16dc18994c6a31e40d97ca667155bf138be01c42e8cb2fb313bfa7f1e4acd89fb3f5','a8533b20-bdcc-4325-8486-359cc549ae96',1,'Personal Access Token','[]',0,'2019-05-03 16:46:35','2019-05-03 16:46:35','2019-05-03 19:46:35'),
	('45793957d1835b845a2bfee9adc92d9f741145b2433570361bea028f04c8d10d6bd3e12a1b0cc037','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-09 17:35:48','2019-04-09 17:35:48','2019-04-09 20:35:48'),
	('475beda78faeecd838658172ff790ef33a19350f8baa0957b3b317fb505dd8bc26c3d1b331cfdbdf','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-09 16:58:38','2019-04-09 16:58:38','2019-04-09 19:58:38'),
	('4781c44eb70e1627f548fd428f6ecf02da052b4a0ac17040d84c3bd8cd2e96dc812c487d60591759','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-15 09:56:10','2019-04-15 09:56:10','2019-04-15 12:56:10'),
	('489b74648a10b0635eb8fe54d320896d69ae35447bea9b323dac1c01d5853b998da9b41dac1dc8da','eba4046d-4f51-4476-8ba2-8071cb125382',1,'Personal Access Token','[]',0,'2019-04-08 09:43:51','2019-04-08 09:43:51','2019-04-08 12:43:51'),
	('4de798a9ee7b904ea1d82b18afaf5232f95ddf07002de1da60fa43f6fee261f080e59764f7af58b4','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-11 13:35:10','2019-04-11 13:35:10','2019-04-11 16:35:10'),
	('4fd8c45fe0a52932fb1f67c553a98e8e58d27cf1ec4385bee876e78659236a3aee455c27cc8d236e','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-03-31 17:43:20','2019-03-31 17:43:20','2019-03-31 20:43:20'),
	('50987af12f55da29529983dcd0ccf338bfbee48e524b00df8d2729858890404a92de4a98923e1555','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-01 15:42:46','2019-04-01 15:42:46','2019-04-01 18:42:46'),
	('5210ea7560f77b37e482d11dcd57cb438486406a1ee9ebbd60bf6a6cf2af2157271349876375ed8b','a8533b20-bdcc-4325-8486-359cc549ae96',1,'Personal Access Token','[]',0,'2019-03-28 11:02:03','2019-03-28 11:02:03','2019-03-28 14:02:03'),
	('53e6a81aa492ac00d7018d033b8bd6fc865b1ebaee3db8ea95f240c3fcb5d0ff1e927607a9035cd1','a8533b20-bdcc-4325-8486-359cc549ae96',1,'Personal Access Token','[]',0,'2019-03-28 19:44:00','2019-03-28 19:44:00','2019-03-28 22:44:00'),
	('55e36dbef2b93222c03db90bd1a771e750387955f86b9b16ce0af717be89179f0526fabc24a9c4ea','a8533b20-bdcc-4325-8486-359cc549ae96',1,'Personal Access Token','[]',0,'2019-03-26 13:12:07','2019-03-26 13:12:07','2019-03-26 16:12:07'),
	('596594fb70736b27736b164ff5ec9c8d73dae707722bf118f7fb431cbb656bd7ac4c91a6e886670a','c3e10d9b-6b7d-430d-84ee-db365b69409f',1,'Personal Access Token','[]',0,'2019-04-01 15:00:11','2019-04-01 15:00:11','2019-04-01 18:00:11'),
	('5c486120ac408f771af9ec78b3246b2ba70ed1e9bbd5af0142f38e6a1b24e3dd10c312b0f2e1ebf5','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-03-25 23:21:24','2019-03-25 23:21:24','2019-03-26 02:21:24'),
	('5ea88859bbcb370e89afa3e6603303dde8482d484fdd84c0a3adf6d1666aef0b61409de1b4dd6288','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-03-28 18:18:14','2019-03-28 18:18:14','2019-03-28 21:18:14'),
	('5fe96e21e6a883d56a4252409a9769b290a63bf68293aea020ad3823584e8632ceeceed2e9e90914','c3e10d9b-6b7d-430d-84ee-db365b69409f',1,'Personal Access Token','[]',0,'2019-04-30 13:08:02','2019-04-30 13:08:02','2019-04-30 16:08:02'),
	('637beda004529a87ada1047c2689f2f32c5251769836f30d9929bfca6231228b1fbe7006780a7838','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-05-06 12:04:29','2019-05-06 12:04:29','2019-05-06 15:04:29'),
	('63b8581673e7600bd01520223025181751b2f75f42f88849152f4cc8b4fdf712837c2d49eaeb4901','a8533b20-bdcc-4325-8486-359cc549ae96',1,'Personal Access Token','[]',0,'2019-03-27 21:02:08','2019-03-27 21:02:08','2019-03-28 00:02:08'),
	('63c7a4091bfd59fb6af3a0bc28bc9ea967dc17b5c3e7fc4428fc941cfd3d1405aafdd5e5de624a74','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-22 12:05:41','2019-04-22 12:05:41','2019-04-22 15:05:41'),
	('64acdc06d941de739d8c83dade30181585072b6f0f3b2f3f085bf0a35944db49ea4bddf674cde3e6','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-03-25 23:52:44','2019-03-25 23:52:44','2019-03-26 02:52:44'),
	('65a1f687800f43bb7ecbcf81d0987883f1b3552a1afa92b61bed7a8d3bc5a5e88afba5b7e42ecf7a','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-11 09:55:14','2019-04-11 09:55:14','2019-04-11 12:55:14'),
	('67dbb58416b4385c8da395b6e9a6f974662c5989eca5bd75a14214a709475376b61bd694168f3bae','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-05-10 13:50:55','2019-05-10 13:50:55','2019-05-10 16:50:55'),
	('6e70e8f230a6f39c21284ccd92401f388bdcce8bd17f1733f644498ea07c582334bce42c7f762773','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-02 00:18:41','2019-04-02 00:18:41','2019-04-02 03:18:41'),
	('6f219224c94bfcf608191368fc841a7e32b8cb35b72495e075c21ebb6bae2867960220074d70e604','eba4046d-4f51-4476-8ba2-8071cb125382',1,'Personal Access Token','[]',0,'2019-03-29 19:13:10','2019-03-29 19:13:10','2019-03-29 22:13:10'),
	('7078b75200454fcb3cfde70dd9a26d108c4f1415207fe7fc04fe6f3107aca9ab8282e330083f64f5','a8533b20-bdcc-4325-8486-359cc549ae96',1,'Personal Access Token','[]',0,'2019-04-01 14:37:12','2019-04-01 14:37:12','2019-04-01 17:37:12'),
	('708a4887b8a3ae719f90d30154eddeca98a7acdd5f6ea9aaa87a36e0cc3f835c2ed698c4e34690f5','eba4046d-4f51-4476-8ba2-8071cb125382',1,'Personal Access Token','[]',0,'2019-03-25 12:49:45','2019-03-25 12:49:45','2019-03-25 15:49:45'),
	('70f9c5d79c4d725d427b67f0f59a76d35971b45bd6dfdd7ee27c9c865a3ce73cd5e5a825931c5a75','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-05-09 14:51:43','2019-05-09 14:51:43','2019-05-09 17:51:43'),
	('7112ca310743278a8e728932f69bb3be5e6166412eac2cca179fc27df55dba2db03f01501198f913','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-03-28 14:14:53','2019-03-28 14:14:53','2019-03-28 17:14:53'),
	('71429a3889e30377acd45eb289f5c4da8939432ccb634595d3b4ebd6c69601481fc65f4edc52bdfc','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-05 16:53:03','2019-04-05 16:53:03','2019-04-05 19:53:03'),
	('726baf7129cea32d83938db511de085a86e7bdf66af8de9007347b591d6c5ea8e5f3a9aedb9664f3','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-03-27 18:25:30','2019-03-27 18:25:30','2019-03-27 21:25:30'),
	('756373ba1f3b0c94e188d107e67028a583b1c233a9e580db3df4cf35858fe6477d279d66ca9ee175','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-12 09:37:25','2019-04-12 09:37:25','2019-04-12 12:37:25'),
	('75d495f8915d21309646b27e57dbbfe38a1823e9f8d7066ec23ea6b7f749282ae5f520ece23d57cd','a8533b20-bdcc-4325-8486-359cc549ae96',1,'Personal Access Token','[]',0,'2019-03-28 20:58:36','2019-03-28 20:58:36','2019-04-04 20:58:36'),
	('7a00cdd7dddae17a440fde6862ade95101198ebd734afe2e18b1c90b0db883e6e850172ace662d86','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-05-09 18:26:09','2019-05-09 18:26:09','2019-05-09 21:26:09'),
	('7cc51e60ba35220c88362f30169a32628afaf9f994e0419c1a688f106d1c4d9a7fbcbfe1b838f136','c3e10d9b-6b7d-430d-84ee-db365b69409f',1,'Personal Access Token','[]',0,'2019-05-13 16:39:17','2019-05-13 16:39:17','2019-05-13 19:39:17'),
	('81a70f3200f50815362e5ecc5ee0fdc93a06c0bd672632f9653451af3b2bcc431fac417957e881b1','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-11 13:01:38','2019-04-11 13:01:38','2019-04-11 16:01:38'),
	('87fb874ab602d87d0c2c98fcce503bd7f4cb45794dfaf1a23465e4cb5411af0457df2b650d34d4be','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-05-09 16:18:58','2019-05-09 16:18:58','2019-05-09 19:18:58'),
	('8860699fe9925b98b00cab64301105741dd789f15cddbd448e396e39fe81aa0d264fd6a32e14c113','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-05-09 16:19:28','2019-05-09 16:19:28','2019-05-09 19:19:28'),
	('90342a96886774d7ded071c7a7f1eaab5142cc5a9f092c85268cb791a93e33a8da947d550a005dce','a8533b20-bdcc-4325-8486-359cc549ae96',1,'Personal Access Token','[]',0,'2019-04-22 11:43:09','2019-04-22 11:43:09','2019-04-22 14:43:09'),
	('904ae9bdcb07a0782dcc1cf45b22963d0778952496340ffed5d30f538670320756bf482c16e1d9b3','eba4046d-4f51-4476-8ba2-8071cb125382',1,'Personal Access Token','[]',0,'2019-03-27 15:31:02','2019-03-27 15:31:02','2019-03-27 18:31:02'),
	('91b11969ac8651881f45ff39e2e50be17209449f6cfecdee9f8af8cd967c872a8c3e13590c63252e','eba4046d-4f51-4476-8ba2-8071cb125382',1,'Personal Access Token','[]',0,'2019-03-28 20:18:38','2019-03-28 20:18:38','2019-03-28 23:18:38'),
	('92a85bfa900e2ad723ba758035b8711f464c910dc511fb20188037e71e5a7b40ffcfedebd1406f8d','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-05-10 12:44:44','2019-05-10 12:44:44','2019-05-10 15:44:44'),
	('94fc36bbab69dd5a7dc6aa2ebaa6d4b20e418318d3a5bbbd92808888e21042fa548525c677fc6905','a8533b20-bdcc-4325-8486-359cc549ae96',1,'Personal Access Token','[]',0,'2019-03-28 19:37:35','2019-03-28 19:37:35','2019-03-28 22:37:35'),
	('982802ff377d268b3b15bd2cee3d60525c051ba8a027f20ffd1f35e4be10a7967c0c131e6744e0d4','c3e10d9b-6b7d-430d-84ee-db365b69409f',1,'Personal Access Token','[]',0,'2019-03-28 15:43:34','2019-03-28 15:43:34','2019-04-04 15:43:34'),
	('999f3010893d2d9f28b830cffbbdb9146feb2a98189a589ad7e233ebabc689eb11d383b0024cf08e','eba4046d-4f51-4476-8ba2-8071cb125382',1,'Personal Access Token','[]',0,'2019-04-01 16:48:25','2019-04-01 16:48:25','2019-04-01 19:48:25'),
	('9d15edc62d1baf0e422d06de28fd6147b3bc0a599d0a7dbb0fd24e3cba14212b6d75c1705fb4c56a','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-05-09 14:58:31','2019-05-09 14:58:31','2019-05-09 17:58:31'),
	('a1276ba17056900d07f347c9b2372ea8f09bc3d812bb1e586ef5dd2414ea663f7bba45b20a252e79','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-30 11:22:39','2019-04-30 11:22:39','2019-05-07 11:22:39'),
	('a238babfce47bcddb409bd1245d6bce5139e35514778e46145d65e908ef3f5fb3d206c34c8c55d14','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-03-26 00:08:09','2019-03-26 00:08:09','2019-03-26 03:08:09'),
	('a253895f51146ced14a0e0a22dd21ce86d1b4b11c98b07ec1027659085185c1e2214753e2e2d337a','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-01 12:23:11','2019-04-01 12:23:11','2019-04-01 15:23:11'),
	('a487c707f14f3969932278784fc7398daf9238b977e289a5515a22003e2a0fcc4ccfec3c1228db6c','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-03-25 16:59:38','2019-03-25 16:59:38','2019-04-01 16:59:38'),
	('a4b759996f13916800c1ce28395d65b0e31441c76c5b1864021f1537317542f7d0e3a336f4fb7ca6','eba4046d-4f51-4476-8ba2-8071cb125382',1,'Personal Access Token','[]',0,'2019-03-28 11:07:05','2019-03-28 11:07:05','2019-03-28 14:07:05'),
	('a698e727b71abc78932db01de0bc7821998975847372ad05b576b88738001745d054e2fc4a68f049','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-05-13 12:39:03','2019-05-13 12:39:03','2019-05-13 15:39:03'),
	('a71c83e0a3f947cd409097002e03ee410712ac96ca25e0bd326bb2155414f1a1b97a9776f55fd60e','c3e10d9b-6b7d-430d-84ee-db365b69409f',1,'Personal Access Token','[]',0,'2019-03-26 20:06:41','2019-03-26 20:06:41','2019-04-02 20:06:41'),
	('a7b7247b9ce6ed233b1f33890c7aea21aca8649ff75ebea5fd2bfee098ef2c315ce201ec6353ce1c','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-16 17:28:43','2019-04-16 17:28:43','2019-04-16 20:28:43'),
	('a87425ca45d587823fee7b36ddf7de980cde043ec752fc2ee068b9119b23d4e1a4be01b5cc582a55','a8533b20-bdcc-4325-8486-359cc549ae96',1,'Personal Access Token','[]',0,'2019-03-27 20:18:22','2019-03-27 20:18:22','2019-03-27 23:18:22'),
	('aabe082eb7ac814a7f8974303d5439400658499a6ecd19780534d35a4205cf055f95448de1a469ec','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-03-25 11:38:07','2019-03-25 11:38:07','2019-03-25 14:38:07'),
	('ad9f05788a313749d2de016793c95a358699ebdab8883baa8f4d4d6335e79d8bd2366c278f715af6','eba4046d-4f51-4476-8ba2-8071cb125382',1,'Personal Access Token','[]',0,'2019-04-08 09:39:08','2019-04-08 09:39:08','2019-04-08 12:39:08'),
	('af95a7f8644385dd97d58fdb689adcac93f95d8c6b01e6813f3ace0cf3709c66ba2306749350d20f','a8533b20-bdcc-4325-8486-359cc549ae96',1,'Personal Access Token','[]',0,'2019-04-22 19:35:54','2019-04-22 19:35:54','2019-04-29 19:35:54'),
	('b0bb6cee95587b42022760b3b4493e9e88dcdeae16268eb294170522b8d47ecde2c7183b357e58de','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-03-26 18:52:18','2019-03-26 18:52:18','2019-04-02 18:52:18'),
	('b0fb9f4499437e844cae1572151c345fb2017786fd8147a00f2dd812f580954e00f337af89b837f7','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-05-10 14:38:18','2019-05-10 14:38:18','2019-05-10 17:38:18'),
	('b2a462050aefa4c70f517b7344147f791bd778cdfb9c5ea19351f86cc6821b860c2225d39dc78455','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-05-10 14:42:18','2019-05-10 14:42:18','2019-05-10 17:42:18'),
	('b2b1eae9c5f28ab4c680050f2e7fc0699fd3f5f403a166c4b0edf5fd59d17eea6c8afd3f2dfe5c06','a8533b20-bdcc-4325-8486-359cc549ae96',1,'Personal Access Token','[]',0,'2019-04-02 14:33:54','2019-04-02 14:33:54','2019-04-09 14:33:54'),
	('b3914c34043ffa506536e05aa27ec87af14ebb8756a03ea9b61d60c3cd6bdb1ea46ad464b22b6883','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-03-28 20:57:13','2019-03-28 20:57:13','2019-03-28 23:57:13'),
	('b46f452aa12280f5875a82fe97c05c62ee92cfcd9e02ce552b7b6c3c84f3cad62dea034116d6c392','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-13 18:29:56','2019-04-13 18:29:56','2019-04-20 18:29:56'),
	('ba23683352151dbaba8f7a3062ecdff2866f03a96482f0e988a0f2c13998822e27ac4c0c31be3e1e','a8533b20-bdcc-4325-8486-359cc549ae96',1,'Personal Access Token','[]',0,'2019-03-27 14:38:47','2019-03-27 14:38:47','2019-03-27 17:38:47'),
	('bab367289c8aba5edfc15358b47e8f665d340cc2a29a9bf8a2c9404d7c9ee573d3e4d7c378e9e434','a8533b20-bdcc-4325-8486-359cc549ae96',1,'Personal Access Token','[]',0,'2019-03-28 16:36:38','2019-03-28 16:36:38','2019-03-28 19:36:38'),
	('bbd1f9778626bfbd3010b8f3f0e923e560e116616f689f29439882a639e689dc110876a9e3d6b250','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-02 00:27:07','2019-04-02 00:27:07','2019-04-02 03:27:07'),
	('bca45471019bdb1dfae94c2154b0e51b0717f2d9311439642608c185251032860174741ab5bf51d6','a8533b20-bdcc-4325-8486-359cc549ae96',1,'Personal Access Token','[]',0,'2019-04-12 16:17:39','2019-04-12 16:17:39','2019-04-19 16:17:39'),
	('bd44fe87bbfacfadbeb8e6b881371f112b5179946a69fc958de73bbe2688e8d9dcb43b0c44323c7c','eba4046d-4f51-4476-8ba2-8071cb125382',1,'Personal Access Token','[]',0,'2019-03-28 20:11:02','2019-03-28 20:11:02','2019-03-28 23:11:02'),
	('bff8c99149b7843016111ee0c923bc0e7f47b29a36aee90d9964b1f24be89dc7c79b73a4ea7f8d56','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-05-09 14:14:11','2019-05-09 14:14:11','2019-05-09 17:14:11'),
	('c16df6f3c03dbf90050f67fb55f3fc67eebe14d311e225c125bfad94d9df31eb78b8e7b0a40edaac','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-05-09 18:31:06','2019-05-09 18:31:06','2019-05-09 21:31:06'),
	('c18176018e8e09c65c6e7884d3163fd4efca2aea6afb078b247cf7a68efe15e6f8cdc9a833b461ea','a8533b20-bdcc-4325-8486-359cc549ae96',1,'Personal Access Token','[]',0,'2019-05-03 17:08:22','2019-05-03 17:08:22','2019-05-03 20:08:22'),
	('c27bc5cc32a01e8ca942aa1c397cdcb81a6ddc0dee3c4e2e5035100bf0333b37e0f21417efed9f22','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-02 14:40:56','2019-04-02 14:40:56','2019-04-02 17:40:56'),
	('c386a7795f175ced87a5b5291983fe19ef761ce1077976b7adbf8ab6d8627d564dc2ca365e10a260','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-05-10 14:58:10','2019-05-10 14:58:10','2019-05-10 17:58:10'),
	('cb2c21c870dfaa799fd256fea29dd8952a6e56c3f915b1e5adcf2ff7f610efc555e02f7cdb88324c','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-08 09:41:07','2019-04-08 09:41:07','2019-04-08 12:41:07'),
	('cf843b56993e2f8f3735a65caa865cf79fdb966ddb7d2d44608e71375a781d29b3bae9a72965c796','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-11 17:45:27','2019-04-11 17:45:27','2019-04-11 20:45:27'),
	('d168117105bcbe8d937bf9583773c8b8dfd9fc1b5aad324beeb4cc748ea11e120eadbb10f1b4d464','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-05-09 14:49:26','2019-05-09 14:49:26','2019-05-09 17:49:26'),
	('d2bcc256279b573e1d88462b32e39d471160b1aaa460413f4795ca9756183ddcd037dcc93e9bdda9','a8533b20-bdcc-4325-8486-359cc549ae96',1,'Personal Access Token','[]',0,'2019-03-28 18:57:25','2019-03-28 18:57:25','2019-03-28 21:57:25'),
	('d6d32db5e86e55ca55892e02f9e1533be7f6cc0fcd35b9fc5a09c4b2c752e88a8535db306cac4fd9','a8533b20-bdcc-4325-8486-359cc549ae96',1,'Personal Access Token','[]',0,'2019-03-27 19:21:33','2019-03-27 19:21:33','2019-04-03 19:21:33'),
	('d773e902eb362f9b2b6ebb0f56ed4800cecd5e9ba7c6fa65fd4b90b7a88586dee1c045da070fa471','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-02 14:35:58','2019-04-02 14:35:58','2019-04-02 17:35:58'),
	('d82ca53b41a79cc1823ad5ac28af3cade18d5ff16a586270e7bcf4e9052f061d7ba8a4d706d7ecf5','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-03-29 17:36:33','2019-03-29 17:36:33','2019-03-29 20:36:33'),
	('d9fc7a7c9e167f218df6fc1defa8695bb5596e193b0c41aadc9fd3c34e88bf138ae68f9a776c12a1','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-09 18:54:20','2019-04-09 18:54:20','2019-04-09 21:54:20'),
	('dbd045b9b27256533d8095bef5de7b7537459bbb7cc285ab2f252017882c0b476ffcc98a94d0eaea','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-09 10:15:29','2019-04-09 10:15:29','2019-04-09 13:15:29'),
	('dc31ecaf158a020521747836ed42b44114349998817b588721fa4feca877cce65ba8caf874a0b8f4','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-03-27 21:37:03','2019-03-27 21:37:03','2019-03-28 00:37:03'),
	('dc9bd2a5caf53935fa0ebfc5d88408f8418df54c3422b2c877360d40da6907807911a3b161ae441f','eba4046d-4f51-4476-8ba2-8071cb125382',1,'Personal Access Token','[]',0,'2019-03-27 15:34:27','2019-03-27 15:34:27','2019-03-27 18:34:27'),
	('de2c2738ae61f9dc721e18c1264398306e1095455844182562f4545c83d8b36b6bd4bbdac9be12e1','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-11 17:44:43','2019-04-11 17:44:43','2019-04-11 20:44:43'),
	('e2d5716f0b584ef79155de52f1ae9c0feb190240c46d4375137f584d242ef072487b0ab901af216f','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-05-10 13:24:49','2019-05-10 13:24:49','2019-05-10 16:24:49'),
	('e316aa3e3d5b7795852b9414968f0bad63802f0b2baab5ebfbaf3efc79e82e182e384763edda7049','eba4046d-4f51-4476-8ba2-8071cb125382',1,'Personal Access Token','[]',0,'2019-03-28 17:51:30','2019-03-28 17:51:30','2019-03-28 20:51:30'),
	('e3722d3b44cc9bb14b623c0eb7f51891c53c5a3fec5c065fce4b50664cf5579e8085c1d5ff673b0d','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-05-09 16:24:15','2019-05-09 16:24:15','2019-05-09 19:24:15'),
	('e50b7940a6344a0744fccbfc2cb44abb2a3c601bb8e6f54d445b5e011738e7e1cdbd40d1e7abac9a','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-03-28 15:39:13','2019-03-28 15:39:13','2019-03-28 18:39:13'),
	('e590c52ca1d7ab59272d8161545df33d2420d966001846f03f248ba26e78259969a19712b3f089e4','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-02 16:07:57','2019-04-02 16:07:57','2019-04-02 19:07:57'),
	('e870d2e16e57a0e70cf5766988e50e158dd359a201befdc0883b9313a614a191155101fe8243c637','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-05-13 15:42:16','2019-05-13 15:42:16','2019-05-13 18:42:16'),
	('ec4e6c64d2c69930b05fc71bdaa82a345f3ab8079d5820ecaa814afb5c81d2a039938ad9661271c4','a8533b20-bdcc-4325-8486-359cc549ae96',1,'Personal Access Token','[]',0,'2019-03-28 20:09:25','2019-03-28 20:09:25','2019-03-28 23:09:25'),
	('ee34dbdbbb6ff477ec8b66dccda741cc29641ddc350b9898e7ea8a54e5d89f5b55a8011c30d36da1','c3e10d9b-6b7d-430d-84ee-db365b69409f',1,'Personal Access Token','[]',0,'2019-04-04 11:32:46','2019-04-04 11:32:46','2019-04-11 11:32:46'),
	('f108a70a46f7de291317d8c1d1c6835e3d69133c1c26bc6756db51084c7d03ad065d0d7ad6ee0720','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-18 01:12:16','2019-04-18 01:12:16','2019-04-18 04:12:16'),
	('f15d4f59311b460ed04b70c93513e67f708837bd0a566e4f564c39ef9535530ca728670e7c07c4cf','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-03-26 17:27:09','2019-03-26 17:27:09','2019-03-26 20:27:09'),
	('f21a47bd8bdfca576cccc21622e4656c4cc7b3e7c30e118ce10e43d04f3701328766cccac85efe4f','eba4046d-4f51-4476-8ba2-8071cb125382',1,'Personal Access Token','[]',0,'2019-04-11 17:50:44','2019-04-11 17:50:44','2019-04-11 20:50:44'),
	('f25d341db14e974f2756a900623a7d66ace58415266e78c14c950af262cd6cb3af92f510aede59a6','c3e10d9b-6b7d-430d-84ee-db365b69409f',1,'Personal Access Token','[]',0,'2019-03-28 14:23:39','2019-03-28 14:23:39','2019-03-28 17:23:39'),
	('f600e02f562fceca5527947240bb1f30b8810fc62330f28a3eaeae0946a294f19e23f736d2424c01','a8533b20-bdcc-4325-8486-359cc549ae96',1,'Personal Access Token','[]',0,'2019-04-05 18:50:55','2019-04-05 18:50:55','2019-04-12 18:50:55'),
	('f70d30be0b20ff8665a961a57c92a7e15fb9139e4c85a9a0e39ce5d4f5494dc90519b9f6e2aa8012','fee203c4-017c-4482-aa6e-dbf671a91885',1,'Personal Access Token','[]',0,'2019-04-01 23:57:12','2019-04-01 23:57:12','2019-04-02 02:57:12'),
	('fd38cdef70d84ee69d336e04b39ccd4e30cef9595fbb3debcd5b68bdd76e9c0a2b7a9f17de316fea','eba4046d-4f51-4476-8ba2-8071cb125382',1,'Personal Access Token','[]',0,'2019-04-09 17:56:07','2019-04-09 17:56:07','2019-04-09 20:56:07');

/*!40000 ALTER TABLE `oauth_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table oauth_auth_codes
# ------------------------------------------------------------

DROP TABLE IF EXISTS `oauth_auth_codes`;

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `client_id` int(10) unsigned NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table oauth_clients
# ------------------------------------------------------------

DROP TABLE IF EXISTS `oauth_clients`;

CREATE TABLE `oauth_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `oauth_clients` WRITE;
/*!40000 ALTER TABLE `oauth_clients` DISABLE KEYS */;

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`)
VALUES
	(1,NULL,'Laravel Personal Access Client','L8vsocQJOE0XGwARtIs25P6yvGzCNmyQGpPmH0gy','http://localhost',1,0,0,'2019-03-23 16:45:33','2019-03-23 16:45:33'),
	(2,NULL,'Laravel Password Grant Client','KiqI8PUi0zYw3JF6pWLBvQDpslquKn72oCATktMC','http://localhost',0,1,0,'2019-03-23 16:45:33','2019-03-23 16:45:33');

/*!40000 ALTER TABLE `oauth_clients` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table oauth_personal_access_clients
# ------------------------------------------------------------

DROP TABLE IF EXISTS `oauth_personal_access_clients`;

CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_personal_access_clients_client_id_index` (`client_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `oauth_personal_access_clients` WRITE;
/*!40000 ALTER TABLE `oauth_personal_access_clients` DISABLE KEYS */;

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`)
VALUES
	(1,1,'2019-03-23 16:45:33','2019-03-23 16:45:33');

/*!40000 ALTER TABLE `oauth_personal_access_clients` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table oauth_refresh_tokens
# ------------------------------------------------------------

DROP TABLE IF EXISTS `oauth_refresh_tokens`;

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table password_resets
# ------------------------------------------------------------

DROP TABLE IF EXISTS `password_resets`;

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table payment_types
# ------------------------------------------------------------

DROP TABLE IF EXISTS `payment_types`;

CREATE TABLE `payment_types` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `payment_type_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `payment_types` WRITE;
/*!40000 ALTER TABLE `payment_types` DISABLE KEYS */;

INSERT INTO `payment_types` (`id`, `payment_type_name`, `created_at`, `updated_at`)
VALUES
	(1,'(01) Credit Card','2019-03-22 02:57:43','2019-03-27 15:04:45'),
	(2,'(02) Debit Card','2019-03-22 02:57:43','2019-03-27 15:05:01'),
	(3,'(03) Cash','2019-03-22 02:57:43','2019-03-27 15:05:16');

/*!40000 ALTER TABLE `payment_types` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table permission_role
# ------------------------------------------------------------

DROP TABLE IF EXISTS `permission_role`;

CREATE TABLE `permission_role` (
  `permission_id` int(10) unsigned NOT NULL,
  `role_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`permission_id`,`role_id`),
  KEY `permission_role_role_id_foreign` (`role_id`),
  CONSTRAINT `permission_role_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `permission_role_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `permission_role` WRITE;
/*!40000 ALTER TABLE `permission_role` DISABLE KEYS */;

INSERT INTO `permission_role` (`permission_id`, `role_id`)
VALUES
	(1,1),
	(2,1),
	(3,1),
	(4,1),
	(5,1),
	(6,1),
	(7,1),
	(2,2),
	(3,2),
	(4,2),
	(5,2),
	(2,3),
	(6,3),
	(1,4),
	(2,4),
	(3,4),
	(4,4),
	(5,4),
	(6,4),
	(7,4);

/*!40000 ALTER TABLE `permission_role` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table permission_user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `permission_user`;

CREATE TABLE `permission_user` (
  `permission_id` int(10) unsigned NOT NULL,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`user_id`,`permission_id`,`user_type`),
  KEY `permission_user_permission_id_foreign` (`permission_id`),
  CONSTRAINT `permission_user_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



# Dump of table permissions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `permissions`;

CREATE TABLE `permissions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `permissions_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;

INSERT INTO `permissions` (`id`, `name`, `display_name`, `description`, `created_at`, `updated_at`)
VALUES
	(1,'OWNER-ACCESS','Owner','Can access anything','2019-03-22 13:48:42','2019-04-07 01:24:47'),
	(2,'CUSTOMER-SEARCH','Customer Search','Can access customer search menu','2019-04-07 00:45:37','2019-04-07 00:45:37'),
	(3,'MEMBER-PARTNER','Member Partner','Can access member partner menu','2019-04-07 01:25:51','2019-04-07 01:25:51'),
	(4,'STAFF','Staff','Can access staff menu','2019-04-07 01:27:03','2019-04-07 01:27:03'),
	(5,'CLASS-PARTICIPANTS','Class Participants','Can access class participants menu','2019-04-07 01:27:48','2019-04-18 01:15:59'),
	(6,'FINANCE','Finance','Can access finance menu','2019-04-07 01:28:27','2019-04-07 01:28:27'),
	(7,'MASTER','Master','Can access master menu','2019-04-07 04:24:53','2019-04-07 04:24:53');

/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table personal_trainer_members
# ------------------------------------------------------------

DROP TABLE IF EXISTS `personal_trainer_members`;

CREATE TABLE `personal_trainer_members` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_trainer_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `member_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `personal_trainer_members` WRITE;
/*!40000 ALTER TABLE `personal_trainer_members` DISABLE KEYS */;

INSERT INTO `personal_trainer_members` (`id`, `personal_trainer_id`, `member_id`, `start_date`, `end_date`, `created_at`, `updated_at`)
VALUES
	('191cbac0-d624-4ab4-8f9a-35394de5197c','6d8272df-c93d-41d6-a94c-68ec4e817752','2451f353-4551-4a93-a584-710f0cc12434','2019-05-13','2019-07-13','2019-05-13 17:21:49','2019-05-13 17:21:49'),
	('4a2f7368-5031-4e80-b33c-f9b69d0fc403','65ad5b89-552f-4926-b8ab-06564933fc07','287f7992-7999-450e-945c-de6cec9f8a01','2019-05-13','2019-07-13','2019-05-13 17:24:38','2019-05-13 17:24:38'),
	('bf58f6c8-0118-4f28-933e-1540a3d6aec8','6d8272df-c93d-41d6-a94c-68ec4e817752','f2a4a9d5-b81b-43a3-8a1e-2e0b4e20836e','2019-05-13','2019-07-13','2019-05-13 17:26:34','2019-05-13 17:26:34');

/*!40000 ALTER TABLE `personal_trainer_members` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table personal_trainers
# ------------------------------------------------------------

DROP TABLE IF EXISTS `personal_trainers`;

CREATE TABLE `personal_trainers` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quota` int(11) DEFAULT '0',
  `remains` int(11) DEFAULT '0',
  `price` double NOT NULL DEFAULT '0',
  `session` int(11) DEFAULT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `branch_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `personal_trainers` WRITE;
/*!40000 ALTER TABLE `personal_trainers` DISABLE KEYS */;

INSERT INTO `personal_trainers` (`id`, `staff_id`, `quota`, `remains`, `price`, `session`, `state`, `created_at`, `updated_at`, `branch_id`)
VALUES
	('65ad5b89-552f-4926-b8ab-06564933fc07','c3a3a1e1-2adf-41ff-ace6-c65aa24e8074',20,18,5500000,10,'Available','2019-03-27 15:02:56','2019-05-13 17:24:38',NULL),
	('6d8272df-c93d-41d6-a94c-68ec4e817752','71e69cf5-2e3f-48f9-b8a9-b24a23fca14f',20,2,6500000,10,'Available','2019-03-27 15:02:38','2019-05-13 17:26:34',NULL);

/*!40000 ALTER TABLE `personal_trainers` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table positions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `positions`;

CREATE TABLE `positions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `position_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `positions` WRITE;
/*!40000 ALTER TABLE `positions` DISABLE KEYS */;

INSERT INTO `positions` (`id`, `position_name`, `created_at`, `updated_at`)
VALUES
	(1,'Owner','2019-03-22 19:00:32','2019-03-22 19:00:32'),
	(2,'Founder','2019-03-22 19:00:40','2019-03-22 19:00:40'),
	(3,'Front Officer','2019-03-22 19:00:52','2019-03-22 19:00:52'),
	(4,'Helper','2019-03-22 19:01:00','2019-03-22 19:01:00'),
	(5,'Personal Trainer','2019-03-22 19:01:11','2019-03-22 19:01:11'),
	(6,'Coach','2019-03-22 19:01:19','2019-03-22 19:01:19'),
	(7,'JDI Team','2019-03-25 11:19:51','2019-03-25 11:19:51');

/*!40000 ALTER TABLE `positions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table prices
# ------------------------------------------------------------

DROP TABLE IF EXISTS `prices`;

CREATE TABLE `prices` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `member_type_id` int(10) unsigned NOT NULL,
  `payment_type_id` int(10) unsigned NOT NULL,
  `price` double NOT NULL DEFAULT '0',
  `recuring` tinyint(1) NOT NULL DEFAULT '0',
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `branch_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `prices` WRITE;
/*!40000 ALTER TABLE `prices` DISABLE KEYS */;

INSERT INTO `prices` (`id`, `member_type_id`, `payment_type_id`, `price`, `recuring`, `start_date`, `end_date`, `created_at`, `updated_at`, `branch_id`)
VALUES
	(1,5,1,1400000,1,'2019-01-01','2030-12-31','2019-03-22 16:33:01','2019-03-31 23:19:25',NULL),
	(2,5,2,1600000,0,'2019-01-01','2030-12-31','2019-03-22 16:39:18','2019-03-22 16:39:18',NULL),
	(3,5,3,1600000,0,'2019-01-01','2030-12-31','2019-03-22 16:43:50','2019-03-22 16:43:50',NULL),
	(5,1,2,4000000,0,'2019-01-01','2030-12-31','2019-03-22 16:45:08','2019-03-22 16:45:08',NULL),
	(6,1,3,4000000,0,'2019-01-01','2030-12-31','2019-03-22 16:45:26','2019-03-22 16:45:26',NULL),
	(8,2,2,250000,0,'2019-01-01','2030-12-31','2019-03-22 16:46:45','2019-03-22 16:46:45',NULL),
	(9,2,3,250000,0,'2019-01-01','2030-12-31','2019-03-22 16:47:13','2019-03-22 16:47:13',NULL),
	(11,4,2,2000000,0,'2019-01-01','2030-12-31','2019-03-22 16:48:51','2019-03-22 16:48:51',NULL),
	(12,4,3,2000000,0,'2019-01-01','2030-12-31','2019-03-22 16:49:10','2019-03-22 16:49:10',NULL),
	(14,2,1,250000,0,'2019-01-01','2030-12-31','2019-03-25 13:28:20','2019-03-25 13:28:20',NULL),
	(19,5,1,1600000,0,'2019-01-01','2030-12-31','2019-04-16 19:51:04','2019-04-16 19:51:04',NULL),
	(20,1,1,4000000,0,'2019-01-01','2030-12-31','2019-04-22 20:19:43','2019-04-22 20:19:43',NULL),
	(21,4,1,2000000,0,'2019-01-01','2030-12-31','2019-04-22 20:20:12','2019-04-22 20:20:12',NULL);

/*!40000 ALTER TABLE `prices` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table question_liabilities
# ------------------------------------------------------------

DROP TABLE IF EXISTS `question_liabilities`;

CREATE TABLE `question_liabilities` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `liability_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `health_question_id` int(10) unsigned NOT NULL,
  `answer` tinyint(1) NOT NULL DEFAULT '0',
  `reason` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `question_liabilities` WRITE;
/*!40000 ALTER TABLE `question_liabilities` DISABLE KEYS */;

INSERT INTO `question_liabilities` (`id`, `liability_id`, `health_question_id`, `answer`, `reason`, `created_at`, `updated_at`)
VALUES
	(121,'7240e003-52bd-43a2-86da-1a361c35e2c6',5,1,'1','2019-04-23 11:49:47','2019-04-23 11:49:47'),
	(122,'7240e003-52bd-43a2-86da-1a361c35e2c6',6,1,'Foot Palm Surgeries','2019-04-23 11:49:47','2019-04-23 11:49:47'),
	(123,'5e57f08e-f6ae-4739-baba-50b33ad863d6',7,1,'','2019-04-23 14:14:11','2019-04-23 14:14:11'),
	(227,'b2284952-73d3-4490-929c-ef357406865b',2,0,'','2019-05-13 15:46:14','2019-05-13 15:46:14'),
	(228,'b2284952-73d3-4490-929c-ef357406865b',4,1,'','2019-05-13 15:46:14','2019-05-13 15:46:14'),
	(229,'b2284952-73d3-4490-929c-ef357406865b',5,1,'7','2019-05-13 15:46:14','2019-05-13 15:46:14'),
	(230,'b2284952-73d3-4490-929c-ef357406865b',6,1,'Angkle','2019-05-13 15:46:14','2019-05-13 15:46:14'),
	(231,'b2284952-73d3-4490-929c-ef357406865b',7,0,'','2019-05-13 15:46:14','2019-05-13 15:46:14'),
	(232,'b2284952-73d3-4490-929c-ef357406865b',8,1,'','2019-05-13 15:46:14','2019-05-13 15:46:14'),
	(233,'7b960db3-28ed-4ab7-ac56-6e776e557ff6',2,1,'','2019-05-13 16:17:10','2019-05-13 16:17:10'),
	(234,'7b960db3-28ed-4ab7-ac56-6e776e557ff6',4,0,'','2019-05-13 16:17:10','2019-05-13 16:17:10'),
	(235,'7b960db3-28ed-4ab7-ac56-6e776e557ff6',5,1,'3','2019-05-13 16:17:10','2019-05-13 16:17:10'),
	(236,'7b960db3-28ed-4ab7-ac56-6e776e557ff6',6,1,'Ankle','2019-05-13 16:17:10','2019-05-13 16:17:10'),
	(237,'7b960db3-28ed-4ab7-ac56-6e776e557ff6',7,0,'','2019-05-13 16:17:10','2019-05-13 16:17:10'),
	(238,'7b960db3-28ed-4ab7-ac56-6e776e557ff6',8,1,'','2019-05-13 16:17:10','2019-05-13 16:17:10'),
	(239,'5e9ff4ba-3747-494a-80d1-a97b01603111',2,1,'','2019-05-13 16:25:49','2019-05-13 16:25:49'),
	(240,'5e9ff4ba-3747-494a-80d1-a97b01603111',4,0,'','2019-05-13 16:25:49','2019-05-13 16:25:49'),
	(241,'5e9ff4ba-3747-494a-80d1-a97b01603111',5,1,'3','2019-05-13 16:25:49','2019-05-13 16:25:49'),
	(242,'5e9ff4ba-3747-494a-80d1-a97b01603111',6,1,'Ankle','2019-05-13 16:25:49','2019-05-13 16:25:49'),
	(243,'5e9ff4ba-3747-494a-80d1-a97b01603111',7,0,'','2019-05-13 16:25:49','2019-05-13 16:25:49'),
	(244,'5e9ff4ba-3747-494a-80d1-a97b01603111',8,1,'','2019-05-13 16:25:49','2019-05-13 16:25:49'),
	(245,'1762be9b-8e94-4705-b72d-1384028ee106',2,1,'','2019-05-13 18:34:44','2019-05-13 18:34:44'),
	(246,'1762be9b-8e94-4705-b72d-1384028ee106',4,0,'','2019-05-13 18:34:44','2019-05-13 18:34:44'),
	(247,'1762be9b-8e94-4705-b72d-1384028ee106',5,1,'2','2019-05-13 18:34:44','2019-05-13 18:34:44'),
	(248,'1762be9b-8e94-4705-b72d-1384028ee106',6,1,'ankle','2019-05-13 18:34:44','2019-05-13 18:34:44'),
	(249,'1762be9b-8e94-4705-b72d-1384028ee106',7,0,'','2019-05-13 18:34:44','2019-05-13 18:34:44'),
	(250,'1762be9b-8e94-4705-b72d-1384028ee106',8,1,'','2019-05-13 18:34:44','2019-05-13 18:34:44'),
	(251,'a2f08610-8688-42fe-9e8c-5e46dbe4fa69',2,1,'','2019-05-14 11:35:29','2019-05-14 11:35:29'),
	(252,'a2f08610-8688-42fe-9e8c-5e46dbe4fa69',4,0,'','2019-05-14 11:35:29','2019-05-14 11:35:29'),
	(253,'a2f08610-8688-42fe-9e8c-5e46dbe4fa69',5,1,'2','2019-05-14 11:35:29','2019-05-14 11:35:29'),
	(254,'a2f08610-8688-42fe-9e8c-5e46dbe4fa69',6,1,'ankle','2019-05-14 11:35:29','2019-05-14 11:35:29'),
	(255,'a2f08610-8688-42fe-9e8c-5e46dbe4fa69',7,1,'','2019-05-14 11:35:29','2019-05-14 11:35:29'),
	(256,'a2f08610-8688-42fe-9e8c-5e46dbe4fa69',8,1,'','2019-05-14 11:35:29','2019-05-14 11:35:29'),
	(257,'2eb83078-9246-4bab-b0fe-9de53e711b36',2,1,'','2019-05-14 12:09:43','2019-05-14 12:09:43'),
	(258,'2eb83078-9246-4bab-b0fe-9de53e711b36',4,0,'','2019-05-14 12:09:43','2019-05-14 12:09:43'),
	(259,'2eb83078-9246-4bab-b0fe-9de53e711b36',5,1,'1','2019-05-14 12:09:43','2019-05-14 12:09:43'),
	(260,'2eb83078-9246-4bab-b0fe-9de53e711b36',6,1,'break','2019-05-14 12:09:43','2019-05-14 12:09:43'),
	(261,'2eb83078-9246-4bab-b0fe-9de53e711b36',7,1,'','2019-05-14 12:09:43','2019-05-14 12:09:43'),
	(262,'2eb83078-9246-4bab-b0fe-9de53e711b36',8,1,'','2019-05-14 12:09:43','2019-05-14 12:09:43');

/*!40000 ALTER TABLE `question_liabilities` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table recurings
# ------------------------------------------------------------

DROP TABLE IF EXISTS `recurings`;

CREATE TABLE `recurings` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `member_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `credit_card_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `signature` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `autodebit_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(1) DEFAULT '0',
  `member_status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `notes` text COLLATE utf8mb4_unicode_ci,
  `recuring_date` int(11) DEFAULT NULL,
  `recuring_payment` double DEFAULT NULL,
  `unpaid` double DEFAULT NULL,
  `finance_status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `finance_notes` text COLLATE utf8mb4_unicode_ci,
  `bank_approval_code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank_notes` text COLLATE utf8mb4_unicode_ci,
  `bank_withdrawal` double DEFAULT NULL,
  `fo_status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fo_payment` double DEFAULT NULL,
  `branch_id` int(11) DEFAULT NULL,
  `edc_id` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `progress` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `recurings` WRITE;
/*!40000 ALTER TABLE `recurings` DISABLE KEYS */;

INSERT INTO `recurings` (`id`, `member_id`, `credit_card_id`, `date`, `signature`, `autodebit_id`, `status`, `member_status`, `notes`, `recuring_date`, `recuring_payment`, `unpaid`, `finance_status`, `finance_notes`, `bank_approval_code`, `bank_notes`, `bank_withdrawal`, `fo_status`, `fo_payment`, `branch_id`, `edc_id`, `created_at`, `updated_at`, `progress`)
VALUES
	(54,'2451f353-4551-4a93-a584-710f0cc12434','109d6d54-c40d-4e76-bb98-77616827ad60','2019-05-01','https://api.empirefit.club/storage/signatures/cc/20190513_1557744021cc_sign_3524040204850002.png',NULL,1,'Active',NULL,1,1400000,1400000,'UNDONE','Tolong tagih ya',NULL,NULL,NULL,NULL,NULL,1,1,'2019-05-13 19:05:55','2019-05-14 17:29:47',0),
	(55,'ea68bca9-1a14-418a-b2e9-99fe74e0f3b6','3098b2c1-1c4b-4f8c-951b-5f1dfbf3490c','2019-05-01','https://api.empirefit.club/storage/signatures/cc/20190423_1555995597cc_sign_4568900511843001.png',NULL,1,'Active',NULL,1,1400000,1400000,'UNDONE',NULL,NULL,NULL,NULL,NULL,NULL,1,1,'2019-05-13 19:05:55','2019-05-14 17:23:14',0),
	(56,'287f7992-7999-450e-945c-de6cec9f8a01','49fbbc0a-c20c-4956-88e1-b1dc75bca8e7','2019-06-15','https://api.empirefit.club/storage/signatures/cc/20190514_1557801731cc_sign_3525054702900002.png',NULL,1,'Active',NULL,15,1400000,1400000,'UNDONE','Tagih bos',NULL,NULL,NULL,NULL,NULL,1,1,'2019-05-15 00:10:01','2019-05-15 15:20:37',0),
	(57,'f2a4a9d5-b81b-43a3-8a1e-2e0b4e20836e','6be94cc1-211d-4bb5-aec0-a87d68cc70d6','2019-06-15','https://api.empirefit.club/storage/signatures/cc/20190514_1557822891cc_sign_3308180802840002.png',NULL,1,'Active',NULL,15,1400000,1400000,'UNDONE','Tagih bos, awas ae lu kalo kaga tagih',NULL,NULL,NULL,NULL,NULL,1,1,'2019-05-15 00:10:01','2019-05-15 15:29:31',0);

/*!40000 ALTER TABLE `recurings` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table role_user
# ------------------------------------------------------------

DROP TABLE IF EXISTS `role_user`;

CREATE TABLE `role_user` (
  `role_id` int(10) unsigned NOT NULL,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`,`user_type`),
  KEY `role_user_role_id_foreign` (`role_id`),
  CONSTRAINT `role_user_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `role_user` WRITE;
/*!40000 ALTER TABLE `role_user` DISABLE KEYS */;

INSERT INTO `role_user` (`role_id`, `user_id`, `user_type`)
VALUES
	(4,'556bfc82-e1bd-4a53-afd9-550c048db9dc','App\\User'),
	(4,'a8533b20-bdcc-4325-8486-359cc549ae96','App\\User'),
	(4,'c3e10d9b-6b7d-430d-84ee-db365b69409f','App\\User'),
	(4,'eba4046d-4f51-4476-8ba2-8071cb125382','App\\User'),
	(4,'fee203c4-017c-4482-aa6e-dbf671a91885','App\\User');

/*!40000 ALTER TABLE `role_user` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table roles
# ------------------------------------------------------------

DROP TABLE IF EXISTS `roles`;

CREATE TABLE `roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `display_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `roles_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;

INSERT INTO `roles` (`id`, `name`, `display_name`, `description`, `created_at`, `updated_at`)
VALUES
	(1,'Owner & Founder','Owner & Founder','can do anything in the project','2019-03-22 02:57:42','2019-03-25 12:08:18'),
	(2,'Front Officer','Front Officer','can do specific task','2019-03-22 02:57:42','2019-03-25 12:07:30'),
	(3,'Finance Officer','Finance Officer','can do specific task','2019-03-22 02:57:42','2019-03-25 12:07:47'),
	(4,'Admin','Admin','Admin','2019-03-25 12:19:54','2019-03-25 12:19:54');

/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table schedules
# ------------------------------------------------------------

DROP TABLE IF EXISTS `schedules`;

CREATE TABLE `schedules` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `day` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `time` time NOT NULL,
  `exercise` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `branch_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `delay_time` time DEFAULT NULL,
  `tag` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `schedules` WRITE;
/*!40000 ALTER TABLE `schedules` DISABLE KEYS */;

INSERT INTO `schedules` (`id`, `day`, `time`, `exercise`, `start_date`, `end_date`, `state`, `branch_id`, `created_at`, `updated_at`, `delay_time`, `tag`)
VALUES
	(2,'Monday','08:00:00','(02) STRENGTH & CONDITIONING','2019-01-01','2030-12-31','Active',1,'2019-03-25 13:00:04','2019-03-26 18:14:36','08:30:00',1),
	(3,'Monday','12:00:00','(03) FIT EXPRESS','2019-01-01','2030-12-31','Active',1,'2019-03-25 13:00:44','2019-03-26 18:14:48','12:30:00',1),
	(4,'Monday','18:00:00','(04) STRENGTH & CONDITIONING','2019-01-01','2030-12-31','Active',1,'2019-03-25 13:01:29','2019-03-26 18:14:59','18:30:00',1),
	(7,'Monday','06:45:00','(01) STRENGTH & CONDITIONING','2019-01-01','2030-12-31','Active',1,'2019-03-25 23:24:49','2019-03-26 18:14:25','07:15:00',1),
	(11,'Monday','19:00:00','(06) STRENGTH & CONDITIONING','2019-01-01','2030-12-31','Active',1,'2019-03-25 23:30:56','2019-03-26 18:15:56','19:30:00',1),
	(12,'Monday','18:00:00','(05) STRENGTH (MEMBERS ONLY)','2019-01-01','2030-12-31','Active',1,'2019-03-25 23:33:05','2019-03-26 18:15:19','18:30:00',1),
	(16,'Tuesday','06:45:00','(07) STRENGTH & CONDITIONING','2019-01-01','2030-12-31','Active',1,'2019-03-26 18:16:57','2019-03-26 18:17:14','07:15:00',1),
	(17,'Tuesday','08:00:00','(08) STRENGTH & CONDITIONING','2019-01-01','2030-12-31','Active',1,'2019-03-26 18:18:00','2019-03-26 18:18:13','08:30:00',1),
	(18,'Tuesday','12:00:00','(09) FIT EXPRESS','2019-01-01','2030-12-31','Active',1,'2019-03-26 18:19:08','2019-03-26 18:19:08','12:30:00',1),
	(19,'Tuesday','18:00:00','(10) STRENGTH & CONDITIONING','2019-01-01','2030-12-31','Active',1,'2019-03-26 19:03:38','2019-03-26 19:03:52','18:30:00',1),
	(20,'Tuesday','19:00:00','(11) STRENGTH & CONDITIONING','2019-01-01','2030-12-31','Active',1,'2019-03-26 19:04:29','2019-03-26 19:04:54','19:30:00',1),
	(21,'Tuesday','18:00:00','(12) STRENGTH','2019-01-01','2030-12-31','Active',1,'2019-03-26 19:06:07','2019-03-26 19:06:07','18:30:00',1),
	(22,'Tuesday','19:00:00','(13) BEGINNER TO FITNESS','2019-01-01','2030-12-31','Active',1,'2019-03-26 19:07:01','2019-03-26 19:07:21','19:30:00',1),
	(23,'Wednesday','06:45:00','(14) STRENGTH & CONDITIONING','2019-01-01','2030-12-31','Active',1,'2019-03-26 19:31:11','2019-03-26 19:31:25','07:15:00',1),
	(24,'Wednesday','08:00:00','(15) STRENGTH & CONDITIONING','2019-01-01','2030-12-31','Active',1,'2019-03-26 19:41:05','2019-03-26 19:44:24','18:30:00',1),
	(25,'Wednesday','12:00:00','(16) FIT EXPRESS','2019-01-01','2030-12-31','Active',1,'2019-03-26 19:41:31','2019-03-26 19:44:41','12:30:00',1),
	(26,'Wednesday','18:00:00','(17) STRENGTH & CONDITIONING','2019-01-01','2030-12-31','Active',1,'2019-03-26 19:42:05','2019-03-26 19:45:03','18:30:00',1),
	(27,'Wednesday','19:00:00','(19) STRENGTH & CONDITIONING','2019-01-01','2030-12-31','Active',1,'2019-03-26 19:42:31','2019-03-26 19:47:00','19:30:00',1),
	(28,'Wednesday','18:00:00','(18) STRENGTH (MEMBERS ONLY)','2019-01-01','2030-12-31','Active',1,'2019-03-26 19:43:06','2019-03-26 19:45:32','18:30:00',1),
	(29,'Wednesday','19:00:00','(20) CARDIO ABS','2019-01-01','2030-12-31','Active',1,'2019-03-26 19:43:39','2019-03-26 19:47:18','19:30:00',1),
	(30,'Thursday','06:45:00','(21) STRENGTH & CONDITIONING','2019-01-01','2030-12-31','Active',1,'2019-03-26 19:48:17','2019-03-26 19:52:32','07:15:00',1),
	(31,'Thursday','08:00:00','(22) STRENGTH & CONDITIONING','2019-01-01','2030-12-31','Active',1,'2019-03-26 19:48:48','2019-03-26 19:53:01','08:30:00',1),
	(32,'Thursday','12:00:00','(23) FIT EXPRESS','2019-01-01','2030-12-31','Active',1,'2019-03-26 19:49:13','2019-03-26 19:53:21','12:30:00',1),
	(33,'Thursday','18:00:00','(25) STRENGTH & CONDITIONING','2019-01-01','2030-12-31','Active',1,'2019-03-26 19:49:35','2019-03-26 19:54:17','18:30:00',1),
	(34,'Thursday','19:00:00','(26) STRENGTH & CONDITIONING','2019-01-01','2030-12-31','Active',1,'2019-03-26 19:49:56','2019-03-26 19:54:58','19:30:00',1),
	(35,'Thursday','18:00:00','(24) STRENGTH (MEMBERS ONLY)','2019-01-01','2030-12-31','Active',1,'2019-03-26 19:50:55','2019-03-26 19:54:03','18:30:00',1),
	(36,'Thursday','19:00:00','(27) BEGINNER TO FITNESS','2019-01-01','2030-12-31','Active',1,'2019-03-26 19:51:34','2019-03-26 19:55:16','19:30:00',1),
	(37,'Friday','06:45:00','(28) STRENGTH & CONDITIONING','2019-01-01','2030-12-31','Active',1,'2019-03-26 19:58:16','2019-03-26 20:01:15','07:15:00',1),
	(38,'Friday','08:00:00','(29) STRENGTH & CONDITIONING','2019-01-01','2030-12-31','Active',1,'2019-03-26 19:58:44','2019-03-26 20:01:35','08:30:00',1),
	(39,'Friday','18:00:00','(30) STRENGTH & CONDITIONING','2019-01-01','2030-12-31','Active',1,'2019-03-26 19:59:10','2019-03-26 20:01:59','18:30:00',1),
	(40,'Friday','19:00:00','(31) STRENGTH & CONDITIONING','2019-01-01','2030-12-31','Active',1,'2019-03-26 20:00:08','2019-03-26 20:02:20','19:30:00',1),
	(41,'Saturday','08:00:00','(32) STRENGTH & CONDITIONING','2019-01-01','2030-12-31','Active',1,'2019-03-26 20:13:56','2019-03-26 20:15:27','08:30:00',1),
	(42,'Saturday','09:30:00','(33) STRENGTH & CONDITIONING','2019-01-01','2030-12-31','Active',1,'2019-03-26 20:14:24','2019-03-26 20:16:06','10:00:00',1),
	(43,'Sunday','08:30:00','(34) STRENGTH & CONDITIONING','2019-01-01','2030-12-31','Active',1,'2019-03-26 20:15:05','2019-03-26 20:16:29','09:00:00',1),
	(45,'Monday','05:00:00','(91) OPEN GYM','2019-05-06','2030-05-01','Active',1,'2019-05-06 20:06:09','2019-05-06 20:06:09','22:00:00',0),
	(46,'Tuesday','05:00:00','(92) OPEN GYM','2019-05-06','2030-05-01','Active',1,'2019-05-06 20:08:03','2019-05-06 20:08:03','22:00:00',0),
	(47,'Wednesday','05:00:00','(93) OPEN GYM','2019-05-06','2030-05-06','Active',1,'2019-05-06 20:08:53','2019-05-09 10:11:38','22:00:00',0),
	(48,'Thursday','05:00:00','(94) OPEN GYM','2019-05-06','2030-05-06','Active',1,'2019-05-06 20:09:39','2019-05-06 20:09:39','22:00:00',0),
	(49,'Friday','05:00:00','(95) OPEN GYM','2019-05-06','2030-05-06','Active',1,'2019-05-06 20:10:24','2019-05-06 20:10:24','22:00:00',0),
	(50,'Saturday','05:00:00','(96) OPEN GYM','2019-05-06','2030-05-06','Active',1,'2019-05-06 20:11:01','2019-05-06 20:11:01','22:00:00',0),
	(51,'Sunday','05:00:00','(97) OPEN GYM','2019-05-06','2030-05-06','Active',1,'2019-05-06 20:11:40','2019-05-06 20:11:40','22:00:00',0);

/*!40000 ALTER TABLE `schedules` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table staff
# ------------------------------------------------------------

DROP TABLE IF EXISTS `staff`;

CREATE TABLE `staff` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_card` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `date_of_birth` date NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `photo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank_id` int(10) unsigned DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT 'Unverified',
  `account_number` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `branch_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `finger_code` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `staff` WRITE;
/*!40000 ALTER TABLE `staff` DISABLE KEYS */;

INSERT INTO `staff` (`id`, `email`, `name`, `id_card`, `date_of_birth`, `phone`, `address`, `position`, `photo`, `bank_id`, `status`, `account_number`, `branch_id`, `created_at`, `updated_at`, `finger_code`)
VALUES
	('1f13cbbd-37ef-4f02-9a43-4c32718572fb','charma@empirefitclub.com','CHARMA','1234567890','1990-01-01','081234567890','Jakarta','coach',NULL,NULL,'Unverified','1234567890',1,'2019-03-25 11:51:21','2019-03-26 09:21:27',1),
	('2bc97f6f-0eb8-4f53-a60d-763ac8471f91','sasha@empirefitclub.com','Sasha Gautama','9867843987656','1991-09-07','081294467755','Cipete, Jaksel','founder','https://api.empirefit.club/storage/photo/20190423_1556013381photo_staff_9867843987656.jpg',1,'Active','6640126076',1,'2019-04-23 16:54:37','2019-04-23 16:56:21',19),
	('64dae435-d31f-42af-95f6-ffb4714c92b2','alvina@empirefitclub.com','ALVINA','1234567890','1990-01-01','081234567890','Jakarta','coach',NULL,1,'Unverified','1234567890',1,'2019-03-26 19:09:35','2019-03-27 22:37:01',3),
	('71e69cf5-2e3f-48f9-b8a9-b24a23fca14f','syarsyam@empirefitclub.com','SYARSYAM','1234567890','1990-01-01','081234567890','Jakarta','personal trainer',NULL,1,'Active','1234567890',1,'2019-03-25 23:51:03','2019-05-13 18:08:25',4),
	('766c4dfc-b8c3-4590-9e28-2073221736d9','aldy@empirefitclub.com','ALDY','1234567890','1990-01-01','081234567890','Jakarta','coach',NULL,1,'Unverified','1234567890',1,'2019-03-25 23:18:34','2019-03-26 09:20:51',5),
	('869ce701-01c4-4e89-b49e-26c679a821d3','susy@empirefitclub.com','SUSY','1234567890','1990-01-01','081234567890','Jakarta','coach','https://api.empirefit.club/storage/photo/20190506_1557146034photo_staff_1234567890.jpg',1,'Active','1234567890',1,'2019-03-25 23:13:39','2019-05-14 12:24:20',7),
	('97cd18c6-f48e-4aba-8fde-360a3b67ba73','nadia@empirefitclub.com','NADIA','1234567890','1990-01-01','081234567890','Jakarta','coach',NULL,1,'Unverified','1234567890',1,'2019-03-25 11:53:53','2019-03-26 09:20:16',8),
	('9afa7000-970b-4680-8d00-968b43075454','andin@jayadata.co.id','Andina','327303109900003','2019-04-23','081214350810','Rawa Mangun','front officer,coach,jdi team','https://api.empirefit.club/storage/photo/20190423_1555994493photo_staff_327303109900003.jpg',1,'Active','9988000887766',1,'2019-04-23 11:40:29','2019-04-23 11:41:33',18),
	('a47ebb5e-e80b-4e16-8644-90e4536fa265','elbert@empirefitclub.com','ELBERT TIWA','1234567890','1990-01-01','081234567890','Jakarta','founder,coach',NULL,1,'Unverified','1234567890',1,'2019-03-25 11:33:56','2019-03-27 14:59:56',9),
	('ae48457a-0633-4d5d-9298-8ab37a6f1692','riza@jayadata.co.id','JDI-03-Riza','1234567890','1990-01-01','081234567890','Kemayoran','jdi team','https://api.empirefit.club/storage/photo/1554377038photo_staff_1234567890.jpg',1,'Active','1234567890',1,'2019-03-23 18:19:56','2019-05-10 14:39:08',10),
	('b28343b7-ff92-4b45-91d9-1030a5557652','jjtasman@empirefitclub.com','JJ TASMAN','1234567890','1990-01-01','081234567890','Jakarta','coach',NULL,1,'Unverified','1234567890',1,'2019-03-25 23:15:05','2019-03-26 09:19:44',11),
	('c3a3a1e1-2adf-41ff-ace6-c65aa24e8074','jeremiah@empirefitclub.com','JEREMIAH','1234567890','1990-01-01','081234567890','Jakarta','personal trainer','https://api.empirefit.club/storage/photo/1554871026photo_staff_1234567890.jpg',1,'Unverified','1234567890',1,'2019-03-25 23:52:19','2019-04-23 12:35:02',14),
	('eb622652-922f-4cad-b93d-9e2bdf1aefd4','adinda@empirefitclub.com','ADINDA','8543952234','1990-01-01','081234567890','Jakarta','coach',NULL,1,'Unverified','235345634',1,'2019-03-25 11:52:22','2019-04-13 18:49:14',15),
	('f6ca4577-2f4c-4956-909e-d3b3848a6bda','ron@empirefitclub.com','RON','1234567890','1990-01-01','081234567890','Jakarta','coach',NULL,1,'Active','1234567890',1,'2019-03-25 11:55:14','2019-05-10 14:42:44',16);

/*!40000 ALTER TABLE `staff` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table staff_attendances
# ------------------------------------------------------------

DROP TABLE IF EXISTS `staff_attendances`;

CREATE TABLE `staff_attendances` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `staff_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `state` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `auto` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `schedule_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `staff_attendances` WRITE;
/*!40000 ALTER TABLE `staff_attendances` DISABLE KEYS */;

INSERT INTO `staff_attendances` (`id`, `staff_id`, `start_date`, `end_date`, `state`, `user_id`, `created_at`, `updated_at`, `auto`, `schedule_id`)
VALUES
	(52,'f6ca4577-2f4c-4956-909e-d3b3848a6bda','2019-05-10 13:18:38',NULL,'IN','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-10 13:18:38','2019-05-10 13:18:38','Yes',39),
	(53,'f6ca4577-2f4c-4956-909e-d3b3848a6bda',NULL,'2019-05-10 13:22:38','OUT','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-10 13:22:38','2019-05-10 13:22:38','Yes',NULL),
	(54,'f6ca4577-2f4c-4956-909e-d3b3848a6bda','2019-05-10 13:29:14',NULL,'IN','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-10 13:29:14','2019-05-10 13:29:14','Yes',40),
	(55,'ae48457a-0633-4d5d-9298-8ab37a6f1692','2019-05-10 14:37:27',NULL,'IN','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-10 14:37:27','2019-05-10 14:37:27','Yes',NULL),
	(56,'ae48457a-0633-4d5d-9298-8ab37a6f1692',NULL,'2019-05-10 14:37:45','OUT','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-10 14:37:45','2019-05-10 14:37:45','Yes',NULL),
	(57,'ae48457a-0633-4d5d-9298-8ab37a6f1692','2019-05-10 14:39:26',NULL,'IN','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-10 14:39:26','2019-05-10 14:39:26','Yes',NULL),
	(58,'ae48457a-0633-4d5d-9298-8ab37a6f1692',NULL,'2019-05-10 14:39:35','OUT','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-10 14:39:35','2019-05-10 14:39:35','Yes',NULL),
	(59,'f6ca4577-2f4c-4956-909e-d3b3848a6bda',NULL,'2019-05-10 14:41:50','OUT','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-10 14:41:50','2019-05-10 14:41:50','Yes',NULL),
	(60,'f6ca4577-2f4c-4956-909e-d3b3848a6bda','2019-05-10 14:43:02',NULL,'IN','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-10 14:43:02','2019-05-10 14:43:02','Yes',49),
	(61,'f6ca4577-2f4c-4956-909e-d3b3848a6bda',NULL,'2019-05-10 14:43:15','OUT','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-10 14:43:15','2019-05-10 14:43:15','Yes',NULL),
	(62,'f6ca4577-2f4c-4956-909e-d3b3848a6bda','2019-05-13 18:53:49',NULL,'IN','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-13 18:53:49','2019-05-13 18:53:49','Yes',NULL),
	(63,'f6ca4577-2f4c-4956-909e-d3b3848a6bda','2019-05-13 18:56:10',NULL,'IN','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-13 18:56:10','2019-05-13 18:56:10','Yes',11),
	(64,'f6ca4577-2f4c-4956-909e-d3b3848a6bda',NULL,'2019-05-13 18:56:27','OUT','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-13 18:56:27','2019-05-13 18:56:27','Yes',NULL),
	(65,'f6ca4577-2f4c-4956-909e-d3b3848a6bda','2019-05-13 18:57:21',NULL,'IN','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-13 18:57:21','2019-05-13 18:57:21','No',12),
	(66,'f6ca4577-2f4c-4956-909e-d3b3848a6bda',NULL,'2019-05-13 19:02:21','OUT','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-13 19:02:21','2019-05-13 19:02:21','No',NULL),
	(67,'869ce701-01c4-4e89-b49e-26c679a821d3','2019-05-14 12:24:48',NULL,'IN','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-14 12:24:48','2019-05-14 12:24:48','Yes',19),
	(68,'869ce701-01c4-4e89-b49e-26c679a821d3',NULL,'2019-05-14 12:25:01','OUT','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-14 12:25:01','2019-05-14 12:25:01','Yes',NULL),
	(69,'869ce701-01c4-4e89-b49e-26c679a821d3','2019-05-14 12:27:57',NULL,'IN','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-14 12:27:57','2019-05-14 12:27:57','Yes',21),
	(70,'869ce701-01c4-4e89-b49e-26c679a821d3','2019-05-14 12:27:57',NULL,'IN','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-14 12:27:57','2019-05-14 12:27:57','Yes',22),
	(71,'869ce701-01c4-4e89-b49e-26c679a821d3',NULL,'2019-05-14 12:28:10','OUT','fee203c4-017c-4482-aa6e-dbf671a91885','2019-05-14 12:28:10','2019-05-14 12:28:10','Yes',NULL);

/*!40000 ALTER TABLE `staff_attendances` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table staff_fingers
# ------------------------------------------------------------

DROP TABLE IF EXISTS `staff_fingers`;

CREATE TABLE `staff_fingers` (
  `staff_id` int(11) unsigned NOT NULL,
  `finger_id` int(10) unsigned NOT NULL,
  `finger_data` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `device_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vc` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `staff_fingers` WRITE;
/*!40000 ALTER TABLE `staff_fingers` DISABLE KEYS */;

INSERT INTO `staff_fingers` (`staff_id`, `finger_id`, `finger_data`, `created_at`, `updated_at`, `device_name`, `vc`)
VALUES
	(10,1,'265341A9A3C25F7AF119A6C8C3752200F88101C82AE3735CC0413709AB71F0A11455921FC780905896FEF3E509446F7623BD468BA839BCCAA73BD2866AA048066FEAC546D8564132876302F7F16D94AD4E525E08B638CC065F842A171386B55CBAE326AEBDF00D20AF2139700D74C7514D51DA6F371ED619867B6A4ED1673CB6FEBEC0CA20671C18D2715F8F42575824CE608CEF3ED1C3A53A2F8848CDF06DF01BC3CCA56BEB6EB4693F9A9B301A78D9802BC972DF9B15A7BAE067E5902140F7852C1C3118C521364B0A24D18AE54C78B5803324DA6FB25B8D4C9822725394459D18370B398E59E815B0BFA83BF84F323EF5D66C3497611378BD213DD1970DB1249E7F176CA76BE41CB207E49653C3B63F74D97A8D5014E19B56D310E90E57A2D11295C60D1C88E54FC6DC49E6FBB71B0072179A26C0581EF885327B14811CF738AD554715305BB3AD4ABAFD476790FAF8828ECA80C6473BD4B2DADA875C6A36C4F196AB82687F0324B1F36C1CF1375F81E0006397FD806E2EE2C5EBEEFD74DC961046125F5692BCBA6D4097D6ABF3CB30B07B28C5852A629F4AAA96E1546F00F88101C82AE3735CC0413709AB71B092145592E02E4FE9033C6C990C1E42A48DE70CC0158A9234FA0423318FAE3AB453F78471911F107729713A9687CE4029AD21C43C73D8BB705C3AD57EC93528AC0342F69792E00D13EE4920A70A039EB4436DC8C443BA214E7E0B9B1FD999DAB838EAEB66A484A381B3D08412D5754723361F9425F54FDA43E189E6D91B4D690C617A928341EA6B984626D85E4E18933398C90FBF8D8FE9832D81A6E0E888847F47369ACA70037D885E28847F122AB8BB87A3A81B0E44C8321798B30A4B7EBB2FEB3843AD9D2FB967131FCCB22761C022BF6F1ED00D75C631E3D01ED6E92F7018C7460DD477455501F3CBFF3C582F066FB5DF3F44FE3C6B55374155C8E77C202581F9DEA78B701066AB3B8639999CCE90990CFC820A1371D3BE351455FA4702791A80EE64C1924DB7F9C60E92F6075217BEC6738B852552135140D599360653B7821A7A9B70282614786883AA4FAE11AF045C9FD7AEAC59C4C09550E497A128CA67C7D0F06C584604E13E20C8FD6A1FC0F75738B2B06F00F88001C82AE3735CC0413709AB71F0BD145592773AD86D681D26AC5571E0209B534222012DFA76819DBEE6327B2D3921016BC79A5B556A7286A388805ADC640E0272A8076C8E94C6021D35E6D5A440A4D3EC0B8ED51C99442FBADA0A313A06D4EC3E456EBCC2FA39EB23E36F7A19105FC228A55F48A4E47B4CC667EC6C4C16F534F7A4E81038E669A2D86FB01E2DED057D37BF9EC866744C20CD7078E22993E0DF7AC9A1D637B477F266C314DF1903045D42CD89BAEBF17CBE495B94BCB72861A360BF09C5E5C0912B3469326582CB6A7900BAD39A9E49843C2C6BC41BEA868C610AE619C3984B570F6B45755B9F96A4C0BE4D7784B985F8986ADA25C8D1F7FE4E6773A4CD8AFD310C9995B9CCD6E75D45F9CEAE1D6BFE0B2FCC5F4A1D95DFA5F54A3488F3BE2B84470A303BA74C7D02BAD93ACE589A0BF3B6086B473463DA6155CEABCFA42ED82F1D07C869CC0676527C2DCFA1D246EFC1DB519C09C2CF2824D4A3D2DC9C3B7AAB2756323B90A5A33254FAE35A3E9C2B59EC083266CF859CA881FFDE6F00E88101C82AE3735CC0413709AB71F0B8145592046F8759930130640734F2ADB52FD8D9B74B1B8A093C14C5CE5414F5A4E79DCF2CA0F42A7DE5EC310698A47A69856E27A6B12E2B70469AF5B4B4AD1E8B336DDA4166757A1CD32320293415345F8F4CAEBB138E1B62215A5CAE3728FBBAC1AE0E8400297D48092D6D32C52DAE152C539E20400B96051359A6AC33E750E395B225474B58A0E62848182CDA697F8545E3F84AD876FA79E492EE3DEC5B0E7859A3CB8CCFB33218A2CAED8E763ADA0FD6685D2D867F5146CD879BFFDDD946331A7FC4E255B9FF67F2B1F09BD2D2569641A332E368AE74522E98329793ACF2B13CE21B9C01CD80E86D6D065D9AC23D85ABE79FC3C37FD9FF9A247639482960DD8B52D0F12D0746483B0D3AD017A7F49F219144E1E108C9165F1D0D5F965BD8986A932D03C0269DBF96BC99AEF6EE97B57C115481F17F27DAF6785F09889A049676B61940C54E068F3FD0A44FF8ABB230684335279F22CFE9144B7F8C6708A10D5415ED09125F2E1996DE3B96E9FB2CEFAA1C49026F00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000','2019-05-10 14:37:15','2019-05-10 14:37:15','JKT-WTC-FP02','4055692E38226F6'),
	(10,2,'555536A7A4BD2D74F468D5C9C6095900F87D01C82AE3735CC0413709AB71B0B4145592B53218D9B79C35CBCFDF2F5E000941402A6960115733FC8A91B6AAE215C71A95D651E8B29C6BC96964F796B936F80C986A9743E7305D2FB988CE4027B67021E2B866584E7A2806D7F6D25A79613ABB0CA6B901A718BBEF4EF8CFB379919D777063249CBDFD7E2275DF5853D2DAE80B39E3D45F35F1BA462D085F214253ADD7016E85E9AA35C1F23501334C45B830517ACFD341ECAA4CC981462CDC16EF40B9946346E1124E9DF8DC4C8E76CA5CADA564872A7C5789C12BBCC4F74CE59CD0724BA1D8EA52CFD48E45D1923CD9D6AA7FC6B94FC1BF5DDA2B12E8DB1A9DCBE04647397B2342BE512250122CFBB78FCA917EF482ACD657119DC3E6E41D33FBB636DFCC349ED2B68203A59E067DAABB6FB91D53A933D2D515CEF06BDC51708B8490EE33134D47D423BE94B6D410C61DAAF50298D1C564B57DF4A4D3AF7B1DFBA1357079FEE9655A5D3730C80904652385C06D3D2546D5E4919D6F3B0816DB3F2303CA6CDEF93EA0FE2CB06EE5992ED10A7AFF955ABA690714706F00F87F01C82AE3735CC0413709AB7170B6145592E03E8AF125DFF82767163CF6B41FFFB35E5525B24284EAC3AE3E7139037679EF94CB77493598994B544F2AF33EBD573D151E4696CD7FE4F83AC2C8D7B99093D7B85A4545634C9BA603C4FB52E27F7D6F4BDD42708A0B725B0658F8BA9C57965F871BB8D52437EDDC079666AC8F70AD2E1FEB44DCB0DC62E02F99DDFC95540FF552F78ACFD9CE2F029B845C083C2579A4BB32FDD071E689F24E820E19A7E745DC39318F69E55DFB0201AA0D8645B1B282650482042793F67BCA58461176F6596E221B2B879C15DB4A8FD873242AE8D1420607DE081B1E19E7C4C1AB39C98269DA98C37FBFEAA877886C02261AFFB3B26C78C049D21F864AEB09AFE8AD14E88EDE3D46A6F0BB428AE6DF8EC28150644655D0116736084F808127D7BF0C50B4E386623BCF20A2D560D79D53E427C689225BA488C6EE42D88757BF28C0F69021BFD33F83E3EAD63622DECB43B4DF45100ED73BC39045EEB42B209CDE2B10870B36B69575158B93F5C14F0B582DDBE074566F00F88101C82AE3735CC04139C2AB94BD7A1CFE443DDED6F9A853CBC964E4DD7F521BF5EF1F477F2561B44D88225026AE4741745EABFAD77CDA08F5F7B5571CF7365D4731EB3552B44AEC7BC4A672C9B37011AC1A7665D8E6BC4D5DE32CE73B8837610181A442569A322B07FBE9D7E572ADD738BA2AB400619DD7E060A6EBCC3180A3F20772EE35BAF82079985DC17CDDC3481B071E638019DDF3D13959218E4D1F5098A1A73429D0684726045AA7E41A044955510D6DA8E5DE0E05B1768DCD22890C4498C8AC1DFC954B2C70667F5F8E65E9B5FF7331ABBE5460929E678EF5988D43EF3031D7570A9AAE0EB295C4B9C9E70C8CBDA376ADA9754D53599B362BEC861CD5363DF18117580B00BE884F0F7D62CEB11DB27B450E897F3D2A1ECD81BB835158C095A010418DFDD0CB349B56D60F57B3D9B3AB089502A837574EE45BC1FF0E5468ADC1ED9D6BCF9685D0E1A99593EEBF1EEF4AEC6B2FB61F3ADF300DB0C1135AFF4F5504782CD4EF29889338545F20CA5EC0CA5705DFA16132BD1F764609DCAE6C2D6F00E88101C82AE3735CC0413709AB7170B0145592E0B4ACB3F0DA240B2E86A20A57138B7A4EE06FB3749E96CEE4F1C022AA3B889B2149F772FEB708966F8F57AE2F3C6DCA8D70817FCA3FF3EF8AB188CC521A16E621CA5EE22DA0A173EBA5E3FD32AE3251FBE126435D7CDC394519867357FF0D7E77081ED26B7B64D80979B1683C8C12974589858D3726C09103A0FE956489910E106F69CA7B795E41006BB4C34A791D27C948A891DB36BE0F6418DADCBB61E884B0B054712ABB69C41ED8275E68C9E49993AD04FBB55509D7BF8EE53C53DFD5D62820166C1F06FD100F1E86BF097249582D8705A69621A9F0454A96125A2166C789CA0A8B90EE6FA0DC7109AFC32342B98936BF12EC6AAEBF7EDA68F0D2210956E483EAC6F41CE7DF68D9E58DE26523D5BFAC2E2C2CEAB82A038FB17AFB9AB2123DE3995EC276B59A3324C6BF30CE98FAAE9D52F8D0CF98D6143789C5079E29FA7E0CD12947D95287FBFC02B3CB4791C941A236331C333B25DAFC4B0D83E16C30C91E234A9C0CE4282FD5E2E094AE2B77316F000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000','2019-05-10 14:39:08','2019-05-10 14:39:08','JKT-WTC-FP01','86015B213B08EE7'),
	(16,1,'202346A1D6B95F75876AA0C8B0712F00F86F01C82AE3735CC0413709AB7170E91455925153921F4CCBB634939179D997FD7F62CDFA0E5322B14891BFDFA3A19B1232CEF0F60D6E94CCCBB0C58402E3CBDE233C79CA6517728341968069DBD87C10CF0723202C2BAC9BE955BDDC8E17EA2341707A087BDF5C99E51D3080A0CF5E20987B8D6BFF6D1D4871047791AC75449F674C5B30476F434CD0B67F23F7EE985098DA3CE960C0F7397A02D2062DCC21E5D9CD106ADC69CDDDA7DE1C6601EB330B86A168170DBA4448018A2288305F5BDC683C236D17F9FDA65CD3E9CBBA700B453FC474A33C28BD3F0BBA8EFE5DC25489B55554F95B1541A537E8BEE00A5E76547B594C29B228A4FF1B0EB0D05F5F8EA6018820A2A2E9A62012D92104AB0C2026B3FC60358C728A69395AB200FE234B9CC9CF8B9D5C88A38722BFDEF9D4525FA2D1E31E55F7462A77280FD53892200CCC87E326B2DBB679EC8BC4F1FD1FF3BFEE48F4E39DFCA2ABEDF4A6A26E48BA0344FD1D33561F97ED0DD5C55FDD0E9E72C00399EA8F39A995D9378C3A6F00F88001C82AE3735CC0413709AB7170FD1455923BAD071B7B09EE56B2B3DB73FFC4A4C2F802B6CD23E374F0A665DE47521974DF14303AE07BC4037C39303137B105FF26A9190D767C6BE3C0B5CEF32DEBF0BAA6AB7E32943F6B6C6A66B40231AAE69E7B6E6D5740DA5C9153F8C729F7D35F390E9FF5FC807E0AD7510AF4713587C37DF9244A6F227639EDF6A461109C871FB823116B0FDE8B3BA4AE155165E936A162557C3B5AE36B3810D351023594A8EC5EAED1E1AD576894538AB1CA55D5E3095B9DA4B17BE5BDAF8C1DB75BF48044DB4AD8E7B3C6CDA014D60741C641A89A44C6E0135461385390EB13564A35D35F3CA8620F4288F68F41087D8A7F8395B95662D4B52AFDDF034E3F35C63EB5DA44F2F3BF01E6C89BA976AB7C4B77F8E45EE7F84F110309958959C53558AB0ACE206BBA59F35093957BDA34CA6AFFAB1B428CB734627A8469D9A1DC860D4FE479DA0E3D3F97EB516140C3D16BE8A144EF4B79B8BE78276D785220FB053728177BE456E40868416A09A655C9641E62B7334963FBAA6F00F88001C82AE3735CC0413709AB7130E91455922BCE4A5A9F3E59E7D2AD4F979B36BD5A9043651D1D069800FE7AB81FB87F2CFAB74D595D501A3A8A24FA5C7F28ED7A717EBEA3AE8BEE9CBD1CB0BB34F2A0A4CADD6102DE7BE0F34AC392BDA613D13F4A3ED6B40BCCBCECE12E75DDA3A000B02975A80B00EECBBF165E7623D76D478C0842F3A4463D3D233D2F49337F21EF565C31436AC7E63D9781E2F9F3DC35837E970BF326141DBBF39A1B2E6453F378DF640DE7B02DAA628AC0DE803FCED0301FF4A5D0888272166AE40E3AC1193DA7DA432F9E44734CEBB4CA286C0029903819838A7885CFFAFADAB04034F13B56273B8445E4CBFB6A4B200FAF4C2633944998E844A316492F0556873CCE69D8789BD40DB5AD3251AF1C89B9E2AE17CE2BF11270E3B33EFE4ABD1EA3737E1C61F058C8159A689F6D46A5A63B9B077B68E7D64C4C624DC1DA0405FD906B545A8188F767685894A64AE0AA1566D8CAEB280FEE8BE7970905E9B020EBA76E5ADA2AD887313F68CCFAC1035535CB75867B3599B54A4D6F00E86601C82AE3735CC0413709AB7130D91455922238179C4C587B47601BAF8467EAFAE4DB0B7A1BF1863637BFBA7D5AE7F5E6D57D321DD46B6A51923A883F7AF310FA0A1D6C1D9972FED58BF7135E37B9081A3F4AF86CCDD578CA706B2A71716B3B2DAF393781E89CB5478E18A8DD74014F3FAA45BE97E7607134A71F557AF994DBD05EB2EFD1269F0AA2C95C9BDC8E78A2FB55132205E44F087EA9B6C5ABDAF95A2E3A7AD69B601969EA18960503BC44F418A81B56EEB2A266E054B948969E675EEE27121B0234F2F0DA70E4897F32B9C026CB1F7833E8D0A2909AF6F63DCC0A2B90BD54D4E0FDD4F9F7B0040A2AF2ABFC6AB439DEDF5D3FE396D71FA85042AC4D5E72D22767B1CEAE2551C027C76D94A1B8BAA85DC10DCDF56E81F447D6713FBED47613C0B145E5AA56F5D8E65AA5E350D3A5581CE9DA5F899AF649EEBD906F25F6B563E9BD39F9F04C575AE87977EDBABE696BABBABCB77FBFDD3E6651BBAC6A0919BBC3F89C395A6F0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000','2019-05-10 14:41:23','2019-05-10 14:41:23','JKT-WTC-FP01','86015B213B08EE7'),
	(16,2,'502334A9A0BF5C7B8612DBCEC6085900F88001C82AE3735CC0413709AB71B0BB145592FD5570B6BBB5E697CEADFA17E31BE96B5DA7DB5BF822E70CF33BC8C764B66244DD0AC967BC16FC682E0FA68FE137DA2C00A5F16B10355F4FEA903DA71069EFEFF71D90C10283B4AB656B9F97113FD30A92EADEC71F530702904DE17231202DDDC23691F8E63FBD1F66EE5B30A7B032D0143C24C76CD95A22A0278535D53BEAB28A2AC6E6FA8C658B35F1CB589BB0588005D162F236E52AC26C18E8E6075E36E157F87BC4E55C105EA973EE0A1B3A5518E303314969552F6157CEC4AF9C7C185D733461CAE6DE3E1504219F636AA92044B0C37006C0D081B0F4632EEBFFE4EAA29C1C6A18FBBBABD2E0EC0D53810DB654DF784F50D8B1A292AA44B47FD3CFFF5288698075780C87D64B832D3B41D79A7511F5AE9AFFAAEF75DBDEA2A311334D48CDDF3177A200614BEECD2DD61414571E21DF9189C314C29706E8CC7A461A30C3332DDE97DE2CB61B4408261CC5C75D9F74D678E9AC5B83E0F869A9679D3C2216EC683CA59E19D02F689112AA29FE4EC4229BF2976CDFADB307D06F00F87F01C82AE3735CC0413709AB71F04C155592D64C47AC44D07F83C79306D7997E22112D50932A5C2F3011FE885B4673FB023546F58E8CABC863734E5383159F19ACC4D0A5B859BA3007229B642A65F03E7CA5DE9E04228B3A705D410FF3C8FED7CA7884AABA9597058CD2594309898B7E1D244D452D97D6C0FA5573A2C274706D157A3450A900FFA5F2B374F2918F65206AE5F1050B2F677EF2E0B0230CC9754505CE5D4740EBCF578EA33577B9D506BF646A680DCA81F7DEA47FA194C016FF8DFDCB8E75417BBECF0C6F9F9D0F784BEAEBB653ABF8220D0B2B0D77F35924309D41FC428E2C2DB18905DB23782041AC2E4A905696D0452C9BB3AE35BAAC7A576C089508C75C7A51A0B85C21D1AE10799F96BD7B76A4B358889BD024DC3D24D6FCBC326621F7553AC75619DF29471CE56BB2343EC37F13E9FDA9EFE4A30BF57DD6CD9071876869B448D779415CCED40F83443DA53E79CA1A05F7EA53D6C19E8478B7A5E12FADB31C0E3B34C87633D85B59C5DE1C23B9B7D0567DE607B55ECAC7E0C76F00F87F01C82AE3735CC0413709AB71F0B9145592A2E9F165DFB78811F7A92219DBF9AD232BFDC7936F54E33B16C643A08E881D17D0327E273ACC144C91CE433A07BFADF1B2FD77DD4F21B3FEAC22E2FD098F5794BC62D6EA2713EE582D3E8E123157AE9B335BC95F49F77F7D0CFC28BB739F1256E79112B5828BCDD2290C07FC87EC08AEBD21FC913B598023C8F3548B6DBC260069FEEE4CACD33DE42943B861016E559995F44CFE8C8502C4911AF2F6365864E3D9004887AF54DE8E5DF620D1B351141117BC845789DCC4C4D653D0404E488E6CA991EB4447E70DE3CFC9FA7FD0B29CCBB165224B95C66AD984752BB7547121192AA2A34D7EB35464D32427CA8A31849395ECAB5665BCEC97108CDD7A7961503B4B331FCD538CAFAD0B88888608A49CCE10460F0B1A8F7E3275C74FCC11AA788C265A0F9DE135CF6A24A76C5FECA376732936DBE399B0E626DF568E03F877DF5C0A19B31966BA91B79379A5E009A03F32D4182BD760AB35EC4396618F055E64E4EF3A318BC09C3215DD4FE77102E58B6F00E87E01C82AE3735CC0413709AB71F0A0145592854F25E9896E4A555D6C7A69040546EF92DD265667D2655EBC8C3DAA762D7DA38F88D8853F0ECBCF2900D1D53A35AADDF79338602CE6E68CAE3E52198AAA14FAA331C8B611F87B476CBB9AD1209518AE20C4E1AAFB91F1EB8FFF6082335F80CB4FB165B2A10B80B7796F3993494B459865F5003229EA04A2BEDD3B778F67C495671BB9304B68CB8F93DEE6644472748106CCDEEBB83C68DA46643E8DE15BE8E71CBECBC6F35FB6CC96319645BFF8E92B4CADE00A5431D591C30AB72ECBF13B5171F3D9E00024CC9DD29FDA64209C3084F22760CBD023DC8312723E93D94154F56C9DFDC70DDD0AC63FDB155F3F7DFC2575922A6D562F6B4C60AC4DD02842E669116734905310C201FB8B43EB1AF95CF1BE32FEE3D39323568D3482011864D01FE6450DCD8658B544DA1E3630E8A297065CF1963A4085B458854F8A1CD990E90F9081AB1478466BB8182EC63670EE5719C83D735F4A3BDA948D8783C693D15450AC87E0177B99531ACB5A53F45A086F0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000','2019-05-10 14:42:44','2019-05-10 14:42:44','JKT-WTC-FP02','4055692E38226F6'),
	(4,1,'502431D2A5C32A0A8718D0B9CC045A00F87E01C82AE3735CC0413709AB71304E155592A27E0F14514096DB83335E8B478CF80606E25B412E8DA6A529EBE9AC2D8ED1C3F14472C11F2A0FA141F24CB6D1965D951DEC9AEF9AB311B143EFC8C6C1B77D5DCDC46A75FEAAAE340BD79DF52B44EE6E6CB8C88D8FBF608D4834E4BD2E228A0B3E08F7410D77A9C6DDDEFADA6D4B027A7F55C100F804CF32BCE6033158C4886B4FA33AA3F442348F098373798BD8CC9F6259091753CC849950990EA95466E674A4CAB04F8F7327EC8D7857AB37850910E3A0B9A726DEBA56757EC5149E032A77883AA9B7823D713CB5FF9B1D3E9D8467CFD133E1850CEFB71B63E7A709582636BD96127EE2F6106988E8FEF020F7EBB33A5486D858E2B4152D63CDBC0E50582361CB04ADFBEA03A89DD259DDE2E0474C1EAB799CC317FE37D26B915F87D89C182FACB5D30D50F64B42BA6AE52EFC9EF803E65567FCC004D681E6BBC1DFD53DE74582C9E470593E0806550A2861AE8BC82604BA4EE234039E37CF3CBCC24DE2335F7A1B09FB94FD79E11C36EB937BB1D839B7DC7966C78DD96F00F88101C82AE3735CC0413709AB7130B31455923D690C0BE3D6CFC909391AB5B8CB0DC2D75C34F33C426096493431F6AE6E65BFEA9C6DDC0E46D9440D856FAA6E919561E5F2117F8AB74231122A3B9A36238D22D5C73CEEB35440261B32D85D684F3587D33ED2280BF27752F8C4217BC3BFA65B108C38EDD677F619676874004631DEFD161782349034B7A092859BDFDD1E4296FF723818D8B151BA4CB94CD9CD48F763B2E82934D71A5EA7380E65ECCB2F8CE387482B3B05053FD63E6F4C9779A192BCB8EF4B69790BCB90D584D67E009901AD2AB0B8B438F6C8F9085B99FE0B26AC8BE251CAD9C51DCB754F08AB83DBE88612AD5A0EC1B71EEB2FB160EC5D176CACFEBE9B09BAC93E95DE6FE81240ADE9CEEFC4C3857DEACC56D9CCBCD729EB5E79CEC985E519B5EF8C801DD2379A21242D877EE7A58BE38E515AAF3D911267772D899D256DE6D54D1372F4D37C244A370ED46CA8C18C38E14EA0268C3A5BEFA555171B531CFC94FFEE1C7F0281A7F28AE352F5B3076EE111E6C5919718755332F875FF6F00F88101C82AE3735CC0413709AB7170A6145592C1F8D375854AF58593A346CF3B097AD2B3596EEECD54A8A0FC5D0578A443B343A057F6B2E4DA3EDB4192BC603FDC2050ECEBDAF7687D4BE822ABCA6371C4A2FCBD8FA0BE2CCE8090E5B2D075DF87D089438703F22D51631353500D0DBBD175E3C0031EC44AEEC7CA86B8176B38BEED3150A2CDAB134426A5F64987C10034B15DEB2A142B4B28544EFA4DCB9325B1005D5FC61DA4C7CE69DFB78D5BFA9A9D1EA543666F9654D55770BF6CC950B9BB93B67C16139450DD1B2E8055281B8BF338A9066EDFB8618DAE4642A21C5095A4C616B39F56BD2D6E3284C43053476A02E449CD13F4208F1E8DB451CE19480C05E963C36B696C52CA87C3570A6AD7920591D915F8488E6977C525415B414E48200FD0290062ACAA8DBBFA83D413DC051C81CA4F90F6DCB0F741BAC7189A4508427B6F456DB3CDD45E0A063E364956C4F9E5F611D4D2CBD7C7787DFA04D7820B7B4463A7238C3059E281791278023400BA93BE875FEC68D3196F0B287D8933417CA2896E6F00E88101C82AE3735CC0413709AB7130A91455920D9924F88D0B7B3AC34076FFEF558DB63803EB85C6B065F0EADECC237831EA0C7363B823CE8D6D7735E5698119A20A950779D3E737B6044EDD44DF90329AC14606401959944C9433905363CDC708D30B5370A78A4F100303086AFCB9980A833CABA2CFCBE47350B2AB9688A954BEA49FE96A34733EC001198F1FF81C226322132BA778E7AFCD80B9CAC1E75B489EBA9A1648DDF80D847985D31780270919B9390DEC205222FCDD238E7932236752E3DC2428E481CE5F88049B7AD7DE3A68B5B02F04AC4504E0AED4FC253752FF74C735A9D82E6107502D72B37B2C880AC89F8859CD0B652BD3D822987FF5E917AC280D3E3D9AFFDB01AEA7A9A0D638CCFE7671AB4426423DDB8C810BA07C215F8D59D3B397C54CC12239DA95C1369CD8490FC3C36750A79658487B4EC22A1F0670F78F532D45E57C76C5E91954E5843DEE647CE7E6A24ECD400170596D0B2B76E0BBEE01E737B7DD6DA8B18306E49E1628BF24EFA37EB3C535B6CEEA25EEDD8C3D5153866F000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000','2019-05-10 15:55:53','2019-05-10 15:55:53','JKT-WTC-FP01','86015B213B08EE7'),
	(4,2,'575037A9D4CC2C7F876DA1C5C5722900F87F01C82AE3735CC0413709AB7130A514559225603EA23E4BDEEE5367BD8D021428DD0E3C0D707304F325CBA9E0530E6143F17019255EA22415DDCDCD9C99500688BBCBA08E67CCEE7815BE9BA0E6E8F5B7D591B738958E4522F9031F1FA75EFAFAEA7BB2B5DB04F2E1B39389899AB3690E32BC2FDEEDE3CE476BC16B4C07FCAF7B497FAF34BDF9A27C97104A10C2A19ABDAE07004E33C8D510E286AEB6B3BFD04EE33BB3A0A461F8A90648098FD4F6F4E673BF761C0288DA7C7A9358F15962DC2BD0DFE698F277AD9EF89B70486F78AB28D4BCD9207F455C79098118279329CE7503E0D4D1E26B928A66011F27A1D00B26768AED307C851B644D3BC5C46C88BA0A2F0CF69015A8DDC58F091A075D9D1C2D479EE54CE38CF2C6015BC8D1D0B6762FD3E6B46E1FF25B4A517D9C7F83B1C333C15BB8BB9B2C0F3D632D7452E154E19D219871EE1B81498CE86ADBDDC6BE6B92C483F8D3B6A132BA8F02EE49951C7D0858D428F322CC1BC3E2D64E700053B9A76D0E293C63E539A97FCC355C73002986135FDB7A67179D0E1E1F6F00F87F01C82AE3735CC0413709AB7130AB14559283D059735F0CA45FE713FCEEED5669B5AE5C8E2B115BBF01B0BB905BF814568A0C06A92E94655B79B2A98B43657A5EFE072527FF9F9AE811751F1E7318336062CF43752CF271EEC0E5ADB29E2E1156635E956B4EBB0D019E0D4065E378BCD6B3746B0C91ACE7D41644A6276F4216F259677983903EF70940804574A827E38534E1D251BAA4CE39DAB806D7A1A82112CA2E781AEAB644097EA3477DBE7F282C5399D417B0699707B876F001C04E0AA556D64798CF2F6B124BB7D843CD4E5AAF6C39EC9C63B8AACC241271BC0B7F24DF9228A5836BD2CEF732135AD8E842F5D7688E595FFBF7501AA2DFEA0C51CB8022BF5E69296159C0277467E891042F00388F23EEC424ABBDD17D2A5E5D9141731EB2340B5C5F319E6E6B9219991030D49C811E064DF0E0130A10FD4D381D3F37E79952A4F47282770ED699D9008904346B575B6603C914468C2AC5E74435A541BA40F111DD22F3438864DC76FA1CECEAD5073749AE69AA9815199C40E203DDD03B6F00F88001C82AE3735CC0413709AB71B0B814559227ECB3D0ED22F67DE08CD53CBDFBD95EBEE9EE400DE66073DB646A2C84CC09F14BCCC581B1452E475652A22800C9BB0B27DD61C7241E00A8D05B518C0DA661B3ECECCF3B109B71CF43D8B69377B19A6D74E68B7A7F9DC02AE785104E0143B616EE8301EE2F7EF2A73E2D031213084844E66FD671173165BD58A87C702FCBE485AE62409AB6B95AEE8A47672F65CC215DAEEFEF8399DC2E6CB1FCECD2B22517060CC334EED735CD19A99F178037BEF0B9C0282B61B26B95F30ADCD8614CB9880E69BC5F3BFB46403E2F6FF44D32A5BF585FD75D9B42CD3991B1DC244717AF74B8CE1AB62081AC72E7057DB2338F4CA89CB6079E6DE70B22CAB17467862DB9A8CBA5373DB0C6679E53FFD51FEF0EAD020B826B57D5B0E0A40381CD787451A0214CE452476E03848829008FF830A5901B9591F8F8DEF0DA4AAB49A7767BD1F1ADF262675C853114688125858DC221760B9C7E087D8529958899D8626B58806076C854758FF1DBFC055FF7DF72D42DCBF38F6F00E87F01C82AE3735CC0413709AB7170FB145592E87D3393268801A3CED2C81AF684043476272FEFC6279917659CCCF8D9BFDA4FF166B15B51958A9E32176B600F2F5D6DE7BE1FD88AF3A367AF21A9E49999AD802A59EF5695AA8679ABFFC54FDE5B54327888C90F551A3763E196E484BC2F2CB436FB3BB52DB78F737D803107B8C3443ABFADAB3DCA4BAB25665F966C4DBCF0D1CCD237E777CABAD8E51245DCFB8946C810D26E188D48E390F75F15A77694450A52A5C6ECDA4BC4B5FE48E6A4E171596754D64C31E473586669F2064E4C5161DA33EFA236B7AB8FDF458747A20D418D2AC59DC346B94FAEFE011980333AE14BC5589BD659402626FD8B9A27FA967471C45B381650310DE45489FE94B242F91ADBA393AB72348E7B062EA6099725F4B7B9BC03C3A307E08F65B60244974E4065F23187B17A55D1BF30BDF7946F4827A10584BEA0C4BB483134356408215CC137D5456289B12A279DB41C649BB0FE477C8AC5DC11BE623333F40F3289C34392B8065D53C6F59E26DA5DC396DD6A84C1BC6F00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000','2019-05-13 18:08:25','2019-05-13 18:08:25','JKT-WTC-FP02','4055692E38226F6'),
	(7,1,'252541D2A5BE2A08F66EA6C9B0032900F82801C82AE3735CC0413709AB71B0F514559278F10E6E2806D6EB5FE5EC01F99B96C0687CE0D5BD4BC091A737A68562FDE4B1E6BA2B33853EDEF9876D36C1434DEE1119C11C8CDDB19218C040B91C05A8BA624AC92DA7C38E5C4E011E37516DE73ECE8D29E75BEB54408332498D3A6DB39D783649EA75910FF96502087378153DFA4C3E83A42E74F8DF9764081422AD5F4AEF9A9B39245E1D009C82941F0699F54D80C7035FDB1D30787689A128E0E9A3BA4FCA68ACD499F80B34892669DBB43E888E869BB7CD3B35D3BFB5CAF4C7D43D938B554E4C6C8E07EBF523007452E72BCD4F0D557D003C0FBCC0D44CEC516EDC3BEFA30160CA7113258E72ABA76DBC04F820E73AE90672EFDD2547B77E570CB60F3040D9782725BD7A5D3C09417C93202A2243F11C9006D4424F9AD9C6F2167B724858A36F00F83A01C82AE3735CC0413709AB71B081145592D57F21CB578D4CDE81C67063AB5FC409AC47D50744C1BDCB04985DA2A70D45E2E807D4DD28E47B58619CA4DF0845338AAC7C0C3D380EC8C0594E7B7C52C17FDF141C12E7C1D6EEA92C07921917BFA106B52FBE4C3C4322C8FE7CFB4EA14FD77258CB3553CD405170CC87F4167A2B1663567DA33757D5B1F425808E75C84C5D83B2BB4C8E38BDC38E482929BD34A4EA618BCD31EDF30CAE8321E835852605264E29C023A4BC94A2E1672507FF18E8375DA5B6525B03D0F82EE4C01F7AFF33B981DAD870D5CF17E241497036110C0E6D57C8383045C52EBDF68C8179D07EB25943C5775DEFCD6EB5266CAD653D8F2AB2519078919982D3D7E9CB6FDBBF80C5028B0DFD90E32DB1652B725055F254D3A15FAD2B2972148343687ABF858B59D1BD7EB3DB81C3DBD25985F94A6F00F84201C82AE3735CC0413709AB71F0F6145592F406265F62D1133AD627C1916020F4D97E0CEC42ACC7A821085107A5941CF76825B01C8B2D1C898CE915AD1B4C66E5A052CB566388DDC5F080A519ABA7C8E360BD82B98637748471DAB6FA41E3565D20D46269ED0C5FCF207729F4E672556D674FF7E56D3E0BA4BC14A125DA126D66B21822F15C56912A9B2619F04539798B540FEBF79D8F3431F74F8FD3087D9647CFD9C548B62149D04F3B6933E59C89D646843DEA26B3942C2FC0FCE9A2E0862A858E87B3577ED96BF2E267610E16A3242318117DA35DF6ACD5EDE3866378B2CAF3D3B07D16F79F3792B59171C70CD66C4999CBE5AB94D307772C4B0F909B7EC7F349F8D572867B04425168D4C459AE6D4B3CCD13FB0D3401A9356F757241C97F60DF750444BF9285605BB28C931C508C8C7CDD300D2322A25B850BCFF37EE9B3C277256F00E80B01C82AE3735CC0413709AB71B0D4145592762CB273388FFFC5B1C9187722F57D73A75246E4D87AD2615293A791FD577DF35893DF952E406B53CF257ADEC6B95855B9810430AE7B498F50CF9D03363F5B5940E4660D39EADC29C268FFBF10D1E08D680449C5D710B775099113BE4605E0332136EAF843EA17B566A999B8FAF20FC7CF08DF41907731059FAF0674B50AE652B58F011976016DC3E14DCF96FBBA1FEDA9162F5A70B567C2CD9E90A05C29503C84063FF70FDC0FF6A08852631F0F96435B71CABFF992470DA79F14943ABE926356A4F065D2FBD96C6F3138ECFE6CEB5FE65B4EE75A0094BC2B9A4DC8168B2B92B8E1772B089F6210464A329B0B6A7E62248F0E50CA91ACDFDEE12E6F0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000','2019-05-14 12:24:20','2019-05-14 12:24:20','JKT-WTC-FP02','4055692E38226F6');

/*!40000 ALTER TABLE `staff_fingers` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table transactions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `transactions`;

CREATE TABLE `transactions` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idtrx` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `member_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `member_partner_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `month_period` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `bank_state` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `information` longtext COLLATE utf8mb4_unicode_ci,
  `branch_id` int(10) unsigned NOT NULL,
  `idr` double DEFAULT '0',
  `final_idr` double DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `trace_number` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `payment_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `card_number` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `bank_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_id` char(36) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `member_type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `session_remains` int(11) DEFAULT NULL,
  `total_session` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;

INSERT INTO `transactions` (`id`, `idtrx`, `member_id`, `member_partner_id`, `month_period`, `bank_state`, `information`, `branch_id`, `idr`, `final_idr`, `created_at`, `updated_at`, `trace_number`, `payment_type`, `card_number`, `bank_name`, `user_id`, `member_type`, `session_remains`, `total_session`)
VALUES
	('1d6ddd51-93dd-49af-ad2f-de0c0f2113a2','EFC/010100005/05/2019/40048','2451f353-4551-4a93-a584-710f0cc12434',NULL,'2019-05-14',NULL,NULL,1,1400000,0,'2019-05-14 14:40:04','2019-05-14 14:40:04',NULL,'Autodebit','3422457354497549','3422457354497549','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('221c1329-be16-4799-8cf4-abc2b2582af7','EFC/010100006/05/2019/40041','287f7992-7999-450e-945c-de6cec9f8a01',NULL,'2019-05-14',NULL,NULL,1,1400000,1400000,'2019-05-14 09:41:37','2019-05-14 09:41:37','3231414134','Autodebit','2322123456',NULL,'fee203c4-017c-4482-aa6e-dbf671a91885','(01) UNLIMITED',NULL,NULL),
	('33ce9ac8-85f8-4009-8838-034c4ab6163e','EFC/010100007/05/2019/40065','f2a4a9d5-b81b-43a3-8a1e-2e0b4e20836e',NULL,'2019-05-15',NULL,NULL,1,1400000,0,'2019-05-15 15:25:10','2019-05-15 15:25:10',NULL,'Autodebit','5432481234567890','BCA','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('37dcb1ba-411d-49ab-8dd0-340335564ab3','EFC/010100005/05/2019/40037','2451f353-4551-4a93-a584-710f0cc12434',NULL,'2019-05-14',NULL,NULL,1,1400000,0,'2019-05-14 02:07:25','2019-05-14 02:07:25',NULL,'Autodebit','3422457354497549','3422457354497549','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('39d30593-7cfe-44b2-8dd3-0c56e1ee5f43','EFC/010100007/05/2019/40066','f2a4a9d5-b81b-43a3-8a1e-2e0b4e20836e',NULL,'2019-05-15',NULL,NULL,1,1400000,0,'2019-05-15 15:29:31','2019-05-15 15:29:31',NULL,'Autodebit','5432481234567890','BCA','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('4bb13ac6-f17a-428b-9e97-b89c75667b13','EFC/010100005/05/2019/40043','2451f353-4551-4a93-a584-710f0cc12434',NULL,'2019-05-14',NULL,NULL,1,1400000,0,'2019-05-14 11:52:51','2019-05-14 11:52:51',NULL,'Autodebit','3422457354497549','3422457354497549','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('519304d5-f65f-4adc-bfae-b29c0f519e56','EFC/010100005/05/2019/40047','2451f353-4551-4a93-a584-710f0cc12434',NULL,'2019-05-14',NULL,NULL,1,1400000,0,'2019-05-14 14:38:04','2019-05-14 14:38:04',NULL,'Autodebit','3422457354497549','3422457354497549','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('67866485-2b51-4106-8539-d1e8debafdfe','EFC/010100002/05/2019/40036','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6',NULL,'2019-05-13',NULL,NULL,1,1400000,0,'2019-05-13 19:37:31','2019-05-13 19:37:31',NULL,'Autodebit','0987654321','0987654321','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('68990582-3795-4d32-afbd-3115055cf2dd','EFC/010100005/05/2019/40057','2451f353-4551-4a93-a584-710f0cc12434',NULL,'2019-05-14',NULL,NULL,1,1400000,0,'2019-05-14 16:14:42','2019-05-14 16:14:42',NULL,'Autodebit','3422457354497549','3422457354497549','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('6e80f087-6567-47ae-a06f-b6c6476f0e55','EFC/010100002/05/2019/40059','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6',NULL,'2019-05-14',NULL,NULL,1,1400000,0,'2019-05-14 17:01:08','2019-05-14 17:01:08',NULL,'Autodebit','0987654321','0987654321','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('7c65009e-f200-45ae-9fc2-34cda6e19d75','EFC/010100005/05/2019/40060','2451f353-4551-4a93-a584-710f0cc12434',NULL,'2019-05-14',NULL,NULL,1,1400000,0,'2019-05-14 17:10:00','2019-05-14 17:10:00',NULL,'Autodebit','3422457354497549','3422457354497549','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('9093a543-43f9-4e90-a0d8-0d17d437c702','EFC/010100002/05/2019/40045','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6',NULL,'2019-05-14',NULL,NULL,1,1400000,0,'2019-05-14 11:59:30','2019-05-14 11:59:30',NULL,'Autodebit','0987654321','0987654321','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('9f3ef2b1-681f-48aa-a2f9-9590ce63fe2c','EFC/010100006/05/2019/40026','287f7992-7999-450e-945c-de6cec9f8a01',NULL,'2019-05-13',NULL,NULL,1,5500000,4100000,'2019-05-13 17:24:38','2019-05-13 17:24:38','Uy3h','Credit Card','5432481234567890',NULL,'fee203c4-017c-4482-aa6e-dbf671a91885','(03) PERSONAL TRAINER',10,10),
	('b4dc515e-af40-4e36-be68-c55156af3024','EFC/010100002/05/2019/40062','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6',NULL,'2019-05-14',NULL,NULL,1,1400000,0,'2019-05-14 17:23:14','2019-05-14 17:23:14',NULL,'Autodebit','0987654321','BCA','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('b6a01df4-6fc4-4f7f-b984-83f3bd2d5a08','EFC/010100004/05/2019/40042','d8e67434-c455-4232-8171-0e955f6279fb',NULL,'2019-05-14',NULL,NULL,1,250000,0,'2019-05-14 11:45:51','2019-05-14 11:45:51',NULL,'Cash',NULL,NULL,'fee203c4-017c-4482-aa6e-dbf671a91885','(05) DROP IN (NON PARTNER)',1,1),
	('be73b479-4782-4a73-afe2-1160c9089a98','EFC/010100002/05/2019/40052','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6',NULL,'2019-05-14',NULL,NULL,1,1400000,0,'2019-05-14 15:49:28','2019-05-14 15:49:28',NULL,'Autodebit','0987654321','0987654321','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('c2cd1ffe-26c2-4d89-9dbe-aaf78b3aacbf','EFC/010100002/05/2019/40049','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6',NULL,'2019-05-14',NULL,NULL,1,1400000,0,'2019-05-14 15:08:49','2019-05-14 15:08:49',NULL,'Autodebit','0987654321','0987654321','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('c5f3d515-d563-4ad9-a912-0c8e6d359758','EFC/010100002/05/2019/40055','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6',NULL,'2019-05-14',NULL,NULL,1,1400000,0,'2019-05-14 16:11:12','2019-05-14 16:11:12',NULL,'Autodebit','0987654321','0987654321','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('c8c9df2a-297f-4183-ad1d-1b406c144bfd','EFC/010100005/05/2019/40039','2451f353-4551-4a93-a584-710f0cc12434',NULL,'2019-05-14',NULL,NULL,1,1400000,0,'2019-05-14 02:21:42','2019-05-14 02:21:42',NULL,'Autodebit','3422457354497549','3422457354497549','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('c991b4da-72f7-4c64-ae71-b0106dd0989e','EFC/010100002/05/2019/40056','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6',NULL,'2019-05-14',NULL,NULL,1,1400000,0,'2019-05-14 16:11:40','2019-05-14 16:11:40',NULL,'Autodebit','0987654321','0987654321','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('cfd8ffd8-232d-4224-9e2b-10385fde6e54','EFC/010100005/05/2019/40061','2451f353-4551-4a93-a584-710f0cc12434',NULL,'2019-05-14',NULL,NULL,1,1400000,0,'2019-05-14 17:20:58','2019-05-14 17:20:58',NULL,'Autodebit','3422457354497549','BCA','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('d0b3a342-0808-418f-9046-f636662ab823','EFC/010100002/05/2019/40038','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6',NULL,'2019-05-14',NULL,NULL,1,1400000,0,'2019-05-14 02:07:44','2019-05-14 02:07:44',NULL,'Autodebit','0987654321','0987654321','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('d12163e2-8d16-4b9c-b54c-ac9fffa2f37c','EFC/010100002/05/2019/40058','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6',NULL,'2019-05-14',NULL,NULL,1,1400000,0,'2019-05-14 16:59:08','2019-05-14 16:59:08',NULL,'Autodebit','0987654321','0987654321','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('d9a69d47-4132-4fde-8028-c7f86742c486','EFC/010100006/05/2019/40064','287f7992-7999-450e-945c-de6cec9f8a01',NULL,'2019-05-15',NULL,NULL,1,1400000,0,'2019-05-15 15:20:37','2019-05-15 15:20:37',NULL,'Autodebit','2322123456','BCA','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('dc078c5a-146d-43dc-9173-b1a842d59cbf','EFC/010100005/05/2019/40029','2451f353-4551-4a93-a584-710f0cc12434',NULL,'2019-05-13',NULL,NULL,1,1400000,0,'2019-05-13 19:19:24','2019-05-13 19:19:24',NULL,'Autodebit','3422457354497549','3422457354497549','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('e3204449-98de-407c-8cbc-582f124233f7','EFC/010100002/05/2019/40053','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6',NULL,'2019-05-14',NULL,NULL,1,1400000,0,'2019-05-14 16:05:55','2019-05-14 16:05:55',NULL,'Autodebit','0987654321','0987654321','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('e44fab95-9569-4e18-b43b-99d5033925ab','EFC/010100002/05/2019/40054','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6',NULL,'2019-05-14',NULL,NULL,1,1400000,0,'2019-05-14 16:10:01','2019-05-14 16:10:01',NULL,'Autodebit','0987654321','0987654321','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('e579716d-0fe5-47f6-a6e7-44ab71a7aae9','EFC/010100005/05/2019/40046','2451f353-4551-4a93-a584-710f0cc12434',NULL,'2019-05-14',NULL,NULL,1,1400000,0,'2019-05-14 12:31:27','2019-05-14 12:31:27',NULL,'Autodebit','3422457354497549','3422457354497549','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('ecae0638-4b41-4dfe-883d-479137cc7c3c','EFC/010100005/05/2019/40063','2451f353-4551-4a93-a584-710f0cc12434',NULL,'2019-05-14',NULL,NULL,1,1400000,0,'2019-05-14 17:29:47','2019-05-14 17:29:47',NULL,'Autodebit','3422457354497549','BCA','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('efe99428-4b7e-4bd8-9885-6410dad76e8d','EFC/010100007/05/2019/40027','f2a4a9d5-b81b-43a3-8a1e-2e0b4e20836e',NULL,'2019-05-13',NULL,NULL,1,6500000,5100000,'2019-05-13 17:26:34','2019-05-13 17:26:34','Yuhuuu','Credit Card','4167005103323842',NULL,'fee203c4-017c-4482-aa6e-dbf671a91885','(03) PERSONAL TRAINER',10,10),
	('f1285042-7c21-41b5-90b6-dc74ab2def7a','EFC/010100006/05/2019/40040','287f7992-7999-450e-945c-de6cec9f8a01',NULL,'2019-05-14',NULL,NULL,1,1400000,1400000,'2019-05-14 09:25:56','2019-05-14 09:25:56','67yy77','Autodebit','890735467597888',NULL,'fee203c4-017c-4482-aa6e-dbf671a91885','(01) UNLIMITED',NULL,NULL),
	('f386e162-0cbe-401f-b4d2-fe776bf2bd91','EFC/010100005/05/2019/40050','2451f353-4551-4a93-a584-710f0cc12434',NULL,'2019-05-14',NULL,NULL,1,1400000,0,'2019-05-14 15:24:01','2019-05-14 15:24:01',NULL,'Autodebit','3422457354497549','3422457354497549','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('fc8dc2af-5866-4ad8-9034-f7639f91f440','EFC/010100002/05/2019/40044','ea68bca9-1a14-418a-b2e9-99fe74e0f3b6',NULL,'2019-05-14',NULL,NULL,1,1400000,0,'2019-05-14 11:54:50','2019-05-14 11:54:50',NULL,'Autodebit','0987654321','0987654321','fee203c4-017c-4482-aa6e-dbf671a91885',NULL,NULL,NULL),
	('fdd621f4-86d8-4f04-9a06-53735fae76e4','EFC/010100007/05/2019/40051','f2a4a9d5-b81b-43a3-8a1e-2e0b4e20836e',NULL,'2019-05-14',NULL,NULL,1,1400000,510000,'2019-05-14 15:34:32','2019-05-14 15:34:32','u8u8u8','Autodebit','5432481234567890',NULL,'fee203c4-017c-4482-aa6e-dbf671a91885','(01) UNLIMITED',NULL,NULL);

/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `staff_id` char(36) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` datetime DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `vc` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `device_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;

INSERT INTO `users` (`id`, `staff_id`, `email`, `email_verified_at`, `password`, `role`, `remember_token`, `created_at`, `updated_at`, `vc`, `device_name`)
VALUES
	('556bfc82-e1bd-4a53-afd9-550c048db9dc','b77e709b-97b6-41bb-bb94-9f0d02030309','admin@jayadata.co.id','2019-03-22 02:57:42','$2y$10$lOLPBnxDHnf8YfQmWQET4ODMowkLXt7eWi8kPKQ0t7Gx4uP5QvSom','Admin',NULL,'2019-03-22 02:57:42','2019-03-25 12:20:07','86015B213B08EE7',NULL),
	('a8533b20-bdcc-4325-8486-359cc549ae96','79848382-aa05-4042-a965-6d9e3c73b064','puji@jayadata.co.id','2019-03-22 02:57:42','$2y$10$fZyu0fJjaSFRywGugNCm1.2dTHTbatoPNJksTH3oQdT9DS0vl0H9u','Admin',NULL,'2019-03-22 02:57:43','2019-03-25 12:21:01','86015B213B08EE7',NULL),
	('c1429371-b688-4a57-a665-54fb56546ff7','a47ebb5e-e80b-4e16-8644-90e4536fa265','elbert@empirefitclub.com','2019-03-25 13:20:59','$2y$10$/p3KfnAHuAxXE3NfzP6e8OxLOyyM51kdXt1PjK2wAr3DuWMnq8Bge','Owner & Founder',NULL,'2019-03-25 13:20:59','2019-03-25 13:20:59','86015B213B08EE7',NULL),
	('c3e10d9b-6b7d-430d-84ee-db365b69409f','6426d4a9-74f1-487d-83ac-c3f64a12489c','azhari@jayadata.co.id','2019-03-24 09:34:06','$2y$10$ny6sWzwsvOnQPGNjCumQXefyIbbu.n6QwhFC87LXIar.5o2D/yQ8e','Admin',NULL,'2019-03-24 09:34:06','2019-05-13 16:39:17','4055692E38226F6','JKT-WTC-FP02'),
	('eba4046d-4f51-4476-8ba2-8071cb125382','ba42aed8-d90e-4361-bb78-5b62a7d92fc1','fahli@jayadata.co.id','2019-03-22 02:57:42','$2y$10$l09iny2SHaTfntUQxlY1Q.DdOGAhQ/sdCJ7tlyd7KkVTls2McdyFm','Admin',NULL,'2019-03-22 02:57:42','2019-03-25 12:20:38','86015B213B08EE7',NULL),
	('fee203c4-017c-4482-aa6e-dbf671a91885','ae48457a-0633-4d5d-9298-8ab37a6f1692','riza@jayadata.co.id','2019-03-22 02:57:42','$2y$10$IUpboNvvqDJTwRdBERSs9en.EYgb7mD2eQRRBM7si9tJeBu79ckWm','Admin',NULL,'2019-03-22 02:57:42','2019-05-14 11:41:32','4055692E38226F6','JKT-WTC-FP02');

/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
