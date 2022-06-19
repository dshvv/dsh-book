// @ts-nocheck
import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.scss';
import Link from '@docusaurus/Link';



export default function Home(): JSX.Element {
  // const start = () => {
  //    router.push(encodeURI("/guide/第1章_什么是JavaScript"));
  // };
  return (
    <Layout>
      <main>
        <div className={styles.HomeMain}>
          <div className={styles.bg}>
            <img className={styles.fmBoy} src={require('@site/static/img/home/fm-boy.png').default} />
          </div>
          <div className={styles.content}>
            <div>
              <div className={styles.img}><img src={require('@site/static/img/home/logo.gif').default} /></div>
              <div className={styles.btn}>
                <Link
                  className="button button--secondary button--lg"
                  to="redux/1、初识">
                  开始探索 - 😍
                </Link>
                {/* <button onClick={start}>开始阅读</button> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
