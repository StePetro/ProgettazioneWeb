-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Set 22, 2018 alle 18:04
-- Versione del server: 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `progetto_triangolo`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `partite`
--

CREATE TABLE IF NOT EXISTS `partite` (
`idPartita` int(10) NOT NULL,
  `Vittoria` tinyint(1) NOT NULL,
  `livello` int(11) NOT NULL,
  `punteggio` int(11) NOT NULL,
  `tempo` time NOT NULL,
  `idUtente` int(11) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=172 ;

--
-- Dump dei dati per la tabella `partite`
--

INSERT INTO `partite` (`idPartita`, `Vittoria`, `livello`, `punteggio`, `tempo`, `idUtente`) VALUES
(118, 1, 1, 3800, '00:01:26', 102),
(119, 1, 3, 4350, '00:01:22', 101),
(122, 1, 1, 4725, '00:01:59', 102),
(124, 0, 1, 1550, '00:01:18', 104),
(125, 0, 1, 300, '00:00:26', 108),
(131, 0, 1, 575, '00:00:39', 101),
(132, 0, 1, 625, '00:00:59', 103),
(136, 0, 2, 1000, '00:01:32', 100),
(137, 1, 2, 8300, '00:02:24', 100),
(138, 0, 3, 1000, '00:00:29', 104),
(142, 1, 3, 5275, '00:01:17', 101),
(143, 0, 1, 325, '00:00:32', 100),
(145, 0, 1, 700, '00:00:00', 102),
(146, 0, 3, 2875, '00:04:24', 103),
(151, 1, 1, 4575, '00:01:04', 103),
(154, 0, 1, 550, '00:00:50', 116),
(155, 0, 1, 1050, '00:00:57', 102),
(156, 0, 1, 2425, '00:01:45', 100),
(158, 0, 1, 1425, '00:01:08', 101),
(159, 1, 1, 3525, '00:00:24', 100),
(160, 1, 1, 3900, '00:00:48', 102),
(161, 1, 1, 3950, '00:00:25', 103),
(162, 0, 2, 3875, '00:01:27', 101),
(163, 1, 1, 4350, '00:00:55', 104),
(164, 1, 1, 3625, '00:01:59', 104),
(165, 0, 1, 3100, '00:00:00', 102),
(166, 0, 1, 1000, '00:00:53', 101),
(168, 0, 1, 575, '00:00:23', 100),
(169, 0, 2, 2150, '00:00:00', 100),
(170, 0, 3, 200, '00:00:08', 100),
(171, 0, 3, 3225, '00:02:58', 100);

-- --------------------------------------------------------

--
-- Struttura della tabella `utenti`
--

CREATE TABLE IF NOT EXISTS `utenti` (
`idUtente` int(10) NOT NULL,
  `password` varchar(255) NOT NULL,
  `username` varchar(18) NOT NULL,
  `sesso` enum('M','F','A') DEFAULT NULL,
  `mail` varchar(45) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=105 ;

--
-- Dump dei dati per la tabella `utenti`
--

INSERT INTO `utenti` (`idUtente`, `password`, `username`, `sesso`, `mail`) VALUES
(100, 'ac37d5c9680a54e28bc1197253cad072', 'paperino57', 'M', 'paperino@gmail.com'),
(101, '60a61c98e56f627bf2f38cdef660fc70', 'Minni99', 'F', 'minni@yahoo.it'),
(102, '503a2aa322ac800f9934045ccc173746', 'pluto1', 'M', 'baubau@bau.com'),
(103, '9367fa7a6a88520413838f4f1865790b', 'pippo8', 'M', 'pippo@libero.it'),
(104, '185095d94e38a6a31e54a3fc0b79efc6', 'topolino', 'M', 'topolino@virgilio.it');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `partite`
--
ALTER TABLE `partite`
 ADD PRIMARY KEY (`idPartita`), ADD UNIQUE KEY `idpartite_UNIQUE` (`idPartita`);

--
-- Indexes for table `utenti`
--
ALTER TABLE `utenti`
 ADD PRIMARY KEY (`idUtente`), ADD UNIQUE KEY `username` (`username`), ADD UNIQUE KEY `mail` (`mail`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `partite`
--
ALTER TABLE `partite`
MODIFY `idPartita` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=172;
--
-- AUTO_INCREMENT for table `utenti`
--
ALTER TABLE `utenti`
MODIFY `idUtente` int(10) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=105;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
