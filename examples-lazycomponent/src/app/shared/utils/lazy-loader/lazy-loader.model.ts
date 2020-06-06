export interface LazyLoaderChangedEvent {
  name: string;
  status: LazyLoaderStatus;
}

export enum LazyLoaderStatus {
  activated,
  deactivated
}
