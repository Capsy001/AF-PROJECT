import axios from "axios";


//function to get all topics
export async function getTopics()
{
    var items = [];
    await axios.get("http://localhost:3000/topics/").then((response) => {
        const data = response.data;
        const keys = Object.keys(data);
        for (var x in data) {
          items.push({
            _id: data[x]._id,
            groupid: data[x].groupid,
            topic: data[x].topic,
            description: data[x].description,
            status: data[x].status,
          });
        }
    });
    return items;
}

export default {getTopics};