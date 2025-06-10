-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: mariadb:3306
-- Generation Time: Jun 10, 2025 at 05:45 AM
-- Server version: 10.11.11-MariaDB-ubu2204
-- PHP Version: 8.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `brokeredge`
--

DELIMITER $$
--
-- Procedures
--
CREATE DEFINER=`root`@`%` PROCEDURE `GetBusinessAndImages` (IN `route_in` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci)   BEGIN
  DECLARE business_id INT;

  -- Get the business ID based on the route, explicitly casting collation for comparison
  SELECT id INTO business_id
  FROM business
  WHERE route COLLATE utf8mb4_general_ci = route_in COLLATE utf8mb4_general_ci
  LIMIT 1;

  -- If business exists, return both the business row and its related images
  IF business_id IS NOT NULL THEN
    SELECT * FROM business WHERE id = business_id;
    SELECT url, width, height, alt FROM business_images WHERE business_id = business_id;
  END IF;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `broker`
--

CREATE TABLE `broker` (
  `id` int(11) NOT NULL,
  `brokerage_name` varchar(255) NOT NULL,
  `phone` varchar(40) DEFAULT NULL,
  `alternative_phone` varchar(40) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `created_timestamp` bigint(20) NOT NULL,
  `last_updated_timestamp` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `business`
--

CREATE TABLE `business` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `route` varchar(50) NOT NULL,
  `phone` varchar(40) DEFAULT NULL,
  `public_visibility_id` smallint(6) DEFAULT NULL,
  `broker_id` int(11) DEFAULT NULL,
  `business_model_id` smallint(6) DEFAULT NULL,
  `industry_id` smallint(6) DEFAULT NULL,
  `sub_industry_id` smallint(6) DEFAULT NULL,
  `business_structure_id` smallint(6) DEFAULT NULL,
  `start_date_year` smallint(6) DEFAULT NULL,
  `start_date_month` smallint(6) DEFAULT NULL,
  `desired_price` int(6) DEFAULT NULL,
  `seller_financing_id` smallint(6) DEFAULT NULL,
  `seller_financing_interest_rate` smallint(6) DEFAULT NULL,
  `reason_for_selling_id` tinyint(4) NOT NULL,
  `successor_onboarding_id` tinyint(4) NOT NULL,
  `sellers_description` text DEFAULT NULL,
  `logo_image_url` varchar(255) DEFAULT NULL,
  `website_url` varchar(255) DEFAULT NULL,
  `website_url_2` varchar(255) DEFAULT NULL,
  `linkedin_profile` varchar(255) DEFAULT NULL,
  `facebook_page` varchar(255) DEFAULT NULL,
  `instagram_profile` varchar(255) DEFAULT NULL,
  `x_profile` varchar(255) DEFAULT NULL,
  `tiktok_profile` varchar(255) DEFAULT NULL,
  `business_logo` varchar(255) DEFAULT NULL,
  `other_social_media` varchar(255) DEFAULT NULL,
  `status_id` smallint(6) DEFAULT NULL,
  `listing_type_id` smallint(6) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `created_timestamp` bigint(20) NOT NULL,
  `last_updated_timestamp` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `business`
--

INSERT INTO `business` (`id`, `name`, `route`, `phone`, `public_visibility_id`, `broker_id`, `business_model_id`, `industry_id`, `sub_industry_id`, `business_structure_id`, `start_date_year`, `start_date_month`, `desired_price`, `seller_financing_id`, `seller_financing_interest_rate`, `reason_for_selling_id`, `successor_onboarding_id`, `sellers_description`, `logo_image_url`, `website_url`, `website_url_2`, `linkedin_profile`, `facebook_page`, `instagram_profile`, `x_profile`, `tiktok_profile`, `business_logo`, `other_social_media`, `status_id`, `listing_type_id`, `user_id`, `created_timestamp`, `last_updated_timestamp`) VALUES
(5, 'Sun Keto', 'sun-keto', '4088248917', NULL, NULL, NULL, 27, 504, NULL, 2021, 7, 17000, 3, 12, 3, 2, 'At Sun Keto, we are dedicated to providing high-quality, organic, keto-friendly products that help you stay on track with your low-carb, high-fat lifestyle. Our carefully curated selection of premium, nutrient-dense foods is designed to support your health goals while delivering great taste and convenience. Our Products Organic Grass-Fed Butter Powder – A rich, creamy, and wholesome source of healthy fats, perfect for keto coffee, smoothies, or cooking. Made from real butter, it’s NON-GMO, rBST hormone-free, gluten-free, and sugar-free—an ideal keto fat bomb to fuel your day. Organic Pili Nuts – Sustainably sourced, wild sprouted, and packed with healthy fats. These low-carb, sugar-free, and gluten-free nuts are a perfect snack for keto, paleo, and vegan lifestyles. Why Choose Sun Keto? 100% Keto-Friendly & Low Carb Organic & Premium Ingredients No Added Sugars, Preservatives, or Fillers Convenient & Delicious Sold exclusively on Amazon, we make it easy to stock up on the best keto-approved products with fast and reliable shipping. Whether you’re blending up a creamy butter coffee or snacking on nutrient-dense Pili nuts, Sun Keto is here to fuel your journey to better health. Sun Keto – Pure, Healthy, and Keto-Approved.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 5, 1747850932, 1747926957),
(6, 'Anonymous: Amazon Business', 'anonymous-amazon-business-1', '4088248917', NULL, NULL, NULL, 27, 504, NULL, 2021, 5, 15000, 2, 10, 3, 2, 'This is a rare opportunity to acquire a well-established eCommerce brand focused on high-quality, organic products designed for low-carb, high-fat lifestyles. The business offers a carefully curated selection of health-conscious items that cater to consumers seeking both convenience and nutrition. Highlights: - Consistent revenue with strong growth potential - Loyal customer base in the health and wellness niche - Premium product line with clean ingredients - Streamlined fulfillment and operations The business is currently operated online with exclusive sales through a major eCommerce platform, offering fast, reliable shipping and scalability. Ideal for entrepreneurs looking to enter or expand in the wellness or specialty foods market. This is a turnkey opportunity with a strong brand presence and room for growth in an evergreen niche.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 5, 1747850932, 1747926957);

-- --------------------------------------------------------

--
-- Table structure for table `business_assets`
--

CREATE TABLE `business_assets` (
  `id` bigint(20) NOT NULL,
  `asset_type_id` smallint(6) NOT NULL,
  `url` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `business_id` int(11) NOT NULL,
  `notes` text DEFAULT NULL,
  `created_timestamp` bigint(20) DEFAULT NULL,
  `last_updated_timestamp` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `business_asset_type`
--

CREATE TABLE `business_asset_type` (
  `id` smallint(6) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `business_images`
--

CREATE TABLE `business_images` (
  `id` int(11) NOT NULL,
  `business_id` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `width` smallint(4) NOT NULL,
  `height` smallint(4) NOT NULL,
  `alt` varchar(255) DEFAULT NULL,
  `created_timestamp` bigint(20) DEFAULT NULL,
  `last_updated_timestamp` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `business_images`
--

INSERT INTO `business_images` (`id`, `business_id`, `url`, `width`, `height`, `alt`, `created_timestamp`, `last_updated_timestamp`) VALUES
(1, 5, '/businesses/sun-keto/sunKetoGrassFedButter.jpg', 638, 879, 'Sun Keto Grass Fed Butter', NULL, NULL),
(2, 5, '/businesses/sun-keto/sunketopilinuts.jpg', 638, 879, 'Sun Keto Topili Nuts', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `business_model`
--

CREATE TABLE `business_model` (
  `id` tinyint(6) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `business_structure`
--

CREATE TABLE `business_structure` (
  `id` tinyint(6) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `business_user`
--

CREATE TABLE `business_user` (
  `id` int(11) NOT NULL,
  `user_type_id` smallint(6) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `created_timestamp` bigint(20) NOT NULL,
  `last_updated_timestamp` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `business_user`
--

INSERT INTO `business_user` (`id`, `user_type_id`, `email`, `password`, `created_timestamp`, `last_updated_timestamp`) VALUES
(1, 0, 'kimSinton@gmail.com', 'hellohellohello', 1742953895, 1744666940),
(2, 0, 'kimSinton@gmail.com', 'dragon99dragon99', 1745941498, 1745941498),
(3, 0, 'kimSinton@gmail.com', 'dragon99dragon99', 1747593396, 1747668158),
(4, 0, 'kimSinton@gmail.com', 'dragon99dragon99', 1747593499, 1747850434),
(5, 0, 'kimSinton@gmail.com', 'dragon99dragon99', 1747850932, 1747926957);

-- --------------------------------------------------------

--
-- Table structure for table `industry`
--

CREATE TABLE `industry` (
  `id` smallint(6) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `industry`
--

INSERT INTO `industry` (`id`, `name`) VALUES
(1, 'Automotive & Boat'),
(2, 'Beauty & Personal Care'),
(3, 'Business Services'),
(4, 'Child Care & Education'),
(5, 'Cleaning & Maintenance'),
(6, 'Construction & Contractors'),
(7, 'Convenience Stores'),
(8, 'Entertainment & Recreation'),
(9, 'Food & Restaurants'),
(10, 'Health & Medical'),
(11, 'Hotels & Lodging'),
(12, 'Internet & Technology'),
(13, 'Laundry & Dry Cleaning'),
(14, 'Manufacturing'),
(15, 'Pet Services & Stores'),
(16, 'Professional Services'),
(17, 'Real Estate & Property Management'),
(18, 'Retail'),
(19, 'Senior Services'),
(20, 'Transportation & Logistics'),
(21, 'Vending Machines'),
(22, 'Wholesale & Distribution'),
(23, 'Agriculture & Farming'),
(24, 'Gas Stations'),
(25, 'Franchise Resales'),
(26, 'Bars & Nightclubs'),
(27, 'Ecommerce & Online Stores'),
(28, 'Printing & Publishing'),
(29, 'Telecommunications'),
(30, 'Finance & Insurance'),
(31, 'Security Services'),
(32, 'Nonprofits & Charities'),
(33, 'Energy & Environmental'),
(34, 'Sports & Fitness'),
(35, 'Art, Antiques & Crafts'),
(36, 'Import/Export'),
(37, 'Pawn Shops'),
(38, 'Cannabis & CBD'),
(39, 'Travel & Tour Agencies'),
(40, 'Other Businesses');

-- --------------------------------------------------------

--
-- Table structure for table `listing_type`
--

CREATE TABLE `listing_type` (
  `id` tinyint(6) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `public_visibility`
--

CREATE TABLE `public_visibility` (
  `id` tinyint(6) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `reason_for_selling`
--

CREATE TABLE `reason_for_selling` (
  `id` tinyint(6) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reason_for_selling`
--

INSERT INTO `reason_for_selling` (`id`, `name`) VALUES
(1, 'retirement'),
(2, 'health concerns'),
(3, 'career change'),
(4, 'relocation'),
(5, 'death of owner');

-- --------------------------------------------------------

--
-- Table structure for table `seller_financing`
--

CREATE TABLE `seller_financing` (
  `id` tinyint(6) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `seller_financing`
--

INSERT INTO `seller_financing` (`id`, `name`) VALUES
(1, 'none'),
(2, 'up to 5%'),
(3, 'up to 10%'),
(4, 'up to 15%'),
(5, 'up to 20%'),
(6, 'up to 25%'),
(7, 'up to 30%'),
(8, 'up to 35%'),
(9, 'up to 40%'),
(10, 'up to 45%');

-- --------------------------------------------------------

--
-- Table structure for table `sites`
--

CREATE TABLE `sites` (
  `id` smallint(5) UNSIGNED NOT NULL,
  `url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sites`
--

INSERT INTO `sites` (`id`, `url`) VALUES
(1, 'iowacitybusinessesforsale.com'),
(2, 'fairfieldbusinesslistings.com'),
(3, 'brokeredgeinc.com');

-- --------------------------------------------------------

--
-- Table structure for table `sites_businesses`
--

CREATE TABLE `sites_businesses` (
  `id` int(11) NOT NULL,
  `site_id` smallint(6) NOT NULL,
  `business_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sites_businesses`
--

INSERT INTO `sites_businesses` (`id`, `site_id`, `business_id`) VALUES
(1, 2, 5),
(2, 1, 6);

-- --------------------------------------------------------

--
-- Table structure for table `sub_industry`
--

CREATE TABLE `sub_industry` (
  `id` smallint(6) UNSIGNED NOT NULL,
  `industryId` smallint(6) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sub_industry`
--

INSERT INTO `sub_industry` (`id`, `industryId`, `name`) VALUES
(266, 1, 'Auto Repair & Service Shops'),
(267, 1, 'Car Dealerships'),
(268, 1, 'Auto Parts Stores'),
(269, 1, 'Car Wash & Detailing'),
(270, 1, 'Boat Sales & Repair'),
(271, 1, 'Tire Shops'),
(272, 1, 'Motorcycle Dealerships'),
(273, 1, 'RV Dealerships & Rentals'),
(274, 1, 'Oil Change & Quick Lube'),
(275, 1, 'Auto Glass Replacement'),
(276, 2, 'Hair Salons'),
(277, 2, 'Barbershops'),
(278, 2, 'Nail Salons'),
(279, 2, 'Spas & Wellness Centers'),
(280, 2, 'Tanning Salons'),
(281, 2, 'Massage Therapy Clinics'),
(282, 2, 'Cosmetic & Skincare Retail'),
(283, 2, 'Laser Hair Removal'),
(284, 2, 'Tattoo & Piercing Studios'),
(285, 2, 'Makeup Artists & Services'),
(286, 3, 'Accounting & Bookkeeping'),
(287, 3, 'Consulting Firms'),
(288, 3, 'Marketing & Advertising Agencies'),
(289, 3, 'IT Support & Managed Services'),
(290, 3, 'Virtual Assistant Services'),
(291, 3, 'Business Coaching & Training'),
(292, 3, 'Printing & Copy Services'),
(293, 3, 'Legal Services'),
(294, 3, 'Document Preparation Services'),
(295, 3, 'Notary & Mobile Signing'),
(296, 4, 'Daycare Centers'),
(297, 4, 'Preschools'),
(298, 4, 'Private Tutoring Services'),
(299, 4, 'Learning Centers'),
(300, 4, 'Test Prep Services'),
(301, 4, 'Montessori Schools'),
(302, 4, 'After School Programs'),
(303, 4, 'Language Schools'),
(304, 4, 'Driving Schools'),
(305, 4, 'Online Educational Platforms'),
(306, 5, 'Residential Cleaning Services'),
(307, 5, 'Commercial Cleaning Services'),
(308, 5, 'Carpet & Upholstery Cleaning'),
(309, 5, 'Window Washing Services'),
(310, 5, 'Power Washing'),
(311, 5, 'Janitorial Services'),
(312, 5, 'Pool Maintenance'),
(313, 5, 'HVAC Cleaning & Repair'),
(314, 5, 'Pest Control'),
(315, 5, 'Gutter Cleaning'),
(316, 6, 'General Contractors'),
(317, 6, 'Electricians'),
(318, 6, 'Plumbing Services'),
(319, 6, 'Roofing Contractors'),
(320, 6, 'Painting Services'),
(321, 6, 'Flooring Installation'),
(322, 6, 'Carpentry Services'),
(323, 6, 'HVAC Installation & Repair'),
(324, 6, 'Concrete & Masonry'),
(325, 6, 'Landscaping & Hardscaping'),
(326, 7, 'Standalone Convenience Stores'),
(327, 7, 'Gas Station Convenience Stores'),
(328, 7, 'Franchise C-Stores'),
(329, 7, 'Neighborhood Markets'),
(330, 7, 'Mini-Marts'),
(331, 7, '24-Hour Stores'),
(332, 7, 'Liquor Stores'),
(333, 7, 'Tobacco Shops'),
(334, 7, 'Ethnic Grocery Stores'),
(335, 7, 'Snack & Beverage Shops'),
(336, 8, 'Movie Theaters'),
(337, 8, 'Arcades & Game Centers'),
(338, 8, 'Bowling Alleys'),
(339, 8, 'Escape Rooms'),
(340, 8, 'Music & Dance Studios'),
(341, 8, 'Art Studios & Galleries'),
(342, 8, 'Event Venues'),
(343, 8, 'Tour & Excursion Companies'),
(344, 8, 'Amusement Parks & Attractions'),
(345, 8, 'Party Supply Rentals'),
(346, 9, 'Fast Food Restaurants'),
(347, 9, 'Casual Dining'),
(348, 9, 'Fine Dining'),
(349, 9, 'Coffee Shops & Cafés'),
(350, 9, 'Bakeries'),
(351, 9, 'Food Trucks'),
(352, 9, 'Catering Businesses'),
(353, 9, 'Juice Bars & Smoothie Shops'),
(354, 9, 'Ethnic Restaurants'),
(355, 9, 'Pizzerias'),
(356, 10, 'Medical Clinics'),
(357, 10, 'Dental Practices'),
(358, 10, 'Chiropractic Offices'),
(359, 10, 'Optometry Practices'),
(360, 10, 'Physical Therapy Clinics'),
(361, 10, 'Medical Equipment Supply'),
(362, 10, 'Home Health Care Services'),
(363, 10, 'Mental Health & Counseling'),
(364, 10, 'Urgent Care Centers'),
(365, 10, 'Medical Labs'),
(366, 11, 'Boutique Hotels'),
(367, 11, 'Motels'),
(368, 11, 'Bed & Breakfasts'),
(369, 11, 'Vacation Rentals'),
(370, 11, 'Extended Stay Hotels'),
(371, 11, 'Hostels'),
(372, 11, 'Hotel Franchises'),
(373, 11, 'Luxury Resorts'),
(374, 11, 'Lodge & Cabin Rentals'),
(375, 11, 'RV Parks & Campgrounds'),
(376, 12, 'Web Development'),
(377, 12, 'App Development'),
(378, 12, 'IT Services & Consulting'),
(379, 12, 'Digital Marketing Agencies'),
(380, 12, 'Managed Hosting Services'),
(381, 12, 'SaaS Products'),
(382, 12, 'Cybersecurity Firms'),
(383, 12, 'E-commerce Platforms'),
(384, 12, 'Tech Hardware Sales'),
(385, 12, 'AI & Machine Learning Solutions'),
(386, 13, 'Drop-Off Laundry Services'),
(387, 13, 'Dry Cleaning Services'),
(388, 13, 'Coin-Operated Laundromats'),
(389, 13, 'Mobile Laundry Services'),
(390, 13, 'Hotel & Commercial Laundry'),
(391, 13, 'Uniform Cleaning'),
(392, 13, 'Green & Eco-Friendly Cleaning'),
(393, 13, 'Franchise Laundry Businesses'),
(394, 13, 'Dry Cleaning with Pickup/Delivery'),
(395, 13, 'Industrial Laundry Services'),
(396, 14, 'Food & Beverage Manufacturing'),
(397, 14, 'Textile & Apparel Production'),
(398, 14, 'Plastic & Rubber Products'),
(399, 14, 'Metal Fabrication'),
(400, 14, 'Electronics Manufacturing'),
(401, 14, 'Furniture & Wood Products'),
(402, 14, 'Automotive Parts Manufacturing'),
(403, 14, 'Chemical & Cleaning Products'),
(404, 14, 'Medical Device Manufacturing'),
(405, 14, 'Packaging & Containers'),
(406, 15, 'Pet Grooming'),
(407, 15, 'Pet Boarding & Daycare'),
(408, 15, 'Pet Supply Retail'),
(409, 15, 'Pet Training Services'),
(410, 15, 'Veterinary Clinics'),
(411, 15, 'Pet Adoption & Rescue Centers'),
(412, 15, 'Mobile Pet Services'),
(413, 15, 'Aquarium & Fish Stores'),
(414, 15, 'Pet Sitting & Walking'),
(415, 15, 'Pet Photography'),
(416, 16, 'Accounting & Bookkeeping'),
(417, 16, 'Legal Services'),
(418, 16, 'Consulting'),
(419, 16, 'Architectural & Engineering'),
(420, 16, 'Human Resources & Staffing'),
(421, 16, 'Translation & Interpretation'),
(422, 16, 'Business Coaching & Training'),
(423, 16, 'Tax Services'),
(424, 17, 'Residential Real Estate'),
(425, 17, 'Commercial Real Estate'),
(426, 17, 'Property Management'),
(427, 17, 'Real Estate Agencies'),
(428, 17, 'Real Estate Investment Firms'),
(429, 17, 'Vacation Rentals'),
(430, 17, 'Land Sales'),
(431, 17, 'Storage & Warehousing'),
(432, 18, 'Clothing & Apparel Stores'),
(433, 18, 'Electronics Stores'),
(434, 18, 'Department Stores'),
(435, 18, 'Thrift & Consignment Shops'),
(436, 18, 'Bookstores'),
(437, 18, 'Gift & Novelty Shops'),
(438, 18, 'Convenience & Corner Stores'),
(439, 18, 'Specialty Retail'),
(440, 19, 'Home Care Services'),
(441, 19, 'Assisted Living Facilities'),
(442, 19, 'Senior Transportation'),
(443, 19, 'Medical Alert Services'),
(444, 19, 'Meal Delivery Services'),
(445, 19, 'Senior Fitness Programs'),
(446, 19, 'Elder Law & Financial Planning'),
(447, 19, 'Day Care for Seniors'),
(448, 20, 'Trucking & Freight'),
(449, 20, 'Courier & Delivery Services'),
(450, 20, 'Moving & Storage'),
(451, 20, 'Logistics & Warehousing'),
(452, 20, 'Taxi & Ride Sharing'),
(453, 20, 'Shipping Services'),
(454, 20, 'Airport Shuttle Services'),
(455, 20, 'Fleet Management'),
(456, 21, 'Snack Vending'),
(457, 21, 'Drink Vending'),
(458, 21, 'Healthy Food Vending'),
(459, 21, 'Toy & Novelty Vending'),
(460, 21, 'Bulk Candy Machines'),
(461, 21, 'ATM Services'),
(462, 21, 'Office Vending Solutions'),
(463, 21, 'Combo Machines'),
(464, 22, 'Food & Beverage Distribution'),
(465, 22, 'Medical Supplies Distribution'),
(466, 22, 'Consumer Goods Wholesale'),
(467, 22, 'Industrial Equipment Wholesale'),
(468, 22, 'Apparel & Fashion Distribution'),
(469, 22, 'Automotive Parts Wholesale'),
(470, 22, 'Office Supplies Distribution'),
(471, 22, 'Technology & Electronics Wholesale'),
(472, 23, 'Crop Farming'),
(473, 23, 'Livestock & Dairy Farming'),
(474, 23, 'Organic Farming'),
(475, 23, 'Aquaculture'),
(476, 23, 'Greenhouses & Nurseries'),
(477, 23, 'Farm Equipment Services'),
(478, 23, 'Agro-Tourism'),
(479, 23, 'Agricultural Supply Stores'),
(480, 24, 'Gas Stations with Convenience Store'),
(481, 24, 'Full-Service Gas Stations'),
(482, 24, 'Self-Service Gas Stations'),
(483, 24, 'Truck Stop Facilities'),
(484, 24, 'Franchise Gas Stations'),
(485, 24, 'Independent Gas Stations'),
(486, 24, 'Gas Stations with Car Wash'),
(487, 24, 'Gas Stations with Auto Repair'),
(488, 25, 'Fast Food Franchises'),
(489, 25, 'Retail Franchises'),
(490, 25, 'Service-Based Franchises'),
(491, 25, 'Fitness & Wellness Franchises'),
(492, 25, 'Automotive Franchises'),
(493, 25, 'Education Franchises'),
(494, 25, 'Senior Care Franchises'),
(495, 25, 'Child-Oriented Franchises'),
(496, 26, 'Sports Bars'),
(497, 26, 'Wine Bars'),
(498, 26, 'Nightclubs'),
(499, 26, 'Dance Clubs'),
(500, 26, 'Hookah Lounges'),
(501, 26, 'Cocktail Lounges'),
(502, 26, 'Karaoke Bars'),
(503, 26, 'Brewpubs & Taprooms'),
(504, 27, 'Dropshipping Stores'),
(505, 27, 'Subscription Box Services'),
(506, 27, 'Digital Products'),
(507, 27, 'Online Apparel & Fashion'),
(508, 27, 'Online Electronics Stores'),
(509, 27, 'Handmade Goods Stores'),
(510, 27, 'Online Grocery Stores'),
(511, 27, 'Print-on-Demand Shops'),
(512, 28, 'Commercial Printing'),
(513, 28, 'Book Publishing'),
(514, 28, 'Magazine & Periodical Publishing'),
(515, 28, 'Print-on-Demand Services'),
(516, 28, 'Sign & Banner Printing'),
(517, 28, 'Packaging Printing'),
(518, 28, 'Business Card & Stationery Printing'),
(519, 28, 'Digital Publishing'),
(520, 29, 'Internet Service Providers'),
(521, 29, 'Mobile Phone Retailers'),
(522, 29, 'VoIP Services'),
(523, 29, 'Telecom Infrastructure Providers'),
(524, 29, 'Cable & Satellite TV Services'),
(525, 29, 'Telecom Equipment Sales'),
(526, 29, 'Business Telecom Consulting'),
(527, 29, 'Wireless Network Installers'),
(528, 30, 'Accounting Firms'),
(529, 30, 'Tax Services'),
(530, 30, 'Financial Planning & Advisory'),
(531, 30, 'Insurance Brokerages'),
(532, 30, 'Investment Firms'),
(533, 30, 'Loan & Mortgage Brokers'),
(534, 30, 'Credit Repair Services'),
(535, 30, 'Title & Escrow Services'),
(536, 31, 'Private Security Guards'),
(537, 31, 'Event Security'),
(538, 31, 'Alarm & Monitoring Services'),
(539, 31, 'Cybersecurity Consulting'),
(540, 31, 'Video Surveillance / CCTV Installers'),
(541, 31, 'Background & Screening Services'),
(542, 31, 'Armored Transportation'),
(543, 31, 'Home & Business Lock/Key Services'),
(544, 32, 'Humanitarian & Disaster Relief'),
(545, 32, 'Environmental Conservation NGOs'),
(546, 32, 'Health-related Foundations'),
(547, 32, 'Educational Charities'),
(548, 32, 'Arts & Culture Organizations'),
(549, 32, 'Animal Welfare Groups'),
(550, 32, 'Religious & Faith-based Orgs'),
(551, 32, 'Community Development Nonprofits'),
(552, 33, 'Solar Installation & Sales'),
(553, 33, 'Wind Power Services'),
(554, 33, 'Energy Auditing & Consulting'),
(555, 33, 'Recycling & Waste Management'),
(556, 33, 'Environmental Testing Labs'),
(557, 33, 'EV Charging Station Installers'),
(558, 33, 'Biofuel Production'),
(559, 33, 'Water Treatment & Filtration'),
(560, 34, 'Gyms & Health Clubs'),
(561, 34, 'Yoga & Pilates Studios'),
(562, 34, 'Martial Arts Schools'),
(563, 34, 'Personal Training Services'),
(564, 34, 'Indoor Sports Facilities'),
(565, 34, 'Outdoor Adventure & Guiding'),
(566, 34, 'Sports Equipment Retail'),
(567, 34, 'Swim Schools & Aquatic Centers'),
(568, 35, 'Fine Art Galleries'),
(569, 35, 'Antique Shops'),
(570, 35, 'Craft Supply Stores'),
(571, 35, 'Custom Framing Businesses'),
(572, 35, 'Art Restoration & Conservation'),
(573, 35, 'Pottery & Ceramic Studios'),
(574, 35, 'Jewelry Making Studios'),
(575, 35, 'Handmade Gifts & Boutique Crafts');

-- --------------------------------------------------------

--
-- Table structure for table `successor_onboarding`
--

CREATE TABLE `successor_onboarding` (
  `id` tinyint(4) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `successor_onboarding`
--

INSERT INTO `successor_onboarding` (`id`, `name`) VALUES
(1, 'none - they are on their own '),
(2, 'part time for up to a year'),
(3, 'full time for several months or part time for several years'),
(4, 'some team members will stay working full time for at least a year');

-- --------------------------------------------------------

--
-- Table structure for table `user_type`
--

CREATE TABLE `user_type` (
  `id` tinyint(6) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `broker`
--
ALTER TABLE `broker`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `business`
--
ALTER TABLE `business`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `business_assets`
--
ALTER TABLE `business_assets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `business_asset_type`
--
ALTER TABLE `business_asset_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `business_images`
--
ALTER TABLE `business_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `business_model`
--
ALTER TABLE `business_model`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `business_structure`
--
ALTER TABLE `business_structure`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `business_user`
--
ALTER TABLE `business_user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `industry`
--
ALTER TABLE `industry`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `listing_type`
--
ALTER TABLE `listing_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `public_visibility`
--
ALTER TABLE `public_visibility`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `reason_for_selling`
--
ALTER TABLE `reason_for_selling`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seller_financing`
--
ALTER TABLE `seller_financing`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sites`
--
ALTER TABLE `sites`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sites_businesses`
--
ALTER TABLE `sites_businesses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sub_industry`
--
ALTER TABLE `sub_industry`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `successor_onboarding`
--
ALTER TABLE `successor_onboarding`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_type`
--
ALTER TABLE `user_type`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `broker`
--
ALTER TABLE `broker`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `business`
--
ALTER TABLE `business`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `business_assets`
--
ALTER TABLE `business_assets`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `business_asset_type`
--
ALTER TABLE `business_asset_type`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `business_images`
--
ALTER TABLE `business_images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `business_model`
--
ALTER TABLE `business_model`
  MODIFY `id` tinyint(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `business_user`
--
ALTER TABLE `business_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `industry`
--
ALTER TABLE `industry`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `reason_for_selling`
--
ALTER TABLE `reason_for_selling`
  MODIFY `id` tinyint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `seller_financing`
--
ALTER TABLE `seller_financing`
  MODIFY `id` tinyint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `sites`
--
ALTER TABLE `sites`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sites_businesses`
--
ALTER TABLE `sites_businesses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sub_industry`
--
ALTER TABLE `sub_industry`
  MODIFY `id` smallint(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=576;

--
-- AUTO_INCREMENT for table `successor_onboarding`
--
ALTER TABLE `successor_onboarding`
  MODIFY `id` tinyint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `user_type`
--
ALTER TABLE `user_type`
  MODIFY `id` tinyint(6) NOT NULL AUTO_INCREMENT;
COMMIT;
