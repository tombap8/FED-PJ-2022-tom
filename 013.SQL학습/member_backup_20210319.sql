-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- 생성 시간: 21-03-19 06:59
-- 서버 버전: 10.4.17-MariaDB
-- PHP 버전: 7.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `mydb`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `member`
--

CREATE TABLE `member` (
  `idx` int(11) NOT NULL,
  `mid` varchar(20) NOT NULL,
  `mpw` varchar(100) NOT NULL,
  `name` varchar(20) NOT NULL,
  `gen` char(1) NOT NULL,
  `email1` varchar(20) NOT NULL,
  `email2` varchar(20) NOT NULL,
  `regdate` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `auth` char(1) DEFAULT 'M'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 테이블의 덤프 데이터 `member`
--

INSERT INTO `member` (`idx`, `mid`, `mpw`, `name`, `gen`, `email1`, `email2`, `regdate`, `auth`) VALUES
(1, 'mymymy', '$2y$10$Z6vzbO7YUZCZWoTtZ/8rVeAwhVRzSZo8IxPW2Ip1qTl1NeSjLD.WG', '탐 크루즈', 'w', 'sfsdfsd', 'naver.com', '2021-03-04 07:32:27', 'M'),
(3, 'melgibson', '$2y$10$Mth8ZfSVYXIUhLYtF8.TzO8Ph1Af1H8nVq.AXSLQRH2oKnlBP8LQO', '맬깁슨', 'm', 'melg', 'hotmail.com', '2021-03-04 07:57:00', 'M'),
(5, 'tombap', '$2y$10$Tnn5yCf.VdHDN9HztE7iV.nwaTsSXBqQJuatHhEoB.3q6RniW3DzS', '제시카', 'w', 'jsyy', 'naver.com', '2021-03-05 05:59:50', 'M'),
(7, 'mymymy2', '$2y$10$BtooOmUogf1INenK.MOw2O03vCS8PzcbArvDK0U.O/.Jn0cLboFVm', 'fdfsd', 'w', 'dfds', 'gmail.com', '2021-03-16 08:15:30', 'M'),
(8, 'mymymy3', '$2y$10$vdNUebb3fLr1MBRvpgprl.g4UkHgDvD9MHR6IvVId3C.MDBGSIx7m', '김준호', 'm', 'kim', 'hotmail.com', '2021-03-05 08:10:44', 'M'),
(9, 'mymymy4', '$2y$10$DQIuHNgvb9zFDq020W/mmObl62t6QKUfV9hzaXNoO9SZzD1L/cxVi', '황순원', 'm', 'ssssss', 'hanmail.net', '2021-03-05 08:12:08', 'M'),
(10, 'kdw8888', '$2y$10$9a.DFC6mT09vNmV7D3CLz.OJmEGuYzA58VvZsYeqaay9sBS9FAvF6', '강동원', 'm', 'kdw8888', 'myworld.com', '2021-03-08 05:38:48', 'M'),
(12, 'solang', '$2y$10$bL7ZIvEG6G3SQCkMrec/AePVouccbN423AHFZptYX9BoV32V3vib.', '안젤리나 졸리', 'w', 'solang', 'naver.com', '2021-03-17 06:53:43', 'A'),
(14, 'hankstom', '$2y$10$/ZoIsFwXlnc.PPlr9.TtSe7WY7DQ16ytiq7S10yTO2m8OBvlWG.bC', '톰 행크스', 'm', 'hankstom', 'daum.net', '2021-03-15 06:50:43', 'S'),
(15, 'kianu88', '$2y$10$l7P/rrzIWW9ik32YU5xsOudsmnuNTnY2ieCMpFm507nau52MPxY1q', '키아누 리브스', 'm', 'kianu', 'gmail.com', '2021-03-10 05:33:46', 'M'),
(16, 'songk99', '$2y$10$6Pm9D2WgoBqDo1O08bGjueDdEwOrJZMcZ4QkDUfH8ec0b2DIaSlLS', '송강', 'm', 'songk99', 'naver.com', '2021-03-10 06:02:40', 'M'),
(17, 'kimsu88', '$2y$10$G4s0Ge73sgiwfd5ebFNJTep8mFy6jNQfRf/0ycZm.r30o40O.nNqS', '김수현', 'm', 'kimsu88', 'naver.com', '2021-03-11 06:28:56', 'M'),
(18, 'hskim70', '$2y$10$w7P1kc97BL0rhBcw6BBIh.51HRPSVzvFF4JcIntgz8SChwHq8wzKa', '김혜수', 'w', 'hskim70', 'hanmail.net', '2021-03-16 07:08:21', 'A'),
(19, 'taerikim', '$2y$10$xOX.ahHNYgiDITxoFK1CVeb5eu0oQEHdk2Xm25PPyzD/x7J0pEcJG', '김태리', 'w', 'taerikim', 'barim.com', '2021-03-17 06:37:53', 'M'),
(20, 'shsohn65', '$2y$10$Nt.VqqW3saRLqobkriIYDOLSCnHRvTR3b8mW/zJBpC4v1EDd9FLn2', '손서키', 'm', 'shsohn65', 'daum.net', '2021-03-15 05:37:01', 'A'),
(21, 'kjseo87', '$2y$10$ppooIHpInGQJnkuacyfcSOKmqoe3C8lSXE2.Jt9mfywR6.SmNt2Rm', '서강준', 'm', 'kjseo87', 'korea.com', '2021-03-16 05:38:48', 'A'),
(22, 'dwkang', '$2y$10$IjKbadu3MKAViUW8wBvXAe0ymElIx60FS8K7wJxvS1/tpVY2w5dsq', '강동원', 'm', 'dwkang', 'gmail.com', '2021-03-17 06:37:27', 'A'),
(23, 'sungyong', '$2y$10$gx1wSpwMYiUgQctqLT6UneQBKCI18WYw9n5VcxeiEXKhl/KQgs5oO', '성룡', 'm', 'sungyong', 'gmail.com', '2021-03-18 05:40:44', 'A');

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`idx`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `member`
--
ALTER TABLE `member`
  MODIFY `idx` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
