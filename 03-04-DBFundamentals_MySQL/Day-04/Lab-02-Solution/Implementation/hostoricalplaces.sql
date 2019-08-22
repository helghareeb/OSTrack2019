-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: historyPlaces
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.19.04.1

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
-- Table structure for table `audiofiles`
--

DROP TABLE IF EXISTS `audiofiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `audiofiles` (
  `med_id` int(11) NOT NULL,
  `length` int(255) DEFAULT NULL,
  PRIMARY KEY (`med_id`),
  CONSTRAINT `media_fk4` FOREIGN KEY (`med_id`) REFERENCES `mediaitems` (`med_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `audiofiles`
--

LOCK TABLES `audiofiles` WRITE;
/*!40000 ALTER TABLE `audiofiles` DISABLE KEYS */;
/*!40000 ALTER TABLE `audiofiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `pcid` int(11) DEFAULT NULL,
  PRIMARY KEY (`category_id`),
  KEY `category_fk1` (`pcid`),
  CONSTRAINT `category_fk1` FOREIGN KEY (`pcid`) REFERENCES `category` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagefiles`
--

DROP TABLE IF EXISTS `imagefiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `imagefiles` (
  `med_id` int(11) NOT NULL,
  `width` int(255) DEFAULT NULL,
  `height` int(255) DEFAULT NULL,
  PRIMARY KEY (`med_id`),
  CONSTRAINT `media_fk5` FOREIGN KEY (`med_id`) REFERENCES `mediaitems` (`med_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagefiles`
--

LOCK TABLES `imagefiles` WRITE;
/*!40000 ALTER TABLE `imagefiles` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagefiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `keymedia`
--

DROP TABLE IF EXISTS `keymedia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `keymedia` (
  `keyword_id` int(11) NOT NULL,
  `med_id` int(11) NOT NULL,
  PRIMARY KEY (`keyword_id`,`med_id`),
  KEY `media_fk6` (`med_id`),
  CONSTRAINT `keyword_fk1` FOREIGN KEY (`keyword_id`) REFERENCES `keyword` (`keyword_id`),
  CONSTRAINT `media_fk6` FOREIGN KEY (`med_id`) REFERENCES `mediaitems` (`med_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keymedia`
--

LOCK TABLES `keymedia` WRITE;
/*!40000 ALTER TABLE `keymedia` DISABLE KEYS */;
/*!40000 ALTER TABLE `keymedia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `keyword`
--

DROP TABLE IF EXISTS `keyword`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `keyword` (
  `keyword_id` int(11) NOT NULL,
  `term` varchar(30) DEFAULT NULL,
  `cid` int(11) DEFAULT NULL,
  PRIMARY KEY (`keyword_id`),
  KEY `category_fk2` (`cid`),
  CONSTRAINT `category_fk2` FOREIGN KEY (`cid`) REFERENCES `category` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keyword`
--

LOCK TABLES `keyword` WRITE;
/*!40000 ALTER TABLE `keyword` DISABLE KEYS */;
/*!40000 ALTER TABLE `keyword` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mediaitems`
--

DROP TABLE IF EXISTS `mediaitems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mediaitems` (
  `med_id` int(11) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `description` varchar(20) DEFAULT NULL,
  `URL` varchar(80) DEFAULT NULL,
  `size` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`med_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mediaitems`
--

LOCK TABLES `mediaitems` WRITE;
/*!40000 ALTER TABLE `mediaitems` DISABLE KEYS */;
/*!40000 ALTER TABLE `mediaitems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `places`
--

DROP TABLE IF EXISTS `places`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `places` (
  `place_id` int(11) NOT NULL,
  `place_name` varchar(50) DEFAULT NULL,
  `description` varchar(50) DEFAULT NULL,
  `user_creator` int(11) DEFAULT NULL,
  `pp_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`place_id`),
  KEY `user_fk3` (`user_creator`),
  KEY `place_fk1` (`pp_id`),
  CONSTRAINT `place_fk1` FOREIGN KEY (`pp_id`) REFERENCES `places` (`place_id`),
  CONSTRAINT `user_fk3` FOREIGN KEY (`user_creator`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `places`
--

LOCK TABLES `places` WRITE;
/*!40000 ALTER TABLE `places` DISABLE KEYS */;
/*!40000 ALTER TABLE `places` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `submissions`
--

DROP TABLE IF EXISTS `submissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `submissions` (
  `user_id` int(11) NOT NULL,
  `place_id` int(11) NOT NULL,
  `med_id` int(11) NOT NULL,
  `tim` time NOT NULL,
  PRIMARY KEY (`user_id`,`place_id`,`med_id`,`tim`),
  KEY `place_fk3` (`place_id`),
  KEY `media_fk3` (`med_id`),
  CONSTRAINT `media_fk3` FOREIGN KEY (`med_id`) REFERENCES `mediaitems` (`med_id`),
  CONSTRAINT `place_fk3` FOREIGN KEY (`place_id`) REFERENCES `places` (`place_id`),
  CONSTRAINT `user_fk5` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `submissions`
--

LOCK TABLES `submissions` WRITE;
/*!40000 ALTER TABLE `submissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `submissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(50) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `imageURL` varchar(80) DEFAULT NULL,
  `interests` varchar(80) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `views`
--

DROP TABLE IF EXISTS `views`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `views` (
  `med_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `tim` time NOT NULL,
  `durnation` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`med_id`,`user_id`,`tim`),
  KEY `users_fk1` (`user_id`),
  CONSTRAINT `media_fk1` FOREIGN KEY (`med_id`) REFERENCES `mediaitems` (`med_id`),
  CONSTRAINT `users_fk1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `views`
--

LOCK TABLES `views` WRITE;
/*!40000 ALTER TABLE `views` DISABLE KEYS */;
/*!40000 ALTER TABLE `views` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visits`
--

DROP TABLE IF EXISTS `visits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `visits` (
  `user_id` int(11) NOT NULL,
  `place_id` int(11) NOT NULL,
  `tim` time DEFAULT NULL,
  PRIMARY KEY (`user_id`,`place_id`),
  KEY `place_fk2` (`place_id`),
  CONSTRAINT `place_fk2` FOREIGN KEY (`place_id`) REFERENCES `places` (`place_id`),
  CONSTRAINT `user_fk4` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visits`
--

LOCK TABLES `visits` WRITE;
/*!40000 ALTER TABLE `visits` DISABLE KEYS */;
/*!40000 ALTER TABLE `visits` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `votes`
--

DROP TABLE IF EXISTS `votes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `votes` (
  `med_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `rating` varchar(50) DEFAULT NULL,
  `tim` time DEFAULT NULL,
  PRIMARY KEY (`med_id`,`user_id`),
  KEY `users_fk2` (`user_id`),
  CONSTRAINT `media_fk2` FOREIGN KEY (`med_id`) REFERENCES `mediaitems` (`med_id`),
  CONSTRAINT `users_fk2` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `votes`
--

LOCK TABLES `votes` WRITE;
/*!40000 ALTER TABLE `votes` DISABLE KEYS */;
/*!40000 ALTER TABLE `votes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-21 11:47:44
