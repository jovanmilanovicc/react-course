import { MongoClient } from "mongodb";


import MeetupList from "@/components/meetups/MeetupList";

export default function HomePage(props) {
  return (
    <>
    
      <MeetupList meetups={props.meetups} />
    </>
  );
}

/*export async function getServerSideProps(context) {
  const request = context.req;
  const response = context.res;
  //fetch data
  //run on server

  return {
    props: {
      meetups: DUMMY_DATA
    }
  }
}
*/

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://jovanmilanovic999:jOVANPRO1@cluster0.hmkoomw.mongodb.net/?retryWrites=true&w=majority"
  );

  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray(); //find all default

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
  };
}
