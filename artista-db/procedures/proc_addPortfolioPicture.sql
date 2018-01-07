CREATE PROCEDURE `proc_addPortfolioPicture` (IN seller INT, IN path VARCHAR(255))
BEGIN
	DECLARE picture_id INT;
    DECLARE portfolio_id INT;
    
    
	SELECT `id` INTO portfolio_id FROM `portfolio` WHERE `seller`=seller;

	INSERT INTO `picture`(`seller`,`isProfile`,`path`) VALUES (seller,0,path);
    SELECT LAST_INSERT_ID() as picture_id;
    INSERT INTO `portfolio_picture`(`portfolio_id`,`picture_id`) VALUES (portfolio_id, picture_id);
END