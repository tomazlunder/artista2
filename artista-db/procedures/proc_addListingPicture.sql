CREATE PROCEDURE `proc_addListingPicture` (IN in_listing INT, IN in_path VARCHAR(255))
BEGIN
    
	SET @numRows = (SELECT COUNT(*)  FROM `listing_picture` WHERE `listing_id` = in_listing);
    
    SET @seller_id = (SELECT seller FROM `listing` WHERE `id` = in_listing);
    
    INSERT INTO `picture`(`seller`,`isProfile`,`path`) VALUES (@seller_id,0,in_path);
    
    SET @last_insert = (LAST_INSERT_ID());
    
    IF @numRows = 0
    THEN UPDATE `listing` SET `mainPic` = @last_insert WHERE `id` = in_listing;
    END IF;
    
    INSERT INTO `listing_picture`(`listing_id`,`picture_id`) VALUES (in_listing, @last_insert);
END