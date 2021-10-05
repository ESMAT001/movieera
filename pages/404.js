import Custom404 from "../components/utils/Custom404"
import CustomHead from "../components/utils/CustomHead"

export default function Index() {
    return (
        <>
            <CustomHead
                title="404 not found"
                description="404 not found"
            />
            <Custom404 />
        </>
    )
}