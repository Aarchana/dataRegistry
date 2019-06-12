export class Grid {
    id: string;
    comments: string;
    dateTime: string;
    recipientUserId: string;
    recipientFullName: string;
    senderAddress: string;
    sender: string;
    receivedByUserId: string;
    receivedByUserFullName: string;
    status: string;
    typeOfShipment: string;
}

export const gridKeyMap = new Map<string, string>()
                            .set("comments","Comments")
                            .set("dateTime", "Date time")
                            .set("receivedByUserFullName", "Received by user name")
                            .set("receivedByUserId", "Received by user id")
                            .set("recipientFullName", "Intended Recipient")
                            .set("recipientUserId", "Intended recipient Id")
                            .set("sender", "Sender")
                            .set("senderAddress", "Sender Address")
                            .set("status", "Status")
                            .set("typeOfShipment", "Type of Shipment");
                                                   
export const sizeMap = new Map<string, string>()
                    .set('s1','10')
                    .set('s2', '20')
                    .set('s3', '30')