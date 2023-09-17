import { databases } from "@/appwrite"
import { log } from "console";

export const getTodosGroupedByColumn = async () => {
    const data = await databases.listDocuments(
        process.env.NEXT_PUBLIC_DATABASE_ID!,
        process.env.NEXT_PUBLIC_TODOSASB_COLLECTION_ID!

    );
    const todos = data.documents;
    console.log(data);
    

    const columns = todos.reduce((acc, todo) => {
        if (!acc.get(todo.status)) {
            acc.set(todo.status, {
                id: todo.status,
                todos: []
            })
        }

        acc.get(todo.status)!.todos.push({
            $id: todo.$id,
            $createdAt: todo.$createdAt,
            title: todo.title,
            name: todo.name,
            status: todo.status,
            CPW: todo.CPW,
            ASB: todo.ASB,
            ...(todo.image && { image: JSON.parse(todo.image)})

        });
        return acc;

    }, new Map<TypedColumn, Column>);
    
    //if columns doesnt have inprogress , todo and done add them with empty todos
    const columnTypes: TypedColumn[] = ["cpwtodo" , "cpwalready" , "cpntodo" ,"cpnalready"];
     for(const columnType of columnTypes) {
        if (!columns.get(columnType)) {
            columns.set(columnType, {
                id:columnType,
                todos: [],
            });
        }
     }
     console.log(columns);
     
     //sort columns by columnTypes
 const sortedColumns = new Map(
    Array.from(columns.entries()).sort((a,b) => 
         columnTypes.indexOf(a[0]) - columnTypes.indexOf(b[0])
    ));

    const board: Board = {
        columns: sortedColumns
    }
    return board;
 
      
};

