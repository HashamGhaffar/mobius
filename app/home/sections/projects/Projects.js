"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./Projects.module.css";
import pngs from "@/app/_assets/pngs";

import { Typography, ProjectsCard } from "../../../_component/index";

export default function Projects() {
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
          <Typography
            variant="tertiaryHeading"
            typography="Here are our some recent Projects"
            element="h1"
            textColor="#FFFFFF"
          />
        </div>
        <Slider centerMode={true} centerPadding="20px" {...settings}>
          <ProjectsCard imagePath={pngs.Sony} typography="sony" />
          <ProjectsCard
            imagePath={pngs.PillPuncher}
            typography="Pill Puncher"
          />
          <ProjectsCard imagePath={pngs.Elivate} typography="Elevate Beauty" />
          <ProjectsCard imagePath={pngs.FoneStar} typography="Fonestar" />
          <ProjectsCard imagePath={pngs.Avancus} typography="Avancus Shoes" />
          <ProjectsCard imagePath={pngs.FormulaZ} typography="Formula Z" />
          <ProjectsCard imagePath={pngs.Luna} typography="Luna Tattoo" />
          <ProjectsCard imagePath={pngs.Metaleon} typography="Metaleon" />
          <ProjectsCard imagePath={pngs.Houduo} typography="Houduo Candle" />
          <ProjectsCard
            imagePath={pngs.LightOne}
            typography="Light One Playstation"
          />
        </Slider>
      </section>
    </>
  );
}
