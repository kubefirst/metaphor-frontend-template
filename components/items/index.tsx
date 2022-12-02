import React from 'react';

import {
  selectGoStatus,
  selectNodeStatus,
  selectGoAppData,
  selectNodeAppData,
  selectKubernetesData,
  selectVaultData,
} from '../../redux/selectors/metaphor.selector';
import { useAppSelector } from '../../redux/store';

const Items = () => {
  const goStatus = useAppSelector(selectGoStatus());
  const nodeStatus = useAppSelector(selectNodeStatus());
  const goAppData = useAppSelector(selectGoAppData());
  const nodeAppData = useAppSelector(selectNodeAppData());
  const kubernetesData = useAppSelector(selectKubernetesData());
  const vaultData = useAppSelector(selectVaultData());

  return (
    <div id="items">
      <div id="items-left">
        <div className="app-item">
          <div className="app-item-health">
            <span className={nodeStatus ? 'health-ok' : 'health-not-ok'}></span>
            &nbsp;
            <span className="api-name">Metaphor JS API</span>
            <div className="app-item-health-status">
              status: {nodeStatus ? 'running' : 'not running'}
            </div>
          </div>
        </div>
        <div className="app-item">
          <div className="app-item-name">Metaphor (JS API)</div>
          <div className="app-item-value">App name: {nodeAppData.app_name}</div>
          <div className="app-item-value">Company Name: {nodeAppData.company_name}</div>
          <div className="app-item-value">Chart Version: {nodeAppData.chart_version}</div>
          <div className="app-item-value">Docker Tag: {nodeAppData.docker_tag}</div>
        </div>

        <div className="app-item">
          <div className="app-item-name">Kubernetes (JS API)</div>
          <div className="app-item-value">Config One: {kubernetesData.config_one}</div>
          <div className="app-item-value">Config Two: {kubernetesData.config_two}</div>
        </div>
        <div className="app-item">
          <div className="app-item-name">Vault (JS API)</div>
          <div className="app-item-value">Secret One: {vaultData.secret_one}</div>
          <div className="app-item-value">Secret Two: {vaultData.secret_two}</div>
        </div>
      </div>
      <div id="items-right">
        <div className="app-item">
          <div className="app-item-health">
            <div className={goStatus ? 'health-ok' : 'health-not-ok'}></div>&nbsp; Metaphor Go API
            <div className="app-item-health-status">
              status: {goStatus ? 'running' : 'not running'}
            </div>
          </div>
        </div>

        <div className="app-item">
          <div className="app-item-name">Metaphor (Go API)</div>
          <div className="app-item-value">App name: {goAppData.app_name}</div>
          <div className="app-item-value">Company Name: {goAppData.company_name}</div>
          <div className="app-item-value">Chart Version: {goAppData.chart_version}</div>
          <div className="app-item-value">Docker Tag: {goAppData.docker_tag}</div>
        </div>
        <div className="app-item">
          <div className="app-item-name">Kubernetes (Go API)</div>
          <div className="app-item-value">Config One: {kubernetesData.config_one}</div>
          <div className="app-item-value">Config Two: {kubernetesData.config_two}</div>
        </div>
        <div className="app-item">
          <div className="app-item-name">Vault (Go API)</div>
          <div className="app-item-value">Secret One: {vaultData.secret_one}</div>
          <div className="app-item-value">Secret Two: {vaultData.secret_two}</div>
        </div>
      </div>
    </div>
  );
};

export default Items;
