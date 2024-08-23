import styles from "./FavoriteClients.module.css";
import { Typography, ClintCard } from "../../../_component/index";

export default function FavoriteClients() {
  return (
    <>
      <section className={styles.main}>
        <div>
          <div className={styles.textCenter}>
            <Typography variant="tertiaryTypography" typography="Clients" />
          </div>
          <div className={`${styles.textCenter} ${styles.heddingYspacing}`}>
            <Typography
              element="h1"
              variant="tertiaryHeading"
              textColor="#FFFFFF"
              typography="Here are our some Favorite Clients"
            />
          </div>

          {/* markey */}

          <div className={styles.textCenter}>
            <Typography variant="tertiaryTypography" typography="Testimonial" />
          </div>
          <div className={`${styles.textCenter} ${styles.heddingYspacing}`}>
            <Typography
              element="h1"
              variant="tertiaryHeading"
              textColor="#FFFFFF"
              typography="What they say about us"
            />
          </div>
        </div>
        <div className={styles.cardBox}>
          <ClintCard name="Angelina Molnar" status="COORDINATOR" />
          <ClintCard name="Cehan alee" status="COORDINATOR" />
          <ClintCard name="Hale Allon" status="COORDINATOR" />
        </div>
      </section>
    </>
  );
}
