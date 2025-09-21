import { MessageType } from "../../models/Message";
import { MessageSkeletonWrapper } from "./messageSkeleton.styles";

const MessageSkeleton = () => {
  return (
    <MessageSkeletonWrapper variant="rectangular" type={MessageType.RECEIVED} width="80%" height="100px" />
  );
}
 
export default MessageSkeleton;