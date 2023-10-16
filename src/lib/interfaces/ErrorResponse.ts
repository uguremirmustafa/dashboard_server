import MessageResponse from './MessageReponse';

export default interface ErrorResponse extends MessageResponse {
  stack?: string;
}
