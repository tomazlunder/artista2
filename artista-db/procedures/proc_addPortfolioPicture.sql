CREATE PROCEDURE `proc_addPortfolioPicture` (IN seller INT, IN path VARCHAR(255))
BEGIN    
    
	SET @portfolio_id = (SELECT `id` FROM `portfolio` WHERE `seller`=seller);
	

	INSERT INTO `picture`(`seller`,`isProfile`,`path`) VALUES (seller,0,path);
    
    INSERT INTO `portfolio_picture`(`portfolio_id`,`picture_id`) VALUES (portfolio_id, LAST_INSERT_ID());
END