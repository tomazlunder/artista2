CREATE PROCEDURE `proc_addListingPicture` (IN listing INT, IN path VARCHAR(255))
BEGIN
    
	SET @numRows = (SELECT COUNT(*)  FROM `listing_picture` WHERE `listing_id` = listing);
    
    SET @seller_id = (SELECT seller FROM `listing` WHERE `id` = listing);
    
    INSERT INTO `picture`(`seller`,`isProfile`,`path`) VALUES (@seller_id,0,path);
    
    SET @last_insert = (LAST_INSERT_ID());
    
    IF @numRows = 0
    THEN UPDATE `listing` SET `mainPic` = @last_insert WHERE `id` = listing;
    END IF;
    
    INSERT INTO `listing_picture`(`listing_id`,`picture_id`) VALUES (listing, @last_insert);
END