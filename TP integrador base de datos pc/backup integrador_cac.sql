CREATE DATABASE  IF NOT EXISTS `integrador_cac` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `integrador_cac`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: integrador_cac
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `oradores`
--

DROP TABLE IF EXISTS `oradores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oradores` (
  `id_orador` int NOT NULL AUTO_INCREMENT,
  `NOMBRE` varchar(40) NOT NULL,
  `apellido` varchar(40) NOT NULL,
  `mail` varchar(40) NOT NULL,
  `tema` varchar(200) NOT NULL,
  `FECHA` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_orador`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oradores`
--

LOCK TABLES `oradores` WRITE;
/*!40000 ALTER TABLE `oradores` DISABLE KEYS */;
INSERT INTO `oradores` VALUES (1,'Lalo','Landa','lalolanda@gmail.com','Tema a desarrollar 1','2023-11-08 03:30:59'),(2,'Sara','Gustani','saragustani@gmail.com','Tema a desarrollar 2 lalalalalalala lalalalalala lalala','2023-11-08 03:30:59'),(3,'Max','Power','maxpower@gmail.com','Tema a desarrollar 3 zxzxzxzxzxzxzxzxzxz xzxzxz zxzxzx','2023-11-08 03:30:59'),(4,'Max','Powerino','maxpowerino@gmail.com','Tema a desarrollar 4 qwqwqwq wqwqwq wqw qwqw qw qwq','2023-11-08 03:30:59'),(5,'Cosme','fulanito','cosmefulanito@gmail.com','Tema a desarrollar 5 asas sa sas as as as sasasa as','2023-11-08 03:30:59'),(6,'rolo','Landa','rololanda@gmail.com','Tema a desarrollar 6','2023-11-08 03:30:59'),(7,'Sara','Gustani','saragustani2@gmail.com','Tema a desarrollar 7','2023-11-08 03:30:59'),(8,'Max','Power','maxpower2@gmail.com','Tema a desarrollar 8','2023-11-08 03:30:59'),(9,'Jose','Powerino','josepowerino@gmail.com','Tema a desarrollar 9','2023-11-08 03:30:59'),(10,'Raul','fulanito','Raulfulanito@gmail.com','Tema a desarrollar 10','2023-11-08 03:30:59');
/*!40000 ALTER TABLE `oradores` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-08  0:37:17
