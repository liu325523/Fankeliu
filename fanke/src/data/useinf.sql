/*
Navicat MySQL Data Transfer

Source Server         : useinf
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : useinf

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-12-02 20:57:29
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goodlist
-- ----------------------------
DROP TABLE IF EXISTS `goodlist`;
CREATE TABLE `goodlist` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `price` int(255) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=42 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goodlist
-- ----------------------------
INSERT INTO `goodlist` VALUES ('1', '男士休闲长裤 修身直筒 18FMS-K003', '300', '../img/goodlist/1.jpg');
INSERT INTO `goodlist` VALUES ('2', '男士休闲长裤 修身直筒 18FMS-K002 ', '300', '../img/goodlist/2.jpg');
INSERT INTO `goodlist` VALUES ('3', '男士休闲时尚长裤 黑色9903', '400', '../img/goodlist/3.jpg');
INSERT INTO `goodlist` VALUES ('4', '休闲裤 窄脚赤耳 轻弹 男款 卡其色', '324', '../img/goodlist/4.jpg');
INSERT INTO `goodlist` VALUES ('5', '加绒保暖弹力休闲裤88252637 男款?', '336', '../img/goodlist/5.jpg');
INSERT INTO `goodlist` VALUES ('6', '加绒保暖加厚弹力休闲裤88252646 男', '348', '../img/goodlist/6.jpg');
INSERT INTO `goodlist` VALUES ('7', '加绒保暖弹力休闲裤88252637 男款?', '102', '../img/goodlist/7.jpg');
INSERT INTO `goodlist` VALUES ('8', '加绒保暖加厚弹力休闲裤88252646 男', '372', '../img/goodlist/8.jpg');
INSERT INTO `goodlist` VALUES ('9', '加绒保暖弹力休闲裤88252637 男款?', '177', '../img/goodlist/9.jpg');
INSERT INTO `goodlist` VALUES ('10', '男士休闲时尚长裤 黑色9904', '396', '../img/goodlist/10.jpg');
INSERT INTO `goodlist` VALUES ('11', '男士休闲长裤 修身直筒 18FMS-K003', '408', '../img/goodlist/1.jpg');
INSERT INTO `goodlist` VALUES ('12', '男士休闲长裤 修身直筒 18FMS-K002 ', '188', '../img/goodlist/2.jpg');
INSERT INTO `goodlist` VALUES ('13', '男士休闲时尚长裤 黑色9903', '432', '../img/goodlist/3.jpg');
INSERT INTO `goodlist` VALUES ('14', '休闲裤 窄脚赤耳 轻弹 男款 卡其色', '20', '../img/goodlist/4.jpg');
INSERT INTO `goodlist` VALUES ('15', '加绒保暖弹力休闲裤88252637 男', '456', '../img/goodlist/5.jpg');
INSERT INTO `goodlist` VALUES ('16', '加绒保暖加厚弹力休闲裤88252646 男', '30', '../img/goodlist/6.jpg');
INSERT INTO `goodlist` VALUES ('17', '加绒保暖弹力休闲裤88252637 男款?', '40', '../img/goodlist/7.jpg');
INSERT INTO `goodlist` VALUES ('18', '加绒保暖加厚弹力休闲裤88252646 男', '800', '../img/goodlist/8.jpg');
INSERT INTO `goodlist` VALUES ('19', '加绒保暖弹力休闲裤88252637 男款?', '504', '../img/goodlist/9.jpg');
INSERT INTO `goodlist` VALUES ('20', '男士休闲时尚长裤 黑色9904', '516', '../img/goodlist/10.jpg');
INSERT INTO `goodlist` VALUES ('21', '男士休闲长裤 修身直筒 18FMS-K003?', '528', '../img/goodlist/1.jpg');
INSERT INTO `goodlist` VALUES ('22', '男士休闲长裤 修身直筒 18FMS-K002 ', '540', '../img/goodlist/2.jpg');
INSERT INTO `goodlist` VALUES ('23', '男士休闲时尚长裤 黑色9903', '552', '../img/goodlist/3.jpg');
INSERT INTO `goodlist` VALUES ('24', '休闲裤 窄脚赤耳 轻弹 男款 卡其色', '564', '../img/goodlist/4.jpg');
INSERT INTO `goodlist` VALUES ('25', '加绒保暖弹力休闲裤88252637 男款?', '576', '../img/goodlist/5.jpg');
INSERT INTO `goodlist` VALUES ('26', '加绒保暖加厚弹力休闲裤88252646 男', '588', '../img/goodlist/6.jpg');
INSERT INTO `goodlist` VALUES ('27', '加绒保暖弹力休闲裤88252637 男款?', '600', '../img/goodlist/7.jpg');
INSERT INTO `goodlist` VALUES ('28', '加绒保暖加厚弹力休闲裤88252646 男', '612', '../img/goodlist/8.jpg');
INSERT INTO `goodlist` VALUES ('29', '加绒保暖弹力休闲裤88252637 男款?', '624', '../img/goodlist/9.jpg');
INSERT INTO `goodlist` VALUES ('30', '男士休闲时尚长裤 黑色9904', '337', '../img/goodlist/10.jpg');
INSERT INTO `goodlist` VALUES ('31', '男士休闲长裤 修身直筒 18FMS-K003?', '648', '../img/goodlist/1.jpg');
INSERT INTO `goodlist` VALUES ('32', '男士休闲长裤 修身直筒 18FMS-K002 ', '660', '../img/goodlist/2.jpg');
INSERT INTO `goodlist` VALUES ('33', '男士休闲时尚长裤 黑色9903', '399', '../img/goodlist/3.jpg');
INSERT INTO `goodlist` VALUES ('34', '休闲裤 窄脚赤耳 轻弹 男款 卡其色', '684', '../img/goodlist/4.jpg');
INSERT INTO `goodlist` VALUES ('35', '加绒保暖弹力休闲裤88252637 男款?', '696', '../img/goodlist/5.jpg');
INSERT INTO `goodlist` VALUES ('36', '加绒保暖加厚弹力休闲裤88252646 男', '708', '../img/goodlist/6.jpg');
INSERT INTO `goodlist` VALUES ('37', '加绒保暖弹力休闲裤88252637 男款?', '232', '../img/goodlist/7.jpg');
INSERT INTO `goodlist` VALUES ('38', '加绒保暖加厚弹力休闲裤88252646 男', '732', '../img/goodlist/8.jpg');
INSERT INTO `goodlist` VALUES ('39', '加绒保暖弹力休闲裤88252637 男款?', '744', '../img/goodlist/9.jpg');
INSERT INTO `goodlist` VALUES ('40', '男士休闲时尚长裤 黑色9904', '756', '../img/goodlist/10.jpg');
INSERT INTO `goodlist` VALUES ('41', '休闲裤 窄脚赤耳 轻弹 男款 卡其色', '768', '../img/goodlist/1.jpg');

-- ----------------------------
-- Table structure for shopcar
-- ----------------------------
DROP TABLE IF EXISTS `shopcar`;
CREATE TABLE `shopcar` (
  `id` int(4) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `price` int(10) NOT NULL,
  `num` int(4) NOT NULL,
  `url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=1001 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shopcar
-- ----------------------------
INSERT INTO `shopcar` VALUES ('7', '加绒保暖弹力休闲裤88252637 男款?', '102', '2', '../img/goodlist/7.jpg');
INSERT INTO `shopcar` VALUES ('2', '男士休闲长裤 修身直筒 18FMS-K002', '300', '17', '../img/goodlist/2.jpg');
INSERT INTO `shopcar` VALUES ('3', '男士休闲时尚长裤 黑色9903', '400', '5', '../img/goodlist/3.jpg');
INSERT INTO `shopcar` VALUES ('10', '男士休闲时尚长裤 黑色9904', '396', '2', '../img/goodlist/10.jpg');
INSERT INTO `shopcar` VALUES ('6', '加绒保暖加厚弹力休闲裤88252646 男', '348', '1', '../img/goodlist/6.jpg');

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS `student`;
CREATE TABLE `student` (
  `id` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `age` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO `student` VALUES ('1', '贝贝', '1');
INSERT INTO `student` VALUES ('2', '小百货商场', '2');
INSERT INTO `student` VALUES ('3', '新手教程', '3');
INSERT INTO `student` VALUES ('4', '贝贝菜鸟设计出', '4');
INSERT INTO `student` VALUES ('5', '贝贝', '5');
INSERT INTO `student` VALUES ('6', '贝贝', '6');
INSERT INTO `student` VALUES ('7', '贝贝', '7');
INSERT INTO `student` VALUES ('8', '贝贝', '8');
INSERT INTO `student` VALUES ('9', '贝贝', '9');
INSERT INTO `student` VALUES ('10', '贝贝', '10');
INSERT INTO `student` VALUES ('11', '贝贝', '11');
INSERT INTO `student` VALUES ('12', '贝贝', '12');
INSERT INTO `student` VALUES ('13', '贝贝', '13');
INSERT INTO `student` VALUES ('14', '贝贝', '14');
INSERT INTO `student` VALUES ('15', '贝贝', '15');
INSERT INTO `student` VALUES ('16', '贝贝', '16');
INSERT INTO `student` VALUES ('17', '贝贝', '17');
INSERT INTO `student` VALUES ('18', '贝贝', '18');
INSERT INTO `student` VALUES ('19', '贝贝', '19');
INSERT INTO `student` VALUES ('20', '贝贝', '20');
INSERT INTO `student` VALUES ('21', '贝贝', '21');
INSERT INTO `student` VALUES ('22', '贝贝', '22');
INSERT INTO `student` VALUES ('23', '贝贝', '23');
INSERT INTO `student` VALUES ('24', '贝贝', '24');
INSERT INTO `student` VALUES ('25', '贝贝', '25');
INSERT INTO `student` VALUES ('26', '贝贝', '26');
INSERT INTO `student` VALUES ('27', '贝贝', '27');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(4) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', '123456');
INSERT INTO `user` VALUES ('2', 'mingming', '123456');
INSERT INTO `user` VALUES ('3', 'alice', '123456');
INSERT INTO `user` VALUES ('4', 'liu', '123');
INSERT INTO `user` VALUES ('5', '用', 'ni12');
INSERT INTO `user` VALUES ('6', 'a123456', 'a123456');
INSERT INTO `user` VALUES ('7', 'a12345667', 'a12345667');
INSERT INTO `user` VALUES ('8', 'liu325523', 'liu325523');
INSERT INTO `user` VALUES ('9', 'liu325523', 'liu325523');
INSERT INTO `user` VALUES ('10', 'liu6666', 'nohaodjd');
INSERT INTO `user` VALUES ('22', 'liu99897', '');
INSERT INTO `user` VALUES ('23', 'liu87987', '');
INSERT INTO `user` VALUES ('24', 'wei8989', '');
SET FOREIGN_KEY_CHECKS=1;
