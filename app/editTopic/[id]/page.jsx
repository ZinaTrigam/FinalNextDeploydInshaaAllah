import EditTopicForm from "@/components/EditTopicForm"

const getTopicById = async (id) => {
    try{
        const res = await fetch(`http://102.211.210.151:3100/api/topics/${id}`, {
            cache:"no-store",
        });
        
        if (!res.ok) {
            throw new Error("Failed to fetch topics");
        }

        return res.json();
    }catch (error) {
        console.log(error);
    }
};

export default async function EditTopic(context) {
  const { id } = await context.params;
   const { topic } = await getTopicById(id);
   const { title, description } = topic;
   return <EditTopicForm id={id} title={title} description={description}/>;
}