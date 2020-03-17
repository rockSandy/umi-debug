/**
 * Routes:
 *   - ./src/components/permission
 */

import { observer } from 'mobx-react';

import * as React from "react";

import styles from './index.less';

import { settingStore } from '@/stores';
import { formatMessage} from "@/locales";


@observer
class Home extends React.Component{
  render() {
    throw new Error('error');
    return (
      <div className={styles.normal}>
        <div className={styles.welcome} />
        <ul className={styles.list}>
          <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
          <li>Hello {settingStore.name}</li>
          <li>
            <a href="https://umijs.org/guide/getting-started.html">
              { formatMessage('getting.started')}
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Home;
