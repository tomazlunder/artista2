CREATE PROCEDURE `proc_addListingPicture` (IN seller INT, IN path VARCHAR(255), IN listing INT)
BEGIN
	DECLARE picture_id INT;

	INSERT INTO `picture`(`seller`,`isProfile`,`path`) VALUES (seller,0,path);
    SELECT LAST_INSERT_ID() as picture_id;
    INSERT INTO `listing_picture`(`listing_id`,`picture_id`) VALUES (listing, picture_id);
END