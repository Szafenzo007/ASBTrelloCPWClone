interface Board {
    columns: Map<TypedColumn,Column>
}

type TypedColumn = "cpwtodo" | "cpwalready" | "cpntodo" | "cpnalready";

interface Column {
    id: TypeColumn,
    todos: Todo[];

}

interface Todo {
    $id  : string;
    $createdAt: string;
    title: string;
    status: TypedColumn;
    name:string;
    image?:string;
    CPW: Date;
    ASB: integer ;

}

interface Image {
 bucketId: any;
 fileId: string;

}