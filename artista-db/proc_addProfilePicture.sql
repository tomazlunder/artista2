CREATE PROCEDURE `proc_addProfilePicture` (IN seller INT, IN path VARCHAR(255))
BEGIN
	INSERT INTO `picture`(`seller`,`isProfile`,`path`) VALUES (seller,1,path);
END