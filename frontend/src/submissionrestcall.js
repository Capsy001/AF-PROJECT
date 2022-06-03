import axios from "axios";

export async function createSubmission(submission)
{
  await axios.post("http://localhost:3000/submissions/new", submission).then(response =>
  {
    const data = response.data;
      alert("Submission type created!");
      window.location.href="/dashboard"
    });
}

