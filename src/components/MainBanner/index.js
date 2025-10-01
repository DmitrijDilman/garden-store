import styles from './index.module.css';
import { Button } from '../Button';

// export const MainBanner = () => {

//     return (
//         <div>
//               <div>MainBanner</div>

//               {/* <div className={styles.one} >one</div>
//               <div className={styles.two}>two</div> */}
//         </div>
      
//     )
// };


export const MainBanner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.content}>
        <h1>Amazing Discounts on Garden Products!</h1>
        <Button>Check out</Button>
      </div>
    </section>
  );
};
