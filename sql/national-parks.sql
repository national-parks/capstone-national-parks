# profile, campground, amenity, parkAmenity, park, parkImage, parkStatus

# Drop tables - Weakest to strongest
DROP TABLE IF EXISTS parkAmenity;
DROP TABLE IF EXISTS parkStatus;

DROP TABLE IF EXISTS campground;
DROP TABLE IF EXISTS parkImage;

DROP TABLE IF EXISTS amenity;
DROP TABLE IF EXISTS park;
DROP TABLE IF EXISTS profile;


# Tables - Strongest to weakest
CREATE TABLE profile (
    profileId BINARY(16) NOT NULL,
    profileActivationToken CHAR(32),
    profileAvatar BLOB,
    profileDisplayName VARCHAR(16) NOT NULL,
    profileEmail VARCHAR(128) NOT NULL,
    profileHash VARCHAR(32) NOT NULL,

    UNIQUE(profileId),
    UNIQUE(profileActivationToken),
    UNIQUE(profileEmail),
    PRIMARY KEY(profileId)
);

CREATE TABLE park (
    parkId BINARY(16) NOT NULL,
    parkContact VARCHAR(256),
    parkDescription VARCHAR(256),
    parkFullName VARCHAR(64) NOT NULL,
    parkState CHAR(2),
    parkOperatingHours VARCHAR(256),

    UNIQUE(parkId),
    PRIMARY KEY(parkId)
);

CREATE TABLE amenity (
    amenityId BINARY(16) NOT NULL,
    amenityName VARCHAR(32),

    UNIQUE(amenityId),
    PRIMARY KEY(amenityId)
);

CREATE TABLE parkImage (
  parkImageId BINARY(16) NOT NULL,
  parkImageParkId BINARY(16) NOT NULL,
  parkImageCaption VARCHAR(128) NOT NULL,
  parkImageUrl VARCHAR(64) NOT NULL,

  UNIQUE(parkImageId),
  PRIMARY KEY(parkImageId),
  FOREIGN KEY(parkImageParkId) REFERENCES park(parkId)
);

CREATE TABLE campground (
  campgroundId BINARY(16) NOT NULL,
  campgroundParkId BINARY(16) NOT NULL,
  campgroundAccessibility BOOLEAN NOT NULL,
  campgroundName VARCHAR(64) NOT NULL,

  UNIQUE(campgroundId),
  PRIMARY KEY(campgroundId),
  FOREIGN KEY(campgroundParkId) REFERENCES park(parkId)
);

CREATE TABLE parkStatus (
    parkStatusParkId BINARY(16) NOT NULL,
    parkStatusProfileId BINARY(16) NOT NULL,
    parkStatusDate DATE NOT NULL,
    parkStatusParkStatus CHAR(16),

    FOREIGN KEY(parkStatusParkId) REFERENCES park(parkId),
    FOREIGN KEY(parkStatusProfileId) REFERENCES profile(profileId)
);

CREATE TABLE parkAmenity (
    parkAmenityParkId BINARY(16) NOT NULL,
    parkAmenityAmenityId BINARY(16) NOT NULL,

    FOREIGN KEY(parkAmenityParkId) REFERENCES park(parkId),
    FOREIGN KEY(parkAmenityAmenityId) REFERENCES amenity(amenityId)
);