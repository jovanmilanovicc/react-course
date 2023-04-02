import { MongoClient } from "mongodb";

export default async function handler(request, response) {
  if (request.method === "POST") {
    const data = JSON.parse(request.body);

    const client = await MongoClient.connect(
      "mongodb+srv://jovanmilanovic999:jOVANPRO1@cluster0.hmkoomw.mongodb.net/?retryWrites=true&w=majority"
    );

    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    response.status(201).json({ message: "Meetup inserted" });
  }
}
