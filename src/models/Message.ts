export interface Message {
    id: number;
    repliedId: number | null;
    content: string;
    type: MessageType;
    sendingDate: Date
}

export enum MessageType {
    SENT, RECEIVED
}

export type Discussion = Message[]
