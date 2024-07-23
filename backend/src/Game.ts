import WebSocket from "ws";

export class Game{
    public player1:WebSocket;
    public player2:WebSocket;
    private board:string;
    private startTime:Date;
    private moves:string[];
    constructor(player1:WebSocket,player2:WebSocket){
        this.player1=player1;
        this.player2=player2;
        this.board="";
        this.startTime=new Date();
        this.moves=[];

    }
}