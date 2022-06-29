// @ts-nocheck
import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.scss';
import Link from '@docusaurus/Link';
import { getPlatform } from '../utils'
import BrowserOnly from '@docusaurus/BrowserOnly';



export default function Home(): JSX.Element {
  // const start = () => {
  //    router.push(encodeURI("/guide/第1章_什么是JavaScript"));
  // };
  return (
    <BrowserOnly>
      {() => {
        const { isPc } = getPlatform();
        const bgVideo = require(`@site/static/img/home/home-bg${isPc?'':'-h5'}.mp4`).default;
        return <Layout>
          <main>
            <div className={styles.HomeMain}>
              <div className={styles.bg}>
                <video className={styles.fmBoy} src={bgVideo} loop muted autoPlay />
              </div>
              <div className={styles.content}>
                <div className={styles.box}>
                  <div className={styles.img}><img src={require('@site/static/img/home/logo.gif').default} /></div>
                  <div className={styles.btn}>
                    <Link
                      className="button button--secondary button--lg"
                      to="fe-teach/第1章_前言">
                      开始探索
                    </Link>
                    {/* <button onClick={start}>开始阅读</button> */}
                  </div>
                </div>
              </div>
            </div>
          </main>
        </Layout>
      }}

    </BrowserOnly>
  );
}
