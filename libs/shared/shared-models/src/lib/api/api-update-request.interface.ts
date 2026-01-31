export interface IUpdateRequest<T> {
  uuid: string;
  body: Partial<T>;
}
