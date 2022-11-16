import React, { FunctionComponent, useEffect } from 'react';

import Header from '../header';
import Main from '../main';
import { useAppDispatch } from '../../redux/store';

import {
  getHealthz,
  getInfoApp,
  getHealthzNode,
  getInfoAppNode,
  getKubernetesData,
  getVaultData,
} from 'redux/actions/metaphor.action';

export interface ContainerProps {
  metaphorNodeJSApiUrl: string;
  metaphorNodeGoApiUrl: string;
}

const Container: FunctionComponent<ContainerProps> = ({
  metaphorNodeJSApiUrl,
  metaphorNodeGoApiUrl,
}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getMetaphorGoData = async () => {
      await dispatch(getHealthz(metaphorNodeGoApiUrl)).unwrap();
      await dispatch(getInfoApp(metaphorNodeGoApiUrl)).unwrap();
    };

    const getMetaphorNodeJSData = async () => {
      await dispatch(getHealthzNode(metaphorNodeJSApiUrl)).unwrap();
      await dispatch(getInfoAppNode(metaphorNodeJSApiUrl)).unwrap();
      await dispatch(getKubernetesData(metaphorNodeJSApiUrl)).unwrap();
      await dispatch(getVaultData(metaphorNodeJSApiUrl)).unwrap();
    };

    getMetaphorGoData();
    getMetaphorNodeJSData();
  }, [dispatch, metaphorNodeGoApiUrl, metaphorNodeJSApiUrl]);

  return (
    <div id="container">
      <Header />
      <Main />
    </div>
  );
};

export default Container;
