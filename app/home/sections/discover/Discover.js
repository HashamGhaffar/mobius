import styles from "./Discover.module.css"
import { Typography } from "../../../_component/index"


export default function Discover() {
  return (
    <section>
      <div className={styles.boxTypography}>
        {/* textual and button boc */}
        <div className={styles.hedding}>
          <Typography element="h1" variant="secondaryHeading" textColor="#FFFFFF" typography="Don’t let your designs go to waste. let us turn them into reality!" />
        </div>

      </div>
      {/* project detail  */}
      <div className={styles.projectDetail}>
        <div className={styles.projectNum}>
          <p>145+</p>
          <span className={styles.projectDescription}>Clients</span>
        </div>

        <div className={styles.projectNum}>
          <p>328+</p>
          <span className={styles.projectDescription}>Projects</span>
        </div>

        <div className={styles.projectNum}>
          <p>67+</p>
          <span className={styles.projectDescription}>Experts</span>
        </div>
      </div>
    </section>
  )
}