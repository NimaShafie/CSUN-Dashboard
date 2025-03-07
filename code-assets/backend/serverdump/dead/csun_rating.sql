USE `csun`;

CREATE TABLE `rating` (
  `professor_first_name` varchar(50) NOT NULL,
  `professor_last_name` varchar(50) NOT NULL,
  `subject` varchar(6) NOT NULL,
  `catalog_number` varchar(10) NOT NULL,
  `star_rating` double(2,1) DEFAULT NULL,
  `grade` varchar(2) DEFAULT NULL,
  `difficulty` double(2,1) DEFAULT NULL,
  `retake_professor` varchar(4) DEFAULT NULL,
  `require_textbooks` varchar(4) DEFAULT NULL,
  `mandatory` varchar(4) DEFAULT NULL,
  `review` varchar(1000) NOT NULL,
  CONSTRAINT `ck_difficulty` CHECK (((0.0 < `difficulty`) and (`difficulty` < 5.0))),
  CONSTRAINT `ck_grade` CHECK ((`grade` in ('A+','A','A-','B+','B','B-','C+','C','C-','D','D','F'))),
  CONSTRAINT `ck_mandatory` CHECK ((`mandatory` in ('yes','no'))),
  CONSTRAINT `ck_retake` CHECK ((`retake_professor` in ('yes','no'))),
  CONSTRAINT `ck_star` CHECK (((0.0 < `star_rating`) and (`star_rating` < 5.0))),
  CONSTRAINT `ck_textbooks` CHECK ((`require_textbooks` in ('yes','no')))
);
