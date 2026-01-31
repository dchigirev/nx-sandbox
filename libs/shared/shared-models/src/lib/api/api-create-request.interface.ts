export interface ICreateRequest<T> {
  body: Omit<T, 'uuid'>;
}
