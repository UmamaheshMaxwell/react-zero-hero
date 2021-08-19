import React from 'react'
import './Styling.css'
import styles from './appStyle.module.css'

function Stylesheet() {

    let className = `primary enlarge-text`

    return (
        <div>
            <h1 className="primary">StyleSheet</h1>
            <p className={`${className}`}>Lorem ipsum dolor sit amet consectetur, 
                adipisicing elit. Dignissimos, deleniti.</p>
            <div className={styles.moduleSuccess}>
                <h1>This is div text</h1>
            </div>
            <h2 className={styles.test}>This is child header</h2>
        </div>
    )
}

export default Stylesheet
