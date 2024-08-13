"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./RecentProjects.module.css";
import pngs from "@/app/_assets/pngs";

import {
  Paragraph20px,
  Hedding38px, Typography,
  RecentProjectsCard,
} from "../../../_component/index";

export default function RecentProjects() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className={styles.parentBox}>
        <div className={styles.textCenter}>
          <Typography variant="tertiaryTypography" typography="Projects" />
        </div>
        <div
          className={styles.textCenter}
          style={{ marginTop: "36px", marginBottom: "70px" }}
        >
          <Typography variant="tertiaryHeading" typography="Here are our some recent Projects" element="h1" textColor="#FFFFFF" />
        </div>
        <Slider centerMode={true} centerPadding="20px" {...settings}>
          <div>
            <RecentProjectsCard imagePath={pngs.Sony} typography="sony" />
          </div>
          <RecentProjectsCard
            imagePath={pngs.PillPuncher}
            typography="Pill Puncher"
          />
          <RecentProjectsCard
            imagePath={pngs.Elivate}
            typography="Elevate Beauty"
          />
          <RecentProjectsCard imagePath={pngs.FoneStar} typography="Fonestar" />
          <RecentProjectsCard
            imagePath={pngs.Avancus}
            typography="Avancus Shoes"
          />
          <RecentProjectsCard
            imagePath={pngs.FormulaZ}
            typography="Formula Z"
          />
          <RecentProjectsCard imagePath={pngs.Luna} typography="Luna Tattoo" />
          <RecentProjectsCard imagePath={pngs.Metaleon} typography="Metaleon" />
          <RecentProjectsCard
            imagePath={pngs.Houduo}
            typography="Houduo Candle"
          />
          <RecentProjectsCard
            imagePath={pngs.LightOne}
            typography="Light One Playstation"
          />
        </Slider>
      </section>
    </>
  );
}
