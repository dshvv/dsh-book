//@ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import CodeBlock from "@theme/CodeBlock";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import styles from "./index.module.scss";

const CodeSandbox = (props) => {

  const htmlRef = useRef();
  const [html, setHtml] = useState();
  
  useEffect(async () => {
    const htmlStr = (await import(`!!raw-loader!/src/components/DocsTeach/${props.file}.html`)).default;
    htmlRef.current.innerHTML = htmlStr;
    setHtml(htmlStr);
  }, []);

  return (
    <div className={styles.CodeSandbox}>
      <Tabs>
        <TabItem value="preview" label="预览" default>
          <div ref={htmlRef} className={styles.SandboxHtml} />
        </TabItem>

        <TabItem value="code" label="代码">
          <CodeBlock language="html" title="index.html">
            {html}
          </CodeBlock>
        </TabItem>
      </Tabs>
    </div>
  );
};
export default CodeSandbox;
