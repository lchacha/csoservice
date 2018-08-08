-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2017 at 09:49 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `iotachitecture`
--

-- --------------------------------------------------------

--
-- Table structure for table `application`
--

CREATE TABLE `application` (
  `appID` varchar(20) NOT NULL,
  `appName` varchar(20) NOT NULL,
  `appDesciption` longtext NOT NULL,
  `appStatus` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `application`
--

INSERT INTO `application` (`appID`, `appName`, `appDesciption`, `appStatus`) VALUES
('AP001', 'smart parking', 'This application is for facilitating different people to find cars parking in easier way', 'available'),
('AP002', 'smart parking', 'This application is for facilitating different people to find cars parking in easier way', 'unavailabl');

-- --------------------------------------------------------

--
-- Table structure for table `arduino`
--

CREATE TABLE `arduino` (
  `arduinoID` varchar(20) NOT NULL,
  `appID` varchar(20) NOT NULL,
  `arduinoDescription` longtext NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `arduino`
--

INSERT INTO `arduino` (`arduinoID`, `appID`, `arduinoDescription`, `status`) VALUES
('AD001', 'AP001', 'This arduino is Uno with 14 digital input/output pins, 6 analog inputs, a 16 MHz quartz crystal, a USB connection, a power jack, an ICSP header and a reset button', 'reachable'),
('AD002', 'AP002', 'This arduino is YUN with 18 digital input/output pins, 8 analog inputs, a 16 MHz quartz crystal, a USB connection, a power jack, an ICSP header and a reset button', 'Unreachable');

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `bookingID` varchar(20) NOT NULL,
  `bayID` varchar(20) NOT NULL,
  `userID` varchar(20) NOT NULL,
  `startingTime` time NOT NULL,
  `endingTime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `totalCharge` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `booking`
--

INSERT INTO `booking` (`bookingID`, `bayID`, `userID`, `startingTime`, `endingTime`, `totalCharge`) VALUES
('Bk001', 'BY001', 'U001', '07:49:20', '2017-03-15 20:44:57', '21'),
('Bk002', 'BY002', 'U003', '08:49:20', '2017-03-10 09:49:20', '21'),
('Bk003', 'BY002', 'U002', '09:49:20', '2017-03-20 13:49:20', '21'),
('Bk004', 'BY003', 'U003', '10:49:20', '2017-03-15 13:30:20', '21');

-- --------------------------------------------------------

--
-- Table structure for table `device`
--

CREATE TABLE `device` (
  `deviceID` varchar(20) NOT NULL,
  `deviceName` varchar(50) NOT NULL,
  `deviceDesc` longtext NOT NULL,
  `identifier` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `device`
--

INSERT INTO `device` (`deviceID`, `deviceName`, `deviceDesc`, `identifier`) VALUES
('DV001', 'sensor', 'this is an ultrasonic sensor used for detecting ultrasonic noise', 'SR003'),
('DV002', 'arduino', 'this is an Uno arduino and its board contains everything needed to support the microntroller ', 'AD002'),
('DV003', 'raspberrypi', 'this is a pi and it has CPu that is runninng at 1000MHZ', 'RP002');

-- --------------------------------------------------------

--
-- Table structure for table `devicelog`
--

CREATE TABLE `devicelog` (
  `logID` varchar(20) NOT NULL,
  `eventID` varchar(20) NOT NULL,
  `deviceID` varchar(20) NOT NULL,
  `timeStamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `devicelog`
--

INSERT INTO `devicelog` (`logID`, `eventID`, `deviceID`, `timeStamp`) VALUES
('DL001', 'EV003', 'DV002', '0000-00-00 00:00:00'),
('DL002', 'EV002', 'DV001', '2017-03-01 12:59:59'),
('DL003', 'EV001', 'DV003', '2017-02-20 01:49:20');

-- --------------------------------------------------------

--
-- Table structure for table `district`
--

CREATE TABLE `district` (
  `districtID` varchar(10) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `district`
--

INSERT INTO `district` (`districtID`, `name`) VALUES
('DS001', 'Gasabo'),
('DS002', 'Kicukiro'),
('DS003', 'Nyarugenge');

-- --------------------------------------------------------

--
-- Table structure for table `event`
--

CREATE TABLE `event` (
  `eventID` varchar(20) NOT NULL,
  `eventName` varchar(100) NOT NULL,
  `eventDescription` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `event`
--

INSERT INTO `event` (`eventID`, `eventName`, `eventDescription`) VALUES
('EV001', 'signal missing', ' this event comes from missing  signal from sensor to the intended destination'),
('EV002', 'device bloken', ' this event happened once one of the connected devices bloken'),
('EV003', 'unrespondent sever', ' this event happened once one the server is not responding as expected');

-- --------------------------------------------------------

--
-- Table structure for table `parkingbay`
--

CREATE TABLE `parkingbay` (
  `bayID` varchar(20) NOT NULL,
  `baynumber` int(11) NOT NULL,
  `roofing` varchar(5) NOT NULL,
  `position` longtext NOT NULL,
  `ownership` varchar(10) NOT NULL,
  `size` varchar(10) NOT NULL,
  `lotID` varchar(20) NOT NULL,
  `carpresence` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `parkingbay`
--

INSERT INTO `parkingbay` (`bayID`, `baynumber`, `roofing`, `position`, `ownership`, `size`, `lotID`, `carpresence`) VALUES
('BY001', 25, 'yes', 'right of the gate', 'public', 'small', 'LT001', '0'),
('BY002', 12, 'No', 'Left of the gate', 'private', 'large', 'LT002', '1'),
('BY003', 22, 'yes', 'right of the gate', 'public', 'small', 'LT001', '0'),
('BY004', 10, 'No', 'Left of the gate', 'private', 'small', 'LT002', '0'),
('BY005', 2, 'No', 'right of the gate', 'public', 'large', 'LT003', '0'),
('BY006', 32, 'No', 'right of the gate', 'public', 'small', 'LT004', '1'),
('BY007', 11, 'No', 'left of the gate', 'public', 'small', 'LT005', '0');

-- --------------------------------------------------------

--
-- Table structure for table `parkingcontact`
--

CREATE TABLE `parkingcontact` (
  `contactID` varchar(20) NOT NULL,
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(20) NOT NULL,
  `phoneNum` text NOT NULL,
  `email` text NOT NULL,
  `position` varchar(20) NOT NULL,
  `lotID` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `parkingcontact`
--

INSERT INTO `parkingcontact` (`contactID`, `firstName`, `lastName`, `phoneNum`, `email`, `position`, `lotID`) VALUES
('PC001', 'Anna', 'Keza', '+250788674674', 'annakeza@gmail.com', ' manager', 'LT001'),
('PC002', 'Kelly', 'Manzi', '+250728634567', 'manzik@gmail.com', 'technician ', 'LT002'),
('PC003', 'James', 'Mwezi', '+250736789474', 'mwezijms@yahoo.com', 'manager ', 'LT003'),
('PC004', 'Liliane', 'Mahoro', '+250788567898', 'limahoro@gmail.com', ' manager', 'LT002'),
('PC005', 'Peter', 'Kagabo', '+250722675674', 'kapeter@gmail.com', 'technician ', 'LT002'),
('PC006', 'Aime', 'Ganza', '+250722567856', 'ganzaaime@gmail.com', ' manager', 'LT004'),
('PC007', 'Bosco', 'mupenzi', '+25073454674', 'penzi@yahoo.com', 'technician manager', 'LT004'),
('PC008', 'Annet', 'Cyiza', '+250784567678', 'anntcyiza@gmail.com', ' manager', 'LT005'),
('PC009', 'jim', 'Musa', '+250785677674', 'mujim@gmail.com', 'technician manager', 'LT005');

-- --------------------------------------------------------

--
-- Table structure for table `parkinglot`
--

CREATE TABLE `parkinglot` (
  `lotID` varchar(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `cost` decimal(10,0) NOT NULL,
  `nearestpopBuilding` varchar(100) NOT NULL,
  `streetAddress` varchar(50) NOT NULL,
  `numOfBays` int(11) NOT NULL,
  `openingTime` time NOT NULL,
  `closingTime` time NOT NULL,
  `parkingType` varchar(20) NOT NULL,
  `sectorID` varchar(10) NOT NULL,
  `appID` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `parkinglot`
--

INSERT INTO `parkinglot` (`lotID`, `name`, `cost`, `nearestpopBuilding`, `streetAddress`, `numOfBays`, `openingTime`, `closingTime`, `parkingType`, `sectorID`, `appID`) VALUES
('LT001', 'Telecom-house', '3', 'Telecom-house', 'KG54', 30, '07:00:00', '07:00:00', 'Public', 'SC001', 'AP001'),
('LT002', 'car wash', '2', 'city plaza ', 'KN54', 20, '06:00:00', '10:00:00', 'Public', 'SC003', 'AP002'),
('LT003', 'car wash', '2', 'Hirwa house ', 'KK76', 40, '05:00:00', '10:00:00', 'Public', 'SC002', 'AP001'),
('LT004', 'Rubangura', '3', 'Rubangura house', 'KN76', 45, '04:00:00', '11:00:00', 'Public', 'SC003', 'AP002'),
('LT005', 'kisimenti', '2', 'umuyenzi house', 'KG05', 60, '04:00:00', '11:00:00', 'Public', 'SC001', 'AP001');

-- --------------------------------------------------------

--
-- Table structure for table `raspberrypi`
--

CREATE TABLE `raspberrypi` (
  `piID` varchar(20) NOT NULL,
  `appID` varchar(20) NOT NULL,
  `piDescription` longtext NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `raspberrypi`
--

INSERT INTO `raspberrypi` (`piID`, `appID`, `piDescription`, `status`) VALUES
('RP001', 'AP001', 'This raspberrypi has a CPU running at 900 MHz and 1 GB RAM', 'reachable'),
('RP002', 'AP002', 'This raspberrypi has a CPU running at 800 MHz and 2 GB RAM', 'unreachable');

-- --------------------------------------------------------

--
-- Table structure for table `sector`
--

CREATE TABLE `sector` (
  `sectorID` varchar(10) NOT NULL,
  `districtID` varchar(10) NOT NULL,
  `sectorName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sector`
--

INSERT INTO `sector` (`sectorID`, `districtID`, `sectorName`) VALUES
('SC001', 'DS001', 'Kacyiru'),
('SC002', 'DS001', 'Ndera'),
('SC003', 'DS001', 'Kimironko'),
('SC004', 'DS002', 'Nyarugunga'),
('SC005', 'DS002', 'Kabeza'),
('SC006', 'DS003', 'Gitega');

-- --------------------------------------------------------

--
-- Table structure for table `sensor`
--

CREATE TABLE `sensor` (
  `sensorID` varchar(20) NOT NULL,
  `appID` varchar(20) NOT NULL,
  `sensorType` varchar(15) NOT NULL,
  `status` varchar(20) NOT NULL,
  `arduinoID` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sensor`
--

INSERT INTO `sensor` (`sensorID`, `appID`, `sensorType`, `status`, `arduinoID`) VALUES
('SR001', 'AP001', 'Infrared', 'reachable', 'AD002'),
('SR002', 'AP002', 'ultrasonic', 'reachable', 'AD001'),
('SR003', 'AP001', 'ultrasonic', 'unreachable', 'AD001'),
('SR004', 'AP002', 'Proximity Senso', 'reachable', 'AD002');

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `serviceID` varchar(20) NOT NULL,
  `serviceName` varchar(50) NOT NULL,
  `serviceDesc` longtext NOT NULL,
  `deviceID` varchar(20) NOT NULL,
  `appID` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `service`
--

INSERT INTO `service` (`serviceID`, `serviceName`, `serviceDesc`, `deviceID`, `appID`) VALUES
('SV001', 'alignment', 'This is to track how cars are aligned in the parking bay', 'DV001', 'AP001'),
('SV002', 'controller', 'This is connect sensor and pi', 'DV002', 'AP001');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userID` varchar(20) NOT NULL,
  `firstName` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `phoneNum` text NOT NULL,
  `email` varchar(50) NOT NULL,
  `carPlate` varchar(20) NOT NULL,
  `carModel` varchar(50) NOT NULL,
  `roleID` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userID`, `firstName`, `lastName`, `phoneNum`, `email`, `carPlate`, `carModel`, `roleID`) VALUES
('U001', 'Ange', 'kwezima', '+250728644774', 'akwezima@gmail.com', ' RAC235B', 'toyota', 'UR001'),
('U002', 'Aline', 'murebwayire', '+2507879684774', 'amurebwa@gmail.com', ' RAB135M', 'Honda', 'UR002'),
('U003', 'Emmy', 'Kaneza', '+250736787745', 'kanezaemmy@yahoo.com', ' RAD785F', 'Hyundai', 'UR002'),
('U004', 'Paul', 'Ruremire', '+250722646574', 'ruremapaul@gmail.com', ' RAA967Y', 'Land Rover', 'UR003'),
('U005', 'David', 'Kamanzi', '+250788644544', 'kamanzid@gmail.com', ' RAB567S', 'toyota', 'UR002');

-- --------------------------------------------------------

--
-- Table structure for table `userrole`
--

CREATE TABLE `userrole` (
  `roleID` varchar(20) NOT NULL,
  `roleName` varchar(20) NOT NULL,
  `roleDescr` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userrole`
--

INSERT INTO `userrole` (`roleID`, `roleName`, `roleDescr`) VALUES
('UR001', 'system admin', 'The system administator is responsible for managing the operation of the system'),
('UR002', 'normal user', 'The normal user is the user of the system which has defined access  to the system'),
('UR003', 'network admin', 'network admin is the person in charge of keeping the network up to date');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `application`
--
ALTER TABLE `application`
  ADD PRIMARY KEY (`appID`);

--
-- Indexes for table `arduino`
--
ALTER TABLE `arduino`
  ADD PRIMARY KEY (`arduinoID`),
  ADD KEY `fk_arduino_application` (`appID`);

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`bookingID`),
  ADD KEY `fk_booking_bay` (`bayID`),
  ADD KEY `fk_booking_user` (`userID`);

--
-- Indexes for table `device`
--
ALTER TABLE `device`
  ADD PRIMARY KEY (`deviceID`);

--
-- Indexes for table `devicelog`
--
ALTER TABLE `devicelog`
  ADD PRIMARY KEY (`logID`),
  ADD KEY `fk_devicelog_device` (`deviceID`),
  ADD KEY `fk_devicelog_event` (`eventID`);

--
-- Indexes for table `district`
--
ALTER TABLE `district`
  ADD PRIMARY KEY (`districtID`);

--
-- Indexes for table `event`
--
ALTER TABLE `event`
  ADD PRIMARY KEY (`eventID`);

--
-- Indexes for table `parkingbay`
--
ALTER TABLE `parkingbay`
  ADD PRIMARY KEY (`bayID`),
  ADD KEY `fk_parkingbay_parkingbay` (`lotID`);

--
-- Indexes for table `parkingcontact`
--
ALTER TABLE `parkingcontact`
  ADD PRIMARY KEY (`contactID`),
  ADD KEY `fk_parkingcontact_parkinglot` (`lotID`);

--
-- Indexes for table `parkinglot`
--
ALTER TABLE `parkinglot`
  ADD PRIMARY KEY (`lotID`),
  ADD KEY `fk_parkinglot_application` (`appID`),
  ADD KEY `fk_parkinglot_sector` (`sectorID`);

--
-- Indexes for table `raspberrypi`
--
ALTER TABLE `raspberrypi`
  ADD PRIMARY KEY (`piID`),
  ADD KEY `fk_raspberrypi_application` (`appID`);

--
-- Indexes for table `sector`
--
ALTER TABLE `sector`
  ADD PRIMARY KEY (`sectorID`),
  ADD KEY `fk_sector_district` (`districtID`);

--
-- Indexes for table `sensor`
--
ALTER TABLE `sensor`
  ADD PRIMARY KEY (`sensorID`),
  ADD KEY `fk_sensor_application` (`appID`),
  ADD KEY `fk_sensor_arduino` (`arduinoID`);

--
-- Indexes for table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`serviceID`),
  ADD KEY `fk_service_application` (`appID`),
  ADD KEY `fk_service_device` (`deviceID`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userID`);

--
-- Indexes for table `userrole`
--
ALTER TABLE `userrole`
  ADD PRIMARY KEY (`roleID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `arduino`
--
ALTER TABLE `arduino`
  ADD CONSTRAINT `fk_arduino_application` FOREIGN KEY (`appID`) REFERENCES `application` (`appID`);

--
-- Constraints for table `booking`
--
ALTER TABLE `booking`
  ADD CONSTRAINT `fk_booking_bay` FOREIGN KEY (`bayID`) REFERENCES `parkingbay` (`bayID`),
  ADD CONSTRAINT `fk_booking_user` FOREIGN KEY (`userID`) REFERENCES `user` (`userID`);

--
-- Constraints for table `devicelog`
--
ALTER TABLE `devicelog`
  ADD CONSTRAINT `fk_devicelog_device` FOREIGN KEY (`deviceID`) REFERENCES `device` (`deviceID`),
  ADD CONSTRAINT `fk_devicelog_event` FOREIGN KEY (`eventID`) REFERENCES `event` (`eventID`);

--
-- Constraints for table `parkingbay`
--
ALTER TABLE `parkingbay`
  ADD CONSTRAINT `fk_parkingbay_parkingbay` FOREIGN KEY (`lotID`) REFERENCES `parkinglot` (`lotID`);

--
-- Constraints for table `parkingcontact`
--
ALTER TABLE `parkingcontact`
  ADD CONSTRAINT `fk_parkingcontact_parkinglot` FOREIGN KEY (`lotID`) REFERENCES `parkinglot` (`lotID`);

--
-- Constraints for table `parkinglot`
--
ALTER TABLE `parkinglot`
  ADD CONSTRAINT `fk_parkinglot_application` FOREIGN KEY (`appID`) REFERENCES `application` (`appID`),
  ADD CONSTRAINT `fk_parkinglot_sector` FOREIGN KEY (`sectorID`) REFERENCES `sector` (`sectorID`);

--
-- Constraints for table `raspberrypi`
--
ALTER TABLE `raspberrypi`
  ADD CONSTRAINT `fk_raspberrypi_application` FOREIGN KEY (`appID`) REFERENCES `application` (`appID`);

--
-- Constraints for table `sector`
--
ALTER TABLE `sector`
  ADD CONSTRAINT `fk_sector_district` FOREIGN KEY (`districtID`) REFERENCES `district` (`districtID`);

--
-- Constraints for table `sensor`
--
ALTER TABLE `sensor`
  ADD CONSTRAINT `fk_sensor_application` FOREIGN KEY (`appID`) REFERENCES `application` (`appID`),
  ADD CONSTRAINT `fk_sensor_arduino` FOREIGN KEY (`arduinoID`) REFERENCES `arduino` (`arduinoID`);

--
-- Constraints for table `service`
--
ALTER TABLE `service`
  ADD CONSTRAINT `fk_service_application` FOREIGN KEY (`appID`) REFERENCES `application` (`appID`),
  ADD CONSTRAINT `fk_service_device` FOREIGN KEY (`deviceID`) REFERENCES `device` (`deviceID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
