import Image from "next/image";
import styles from "./Footer.module.scss";

const Payment = () => {
  return (
    <div className={styles.footer_payment}>
      <h3>WE ACCEPT</h3>
      <div className={styles.footer_flexWrap}>
        <Image src="/images/payment/visa.webp" width={60 } height={36 } alt="visa"/>
        <Image src="/images/payment/mastercard.webp" width={60 } height={36 } alt="mastercard"/>
        <Image src="/images/payment/paypal.webp" width={60 } height={36 } alt="paypal"/>
      </div>
    </div>
  );
};

export default Payment;
