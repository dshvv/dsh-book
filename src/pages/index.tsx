// @ts-nocheck
import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.scss';
import Link from '@docusaurus/Link';
import { useHistory } from '@docusaurus/router';
import { Card } from 'antd';
import { books } from './helper';



export default function Home(): JSX.Element {

  useEffect(() => {
    const navbar = document.querySelector('.navbar') as HTMLDivElement;
    navbar.style.display = 'none';
  }, [])

  const router = useHistory();
  const onStart = (path) => {
    router.push(encodeURI(path));
  };
  return (<Layout>
    <main>
      <div className={styles.HomeMain}>

        {books.map((item, index) => (
          <div className={styles.book} key={index}>
            <Card
              onClick={() => { onStart(item.path) }}
              style={{ width: 300 }}
              cover={
                <img
                  alt="example"
                  src={item.logo}
                />
              }
            >
              <Card.Meta
                title={item.title}
                description={item.description}
              />
            </Card>
          </div>

        ))}

        {/* <div className={styles.box}>
                  <div className={styles.img}><img src={require('@site/static/img/home/logo.gif').default} /></div>
                  <div className={styles.btn}>
                    <Link
                      className="button button--secondary button--lg"
                      to="fe/第1章_前言">
                      开始探索
                    </Link>
                  </div>
                </div> */}
      </div>
    </main>
  </Layout>)
}
