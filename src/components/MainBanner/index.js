import styles from './index.module.css';

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
        <button className={styles.cta}>Check out</button>
      </div>
    </section>
  );
};