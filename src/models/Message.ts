export interface Message {
    id: number;
    repliedId: number | null;
    isText: boolean;
    content: string | Blob;
    type: MessageType;
    sendingDate: Date
}

enum MessageType {
    SENT, RECEIVED
}

export type Discussion = Message[]
