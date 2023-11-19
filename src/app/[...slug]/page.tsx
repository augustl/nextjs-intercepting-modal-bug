export default function MyCmsPage({params}: {params: {slug: string[]}}) {
    return <div>
        <p>This is a CMS page, with a catch-all slug that uses a CMS to fetch data etc etc.</p>
        <p>We have a slug of {params.slug.length} items</p>
    </div>
}