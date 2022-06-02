import axios from "axios";

//function to register new topic
export async function newTopic(topicData){
    const data1 = []
    await axios.post("http://localhost:3000/topics/new",topicData).then((response) => {
        const data = response.data;
        console.log(data);
        data1.push(data);
    })

    return data1;
}

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
            supervisor: data[x].supervisor,
            cosupervisor: data[x].cosupervisor
          });

        
        }
    });
    return items;
}

//function to update topics
export async function updateTopicsts(id,status)
{
    var data = '';
    await axios.put("http://localhost:3000/topics/update/" + id, status).then((response) => {
        data = response.data;
    });
    window.location.href='/panel/evTopics';
    return data;
}

export async function banTopicsts(topic)
{
    var data = '';
    await axios.post("http://localhost:3000/topics/ban/" , topic).then((response) => {
        data = response.data;
    });
    window.location.href='/panel/evTopics';
    return data;
}





export default {getTopics, updateTopicsts, banTopicsts, newTopic};