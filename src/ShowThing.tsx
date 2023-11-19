export default function ShowThing({ids}: {ids: string[]}) {
    return <div>
        Hello, this is thing! The IDs are {JSON.stringify(ids)}.
    </div>
}