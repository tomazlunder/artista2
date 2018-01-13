CREATE PROCEDURE `proc_addProfilePicture` (IN in_seller INT, IN in_path VARCHAR(255))
BEGIN

	INSERT INTO `picture`(`seller`,`isProfile`,`path`) VALUES (in_seller,1,in_path);
    
    SET @last_ins = (LAST_INSERT_ID());
    
	UPDATE `picture`
    SET `isProfile` = 0 
    WHERE `seller` = in_seller AND `id` != @last_ins;    
END