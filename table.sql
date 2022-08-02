-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.6.26 - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win32
-- HeidiSQL 版本:                  9.3.0.4984
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

-- 导出 2022_jzq 的数据库结构
CREATE DATABASE IF NOT EXISTS `2022_jzq` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `2022_jzq`;


-- 导出  表 2022_jzq.user_list 结构
CREATE TABLE IF NOT EXISTS `user_list` (
  `id` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `job` varchar(50) DEFAULT NULL,
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  2022_jzq.user_list 的数据：~9 rows (大约)
/*!40000 ALTER TABLE `user_list` DISABLE KEYS */;
INSERT IGNORE INTO `user_list` (`id`, `name`, `address`, `job`, `status`) VALUES
	('001', 'aaaa', '杭州', '前端', 1),
	('002', 'bbb', '宁波', '后端', 1),
	('003', 'c', '温州', '运维', 1),
	('004', 'd', '温州', '销售', 1),
	('94f5c13', 'e', 'hz', '前端', 1),
	('6523fea', '11', '1111', '前端', 1),
	('5cb5ed7', '13', '33', '前端', 1),
	('616b178', 'asd', 'qwe', '前端', 1),
	('885d06c', 'jzq', 'aaa', '前端', 1);
/*!40000 ALTER TABLE `user_list` ENABLE KEYS */;


-- 导出  表 2022_jzq.user_table 结构
CREATE TABLE IF NOT EXISTS `user_table` (
  `user` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL,
  `id` varchar(50) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `job` varchar(50) DEFAULT NULL,
  `status` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='登录列表';

-- 正在导出表  2022_jzq.user_table 的数据：~3 rows (大约)
/*!40000 ALTER TABLE `user_table` DISABLE KEYS */;
INSERT IGNORE INTO `user_table` (`user`, `password`, `id`, `name`, `address`, `job`, `status`) VALUES
	('jzq', '123456', '001', '江志强', '杭州', '学生', 1),
	('a', '123456', '002', '张三', '温州', '老板', 0),
	('b', '123', '003', '李四', '北京', '老师', 1);
/*!40000 ALTER TABLE `user_table` ENABLE KEYS */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
