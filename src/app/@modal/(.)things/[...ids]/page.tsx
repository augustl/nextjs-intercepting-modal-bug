import ShowThing from "@/ShowThing";

export default function ThingsModalPage({params}: {params: {ids: string[]}}) {
    return <ShowThing ids={params.ids} />
}