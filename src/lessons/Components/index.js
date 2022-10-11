import avatar from "../../logo.svg";
import Detail from "./components/Detail";
import ApprovalCard from "./components/ApprovalCard";

function Components() {
  const text = "Nice blog post!";

  return (
    <div className="ui container comments">
      <ApprovalCard>
        <Detail
          avatar={avatar}
          author="Sam"
          time="Today at 6:00PM"
          text={text}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Detail
          avatar={avatar}
          author="Robert"
          time="Yesterday at 6:00PM"
          text={text}
        />
      </ApprovalCard>
      <ApprovalCard>
        <Detail
          avatar={avatar}
          author="Colin"
          time="Today at 8:00PM"
          text={text}
        />
      </ApprovalCard>
    </div>
  );
}

export default Components;
