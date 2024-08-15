import styles from "./FavoriteClients.module.css"

import { Typography } from "../../../_component/index"

export default function FavoriteClients() {
  return (
    <>
      <section className={styles.main}>
        <div>
          <div style={{ textAlign: "center" }}><Typography typography="Clients" variant="tertiaryTypography" /></div>
          <div style={{ textAlign: "center", paddingTop: "36px", paddingBottom: "70px" }}><Typography element="h1" variant="tertiaryHeading" textColor="#FFFFFF" typography="Here are our some Favorite Clients" /></div>
        </div>
      </section>
    </>
  );
}