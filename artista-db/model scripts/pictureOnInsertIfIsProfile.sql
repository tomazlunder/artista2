CREATE DEFINER = CURRENT_USER TRIGGER `artista`.`picture_AFTER_INSERT` AFTER INSERT ON `picture` FOR EACH ROW
BEGIN
	IF (NEW.isProfile = 1) THEN
    UPDATE `artista`.`picture`
    SET isProfile = 0 
    WHERE `seller` = NEW.seller AND `id` != NEW.id;
    END IF;
END