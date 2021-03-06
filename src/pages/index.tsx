// @ts-nocheck
import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.scss";
import { useHistory } from "@docusaurus/router";
import books, { apps } from "../utils/books";
import homeImg from "../../static/img/home/banner.jpg";
import msgImg from "../../static/img/home/msg.gif";

console.log(books);


export default function Home(): JSX.Element {
  useEffect(() => {
    const navbar = document.querySelector(".navbar") as HTMLDivElement;
    navbar.style.display = "none";
  }, []);

  const router = useHistory();
  const onStart = (path) => {
    if (path.indexOf("http") > -1) {
      window.open(path);
    } else {
      router.push(path);
    }
  };
  return (
    <Layout>
      <main>
        <div className={styles.HomeMain}>
          <div className={styles.tips}>
            <img src={msgImg} alt="msgImg" /> 全站均原创，转载需写来源
          </div>
          <div className={styles.apps}>
            {apps.map((item, index) => (
              <img
                src={item.logo}
                alt="item.logo"
                className={styles.app}
                key={index}
                onClick={() => {
                  onStart(item.path);
                }}
              />
            ))}
          </div>
          <div className={styles.banner}>
            <img src={homeImg} alt="homeImg" />
            <div className={styles.tip}>
              <div>热爱生活.努力奋斗.享受人生</div>
              <div>
                <div>努力奋斗是为了享受人生，身上若无千斤担谁愿拿命赌明天</div>
                热爱生活要贯穿整个人生 奋斗时苦中做乐，成功后及时享乐
              </div>
            </div>
          </div>
          <div className={styles.content}>
            <div className={styles.books}>
              {books.map((item, index) => (
                <div
                  className={styles.book}
                  type={item.title}
                  key={index}
                  onClick={() => {
                    onStart(item.path);
                  }}
                >
                  <div className={styles.img}>
                    <img src={item.logo} alt={item.title} />
                  </div>
                  
                 
                  <div className={styles.text}>
                    <div className={styles.title}>
                      <span dangerouslySetInnerHTML={{ __html: item.title }} />
                    </div>
                    <div className={styles.desc}>
                      <span
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
