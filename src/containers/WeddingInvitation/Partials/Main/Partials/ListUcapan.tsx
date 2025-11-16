import { IComments } from "@/services/comment/comment.types";
import {
  actionGetListReplies,
  actionPostReply,
} from "@/services/reply/reply.func";
import { IRepliies } from "@/services/reply/reply.types";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useQueryClient } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import moment from "moment";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoMdCheckmarkCircle, IoMdCloseCircle } from "react-icons/io";
import { IoArrowUndo } from "react-icons/io5";
moment.locale("id");
interface IProps {
  data?: IComments;
  params?: any;
}
const ListUcapan = ({ data, params }: IProps) => {
  const [isReply, setIsReply] = useState(false);
  const [showReply, setShowReply] = useState(false);
  const { mutate: replyComment, isPending: loadingReply } = actionPostReply();
  const [replyContent, setReplyContent] = useState<string>("");
  const { data: replies, isLoading } = actionGetListReplies(
    data?.id || 0,
    showReply
  );
  const reply = replies && (replies as any);
  const qc = useQueryClient();

  const handleSubmitReply = () => {
    replyComment(
      {
        commentId: data?.id || 0,
        content: replyContent,
        replyBy: params?.to !== "" ? params?.to : "user",
      },
      {
        onSuccess: (res) => {
          qc.invalidateQueries({ queryKey: ["actionGetListReplies"] });
          setReplyContent("");
        },
      }
    );
  };

  return (
    <Box bg={"#343A40"} p={3} shadow={"lg"} rounded={"lg"}>
      <HStack justify={"space-between"}>
        <Text fontSize={"sm"} display={"flex"} gap={1} align={"center"}>
          {data?.commentBy}
          {data?.attendance === "hadir" ? (
            <IoMdCheckmarkCircle
              style={{ width: 18, height: 18 }}
              fill="green"
            />
          ) : (
            <IoMdCloseCircle style={{ width: 18, height: 18 }} fill="red" />
          )}
        </Text>
        <Text fontSize={"xs"}>{moment(data?.createdAt).fromNow()}</Text>
      </HStack>
      <Divider my={2} />
      <Text fontSize={"1rem"}>{data?.content}</Text>

      {!isReply && (
        <Button
          onClick={() => {
            setIsReply(true);
            setShowReply(true);
          }}
          variant={"unstyled"}
          size={"sm"}
          color={"rgba(255,255,255,0.5)"}
        >
          Reply
        </Button>
      )}

      {showReply && (
        <Box>
          {isLoading && (
            <Loader
              style={{ color: "white", animation: "spin 1s linear infinite" }}
            />
          )}
          <style jsx>{`
            @keyframes spin {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}</style>
          {reply &&
            reply?.data?.length > 0 &&
            !isLoading &&
            reply?.data?.map((data: IRepliies, index: number) => (
              <Flex key={index + "reply"} align={"start"} gap={1} mt={1}>
                <FaUserCircle
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    width: 16,
                    height: 16,
                  }}
                />
                <Box>
                  <Text fontSize={"0.8rem"}>{data?.replyBy}</Text>
                  <Text fontSize={"0.8rem"}>{data?.content}</Text>
                </Box>
              </Flex>
            ))}
        </Box>
      )}

      {isReply && (
        <Box>
          <Flex align={"center"} gap={1} mt={2}>
            <IoArrowUndo style={{ width: 18, height: 18, color: "white" }} />
            <Text fontSize={"sm"}>Reply</Text>
          </Flex>
          <Textarea
            mt={3}
            p={2}
            fontSize={"sm"}
            color={"white"}
            border={"1px solid rgba(255,255,255,0.2)"}
            rows={3}
            onChange={(e) => setReplyContent(e.target.value)}
            value={replyContent}
          />

          <Flex gap={2} align={"center"} justify={"end"} mt={3}>
            <Button
              onClick={() => {
                setIsReply(false);
                setShowReply(false);
              }}
              variant={"outline"}
              size={"sm"}
            >
              Cancel
            </Button>
            <Button
              isLoading={loadingReply}
              onClick={() => {
                handleSubmitReply();
              }}
              isDisabled={!replyContent}
              variant={"outline"}
              size={"sm"}
              _hover={{ color: "white" }}
            >
              Send
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default ListUcapan;
