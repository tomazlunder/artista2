CREATE PROCEDURE `proc_addProfilePicture` (IN seller INT, IN path VARCHAR(255))
BEGIN

	INSERT INTO `picture`(`seller`,`isProfile`,`path`) VALUES (seller,1,path);
    
    SET @last_ins = (LAST_INSERT_ID());
    
	UPDATE `picture`
    SET isProfile = 0 
    WHERE `seller` = seller AND `id` != @last_ins;    
END