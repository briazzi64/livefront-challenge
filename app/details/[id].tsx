import DefaultLayout from "@/components/layouts/DefaultLayout";
import LoadingIndicator from "@/components/LoadingIndicator";
import PostDetails from "@/components/posts/PostDetails";
import { COLORS } from "@/constants/color";
import { FONT_SIZES } from "@/constants/fontSizes";
import { useGetPostDetails } from "@/hooks/usePosts";
import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

export default function PostDetailsScreen() {
  const { id = "" } = useLocalSearchParams<{ id: string }>();
  const { postDetails, isPostDetailsPending } = useGetPostDetails(id);

  if (isPostDetailsPending) {
    return (
      <DefaultLayout header="">
        <LoadingIndicator />
      </DefaultLayout>
    );
  }

  if (!postDetails) {
    return (
      <DefaultLayout header="Oops!">
        <Text style={{ fontSize: FONT_SIZES.md, color: COLORS.negative }}>
          Something went wrong retreiving the post details. Please try again
        </Text>
      </DefaultLayout>
    );
  }

  return (
    <DefaultLayout header={postDetails?.title || ""}>
      <PostDetails post={postDetails} />
    </DefaultLayout>
  );
}
