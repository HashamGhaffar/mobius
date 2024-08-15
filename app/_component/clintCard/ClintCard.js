import styles from "./ClintCard.module.css";
import svgs from "@/app/_assets/svgs";

import Image from 'next/image'

export default function ClintCard() {
  return (
    <>
      <div className={styles.card}>
        <p className={styles.name}>Angelina Molnar</p>
        <p className={styles.status}>COORDINATOR</p>
        <p className={styles.comments}>“Regardless of the type of testimonial you like to use, letting people
          know exactly what benefits your product or service can offer them in the
          words of people. Product or service can offer them in the words of people.”
        </p>

        <div>
          <Image
            src={svgs.Star}
            width={19.5}
            height={18}
            alt="clint stars"
          />
          <Image
            src={svgs.Star}
            width={19}
            height={18}
            alt="clint stars"
          />
          <Image
            src={svgs.Star}
            width={19}
            height={18}
            alt="clint stars"
          />
          <Image
            src={svgs.Star}
            width={19}
            height={18}
            alt="clint stars"
          />
          <Image
            src={svgs.Star}
            width={19}
            height={18}
            alt="clint stars"
          />
        </div>
      </div>
    </>
  );
}