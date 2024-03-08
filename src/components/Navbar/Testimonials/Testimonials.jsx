import React from "react";
import styles from "./Testimonials.module.css";

function Testimonials() {
  return (
    <div className={styles.testi_con}>
      <h3 className={styles.testi_title}>Testimonials</h3>
      <div className={styles.testi_list}>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="https://i.pinimg.com/736x/98/97/d3/9897d3e10c51c7cd9e97491c520ba833.jpg"
            alt=""
          />
          <h4>makima</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="https://i.pinimg.com/564x/77/13/ce/7713ce3e5ca1e2ec948009c9a86594f1.jpg"
            alt=""
          />
          <h4>zero two</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
        <div className={styles.testi_items}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure animi
            commodi fugit eveniet quasi earum ab vitae officia. Quae earum
            exercitationem nulla eius esse cumque dignissimos rem quia, in
            nesciunt!
          </p>
          <img
            src="https://i.pinimg.com/736x/b2/53/3d/b2533d6ad65b10c3dc3fc2245b2d5119.jpg"
            alt=""
          />
          <h4>subaru</h4>
          <p className={styles.bio}>Web Developer</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;