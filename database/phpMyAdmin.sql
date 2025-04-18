-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 18, 2025 at 02:17 AM
-- Server version: 11.7.2-MariaDB
-- PHP Version: 8.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `brokeredge`
--
DROP DATABASE IF EXISTS `brokeredge`;
CREATE DATABASE IF NOT EXISTS `brokeredge` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `brokeredge`;

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
  `phone` varchar(40) DEFAULT NULL,
  `public_visibility_id` smallint(6) DEFAULT NULL,
  `broker_id` int(11) DEFAULT NULL,
  `business_model_id` smallint(6) DEFAULT NULL,
  `industry_id` smallint(6) DEFAULT NULL,
  `sub_industry_id` smallint(6) DEFAULT NULL,
  `business_structure_id` smallint(6) DEFAULT NULL,
  `start_date_year` smallint(6) DEFAULT NULL,
  `start_date_month` smallint(6) DEFAULT NULL,
  `desired_price_id` smallint(6) DEFAULT NULL,
  `seller_financing_id` smallint(6) DEFAULT NULL,
  `seller_financing_interest_rate` smallint(6) DEFAULT NULL,
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

INSERT INTO `business` (`id`, `name`, `phone`, `public_visibility_id`, `broker_id`, `business_model_id`, `industry_id`, `sub_industry_id`, `business_structure_id`, `start_date_year`, `start_date_month`, `desired_price_id`, `seller_financing_id`, `seller_financing_interest_rate`, `sellers_description`, `logo_image_url`, `website_url`, `website_url_2`, `linkedin_profile`, `facebook_page`, `instagram_profile`, `x_profile`, `tiktok_profile`, `business_logo`, `other_social_media`, `status_id`, `listing_type_id`, `user_id`, `created_timestamp`, `last_updated_timestamp`) VALUES
(1, 'scjksjkdak ajbdjak', '4088248917', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, 1742953895, 1744666940);

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
(1, 0, 'kimSinton@gmail.com', 'hellohellohello', 1742953895, 1744666940);

-- --------------------------------------------------------

--
-- Table structure for table `industry`
--

CREATE TABLE `industry` (
  `id` smallint(6) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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

-- --------------------------------------------------------

--
-- Table structure for table `seller_financing`
--

CREATE TABLE `seller_financing` (
  `id` tinyint(6) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sub_industry`
--

CREATE TABLE `sub_industry` (
  `id` smallint(6) NOT NULL,
  `industryId` smallint(6) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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
-- Indexes for table `sub_industry`
--
ALTER TABLE `sub_industry`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
-- AUTO_INCREMENT for table `business_model`
--
ALTER TABLE `business_model`
  MODIFY `id` tinyint(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `business_user`
--
ALTER TABLE `business_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `industry`
--
ALTER TABLE `industry`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `reason_for_selling`
--
ALTER TABLE `reason_for_selling`
  MODIFY `id` tinyint(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `seller_financing`
--
ALTER TABLE `seller_financing`
  MODIFY `id` tinyint(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sub_industry`
--
ALTER TABLE `sub_industry`
  MODIFY `id` smallint(6) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_type`
--
ALTER TABLE `user_type`
  MODIFY `id` tinyint(6) NOT NULL AUTO_INCREMENT;
COMMIT;
