import GitHubCalendar from "react-github-calendar";

function GithubActivity(){

  return(

    <div className="github-activity">

      <h2>GitHub Activity</h2>

      <GitHubCalendar
        username="marwaneproo"
        colorScheme="dark"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
      />

    </div>

  );

}

export default GithubActivity;