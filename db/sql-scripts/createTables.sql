create table services(
   serviceid INT NOT NULL AUTO_INCREMENT,
   servicename VARCHAR(255) NOT NULL,
   serviceaddress VARCHAR(255) NOT NULL,
   servicecity VARCHAR(255) NOT NULL,
   servicestate VARCHAR(255) NOT NULL,
   servicezip VARCHAR(255) NOT NULL,
   servicephone VARCHAR(255) NOT NULL,
   servicecityid VARCHAR(255) NOT NULL,
   servicetypeid VARCHAR(255) NOT NULL,

   PRIMARY KEY ( serviceid )
);

INSERT INTO `services` (`serviceid`, `servicename`, `serviceaddress`, `servicecity`, `servicestate`, `servicezip`, `servicephone`, `servicecityid`, `servicetypeid`) VALUES
(1, 'Db Shelter', '10 Shelter address', 'Toronto', 'Ontario', 'A0A 0A0', '000-000-0000', 3, 1),
(2, 'Db Drop-in', '123 Drop-in address', 'Toronto', 'Ontario', 'A0A 0A0', '000-000-0000', 1, 0),
(3, 'Db Shelter', '123 Shelter address', 'New York', 'New York', 'A0A 0A0', '000-000-0000', 2, 1),
(4, 'Db Meal', '123 Meal address', 'New York', 'New York', 'A0A 0A0', '000-000-0000', 2, 4);


create table servicetypes(
   servicetypeid INT NOT NULL AUTO_INCREMENT,
   servicename VARCHAR(255) NOT NULL,

   PRIMARY KEY ( servicetypeid )
);

INSERT INTO `servicetypes` (`servicetypeid`, `servicename`) VALUES
(1, 'Shelter'),
(2, 'Drop-in'),
(3, 'Clothing'),
(4, 'Meal');

create table cities(
   cityid INT NOT NULL AUTO_INCREMENT,
   cityname VARCHAR(255) NOT NULL,

   PRIMARY KEY ( cityid )
);

INSERT INTO `cities` (`cityid`, `cityname`) VALUES
(1, 'Toronto'),
(2, 'New York'),
(3, 'Los Angeles'),
(4, 'San Francisco');

create table errors(
   errorid INT NOT NULL AUTO_INCREMENT,
   serviceid INT(11) NOT NULL,
   errortext VARCHAR(255) NOT NULL,
   PRIMARY KEY ( errorid )
);

INSERT INTO `errors` (`errorid`, `serviceid`, `errortext`) VALUES
(9, 1, 'success');