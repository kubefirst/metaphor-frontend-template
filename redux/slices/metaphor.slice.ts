/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';

import {
  getHealthz,
  getHealthzNode,
  getInfoApp,
  getInfoAppNode,
  getKubernetesData,
  getVaultData,
} from '../actions/metaphor.action';

export interface MetaphorState {
  metaphorGo?: any;
  metaphorGoStatus: boolean;
  metaphorNode: any;
  metaphorNodeStatus: boolean;
  kubernetesScrets: any;
  vaultSecrets: any;
}

export const initialState: MetaphorState = {
  metaphorGo: undefined,
  metaphorGoStatus: false,
  metaphorNode: undefined,
  metaphorNodeStatus: false,
  kubernetesScrets: undefined,
  vaultSecrets: undefined,
};

const metaphorSlice = createSlice({
  name: 'metaphor',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getHealthz.rejected, (state) => {
      state.metaphorGoStatus = false;
    });
    builder.addCase(getHealthz.fulfilled, (state) => {
      state.metaphorGoStatus = true;
    });
    builder.addCase(getHealthzNode.rejected, (state) => {
      state.metaphorNodeStatus = false;
    });
    builder.addCase(getHealthzNode.fulfilled, (state) => {
      state.metaphorNodeStatus = true;
    });
    builder.addCase(getInfoApp.fulfilled, (state, action) => {
      state.metaphorGo = action.payload;
    });
    builder.addCase(getInfoAppNode.fulfilled, (state, action) => {
      state.metaphorNode = action.payload;
    });
    builder.addCase(getKubernetesData.fulfilled, (state, action) => {
      state.kubernetesScrets = action.payload;
    });
    builder.addCase(getVaultData.fulfilled, (state, action) => {
      state.vaultSecrets = action.payload;
    });
  },
});

export default metaphorSlice.reducer;
