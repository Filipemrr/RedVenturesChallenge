export class CustomResponse {
  public statusCode: number;
  public message: string;
  public data: object;

  constructor(statusCode: number, message: string, data: object) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
  }
}
