import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { BookcommentEntity } from './model/bookcomment.entity';
import {BookcommentsService} from './bookcomments/bookcomments.service';
import { CreateBookcommentDto } from './model/bookcomment.dto';


@WebSocketGateway()
export class BookcommentGateway implements OnGatewayInit, OnGatewayConnection,  OnGatewayDisconnect {
  constructor(private bookCommentService: BookcommentsService){

  }
  @WebSocketServer()
  server:Server;
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
  @SubscribeMessage('getAllComments')
  async handleMessageComments(client:any, payload:any):Promise<BookcommentEntity>{
    return await this.bookCommentService.findAllBookComment(payload.id)
  }
  @SubscribeMessage('addComment')
  async handleMessageAddComment(client: any, payload:CreateBookcommentDto):Promise<BookcommentEntity>{
    return await this.bookCommentService.create(payload);
  }
  afterInit(server: Server) {
    console.log('Init');
  }
  handleConnection(client:Socket,...args:any[]){

  }
  handleDisconnect(client:Socket){
    
  }

}
