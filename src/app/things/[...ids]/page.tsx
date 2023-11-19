import ShowThing from "@/ShowThing";

export default function ThingPage({params}: {params: {ids: string[]}}) {
    return <ShowThing ids={params.ids} />
}