import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="https://i.pinimg.com/736x/a1/6d/8f/a16d8ffbe475543d60661180eafb8a11.jpg" alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://i.pinimg.com/564x/f5/5b/39/f55b396301ada1c93bb3f293a64197fd.jpg" alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://i.pinimg.com/564x/0c/05/7d/0c057dab79fc197e4b692de072ebe3c9.jpg" alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://i.pinimg.com/736x/90/f5/fb/90f5fb181d44ef988e8ea5690f86af3c.jpg" alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://i.pinimg.com/736x/d1/1c/ff/d11cffc0450b168841b5184bc6db80f6.jpg" alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://i.pinimg.com/564x/18/68/5a/18685afaa0eae47fff64b6e06a31e8bb.jpg" alt="" />
            <p>Project Title</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio